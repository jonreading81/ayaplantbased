!function(e){function t(t){for(var r,o,s=t[0],i=t[1],u=t[2],l=0,p=[];l<s.length;l++)o=s[l],a[o]&&p.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(c&&c(t);p.length;)p.shift()();return _.push.apply(_,u||[]),n()}function n(){for(var e,t=0;t<_.length;t++){for(var n=_[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(r=!1)}r&&(_.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={0:0},_=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=i;_.push([109,1]),n()}({10:function(e,t,n){"use strict";(function(e){n.d(t,"b",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return _}),function(){var t=n(3).enterModule;t&&t(e)}();var r="ARTICLES_REQUEST",a="ARTICLES_SUCCESS",_="ARTICLES_FALIURE";!function(){var t=n(3).default,o=n(3).leaveModule;t&&(t.register(r,"ARTICLES_REQUEST","/Users/jonathanreading/Development/aya/src/redux/modules/articles/types.js"),t.register(a,"ARTICLES_SUCCESS","/Users/jonathanreading/Development/aya/src/redux/modules/articles/types.js"),t.register(_,"ARTICLES_FALIURE","/Users/jonathanreading/Development/aya/src/redux/modules/articles/types.js"),o(e))}()}).call(this,n(5)(e))},100:function(e,t,n){"use strict";(function(e){var r=n(11),a=n(17),_=n(101),o=n(102);!function(){var t=n(3).enterModule;t&&t(e)}();var s=Object(r.combineReducers)({articles:_.a,thunk:a.reducer,navigation:o.a}),i=s;t.a=i,function(){var t=n(3).default,r=n(3).leaveModule;t&&(t.register(s,"reducers","/Users/jonathanreading/Development/aya/src/redux/reducers.js"),t.register(i,"default","/Users/jonathanreading/Development/aya/src/redux/reducers.js"),r(e))}()}).call(this,n(5)(e))},101:function(e,t,n){"use strict";(function(e){var r=n(21),a=n.n(r),_=n(10);!function(){var t=n(3).enterModule;t&&t(e)}();var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.data;switch(t.type){case _.c:return a()({},e,n);default:return e}};t.a=o,function(){var t=n(3).default,r=n(3).leaveModule;t&&(t.register(o,"default","/Users/jonathanreading/Development/aya/src/redux/modules/articles/reducer.js"),r(e))}()}).call(this,n(5)(e))},102:function(e,t,n){"use strict";(function(e){var r=n(21),a=n.n(r),_=n(41);!function(){var t=n(3).enterModule;t&&t(e)}();var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isOpen:!1};switch((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{type:""}).type){case _.a:return a()({},e,{isOpen:!e.isOpen});default:return e}};t.a=o,function(){var t=n(3).default,r=n(3).leaveModule;t&&(t.register(o,"default","/Users/jonathanreading/Development/aya/src/redux/modules/navigation/reducer.js"),r(e))}()}).call(this,n(5)(e))},103:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return i});var r=n(18),a=n.n(r),_=n(15),o=n(104);!function(){var t=n(3).enterModule;t&&t(e)}();var s=a.a.mark(i);function i(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.a)([Object(o.a)()]);case 2:case"end":return e.stop()}},s,this)}!function(){var t=n(3).default,r=n(3).leaveModule;t&&(t.register(i,"rootSaga","/Users/jonathanreading/Development/aya/src/redux/sagas/index.js"),r(e))}()}).call(this,n(5)(e))},104:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return p});var r=n(18),a=n.n(r),_=n(15),o=n(10),s=n(23),i=n(105);!function(){var t=n(3).enterModule;t&&t(e)}();var u=a.a.mark(l),c=a.a.mark(p);function l(e){var t,n,r;return a.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.meta,n=e.id,a.prev=1,a.next=4,Object(_.b)(i.a,{url:"wp-json/pages?slug=".concat(n)});case 4:return r=a.sent,console.log(r),a.next=8,Object(_.c)(Object(s.c)(r,t));case 8:a.next=14;break;case 10:return a.prev=10,a.t0=a.catch(1),a.next=14,Object(_.c)(Object(s.a)(a.t0,t));case 14:case"end":return a.stop()}},u,this,[[1,10]])}function p(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.d)(o.b,l);case 2:case"end":return e.stop()}},c,this)}!function(){var t=n(3).default,r=n(3).leaveModule;t&&(t.register(l,"requestArticle","/Users/jonathanreading/Development/aya/src/redux/sagas/articles.js"),t.register(p,"watchRequestArticle","/Users/jonathanreading/Development/aya/src/redux/sagas/articles.js"),r(e))}()}).call(this,n(5)(e))},105:function(e,t,n){"use strict";(function(e){var r=n(106),a=n.n(r),_=n(107);!function(){var t=n(3).enterModule;t&&t(e)}();var o=function(e){var t=e.url;return a()("".concat(_.a.api.proxy,"/").concat(t)).then(function(e){if(console.log(e),e.status>=400)throw new Error("Bad response from server");return e.json()})};t.a=o,function(){var t=n(3).default,r=n(3).leaveModule;t&&(t.register(o,"default","/Users/jonathanreading/Development/aya/src/services/apiClient.js"),r(e))}()}).call(this,n(5)(e))},107:function(e,t,n){"use strict";(function(e,r){var a=n(58);!function(){var t=n(3).enterModule;t&&t(e)}(),r.env.PORT&&(a.app.port=r.env.PORT);var _=a;t.a=_,function(){var t=n(3).default,r=n(3).leaveModule;t&&(t.register(_,"default","/Users/jonathanreading/Development/aya/config/index.js"),r(e))}()}).call(this,n(5)(e),n(230))},109:function(e,t,n){"use strict";n.r(t),function(e){var t=n(2),r=n.n(t),a=n(54),_=n(22),o=n(232),s=n(40),i=n.n(s),u=n(43),c=n(89),l=n(99);!function(){var t=n(3).enterModule;t&&t(e)}();var p=Object(l.a)(window.__data);i.a.preloadReady().then(function(){Object(a.hydrate)(r.a.createElement(_.a,{store:p},r.a.createElement(o.a,null,Object(u.a)(c.a))),document.getElementById("root"))}),function(){var t=n(3).default,r=n(3).leaveModule;t&&(t.register(p,"store","/Users/jonathanreading/Development/aya/src/index.js"),r(e))}()}.call(this,n(5)(e))},19:function(e,t,n){e.exports={container:"styles_container_3pOC0Zoo8NsZKfEKvR5WMZ",nav:"styles_nav_nkLR4_sCW2Lf406bxm-x5",header:"styles_header_31bKc6yWz9Yth9DFUW0PYp",main:"styles_main_3IBmb4kQf4vfukWy9B9Cld",sidebar:"styles_sidebar_2C5pqcH9XvizCOj9r-uvwT",footer:"styles_footer_3fGU8NI_lP_QcUFTh8Sidw"}},225:function(e,t,n){e.exports={box:"main_box_1JShKH2NLVak9oMKV2CHaT"}},226:function(e,t,n){e.exports=n.p+"favicon.ico"},23:function(e,t,n){"use strict";(function(e){n.d(t,"b",function(){return a}),n.d(t,"c",function(){return _}),n.d(t,"a",function(){return o});var r=n(10);!function(){var t=n(3).enterModule;t&&t(e)}();var a=function(e){return{type:r.b,id:e,meta:{thunk:!0}}},_=function(e,t){return{type:r.c,data:e,meta:t}},o=function(e,t){return{type:r.a,error:e,meta:t}};!function(){var t=n(3).default,r=n(3).leaveModule;t&&(t.register(a,"request","/Users/jonathanreading/Development/aya/src/redux/modules/articles/actions.js"),t.register(_,"success","/Users/jonathanreading/Development/aya/src/redux/modules/articles/actions.js"),t.register(o,"failure","/Users/jonathanreading/Development/aya/src/redux/modules/articles/actions.js"),r(e))}()}).call(this,n(5)(e))},24:function(e,t,n){e.exports={navBar:"styles_navBar_2IB5mJy2bmWOm_Q5GIVSLO",isOpen:"styles_isOpen_4yi4fAA_ANqfBWRUm0kme",toggle:"styles_toggle_2UM70Qggx54rxHe5rAclyT",isSelected:"styles_isSelected_2bDLCKV2Cw-fHb2Xx7fY1a"}},37:function(e,t,n){"use strict";n.r(t),function(e){var r=n(2),a=n.n(r);!function(){var t=n(3).enterModule;t&&t(e)}();var _=function(){return a.a.createElement("h2",null,"Article 2")};t.default=_,function(){var t=n(3).default,r=n(3).leaveModule;t&&(t.register(_,"default","/Users/jonathanreading/Development/aya/src/components/presentation/Articles/Articles.js"),r(e))}()}.call(this,n(5)(e))},39:function(e,t,n){"use strict";(function(e){var r=n(2),a=n.n(r);!function(){var t=n(3).enterModule;t&&t(e)}();var _=function(){return a.a.createElement("h2",null,"Home 2")};t.a=_,function(){var t=n(3).default,r=n(3).leaveModule;t&&(t.register(_,"default","/Users/jonathanreading/Development/aya/src/components/presentation/Home/Home.js"),r(e))}()}).call(this,n(5)(e))},41:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return r}),function(){var t=n(3).enterModule;t&&t(e)}();var r="NAVIGATION_TOGGLE";!function(){var t=n(3).default,a=n(3).leaveModule;t&&(t.register(r,"NAVIGATION_TOGGLE","/Users/jonathanreading/Development/aya/src/redux/modules/navigation/types.js"),a(e))}()}).call(this,n(5)(e))},57:function(e,t,n){"use strict";n(80),n(39),n(37);var r=n(81);n.d(t,"a",function(){return r.a});var a=n(82);n.d(t,"b",function(){return a.a})},58:function(e){e.exports={app:{host:"localhost",port:4e3},api:{url:"http://www.calloftheforest.com/api",proxy:"/api"},webpack:{devserver:{host:"localhost",port:9e3}}}},80:function(e,t,n){"use strict";(function(e){var t=n(2),r=n.n(t),a=n(97),_=n.n(a);!function(){var t=n(3).enterModule;t&&t(e)}();var o=function(){return r.a.createElement("div",{className:"example-box ".concat(_.a.box)},"Example Box 1")};!function(){var t=n(3).default,r=n(3).leaveModule;t&&(t.register(o,"default","/Users/jonathanreading/Development/aya/src/components/presentation/ExampleBox/ExampleBox.js"),r(e))}()}).call(this,n(5)(e))},81:function(e,t,n){"use strict";(function(e){var r=n(2),a=n.n(r),_=n(1),o=n.n(_),s=n(231),i=n(24),u=n.n(i);!function(){var t=n(3).enterModule;t&&t(e)}();var c=function(e){var t=e.url,n=e.isOpen,r=e.onChange,_=e.className,o=e.items,i=t,c=[u.a.navBar];return _&&c.push(_),n&&c.push(u.a.isOpen),o=o.map(function(e){var t=e.title,n=e.url,_=i===n?u.a.isSelected:"";return a.a.createElement(s.a,{onClick:function(){return r(n)},className:_,key:n,to:n},t)}),a.a.createElement("nav",{className:c.join(" ")},o)};c.propTypes={items:o.a.array,onChange:o.a.func,isOpen:o.a.bool},c.defaultProps={items:[],isOpen:!1,onChange:function(){}};var l=c;t.a=l,function(){var t=n(3).default,r=n(3).leaveModule;t&&(t.register(c,"NavBar","/Users/jonathanreading/Development/aya/src/components/presentation/Navigation/NavBar.js"),t.register(l,"default","/Users/jonathanreading/Development/aya/src/components/presentation/Navigation/NavBar.js"),r(e))}()}).call(this,n(5)(e))},82:function(e,t,n){"use strict";(function(e){var r=n(2),a=n.n(r),_=n(24),o=n.n(_);!function(){var t=n(3).enterModule;t&&t(e)}();var s=function(e){var t=e.onToggle,n=e.text,r=e.className,_=void 0===r?"":r;return a.a.createElement("button",{type:"button",className:"".concat(o.a.toggle," ").concat(_),onClick:function(){return t()}},n)},i=s;t.a=i,function(){var t=n(3).default,r=n(3).leaveModule;t&&(t.register(s,"Toggle","/Users/jonathanreading/Development/aya/src/components/presentation/Navigation/Toggle.js"),t.register(i,"default","/Users/jonathanreading/Development/aya/src/components/presentation/Navigation/Toggle.js"),r(e))}()}).call(this,n(5)(e))},89:function(e,t,n){"use strict";(function(e){var r=n(2),a=n.n(r),_=n(40),o=n.n(_),s=n(39),i=n(90),u=n(96);!function(){var t=n(3).enterModule;t&&t(e)}();var c=function(){return a.a.createElement("h2",null,"Loading")},l=o()({loader:function(){return Promise.resolve().then(n.bind(null,37))},modules:["./components/presentation/Articles/Articles"],webpack:function(){return[37]},loading:c}),p=[{component:u.a,routes:[{path:"/",exact:!0,component:s.a},{path:"/articles",component:l},{path:"/article/:id",component:i.a}]}],d=p;t.a=d,function(){var t=n(3).default,r=n(3).leaveModule;t&&(t.register(c,"Loading","/Users/jonathanreading/Development/aya/src/routes.js"),t.register(l,"Articles","/Users/jonathanreading/Development/aya/src/routes.js"),t.register(p,"routes","/Users/jonathanreading/Development/aya/src/routes.js"),t.register(d,"default","/Users/jonathanreading/Development/aya/src/routes.js"),r(e))}()}).call(this,n(5)(e))},90:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(21),_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(91),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(92),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(93),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(94),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(95),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__),react_redux__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(22),redux_saga_thunk__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(17),redux_saga_thunk__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(redux_saga_thunk__WEBPACK_IMPORTED_MODULE_9__),_redux_modules_articles_actions__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(23),_redux_modules_articles_types__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(10);!function(){var e=__webpack_require__(3).enterModule;e&&e(module)}();var ArticleContainer=function(_Component){function ArticleContainer(){return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this,ArticleContainer),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(ArticleContainer).apply(this,arguments))}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ArticleContainer,_Component),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ArticleContainer,[{key:"componentDidMount",value:function(){var e=this.props,t=e.requestArticle,n=e.name,r=e.match.params.id;""===n&&t(r)}},{key:"loading",value:function(){var e=this.props.loading;return e?react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p",null,"Loading..."):""}},{key:"render",value:function(){var e=this.props,t=e.name,n=e.id;return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2",null,"Article"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p",null,"".concat(n," ").concat(t))),this.loading())}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"preloadData",value:function(e,t){var n=t.id;return e.dispatch(Object(_redux_modules_articles_actions__WEBPACK_IMPORTED_MODULE_10__.b)(n))}}]),ArticleContainer}(react__WEBPACK_IMPORTED_MODULE_6__.Component);ArticleContainer.propTypes={name:prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,id:prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,loading:prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool.isRequired,requestArticle:prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired},ArticleContainer.defaultProps={name:"",id:""};var mapStateToProps=function(e){return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({},e.articles,{loading:Object(redux_saga_thunk__WEBPACK_IMPORTED_MODULE_9__.pending)(e,_redux_modules_articles_types__WEBPACK_IMPORTED_MODULE_11__.b),error:Object(redux_saga_thunk__WEBPACK_IMPORTED_MODULE_9__.rejected)(e,_redux_modules_articles_types__WEBPACK_IMPORTED_MODULE_11__.b),success:Object(redux_saga_thunk__WEBPACK_IMPORTED_MODULE_9__.fulfilled)(e,_redux_modules_articles_types__WEBPACK_IMPORTED_MODULE_11__.b)})},_default=Object(react_redux__WEBPACK_IMPORTED_MODULE_8__.b)(mapStateToProps,{requestArticle:_redux_modules_articles_actions__WEBPACK_IMPORTED_MODULE_10__.b})(ArticleContainer);__webpack_exports__.a=_default,function(){var e=__webpack_require__(3).default,t=__webpack_require__(3).leaveModule;e&&(e.register(ArticleContainer,"ArticleContainer","/Users/jonathanreading/Development/aya/src/components/containers/Article.js"),e.register(mapStateToProps,"mapStateToProps","/Users/jonathanreading/Development/aya/src/components/containers/Article.js"),e.register(_default,"default","/Users/jonathanreading/Development/aya/src/components/containers/Article.js"),t(module))}()}).call(this,__webpack_require__(5)(module))},96:function(e,t,n){"use strict";(function(e){var r=n(2),a=n.n(r),_=n(3),o=n(11),s=n(22),i=n(43),u=n(57),c=n(98),l=(n(225),n(226),n(19)),p=n.n(l);!function(){var t=n(3).enterModule;t&&t(e)}();var d=[{title:"Home",url:"/"},{title:"Articles",url:"/articles"},{title:"Article",url:"/article/home"}],f=function(e){var t=e.route,n=e.location,r=e.toggleNavigation,_=e.navigationIsOpen;return a.a.createElement("div",{className:p.a.container},a.a.createElement("header",{className:p.a.header},a.a.createElement("h1",null,"Aya next generation plant butters"),a.a.createElement(u.b,{text:"toggle",onToggle:r,isOpen:_,className:p.a.navToggle})),a.a.createElement(u.a,{items:d,url:n.pathname,isOpen:_,className:p.a.nav}),a.a.createElement("main",{role:"main",className:p.a.main},Object(i.a)(t.routes)),a.a.createElement("section",{className:p.a.sidebar},a.a.createElement("h1",null,"Side bar")),a.a.createElement("footer",{className:p.a.footer},a.a.createElement("h1",null,"Footer")))},v=function(e){return{navigationIsOpen:e.navigation.isOpen}},E=Object(o.compose)(Object(s.b)(v,{toggleNavigation:c.a}),Object(_.hot)(e))(f);t.a=E,function(){var t=n(3).default,r=n(3).leaveModule;t&&(t.register(d,"items","/Users/jonathanreading/Development/aya/src/components/containers/App/App.js"),t.register(f,"App","/Users/jonathanreading/Development/aya/src/components/containers/App/App.js"),t.register(v,"mapStateToProps","/Users/jonathanreading/Development/aya/src/components/containers/App/App.js"),t.register(E,"default","/Users/jonathanreading/Development/aya/src/components/containers/App/App.js"),r(e))}()}).call(this,n(5)(e))},97:function(e,t,n){e.exports={box:"styles_box_qDGX6gV4ZJOYKCz51bKQI main_box_1JShKH2NLVak9oMKV2CHaT"}},98:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return a});var r=n(41);!function(){var t=n(3).enterModule;t&&t(e)}();var a=function(){return{type:r.a}};!function(){var t=n(3).default,r=n(3).leaveModule;t&&(t.register(a,"toggleNavigation","/Users/jonathanreading/Development/aya/src/redux/modules/navigation/actions.js"),r(e))}()}).call(this,n(5)(e))},99:function(e,t,n){"use strict";(function(e){var r=n(11),a=n(108),_=n(17),o=n(100),s=n(103);!function(){var t=n(3).enterModule;t&&t(e)}();var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.a)(),n=Object(r.createStore)(o.a,e,Object(r.applyMiddleware)(_.middleware,t));return t.run(s.a),n};t.a=i,function(){var t=n(3).default,r=n(3).leaveModule;t&&(t.register(i,"default","/Users/jonathanreading/Development/aya/src/redux/configureStore.js"),r(e))}()}).call(this,n(5)(e))}});