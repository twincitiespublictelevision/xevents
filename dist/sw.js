!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Register="REGISTER",e.Unregister="UNREGISTER",e.Fire="FIRE"}(t.XSysActions||(t.XSysActions={})),function(e){e.Registered="REGISTERED",e.Unregistered="UNREGISTERED"}(t.XSysEvents||(t.XSysEvents={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.makeMessage=function(e,t){return{ns:"XEVENT",action:e,value:t}},t.readMessage=function(e){if(e){var t=e.ns,n=e.action,o=e.value;if("X"===t&&function(e){return-1!==[r.XSysActions.Register,r.XSysActions.Unregister,r.XSysActions.Fire].indexOf(e)}(n)&&o)return e}}},,,function(module,exports,__webpack_require__){"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}c((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(exports,"__esModule",{value:!0});var types_1=__webpack_require__(0),message_1=__webpack_require__(1),createInstance;function randomKey(){return"k"}createInstance="undefined"!=typeof localforage&&"function"==typeof localforage.createInstance?localforage.createInstance:__webpack_require__(5).createInstance;var createSys=function wrap(sw){function broadcastToClients(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,sw.clients.matchAll()];case 1:return t.sent().forEach((function(t){t.postMessage(e)})),[2]}}))}))}return function createSys(name){var store=createInstance({name:name});function addEventListener(e,t,n){return __awaiter(this,void 0,void 0,(function(){var r,o;return __generator(this,(function(i){switch(i.label){case 0:return[4,store.getItem(e)];case 1:return r=i.sent(),o=randomKey(),r.set(o,[t,n]),[2,o]}}))}))}function removeEventListener(e,t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:return[4,store.getItem(e)];case 1:return[2,n.sent().delete(t)]}}))}))}function listen(){var _this=this;sw.addEventListener("message",(function(e){return __awaiter(_this,void 0,void 0,(function(){var message,_a,_b,event_1,handler,options,returnKey,key,_c,event_2,key,_d,event_3,data_1,register_1,_e;return __generator(this,(function(_f){switch(_f.label){case 0:if(message=message_1.readMessage(e.data),!message)return[3,10];switch(_a=message.action,_a){case types_1.XSysActions.Register:return[3,1];case types_1.XSysActions.Unregister:return[3,4];case types_1.XSysActions.Fire:return[3,8]}return[3,10];case 1:return _b=message.value,event_1=_b.event,handler=_b.handler,options=_b.options,returnKey=_b.returnKey,key=addEventListener(event_1,handler,options),returnKey&&key?[4,broadcastToClients((_e={event:types_1.XSysEvents.Registered},_e[returnKey]=key,_e))]:[3,3];case 2:_f.sent(),_f.label=3;case 3:return[3,10];case 4:return _c=message.value,event_2=_c.event,key=_c.key,[4,removeEventListener(event_2,key)];case 5:return _f.sent()?[4,broadcastToClients({event:types_1.XSysEvents.Unregistered,key:key})]:[3,7];case 6:_f.sent(),_f.label=7;case 7:return[3,10];case 8:return _d=message.value,event_3=_d.event,data_1=_d.data,[4,store.getItem(event_3)];case 9:return register_1=_f.sent(),register_1.forEach((function(_a,k){var handler=_a[0],options=_a[1],fn=eval(handler);fn({name:event_3,state:options.state,data:data_1}),options.repeat=options.repeat-1,options.repeat>0?register_1.set(k,[handler,options]):register_1.delete(k)})),[3,10];case 10:return[2]}}))}))}))}return{addEventListener:addEventListener,removeEventListener:removeEventListener,listen:listen}}}(self);exports.default=createSys},function(e,t,n){(function(t){e.exports=function e(t,n,r){function o(a,u){if(!n[a]){if(!t[a]){if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var s=n[a]={exports:{}};t[a][0].call(s.exports,(function(e){var n=t[a][1][e];return o(n||e)}),s,s.exports,e,t,n,r)}return n[a].exports}for(var i=!1,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,n,r){(function(e){"use strict";var t,r,o=e.MutationObserver||e.WebKitMutationObserver;if(o){var i=0,a=new o(f),u=e.document.createTextNode("");a.observe(u,{characterData:!0}),t=function(){u.data=i=++i%2}}else if(e.setImmediate||void 0===e.MessageChannel)t="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var t=e.document.createElement("script");t.onreadystatechange=function(){f(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(f,0)};else{var c=new e.MessageChannel;c.port1.onmessage=f,t=function(){c.port2.postMessage(0)}}var s=[];function f(){var e,t;r=!0;for(var n=s.length;n;){for(t=s,s=[],e=-1;++e<n;)t[e]();n=s.length}r=!1}n.exports=function(e){1!==s.push(e)||r||t()}}).call(this,void 0!==t?t:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,t,n){"use strict";var r=e(1);function o(){}var i={},a=["REJECTED"],u=["FULFILLED"],c=["PENDING"];function s(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=c,this.queue=[],this.outcome=void 0,e!==o&&v(this,e)}function f(e,t,n){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof n&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function l(e,t,n){r((function(){var r;try{r=t(n)}catch(t){return i.reject(e,t)}r===e?i.reject(e,new TypeError("Cannot resolve promise with itself")):i.resolve(e,r)}))}function d(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function v(e,t){var n=!1;function r(t){n||(n=!0,i.reject(e,t))}function o(t){n||(n=!0,i.resolve(e,t))}var a=h((function(){t(o,r)}));"error"===a.status&&r(a.value)}function h(e,t){var n={};try{n.value=e(t),n.status="success"}catch(e){n.status="error",n.value=e}return n}t.exports=s,s.prototype.catch=function(e){return this.then(null,e)},s.prototype.then=function(e,t){if("function"!=typeof e&&this.state===u||"function"!=typeof t&&this.state===a)return this;var n=new this.constructor(o);return this.state!==c?l(n,this.state===u?e:t,this.outcome):this.queue.push(new f(n,e,t)),n},f.prototype.callFulfilled=function(e){i.resolve(this.promise,e)},f.prototype.otherCallFulfilled=function(e){l(this.promise,this.onFulfilled,e)},f.prototype.callRejected=function(e){i.reject(this.promise,e)},f.prototype.otherCallRejected=function(e){l(this.promise,this.onRejected,e)},i.resolve=function(e,t){var n=h(d,t);if("error"===n.status)return i.reject(e,n.value);var r=n.value;if(r)v(e,r);else{e.state=u,e.outcome=t;for(var o=-1,a=e.queue.length;++o<a;)e.queue[o].callFulfilled(t)}return e},i.reject=function(e,t){e.state=a,e.outcome=t;for(var n=-1,r=e.queue.length;++n<r;)e.queue[n].callRejected(t);return e},s.resolve=function(e){return e instanceof this?e:i.resolve(new this(o),e)},s.reject=function(e){var t=new this(o);return i.reject(t,e)},s.all=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,r=!1;if(!n)return this.resolve([]);for(var a=new Array(n),u=0,c=-1,s=new this(o);++c<n;)f(e[c],c);return s;function f(e,o){t.resolve(e).then((function(e){a[o]=e,++u!==n||r||(r=!0,i.resolve(s,a))}),(function(e){r||(r=!0,i.reject(s,e))}))}},s.race=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,r=!1;if(!n)return this.resolve([]);for(var a,u=-1,c=new this(o);++u<n;)a=e[u],t.resolve(a).then((function(e){r||(r=!0,i.resolve(c,e))}),(function(e){r||(r=!0,i.reject(c,e))}));return c}},{1:1}],3:[function(e,n,r){(function(t){"use strict";"function"!=typeof t.Promise&&(t.Promise=e(2))}).call(this,void 0!==t?t:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],4:[function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(e){return}}();function i(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(o){if("TypeError"!==o.name)throw o;for(var n=new("undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder),r=0;r<e.length;r+=1)n.append(e[r]);return n.getBlob(t.type)}}"undefined"==typeof Promise&&e(3);var a=Promise;function u(e,t){t&&e.then((function(e){t(null,e)}),(function(e){t(e)}))}function c(e,t,n){"function"==typeof t&&e.then(t),"function"==typeof n&&e.catch(n)}function s(e){return"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e)),e}function f(){if(arguments.length&&"function"==typeof arguments[arguments.length-1])return arguments[arguments.length-1]}var l=void 0,d={},v=Object.prototype.toString;function h(e){return"boolean"==typeof l?a.resolve(l):function(e){return new a((function(t){var n=e.transaction("local-forage-detect-blob-support","readwrite"),r=i([""]);n.objectStore("local-forage-detect-blob-support").put(r,"key"),n.onabort=function(e){e.preventDefault(),e.stopPropagation(),t(!1)},n.oncomplete=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),n=navigator.userAgent.match(/Edge\//);t(n||!e||parseInt(e[1],10)>=43)}})).catch((function(){return!1}))}(e).then((function(e){return l=e}))}function y(e){var t=d[e.name],n={};n.promise=new a((function(e,t){n.resolve=e,n.reject=t})),t.deferredOperations.push(n),t.dbReady?t.dbReady=t.dbReady.then((function(){return n.promise})):t.dbReady=n.promise}function p(e){var t=d[e.name].deferredOperations.pop();if(t)return t.resolve(),t.promise}function b(e,t){var n=d[e.name].deferredOperations.pop();if(n)return n.reject(t),n.promise}function _(e,t){return new a((function(n,r){if(d[e.name]=d[e.name]||{forages:[],db:null,dbReady:null,deferredOperations:[]},e.db){if(!t)return n(e.db);y(e),e.db.close()}var i=[e.name];t&&i.push(e.version);var a=o.open.apply(o,i);t&&(a.onupgradeneeded=function(t){var n=a.result;try{n.createObjectStore(e.storeName),t.oldVersion<=1&&n.createObjectStore("local-forage-detect-blob-support")}catch(n){if("ConstraintError"!==n.name)throw n;console.warn('The database "'+e.name+'" has been upgraded from version '+t.oldVersion+" to version "+t.newVersion+', but the storage "'+e.storeName+'" already exists.')}}),a.onerror=function(e){e.preventDefault(),r(a.error)},a.onsuccess=function(){n(a.result),p(e)}}))}function g(e){return _(e,!1)}function m(e){return _(e,!0)}function w(e,t){if(!e.db)return!0;var n=!e.db.objectStoreNames.contains(e.storeName),r=e.version<e.db.version,o=e.version>e.db.version;if(r&&(e.version!==t&&console.warn('The database "'+e.name+"\" can't be downgraded from version "+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||n){if(n){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}function I(e){return i([function(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),o=0;o<t;o++)r[o]=e.charCodeAt(o);return n}(atob(e.data))],{type:e.type})}function S(e){return e&&e.__local_forage_encoded_blob}function E(e){var t=this,n=t._initReady().then((function(){var e=d[t._dbInfo.name];if(e&&e.dbReady)return e.dbReady}));return c(n,e,e),n}function N(e,t,n,r){void 0===r&&(r=1);try{var o=e.db.transaction(e.storeName,t);n(null,o)}catch(o){if(r>0&&(!e.db||"InvalidStateError"===o.name||"NotFoundError"===o.name))return a.resolve().then((function(){if(!e.db||"NotFoundError"===o.name&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),m(e)})).then((function(){return function(e){y(e);for(var t=d[e.name],n=t.forages,r=0;r<n.length;r++){var o=n[r];o._dbInfo.db&&(o._dbInfo.db.close(),o._dbInfo.db=null)}return e.db=null,g(e).then((function(t){return e.db=t,w(e)?m(e):t})).then((function(r){e.db=t.db=r;for(var o=0;o<n.length;o++)n[o]._dbInfo.db=r})).catch((function(t){throw b(e,t),t}))}(e).then((function(){N(e,t,n,r-1)}))})).catch(n);n(o)}}var j={_driver:"asyncStorage",_initStorage:function(e){var t=this,n={db:null};if(e)for(var r in e)n[r]=e[r];var o=d[n.name];o||(o={forages:[],db:null,dbReady:null,deferredOperations:[]},d[n.name]=o),o.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=E);var i=[];function u(){return a.resolve()}for(var c=0;c<o.forages.length;c++){var s=o.forages[c];s!==t&&i.push(s._initReady().catch(u))}var f=o.forages.slice(0);return a.all(i).then((function(){return n.db=o.db,g(n)})).then((function(e){return n.db=e,w(n,t._defaultConfig.version)?m(n):e})).then((function(e){n.db=o.db=e,t._dbInfo=n;for(var r=0;r<f.length;r++){var i=f[r];i!==t&&(i._dbInfo.db=n.db,i._dbInfo.version=n.version)}}))},_support:function(){try{if(!o)return!1;var e="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");return(!e||t)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(e){return!1}}(),iterate:function(e,t){var n=this,r=new a((function(t,r){n.ready().then((function(){N(n._dbInfo,"readonly",(function(o,i){if(o)return r(o);try{var a=i.objectStore(n._dbInfo.storeName).openCursor(),u=1;a.onsuccess=function(){var n=a.result;if(n){var r=n.value;S(r)&&(r=I(r));var o=e(r,n.key,u++);void 0!==o?t(o):n.continue()}else t()},a.onerror=function(){r(a.error)}}catch(e){r(e)}}))})).catch(r)}));return u(r,t),r},getItem:function(e,t){var n=this;e=s(e);var r=new a((function(t,r){n.ready().then((function(){N(n._dbInfo,"readonly",(function(o,i){if(o)return r(o);try{var a=i.objectStore(n._dbInfo.storeName).get(e);a.onsuccess=function(){var e=a.result;void 0===e&&(e=null),S(e)&&(e=I(e)),t(e)},a.onerror=function(){r(a.error)}}catch(e){r(e)}}))})).catch(r)}));return u(r,t),r},setItem:function(e,t,n){var r=this;e=s(e);var o=new a((function(n,o){var i;r.ready().then((function(){return i=r._dbInfo,"[object Blob]"===v.call(t)?h(i.db).then((function(e){return e?t:(n=t,new a((function(e,t){var r=new FileReader;r.onerror=t,r.onloadend=function(t){var r=btoa(t.target.result||"");e({__local_forage_encoded_blob:!0,data:r,type:n.type})},r.readAsBinaryString(n)})));var n})):t})).then((function(t){N(r._dbInfo,"readwrite",(function(i,a){if(i)return o(i);try{var u=a.objectStore(r._dbInfo.storeName);null===t&&(t=void 0);var c=u.put(t,e);a.oncomplete=function(){void 0===t&&(t=null),n(t)},a.onabort=a.onerror=function(){var e=c.error?c.error:c.transaction.error;o(e)}}catch(e){o(e)}}))})).catch(o)}));return u(o,n),o},removeItem:function(e,t){var n=this;e=s(e);var r=new a((function(t,r){n.ready().then((function(){N(n._dbInfo,"readwrite",(function(o,i){if(o)return r(o);try{var a=i.objectStore(n._dbInfo.storeName).delete(e);i.oncomplete=function(){t()},i.onerror=function(){r(a.error)},i.onabort=function(){var e=a.error?a.error:a.transaction.error;r(e)}}catch(e){r(e)}}))})).catch(r)}));return u(r,t),r},clear:function(e){var t=this,n=new a((function(e,n){t.ready().then((function(){N(t._dbInfo,"readwrite",(function(r,o){if(r)return n(r);try{var i=o.objectStore(t._dbInfo.storeName).clear();o.oncomplete=function(){e()},o.onabort=o.onerror=function(){var e=i.error?i.error:i.transaction.error;n(e)}}catch(e){n(e)}}))})).catch(n)}));return u(n,e),n},length:function(e){var t=this,n=new a((function(e,n){t.ready().then((function(){N(t._dbInfo,"readonly",(function(r,o){if(r)return n(r);try{var i=o.objectStore(t._dbInfo.storeName).count();i.onsuccess=function(){e(i.result)},i.onerror=function(){n(i.error)}}catch(e){n(e)}}))})).catch(n)}));return u(n,e),n},key:function(e,t){var n=this,r=new a((function(t,r){e<0?t(null):n.ready().then((function(){N(n._dbInfo,"readonly",(function(o,i){if(o)return r(o);try{var a=i.objectStore(n._dbInfo.storeName),u=!1,c=a.openCursor();c.onsuccess=function(){var n=c.result;n?0===e||u?t(n.key):(u=!0,n.advance(e)):t(null)},c.onerror=function(){r(c.error)}}catch(e){r(e)}}))})).catch(r)}));return u(r,t),r},keys:function(e){var t=this,n=new a((function(e,n){t.ready().then((function(){N(t._dbInfo,"readonly",(function(r,o){if(r)return n(r);try{var i=o.objectStore(t._dbInfo.storeName).openCursor(),a=[];i.onsuccess=function(){var t=i.result;t?(a.push(t.key),t.continue()):e(a)},i.onerror=function(){n(i.error)}}catch(e){n(e)}}))})).catch(n)}));return u(n,e),n},dropInstance:function(e,t){t=f.apply(this,arguments);var n=this.config();(e="function"!=typeof e&&e||{}).name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r,i=this;if(e.name){var c=e.name===n.name&&i._dbInfo.db,s=c?a.resolve(i._dbInfo.db):g(e).then((function(t){var n=d[e.name],r=n.forages;n.db=t;for(var o=0;o<r.length;o++)r[o]._dbInfo.db=t;return t}));r=e.storeName?s.then((function(t){if(t.objectStoreNames.contains(e.storeName)){var n=t.version+1;y(e);var r=d[e.name],i=r.forages;t.close();for(var u=0;u<i.length;u++){var c=i[u];c._dbInfo.db=null,c._dbInfo.version=n}return new a((function(t,r){var i=o.open(e.name,n);i.onerror=function(e){i.result.close(),r(e)},i.onupgradeneeded=function(){i.result.deleteObjectStore(e.storeName)},i.onsuccess=function(){var e=i.result;e.close(),t(e)}})).then((function(e){r.db=e;for(var t=0;t<i.length;t++){var n=i[t];n._dbInfo.db=e,p(n._dbInfo)}})).catch((function(t){throw(b(e,t)||a.resolve()).catch((function(){})),t}))}})):s.then((function(t){y(e);var n=d[e.name],r=n.forages;t.close();for(var i=0;i<r.length;i++)r[i]._dbInfo.db=null;return new a((function(t,n){var r=o.deleteDatabase(e.name);r.onerror=r.onblocked=function(e){var t=r.result;t&&t.close(),n(e)},r.onsuccess=function(){var e=r.result;e&&e.close(),t(e)}})).then((function(e){n.db=e;for(var t=0;t<r.length;t++)p(r[t]._dbInfo)})).catch((function(t){throw(b(e,t)||a.resolve()).catch((function(){})),t}))}))}else r=a.reject("Invalid arguments");return u(r,t),r}},R="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",k=/^~~local_forage_type~([^~]+)~/,O="__lfsc__:".length,A=O+"arbf".length,x=Object.prototype.toString;function D(e){var t,n,r,o,i,a=.75*e.length,u=e.length,c=0;"="===e[e.length-1]&&(a--,"="===e[e.length-2]&&a--);var s=new ArrayBuffer(a),f=new Uint8Array(s);for(t=0;t<u;t+=4)n=R.indexOf(e[t]),r=R.indexOf(e[t+1]),o=R.indexOf(e[t+2]),i=R.indexOf(e[t+3]),f[c++]=n<<2|r>>4,f[c++]=(15&r)<<4|o>>2,f[c++]=(3&o)<<6|63&i;return s}function T(e){var t,n=new Uint8Array(e),r="";for(t=0;t<n.length;t+=3)r+=R[n[t]>>2],r+=R[(3&n[t])<<4|n[t+1]>>4],r+=R[(15&n[t+1])<<2|n[t+2]>>6],r+=R[63&n[t+2]];return n.length%3==2?r=r.substring(0,r.length-1)+"=":n.length%3==1&&(r=r.substring(0,r.length-2)+"=="),r}var B={serialize:function(e,t){var n="";if(e&&(n=x.call(e)),e&&("[object ArrayBuffer]"===n||e.buffer&&"[object ArrayBuffer]"===x.call(e.buffer))){var r,o="__lfsc__:";e instanceof ArrayBuffer?(r=e,o+="arbf"):(r=e.buffer,"[object Int8Array]"===n?o+="si08":"[object Uint8Array]"===n?o+="ui08":"[object Uint8ClampedArray]"===n?o+="uic8":"[object Int16Array]"===n?o+="si16":"[object Uint16Array]"===n?o+="ur16":"[object Int32Array]"===n?o+="si32":"[object Uint32Array]"===n?o+="ui32":"[object Float32Array]"===n?o+="fl32":"[object Float64Array]"===n?o+="fl64":t(new Error("Failed to get type for BinaryArray"))),t(o+T(r))}else if("[object Blob]"===n){var i=new FileReader;i.onload=function(){var n="~~local_forage_type~"+e.type+"~"+T(this.result);t("__lfsc__:blob"+n)},i.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(n){console.error("Couldn't convert value into a JSON string: ",e),t(null,n)}},deserialize:function(e){if("__lfsc__:"!==e.substring(0,O))return JSON.parse(e);var t,n=e.substring(A),r=e.substring(O,A);if("blob"===r&&k.test(n)){var o=n.match(k);t=o[1],n=n.substring(o[0].length)}var a=D(n);switch(r){case"arbf":return a;case"blob":return i([a],{type:t});case"si08":return new Int8Array(a);case"ui08":return new Uint8Array(a);case"uic8":return new Uint8ClampedArray(a);case"si16":return new Int16Array(a);case"ur16":return new Uint16Array(a);case"si32":return new Int32Array(a);case"ui32":return new Uint32Array(a);case"fl32":return new Float32Array(a);case"fl64":return new Float64Array(a);default:throw new Error("Unkown type: "+r)}},stringToBuffer:D,bufferToString:T};function C(e,t,n,r){e.executeSql("CREATE TABLE IF NOT EXISTS "+t.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],n,r)}function L(e,t,n,r,o,i){e.executeSql(n,r,o,(function(e,a){a.code===a.SYNTAX_ERR?e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],(function(e,u){u.rows.length?i(e,a):C(e,t,(function(){e.executeSql(n,r,o,i)}),i)}),i):i(e,a)}),i)}function M(e,t,n,r){var o=this;e=s(e);var i=new a((function(i,a){o.ready().then((function(){void 0===t&&(t=null);var u=t,c=o._dbInfo;c.serializer.serialize(t,(function(t,s){s?a(s):c.db.transaction((function(n){L(n,c,"INSERT OR REPLACE INTO "+c.storeName+" (key, value) VALUES (?, ?)",[e,t],(function(){i(u)}),(function(e,t){a(t)}))}),(function(t){if(t.code===t.QUOTA_ERR){if(r>0)return void i(M.apply(o,[e,u,n,r-1]));a(t)}}))}))})).catch(a)}));return u(i,n),i}function F(e){return new a((function(t,n){e.transaction((function(r){r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],(function(n,r){for(var o=[],i=0;i<r.rows.length;i++)o.push(r.rows.item(i).name);t({db:e,storeNames:o})}),(function(e,t){n(t)}))}),(function(e){n(e)}))}))}var P={_driver:"webSQLStorage",_initStorage:function(e){var t=this,n={db:null};if(e)for(var r in e)n[r]="string"!=typeof e[r]?e[r].toString():e[r];var o=new a((function(e,r){try{n.db=openDatabase(n.name,String(n.version),n.description,n.size)}catch(e){return r(e)}n.db.transaction((function(o){C(o,n,(function(){t._dbInfo=n,e()}),(function(e,t){r(t)}))}),r)}));return n.serializer=B,o},_support:"function"==typeof openDatabase,iterate:function(e,t){var n=this,r=new a((function(t,r){n.ready().then((function(){var o=n._dbInfo;o.db.transaction((function(n){L(n,o,"SELECT * FROM "+o.storeName,[],(function(n,r){for(var i=r.rows,a=i.length,u=0;u<a;u++){var c=i.item(u),s=c.value;if(s&&(s=o.serializer.deserialize(s)),void 0!==(s=e(s,c.key,u+1)))return void t(s)}t()}),(function(e,t){r(t)}))}))})).catch(r)}));return u(r,t),r},getItem:function(e,t){var n=this;e=s(e);var r=new a((function(t,r){n.ready().then((function(){var o=n._dbInfo;o.db.transaction((function(n){L(n,o,"SELECT * FROM "+o.storeName+" WHERE key = ? LIMIT 1",[e],(function(e,n){var r=n.rows.length?n.rows.item(0).value:null;r&&(r=o.serializer.deserialize(r)),t(r)}),(function(e,t){r(t)}))}))})).catch(r)}));return u(r,t),r},setItem:function(e,t,n){return M.apply(this,[e,t,n,1])},removeItem:function(e,t){var n=this;e=s(e);var r=new a((function(t,r){n.ready().then((function(){var o=n._dbInfo;o.db.transaction((function(n){L(n,o,"DELETE FROM "+o.storeName+" WHERE key = ?",[e],(function(){t()}),(function(e,t){r(t)}))}))})).catch(r)}));return u(r,t),r},clear:function(e){var t=this,n=new a((function(e,n){t.ready().then((function(){var r=t._dbInfo;r.db.transaction((function(t){L(t,r,"DELETE FROM "+r.storeName,[],(function(){e()}),(function(e,t){n(t)}))}))})).catch(n)}));return u(n,e),n},length:function(e){var t=this,n=new a((function(e,n){t.ready().then((function(){var r=t._dbInfo;r.db.transaction((function(t){L(t,r,"SELECT COUNT(key) as c FROM "+r.storeName,[],(function(t,n){var r=n.rows.item(0).c;e(r)}),(function(e,t){n(t)}))}))})).catch(n)}));return u(n,e),n},key:function(e,t){var n=this,r=new a((function(t,r){n.ready().then((function(){var o=n._dbInfo;o.db.transaction((function(n){L(n,o,"SELECT key FROM "+o.storeName+" WHERE id = ? LIMIT 1",[e+1],(function(e,n){var r=n.rows.length?n.rows.item(0).key:null;t(r)}),(function(e,t){r(t)}))}))})).catch(r)}));return u(r,t),r},keys:function(e){var t=this,n=new a((function(e,n){t.ready().then((function(){var r=t._dbInfo;r.db.transaction((function(t){L(t,r,"SELECT key FROM "+r.storeName,[],(function(t,n){for(var r=[],o=0;o<n.rows.length;o++)r.push(n.rows.item(o).key);e(r)}),(function(e,t){n(t)}))}))})).catch(n)}));return u(n,e),n},dropInstance:function(e,t){t=f.apply(this,arguments);var n=this.config();(e="function"!=typeof e&&e||{}).name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r,o=this;return u(r=e.name?new a((function(t){var r;r=e.name===n.name?o._dbInfo.db:openDatabase(e.name,"","",0),e.storeName?t({db:r,storeNames:[e.storeName]}):t(F(r))})).then((function(e){return new a((function(t,n){e.db.transaction((function(r){function o(e){return new a((function(t,n){r.executeSql("DROP TABLE IF EXISTS "+e,[],(function(){t()}),(function(e,t){n(t)}))}))}for(var i=[],u=0,c=e.storeNames.length;u<c;u++)i.push(o(e.storeNames[u]));a.all(i).then((function(){t()})).catch((function(e){n(e)}))}),(function(e){n(e)}))}))})):a.reject("Invalid arguments"),t),r}};function U(e,t){var n=e.name+"/";return e.storeName!==t.storeName&&(n+=e.storeName+"/"),n}function z(){return!function(){try{return localStorage.setItem("_localforage_support_test",!0),localStorage.removeItem("_localforage_support_test"),!1}catch(e){return!0}}()||localStorage.length>0}var q={_driver:"localStorageWrapper",_initStorage:function(e){var t={};if(e)for(var n in e)t[n]=e[n];return t.keyPrefix=U(e,this._defaultConfig),z()?(this._dbInfo=t,t.serializer=B,a.resolve()):a.reject()},_support:function(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&!!localStorage.setItem}catch(e){return!1}}(),iterate:function(e,t){var n=this,r=n.ready().then((function(){for(var t=n._dbInfo,r=t.keyPrefix,o=r.length,i=localStorage.length,a=1,u=0;u<i;u++){var c=localStorage.key(u);if(0===c.indexOf(r)){var s=localStorage.getItem(c);if(s&&(s=t.serializer.deserialize(s)),void 0!==(s=e(s,c.substring(o),a++)))return s}}}));return u(r,t),r},getItem:function(e,t){var n=this;e=s(e);var r=n.ready().then((function(){var t=n._dbInfo,r=localStorage.getItem(t.keyPrefix+e);return r&&(r=t.serializer.deserialize(r)),r}));return u(r,t),r},setItem:function(e,t,n){var r=this;e=s(e);var o=r.ready().then((function(){void 0===t&&(t=null);var n=t;return new a((function(o,i){var a=r._dbInfo;a.serializer.serialize(t,(function(t,r){if(r)i(r);else try{localStorage.setItem(a.keyPrefix+e,t),o(n)}catch(e){"QuotaExceededError"!==e.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==e.name||i(e),i(e)}}))}))}));return u(o,n),o},removeItem:function(e,t){var n=this;e=s(e);var r=n.ready().then((function(){var t=n._dbInfo;localStorage.removeItem(t.keyPrefix+e)}));return u(r,t),r},clear:function(e){var t=this,n=t.ready().then((function(){for(var e=t._dbInfo.keyPrefix,n=localStorage.length-1;n>=0;n--){var r=localStorage.key(n);0===r.indexOf(e)&&localStorage.removeItem(r)}}));return u(n,e),n},length:function(e){var t=this.keys().then((function(e){return e.length}));return u(t,e),t},key:function(e,t){var n=this,r=n.ready().then((function(){var t,r=n._dbInfo;try{t=localStorage.key(e)}catch(e){t=null}return t&&(t=t.substring(r.keyPrefix.length)),t}));return u(r,t),r},keys:function(e){var t=this,n=t.ready().then((function(){for(var e=t._dbInfo,n=localStorage.length,r=[],o=0;o<n;o++){var i=localStorage.key(o);0===i.indexOf(e.keyPrefix)&&r.push(i.substring(e.keyPrefix.length))}return r}));return u(n,e),n},dropInstance:function(e,t){if(t=f.apply(this,arguments),!(e="function"!=typeof e&&e||{}).name){var n=this.config();e.name=e.name||n.name,e.storeName=e.storeName||n.storeName}var r,o=this;return u(r=e.name?new a((function(t){e.storeName?t(U(e,o._defaultConfig)):t(e.name+"/")})).then((function(e){for(var t=localStorage.length-1;t>=0;t--){var n=localStorage.key(t);0===n.indexOf(e)&&localStorage.removeItem(n)}})):a.reject("Invalid arguments"),t),r}},X=function(e,t){for(var n,r,o=e.length,i=0;i<o;){if((n=e[i])===(r=t)||"number"==typeof n&&"number"==typeof r&&isNaN(n)&&isNaN(r))return!0;i++}return!1},W=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},K={},G={},H={INDEXEDDB:j,WEBSQL:P,LOCALSTORAGE:q},Q=[H.INDEXEDDB._driver,H.WEBSQL._driver,H.LOCALSTORAGE._driver],V=["dropInstance"],J=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(V),Y={description:"",driver:Q.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Z(e,t){e[t]=function(){var n=arguments;return e.ready().then((function(){return e[t].apply(e,n)}))}}function $(){for(var e=1;e<arguments.length;e++){var t=arguments[e];if(t)for(var n in t)t.hasOwnProperty(n)&&(W(t[n])?arguments[0][n]=t[n].slice():arguments[0][n]=t[n])}return arguments[0]}var ee=new(function(){function e(t){for(var n in function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),H)if(H.hasOwnProperty(n)){var r=H[n],o=r._driver;this[n]=o,K[o]||this.defineDriver(r)}this._defaultConfig=$({},Y),this._config=$({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch((function(){}))}return e.prototype.config=function(e){if("object"===(void 0===e?"undefined":r(e))){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var t in e){if("storeName"===t&&(e[t]=e[t].replace(/\W/g,"_")),"version"===t&&"number"!=typeof e[t])return new Error("Database version must be a number.");this._config[t]=e[t]}return!("driver"in e)||!e.driver||this.setDriver(this._config.driver)}return"string"==typeof e?this._config[e]:this._config},e.prototype.defineDriver=function(e,t,n){var r=new a((function(t,n){try{var r=e._driver,o=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!e._driver)return void n(o);for(var i=J.concat("_initStorage"),c=0,s=i.length;c<s;c++){var f=i[c];if((!X(V,f)||e[f])&&"function"!=typeof e[f])return void n(o)}!function(){for(var t=function(e){return function(){var t=new Error("Method "+e+" is not implemented by the current driver"),n=a.reject(t);return u(n,arguments[arguments.length-1]),n}},n=0,r=V.length;n<r;n++){var o=V[n];e[o]||(e[o]=t(o))}}();var l=function(n){K[r]&&console.info("Redefining LocalForage driver: "+r),K[r]=e,G[r]=n,t()};"_support"in e?e._support&&"function"==typeof e._support?e._support().then(l,n):l(!!e._support):l(!0)}catch(e){n(e)}}));return c(r,t,n),r},e.prototype.driver=function(){return this._driver||null},e.prototype.getDriver=function(e,t,n){var r=K[e]?a.resolve(K[e]):a.reject(new Error("Driver not found."));return c(r,t,n),r},e.prototype.getSerializer=function(e){var t=a.resolve(B);return c(t,e),t},e.prototype.ready=function(e){var t=this,n=t._driverSet.then((function(){return null===t._ready&&(t._ready=t._initDriver()),t._ready}));return c(n,e,e),n},e.prototype.setDriver=function(e,t,n){var r=this;W(e)||(e=[e]);var o=this._getSupportedDrivers(e);function i(){r._config.driver=r.driver()}function u(e){return r._extend(e),i(),r._ready=r._initStorage(r._config),r._ready}var s=null!==this._driverSet?this._driverSet.catch((function(){return a.resolve()})):a.resolve();return this._driverSet=s.then((function(){var e=o[0];return r._dbInfo=null,r._ready=null,r.getDriver(e).then((function(e){r._driver=e._driver,i(),r._wrapLibraryMethodsWithReady(),r._initDriver=function(e){return function(){var t=0;return function n(){for(;t<e.length;){var o=e[t];return t++,r._dbInfo=null,r._ready=null,r.getDriver(o).then(u).catch(n)}i();var c=new Error("No available storage method found.");return r._driverSet=a.reject(c),r._driverSet}()}}(o)}))})).catch((function(){i();var e=new Error("No available storage method found.");return r._driverSet=a.reject(e),r._driverSet})),c(this._driverSet,t,n),this._driverSet},e.prototype.supports=function(e){return!!G[e]},e.prototype._extend=function(e){$(this,e)},e.prototype._getSupportedDrivers=function(e){for(var t=[],n=0,r=e.length;n<r;n++){var o=e[n];this.supports(o)&&t.push(o)}return t},e.prototype._wrapLibraryMethodsWithReady=function(){for(var e=0,t=J.length;e<t;e++)Z(this,J[e])},e.prototype.createInstance=function(t){return new e(t)},e}());t.exports=ee},{3:3}]},{},[4])(4)}).call(this,n(6))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}]);