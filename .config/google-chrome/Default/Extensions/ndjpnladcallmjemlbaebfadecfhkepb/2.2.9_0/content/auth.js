!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=57)}({13:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const o=t(2);n.isIFrame=window.parent!==window,n.log=function(e,t="DEBUG"){var r=(()=>{var e=(new Error).stack.split("\n");if(!(e.length<4))return e[3].match(/\b[\w.]+\b:\d+/g).pop()})();o.default.runtime.sendMessage({activity:"log",filename:`${n.isIFrame?"(iframe)":""}${r||""}`,severity:t,log:e})}},2:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=[],r={};n.default=function(){var e=(()=>{if("object"==typeof browser){var e=Object.create(browser);e.notifications={clear:function(e,n){n(!1)},create:function(e,n,t){null!=n&&void 0!==n.priority&&null!==n.priority&&n.priority>0&&window.alert(n.message),t(e)},onButtonClicked:{addListener:function(e){}},onClicked:{addListener:function(e){}}},e.runtime={getPlatformInfo:function(e){}}}else if("object"==typeof chrome)return Object.create(chrome)})();if(window.jasmine){e=function e(n,t){for(const[o,r]of Object.entries(t))n[o]?typeof r==typeof n[o]?Array.isArray(r)?n[o]=n[o].concat(r):n[o]="object"!=typeof r?r:e(n[o],r):console.log(`skipping ${o} due to conflicting types`):n[o]=r;return n}(e||{},{mock:!0,browserAction:{setIcon:function(e){}},extension:{getURL:function(e){return""}},i18n:{getUILanguage:function(e,n){return""},getMessage:function(){return""}},runtime:{onMessage:{addListener:function(e){o.push(e)},removeListener:function(e){o.splice(o.indexOf(e),1)}},sendMessage:function(e){for(let n=0;n<o.length;++n)o[n](e)},id:"ndjpnladcallmjemlbaebfadecfhkepb"},storage:{local:{get:function(e,n){n({[e]:r[e]})},set:function(e){for(const n in e)e.hasOwnProperty(n)&&(r[n]=e[n])},remove:function(e,n){delete r[e],n(r)},clear:function(e,n){r={}}}},tabs:{create:function(e,n){n&&n({})}}}),window.chrome||(window.chrome=e)}return window.BrowserHandler||(window.BrowserHandler=e),e}()},57:function(e,n,t){e.exports=t(58)},58:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const o=t(2);function r(e,n){const t={activity:"authorization",origin:window.location.origin,type:e,close:!0};Object.assign(t,n),location.hash="",o.default.runtime.sendMessage(t)}t(13).log("navigated to: "+location.href),window.addEventListener("load",(function(){const e=function(e){const n=e.split(/[?#]/);if(n.length<2)return{};e=n[1];var t=new URLSearchParams(e),o={};for(var[r,i]of t.entries())o[r]=i;return o}(location.href);e.state&&e.state.includes("OfficeOnlineExtension")&&("https://login.microsoftonline.com"===window.location.origin?e.code?r("o365UserService",e):location.hash.length>0&&"/common/oauth2/nativeclient"===location.pathname&&r("msidUserService",e):"https://login.live.com"===window.location.origin&&(e.code?r("msaUserService",e):"/oauth20_authorize"===location.pathname&&r("msidUserService",e)))}))}});