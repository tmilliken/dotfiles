var webClient=(window.webpackJsonpwebClient=window.webpackJsonpwebClient||[]).push([[43],{111:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return i});var r="[tracking] segment event",a=function(e){return{type:r,payload:e}};function i(e){return e.type===r}},112:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(23),a=n(35),i=n(28),o=n(34),c=n(37),u=n(0),s=n.n(u),f=n(7),l=n(18),d=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentDidCatch",value:function(e){this.context.store.dispatch(l.b.reportError(e))}},{key:"render",value:function(){return this.props.children}}]),t}(s.a.Component);d.contextType=f.b},113:function(e,t,n){"use strict";var r;n.d(t,"a",function(){return r}),function(e){e.ContentScript="content-script-filter",e.Popup="popup-filter",e.Vault="vault",e.SavePrompt="save-prompt",e.Infield="infield"}(r||(r={}))},114:function(e,t,n){"use strict";var r=n(57),a=n(160),i=(n(283),n(65));var o=n(45),c=n(14),u=n(6);function s(e,t){return function(n,r,a){return t.segment.post(Object(u.a)({event:n},e,{properties:Object(u.a)({},r,a)}))}}var f=n(111),l=n(70);var d=n(382),b=n(18),p=n(23),E=n(35),O=n(403),S=n(105),m=n(82),v=n(118),_=n(25),A=function(){function e(t){Object(p.a)(this,e),this.captureUrl=!1,this.name=e.id,this.captureUrl=t}return Object(E.a)(e,[{key:"setupOnce",value:function(t,n){var r=this;t(function(t){if(n().getIntegration(e)&&!t.request){var a={headers:{"User-Agent":navigator.userAgent}};return r.captureUrl&&(a.url=location.protocol+location.host+location.pathname),Object(u.a)({},t,{request:a})}return t})}}]),e}();A.id="CaptureLocation";var h="https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@dummy.com/1";function I(e){return function(){function t(){Object(p.a)(this,t)}return Object(E.a)(t,[{key:"sendEvent",value:function(t){return e.dispatch(b.b.reportErrorEvent(t)),Promise.resolve({status:O.a.Success})}},{key:"close",value:function(){return Promise.resolve(!0)}}]),t}()}function g(e,t){var n=[new A(t)];return e&&n.push(new S.a.Breadcrumbs({console:!1,history:!1,fetch:!1,xhr:!1,sentry:!1,dom:!0})),n}function T(e){var t;(t=e)instanceof _.d||t instanceof _.c||t instanceof _.b||t instanceof _.e||t instanceof _.a||Object(m.c)(e)}function R(e){var t=e.dsn,n=e.debug,r=e.release,a=e.enabledSelector,i=e.allowBreadcrumbs,o=void 0!==i&&i,c=e.captureUrl,u=void 0!==c&&c;return function(e){return function(i){var c=!t;Object(v.a)({dsn:c?h:t,debug:n,release:r,maxBreadcrumbs:10,transport:c?I(e):S.b.FetchTransport,defaultIntegrations:!1,integrations:g(o,u)});var s=function(e,t,n,r){var a=function(){return!r||r(e.getState())};return{reportError:function(e){a()&&T(e.payload)},reportErrorEvent:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){if(n)return t(e);a()&&Object(m.b)(e.payload)}),handleAction:function(e){try{return t(e)}catch(n){a()&&T(n)}}}}(e,i,c,a);return function(e){switch(e.type){case b.a.REPORT_ERROR:return s.reportError(e);case b.a.REPORT_ERROR_EVENT:return s.reportErrorEvent(e);default:return Object(m.a)({category:"redux",message:e.type}),s.handleAction(e)}}}}}function j(e,t){var n,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],p=arguments.length>3?arguments[3]:void 0,E=R({release:"4.88.0",debug:!1,allowBreadcrumbs:!0,captureUrl:!0}),O=Object(a.a)({onError:function(e){v.dispatch(b.b.reportError(e))}}),S=Object(c.a)({passThrough:!0,enabledSelector:function(e){var t=function(e){try{return localStorage.getItem(e)}catch(t){return null}}("isTrackingEnabled");return null===t?e.encryptedVaultDataSource.repromptSettings.improve:e.encryptedVaultDataSource.repromptSettings.improve&&"true"===t}}),m=[E,S,O,(n=p.background.dispatch,function(){return function(e){return function(t){t.type!==i.a&&n(t),e(t)}}})].concat(Object(r.a)(u));var v=Object(o.createStore)(t,o.applyMiddleware.apply(void 0,Object(r.a)(m)));p.initialize(v.dispatch);var _,A={segment:(_=Object(d.a)(function(){return v.getState().user.csrf},function(){return v.getState().login.baseUrl},e.fetchAPI),{post:Object(l.a)(_)("segment/send-web-client-event"),postSegmentInSafari:Object(l.a)(_)("/segment/web-client/v1/batch")})};return S.initialize({legacySegment:s({platform:e.platform,version:e.version||""},A),segment:function(e,t){v.dispatch(Object(f.b)({event:e,properties:t}))}}),{store:v,sagaMiddleware:O}}n.d(t,"a",function(){return j})},14:function(e,t,n){"use strict";var r,a=n(20),i=n(6),o=function(e){return Array.isArray(e)?e:[e]},c=n(111),u=n(18);function s(e,t){return Object(i.a)({},e,{events:t})}function f(e,t,n){var r=t.event,a=t.properties;e&&e(r,a,n)}function l(e,t){var n=function(e,n,r){o(e).forEach(function(e){!function(e){return"function"===typeof e}(e)?r(e):t(function(e,t,n){return function(r){var a=e(r,t);switch(typeof a){case"boolean":return a;case"undefined":return!0;default:return a&&(Array.isArray(a)?a.forEach(n):n(a)),!1}}}(e,n,r))})};return function(t,a,i,o,c,u){switch(i){case r.LEGACY_SEGMENT:case r.SEGMENT:n(a[i],o,function(n){var r;(t||(r=n.event,u&&u[i]&&u[i].includes(r)))&&f(e[i],n,c)});break;case r.GOOGLE_ANALYTICS:t&&n(a[i],o,function(t){!function(e,t){var n=t.hitType,r=t.event;e&&e(n,r)}(e[i],t)})}}}function d(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.passThrough,i=t.enabledSelector,o=t.whitelistedEvents,s={},d=[],b=function(t){return function(l){return function(b){if(Object(c.a)(b))n?l(b):f(s[r.SEGMENT],b.payload);else{var p=b.events,E=b.metadata,O=Object(a.a)(b,["events","metadata"]);if(p){var S=t.getState(),m=!i||i(S);if(m||o)for(var v in p)e(m,p,v,S,E,o)}l(O),d=d.filter(function(e){try{return e(t.getState())}catch(n){return t.dispatch(u.b.reportError(n)),!1}})}}}};return b.initialize=function(t){e=l(s=t,function(e){d.push(e)})},b}n.d(t,"b",function(){return s}),n.d(t,"a",function(){return d}),function(e){e.LEGACY_SEGMENT="legacySegment",e.SEGMENT="segment",e.GOOGLE_ANALYTICS="google"}(r||(r={}))},15:function(e,t,n){"use strict";function r(e,t){return{event:e,properties:t}}function a(e){return r(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0)}n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})},18:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var r,a=n(5);!function(e){e.REPORT_ERROR="[error handling] report",e.REPORT_ERROR_EVENT="[error handling] report error event"}(r||(r={}));var i={reportError:function(e){return Object(a.a)(r.REPORT_ERROR,e)},reportErrorEvent:function(e){return Object(a.a)(r.REPORT_ERROR_EVENT,e)}}},183:function(e,t,n){"use strict";function r(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.reduce(function(e,t){return new URL(t,e).href},e)}n.d(t,"a",function(){return r})},25:function(e,t,n){"use strict";var r,a=n(23),i=n(35),o=n(28),c=n(34),u=n(37),s=n(43);!function(e){e.hidden="hidden",e.success="success",e.alert="alert",e.warning="warning",e.async="async"}(r||(r={})),n.d(t,"d",function(){return f}),n.d(t,"b",function(){return l}),n.d(t,"e",function(){return b}),n.d(t,"a",function(){return E}),n.d(t,"f",function(){return O}),n.d(t,"c",function(){return S});var f=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"toString",value:function(){return this.message}}]),t}(Object(s.a)(Error)),l=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(c.a)(t).call(this,e.id))).messgeDesc=void 0,n.messgeDesc=e,n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"getMessageDescriptor",value:function(){return this.messgeDesc}}]),t}(Object(s.a)(Error)),d="401 Unauthorized",b=function(e){function t(){var e;return Object(a.a)(this,t),e=Object(o.a)(this,Object(c.a)(t).call(this)),Object(o.a)(e,new Error(d))}return Object(u.a)(t,e),t}(Object(s.a)(Error)),p="403 Forbidden",E=function(e){function t(){var e;return Object(a.a)(this,t),e=Object(o.a)(this,Object(c.a)(t).call(this)),Object(o.a)(e,new Error(p))}return Object(u.a)(t,e),t}(Object(s.a)(Error)),O=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),t}(Object(s.a)(Error)),S=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),t}(Object(s.a)(Error));r.alert},382:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var r=n(4),a=n.n(r),i=n(10),o=n(6),c=n(183);function u(e){if(e&&e.body)return Object(o.a)({},e,{body:e.body?JSON.stringify(e.body):"",headers:Object(o.a)({},e&&e.headers,{"Content-Type":"application/json"})})}var s=function(e,t){return fetch(e,t)};function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return location.origin},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s;return function(){var r=Object(i.a)(a.a.mark(function r(i,s){var f;return a.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return f=u(s),r.abrupt("return",n(Object(c.a)(t(),"lmiapi/",i),Object(o.a)({},f,{credentials:"include",headers:Object(o.a)({},f&&f.headers,{"X-CSRF-TOKEN":e()})})));case 2:case"end":return r.stop()}},r)}));return function(e,t){return r.apply(this,arguments)}}()}},383:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(6),a=n(65),i=n(158);function o(e,t){return function(n,o){if(!n){var c=t(n,o);return Object(r.a)({},e,c)}if(o.type===a.a)return Object(i.apply_patch)(n,o.payload);var u=t(n,o);return function(e,t){for(var n in t)if(e[n]!==t[n])return!0;return!1}(n,u)?Object(r.a)({},n,u):n}}},44:function(e,t,n){"use strict";var r;n.d(t,"a",function(){return r}),function(e){e.Note="Generic",e.Password="Password",e.PaymentCard="Credit Card",e.Address="Address",e.BankAccount="Bank Account",e.Database="Database",e.DriversLicense="Driver's License",e.Email="Email Account",e.HealthInsurance="Health Insurance",e.InstantMessenger="Instant Messenger",e.Insurance="Insurance",e.Membership="Membership",e.Passport="Passport",e.Server="Server",e.SocialSecurity="Social Security",e.SoftwareLicense="Software License",e.SshKey="SSH Key",e.WiFi="Wi-Fi Password",e.Custom="Custom"}(r||(r={}))},441:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={colors:{blue:{lighter:"#f5f7f8",light:"#00a3e0",neutral:"#3598db",neutral2:"#2b7bb1",dark:"#3c4862",blue700:"#3B70D4"},grey:{lighter:"#e7e8ea",light:"#c3cbcb",neutral:"#646d73",neutral2:"#747677",neutral3:"#757677",neutral4:"#5a6a81",dark:"#52585b",darker:"#1b283c",semiDark:"#172128",neutral100:"#ebeeef",neutral900:"#1b283c"},orange:{neutral:"#f39c12",dark:"#ae6202"},green:{light:"#5fd889",dark:"#3a8454"},red:{light:"#d22d27",red700:"#D32D27"},purple:{dark:"#383a64"},neutral:{neutral50:"#F9FAFB",neutral900:"#1b283c"},black:"black",white:"#ffffff"},fonts:{primary:"'Open Sans', sans-serif"}}},46:function(e,t,n){"use strict";var r;n.d(t,"a",function(){return r}),function(e){e.WEB="web",e.CHROME="cr",e.OPERA="op",e.EDGE="edge",e.EDGE_CHROMIUM="edgecr",e.FIREFOX="ff",e.SAFARI="sfx"}(r||(r={}))},5:function(e,t,n){"use strict";function r(e,t){return void 0===t?{type:e}:{type:e,payload:t}}n.d(t,"a",function(){return r})},614:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(0),a=function(e){return Object(r.useEffect)(function(){var t=document.getElementById("root");if(t){var n=function(){if(t.firstElementChild){var n=t.firstElementChild.getBoundingClientRect();e(n.width,n.height)}};if(n(),"undefined"!==typeof ResizeObserver){var r=new ResizeObserver(n);t.firstElementChild&&r.observe(t.firstElementChild);var a=new MutationObserver(function(e){n(),e.forEach(function(e){e.addedNodes.forEach(function(e){r.observe(e)}),e.removedNodes.forEach(function(e){r.unobserve(e)})})});return a.observe(t,{childList:!0}),function(){a.disconnect(),r.disconnect()}}var i,o=0,c=0,u=!1,s=function(){i=setInterval(function(){var e=!1;t.firstElementChild&&(t.firstElementChild.clientHeight!==o&&(o=t.firstElementChild.clientHeight,e=!0),t.firstElementChild.clientWidth!==c&&(c=t.firstElementChild.clientWidth,e=!0)),e&&n()},50)},f=function(){u||(u=!0,s())},l=function(){u=!1,clearInterval(i)};return window.addEventListener("focus",f),window.addEventListener("blur",l),s(),function(){window.removeEventListener("focus",f),window.removeEventListener("blur",l)}}},[e])}},619:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),i=n(10),o=n(1),c=(n(0),n(54)),u=n.n(c),s=n(7),f=n(42),l=n(441),d=function(){},b=n(113),p=n(383),E=function(){return Object(o.jsx)("div",{style:{width:"300px"}},"Hello Infield!")},O=n(614),S=n(79),m=n(114),v=n(112);function _(){return(_=Object(i.a)(a.a.mark(function e(t){var n,r,i,c;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){return Object(O.a)(function(e,t){return i.dispatch(S.b.resizeInfieldContainer(e,t))}),Object(o.jsx)(f.a,{theme:l.a},Object(o.jsx)(s.a,{store:i},Object(o.jsx)(v.a,null,Object(o.jsx)(E,null))))},e.next=3,t.stateSync({filterType:b.a.Infield});case 3:n=e.sent,r=Object(m.a)(t,Object(p.a)(n.background.initialState,d),void 0,n),i=r.store,u.a.render(Object(o.jsx)(c,null),document.getElementById("root"));case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(e){_.apply(this,arguments)}(n(99).a)},65:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r="[state-sync]"},70:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return f});var r=n(4),a=n.n(r),i=n(6),o=n(10);n(25);function c(e){return function(t,n){return function(){var r=Object(o.a)(a.a.mark(function r(o){return a.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",e(t,Object(i.a)({},n,{body:o,method:"POST"})));case 1:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()}}function u(e){return function(t,n){var r=c(e)(t,n);return function(){var e=Object(o.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(t);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}}function s(e){return function(t,n){var r=c(e)(t,n);return function(){var e=Object(o.a)(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(t);case 2:if(!((n=e.sent).status>=300)){e.next=5;break}throw new Error(n.statusText);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}}function f(e){return function(t,n){var r=c(e)(t,n);return function(){var e=Object(o.a)(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(t);case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}}},79:function(e,t,n){"use strict";var r=n(6),a=n(5);function i(e,t){return void 0===t?{type:e}:{type:e,payload:t}}var o=n(14),c=n(15),u="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),s=new Uint8Array(16);var f=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var l=function(e){return"string"===typeof e&&f.test(e)},d=[],b=0;b<256;++b)d.push((b+256).toString(16).substr(1));var p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(d[e[t+0]]+d[e[t+1]]+d[e[t+2]]+d[e[t+3]]+"-"+d[e[t+4]]+d[e[t+5]]+"-"+d[e[t+6]]+d[e[t+7]]+"-"+d[e[t+8]]+d[e[t+9]]+"-"+d[e[t+10]]+d[e[t+11]]+d[e[t+12]]+d[e[t+13]]+d[e[t+14]]+d[e[t+15]]).toLowerCase();if(!l(n))throw TypeError("Stringified UUID is invalid");return n};var E=function(e,t,n){var r=(e=e||{}).random||(e.rng||function(){if(!u)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return u(s)})();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var a=0;a<16;++a)t[n+a]=r[a];return t}return p(r)};function O(){return E()}var S,m,v=n(44);function _(e){switch(e){case v.a.Address:return"Address";case v.a.PaymentCard:return"Credit Card";case v.a.Password:default:return"Password"}}function A(e,t,n){return{"Fill Session Id":e,Source:n,"Item Type":t}}function h(e,t,n){return function(a,i){var o=i.sections.find(function(t){return t.id===e});if(o){var u=o.type,s=o.sessionId,f=o.source,l=o.fields.find(function(e){return e.id===t});if(s&&f&&l&&l.fill){var d=_(u);return Object(c.b)("LastPass Fill Modified",Object(r.a)({},A(s,d,f),{"Field Type":l?l.type:"",Language:n}))}}}}function I(e,t,n,a,i){return Object(c.b)("LastPass Fill Initiated",Object(r.a)({},A(e,_(t),n),{Language:a,"Is Launch":i===S.Launch,"Is Auto Login":i===S.AutoLogin}))}function g(e){return e.sections.map(function(e){if(e.sessionId&&e.source)return Object(c.b)("LastPass Fill Submitted",{"Fill Session Id":e.sessionId,"Item Type":_(e.type),Source:e.source,"Is Launch":e.submissionType===S.Launch,"Is Auto Login":e.submissionType===S.AutoLogin})}).filter(function(e){return!!e})}!function(e){e[e.Launch=1]="Launch",e[e.AutoLogin=2]="AutoLogin"}(S||(S={})),n.d(t,"b",function(){return R}),n.d(t,"a",function(){return T}),n.d(t,"c",function(){return j}),function(e){e.RESET="[fill] reset",e.STATE_CHANGE="[fill] state change",e.CONFIRM_CROSS_DOMAIN_FILL="[fill] confirm cross domain fill",e.CROSS_DOMAIN_FILL_CONFIRM_RESULT="[fill] cross domain fill confirm result",e.MANUAL_FILL="[fill] manual fill",e.FILL_GENERATED_PASSWORD="[fill] generated password",e.FILL="[fill] fill",e.RESET_TAB_STATE="[fill] reset tab state",e.FILL_VALUES="[fill] fill values",e.SET_PASSWORD_FILLED="[fill] set password filled",e.CHANGE_INPUTS="[fill] change inputs",e.MANUAL_PASSWORD_ENTRY="[fill] manual password entry",e.SECTION_FILLED="[fill] section filled",e.SET_SECTIONS="[fill] set sections",e.ITEMS_TO_SAVE_DETECTED="[save] items to save detected",e.SAVE_ITEMS="[save] save items",e.CLOSE_INFIELD="[fill] close infield",e.OPEN_INFIELD="[fill] open infield",e.OPEN_INFIELD_WITH_POSITION="[fill] open infield with position",e.RESIZE_INFIELD_CONTAINER="[fill] resize infield container",e.LAUNCH="[fill] launch",e.SET_USERNAME="[fill] set username",e.SET_LAUNCHED="[fill] set launched",e.CLEAR_ACTIVE_PAGE="[fill] clear active page",e.GET_PARENT_FRAME_OFFSETS="[fill] get parent frame offsets",e.SET_PARENT_FRAME_OFFSET="[fill] set parent frame offset",e.SUBMIT_DETECTED="[save] submit detected",e.USER_INTERACTED="[fill] user interacted",e.LOGOUT_RESET="[fill] logout reset",e.UPDATE_LAST_USED_TIMESTAMP="[fill] update last used timestamp",e.SET_FILLABLE_FIELDS="[fill] set fillable fields"}(m||(m={}));var T,R={reset:function(e){return i(m.RESET,{initialPageState:e})},stateChange:function(e){return i(m.STATE_CHANGE,{state:e})},getParentFrameOffsets:function(e,t){return Object(a.a)(m.GET_PARENT_FRAME_OFFSETS,{page:e,hierarchy:t})},setParentFrameOffset:function(e,t){return i(m.SET_PARENT_FRAME_OFFSET,{offset:e,parent:t})},setFillableFields:function(e){return Object(a.a)(m.SET_FILLABLE_FIELDS,{fillableFields:e})},confirmCrossDomainFill:function(e,t){return Object(a.a)(m.CONFIRM_CROSS_DOMAIN_FILL,{tabId:t,message:e})},crossDomainFillConfirmResult:function(e){return i(m.CROSS_DOMAIN_FILL_CONFIRM_RESULT,{confirmed:e})},logoutReset:function(e){return Object(a.a)(m.LOGOUT_RESET,{preferences:e})},updateLastUsedTimestamp:function(e){return Object(a.a)(m.UPDATE_LAST_USED_TIMESTAMP,{id:e})},manualFill:function(e,t,n,r){return Object(a.a)(m.MANUAL_FILL,{page:e,vaultRecordId:t,source:n,sectionId:r})},manualFillFromPage:function(e,t,n){return i(m.MANUAL_FILL,{vaultRecordId:e,source:t,sectionId:n})},fillGeneratedPassword:function(e,t,n,i,u){var s=O();return Object(o.b)(Object(a.a)(m.FILL_GENERATED_PASSWORD,{page:e,password:t,source:n,sectionId:u,fillSessionId:s}),{segment:Object(c.a)("LastPass Fill Initiated",Object(r.a)({},A(s,"Generated Password",n),{Language:i,"Is Launch":!1,"Is Auto Login":!1}))})},fill:function(e,t,n,r,a,i){var c,u,s=O();return Object(o.b)((c=m.FILL,void 0===(u={sectionId:a,vaultRecordId:e,fillSessionId:s,source:n,submissionType:i})?{type:c}:{type:c,payload:u}),{segment:I(s,t,n,r,i)})},clearActivePage:function(){return Object(a.a)(m.CLEAR_ACTIVE_PAGE)},setUsername:function(e,t){return Object(a.a)(m.SET_USERNAME,{page:e,username:t})},launch:function(e){return Object(a.a)(m.LAUNCH,{vaultRecord:e})},setLaunched:function(e,t){return i(m.SET_LAUNCHED,{id:e,tabId:t})},resetTabState:function(e){return Object(a.a)(m.RESET_TAB_STATE,{tabId:e})},fillValues:function(e,t,n,r,i,o,c){return Object(a.a)(m.FILL_VALUES,{page:e,values:t,sessionId:r,sectionId:n,recordId:i,source:o,submissionType:c})},setPasswordFilled:function(e,t){return Object(a.a)(m.SET_PASSWORD_FILLED,{page:e,id:t})},changeInput:function(e,t,n,r){return Object(o.b)(i(m.CHANGE_INPUTS,{sectionId:e,id:t,value:n}),{segment:h(e,t,r)})},manualPasswordEntry:function(e){return Object(o.b)(Object(a.a)(m.MANUAL_PASSWORD_ENTRY,{type:e}),{segment:Object(c.a)("LastPass Fill Manually Entered",{"Entry Type":e})})},setSections:function(e,t){return i(m.SET_SECTIONS,{sections:e,language:t})},sectionFilled:function(e){return i(m.SECTION_FILLED,{section:e})},itemsToSaveDetected:function(e,t,n){return i(m.ITEMS_TO_SAVE_DETECTED,{itemsToSave:e,numberOfKind:t,submittedOrigin:n})},resizeInfieldContainer:function(e,t){return i(m.RESIZE_INFIELD_CONTAINER,{width:t,height:e})},closeInfield:function(){return i(m.CLOSE_INFIELD)},openInfield:function(e,t,n,r){return i(m.OPEN_INFIELD,{sectionId:e,inputRect:t,type:n,frameHierarchy:r})},openInfieldWithPosition:function(e,t,n){return Object(a.a)(m.OPEN_INFIELD_WITH_POSITION,{sectionId:e,page:t,inputLocation:n})},userInteracted:function(){return i(m.USER_INTERACTED)},submitDetected:function(e){return Object(o.b)(Object(a.a)(m.SUBMIT_DETECTED,{submittedData:e}),{segment:g(e)})}};!function(e){e.ANIMATION_DONE="[save prompt] animationDone",e.CANCEL="[save prompt] cancel",e.SAVE="[save prompt] save",e.RESIZE="[save prompt] resize",e.SET_ACTIVE_SCREEN="[save prompt] set active screen",e.TRY_AGAIN="[save prompt] try again",e.SET_ICON_DATA="[save prompt] set icon data",e.SHOW_DISABLE_PROMPT="[save prompt] show disable prompt",e.DISABLE_PROMPT_SHOWED="[save prompt] disable prompt showed",e.DISABLE_BROWSER_PASSWORD_MANAGER="[tab prompt] disable browser password manager",e.DISMISS_DISABLE_PROMPT="[tab prompt] dismiss disable browser prompt",e.DISABLE_BROWSER_PASSWORD_MANAGER_SUCCESS="[tab prompt] disable browser password manager success",e.DISABLE_BROWSER_PASSWORD_MANAGER_ERROR="[tab prompt] disable browser password manager error",e.DONT_SHOW_AGAIN="[tab prompt] dont show again",e.SHOW_FEEDBACK_PROMPT_FOR_URL="[tab prompt] show feedback prompt for url",e.DISMISS_FEEDBACK_PROMPT="[tab prompt] dismiss feedback prompt",e.GIVE_FEEDBACK_CLICKED="[tab prompt] give feedback clicked",e.DONT_SHOW_FEEDBACK_PROMPT_AGAIN="[tab prompt] dont show feedback prompt again",e.REQUEST_DISABLE_BROWSER_PASSWORD_MANAGER="[tab prompt] request disable browser password manager",e.SET_BROWSER_PASSWORD_SAVING="[tab prompt] get browser password saving",e.BROWSER_FILL_DETECTED="[tab prompt] browser fill detected"}(T||(T={}));var j={cancel:function(){return i(T.CANCEL)},animationDone:function(){return i(T.ANIMATION_DONE)},save:function(e){return i(T.SAVE,{records:e})},resize:function(e,t){return i(T.RESIZE,{width:e,height:t})},tryAgain:function(){return i(T.TRY_AGAIN)},setIconData:function(e){return i(T.SET_ICON_DATA,{data:e})},setActiveScreen:function(e,t,n,r){return Object(a.a)(T.SET_ACTIVE_SCREEN,{tabId:e,frameId:t,url:n,screen:r})},showDisablePrompt:function(e){return Object(a.a)(T.SHOW_DISABLE_PROMPT,{tabId:e})},disablePromptShowed:function(e){return Object(o.b)(Object(a.a)(T.DISABLE_PROMPT_SHOWED),{segment:Object(c.a)("Disable Browser Fill Prompt Shown",{"Prompt Type":e?"Automatic":"Manual"})})},closeSuccessPrompt:function(){return i(T.DISMISS_DISABLE_PROMPT)},dismissDisablePrompt:function(e){return Object(o.b)(i(T.DISMISS_DISABLE_PROMPT),{segment:Object(c.a)("Disable Browser Fill Dismiss Clicked",{"Prompt Type":e?"Automatic":"Manual"})})},disableBrowserPasswordSaving:function(){return Object(o.b)(i(T.DISABLE_BROWSER_PASSWORD_MANAGER),{segment:Object(c.a)("Disable Browser Fill Started")})},requestDisableBrowserPasswordSaving:function(){return Object(o.b)(i(T.REQUEST_DISABLE_BROWSER_PASSWORD_MANAGER),{segment:Object(c.a)("Disable Browser Fill Started")})},disableBrowserPasswordSavingSuccess:function(){return Object(o.b)(i(T.DISABLE_BROWSER_PASSWORD_MANAGER_SUCCESS),{segment:Object(c.a)("Disable Browser Fill Succeeded")})},disableBrowserPasswordSavingError:function(){return Object(o.b)(i(T.DISABLE_BROWSER_PASSWORD_MANAGER_ERROR),{segment:Object(c.a)("Disable Browser Fill Failed")})},dontShowAgain:function(e){return Object(o.b)(i(T.DONT_SHOW_AGAIN),{segment:Object(c.a)("Disable Browser Fill Do Not Show Again Clicked",{"Prompt Type":e?"Automatic":"Manual"})})},browserFillDetected:function(){return i(T.BROWSER_FILL_DETECTED)},showFeedbackPromptForUrl:function(e){return Object(o.b)(i(T.SHOW_FEEDBACK_PROMPT_FOR_URL,e),{segment:Object(c.a)("Fill Feedback Prompt Shown",{"Feedback Type":e.feedbackType,"Form Type":e.type})})},giveFeedbackClicked:function(e){return Object(o.b)(i(T.GIVE_FEEDBACK_CLICKED,e),{segment:Object(c.a)("Fill Feedback Prompt Give Clicked",{"Feedback Type":e.feedbackType,"Form Type":e.type})})},dontShowFeedbackPromptAgain:function(e){return Object(o.b)(i(T.DONT_SHOW_FEEDBACK_PROMPT_AGAIN,e),{segment:Object(c.a)("Fill Feedback Prompt Do Not Show Again Clicked",{"Feedback Type":e.feedbackType,"Form Type":e.type})})},dismissFeedbackPrompt:function(e){return Object(o.b)(i(T.DISMISS_FEEDBACK_PROMPT,e),{segment:Object(c.a)("Fill Feedback Prompt Dismiss Clicked",{"Feedback Type":e.feedbackType,"Form Type":e.type})})},setBrowserPasswordSaving:function(e){return Object(a.a)(T.SET_BROWSER_PASSWORD_SAVING,{browserPasswordSavingEnabled:e})}}},99:function(e,t,n){"use strict";var r=n(46),a=n(6),i=n(115);n.d(t,"a",function(){return o});var o={version:"4.88.0",platform:-1!=navigator.userAgent.indexOf(" OPR/")?r.a.OPERA:r.a.CHROME,stateSync:function(e){return new Promise(function(t){var n;"undefined"!==typeof browser&&(n=window===top?"0":Object(i.v4)());var r=chrome.runtime.connect({name:"sync"});r.onMessage.addListener(function n(a){r.onMessage.removeListener(n),t({background:{dispatch:function(e){try{r.postMessage(e)}catch(t){}},initialState:a},initialize:function(t){"disconnectAction"in e&&r.onDisconnect.addListener(function(){t(e.disconnectAction)}),r.onMessage.addListener(t)}})}),r.postMessage(Object(a.a)({},e,{initialize:!0,frameId:n}))})},binaryService:function(e){return new Promise(function(t,n){var r={argcount:e.arguments.length,cmd:e.cmd};e.arguments.forEach(function(e,t){r["arg"+t]=e}),chrome.runtime.sendNativeMessage("com.lastpass.nplastpass",r,function(e){chrome.runtime.lastError?n(chrome.runtime.lastError):t(e.retval)})})}}}},[[619,1,2]]]);