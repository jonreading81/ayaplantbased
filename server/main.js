import React from 'react';
import Loadable from 'react-loadable';
import express from 'express';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { renderRoutes, matchRoutes } from 'react-router-config';
import path from 'path';
import serialize from 'serialize-javascript';
import { getBundles } from 'react-loadable/webpack';
import compression from 'compression';
import configureStore from '../src/redux/configureStore';
import stats from '../build/static/react-loadable.json';
import Html from './Html';
import routes from '../src/routes';
import appConfig from '../config';
import api from './api';

const getAppContent = (store, url, loadableCaptureReport) => (
  renderToString(
    <Provider store={store}>
      <StaticRouter location={url} context={{}}>
        <Loadable.Capture report={loadableCaptureReport}>
          {renderRoutes(routes)}
        </Loadable.Capture>
      </StaticRouter>
    </Provider>,
  )
);

const preloadDataForRoute = (store, routes, url) => {
  const branch = matchRoutes(routes, url);
  const { route, match } = branch.find(({ match }) => match.isExact);
  if (route && match) {
    const preloadData = route.component.preloadData;
    if (preloadData instanceof Function) {
      return preloadData(store, match.params);
    }
  }
  return Promise.resolve(null);
};

export default function startServer({ chunks }) {
  const app = express();
  app.use(compression());
  const assets = chunks();
  app.use(express.static(path.resolve('./build/static')));
  app.use('/api', api);

  app.get('*', (req, res) => {
    const store = configureStore();
    const preloadData = preloadDataForRoute(store, routes, req.url);
    let htmlContent = '';
    preloadData.catch(() => {
      console.log('error preloading data');
    })
      .finally(() => {
        const loadedModules = [];
        const loadableCaptureReport = module => loadedModules.push(module);
        const appContent = getAppContent(store, req.url, loadableCaptureReport);
        const bundles = getBundles(stats, loadedModules);
        htmlContent = renderToString(
          <Html
            bundles={bundles}
            assets={assets}
            appContent={appContent}
            serialisedState={serialize(store.getState())}
          />,
        );
        res.send(`<!DOCTYPE html>${htmlContent}`);
      });
  });

  Loadable.preloadAll().then(() => {
    app.listen(appConfig.app.port, '0.0.0.0', (err) => {
      if (err) {
        console.error(err);
      } else {
        console.info(`Listening at http://${appConfig.app.host}:${appConfig.app.port}`);
      }
    });
  });
}
