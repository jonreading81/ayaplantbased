import dev from './dev.json';

if (process.env.PORT) {
  dev.app.port = process.env.PORT;
}

export default dev;
