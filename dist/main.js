!function(n){var e=window.webpackHotUpdate;window.webpackHotUpdate=function(n,t){!function(n,e){if(!y[n]||!w[n])return;for(var t in w[n]=!1,e)Object.prototype.hasOwnProperty.call(e,t)&&(m[t]=e[t]);0==--g&&0===v&&O()}(n,t),e&&e(n,t)};var t,r=!0,o="07801e83eeab26e3159e",i=1e4,a={},s=[],d=[];function c(n){var e=j[n];if(!e)return I;var r=function(r){return e.hot.active?(j[r]?-1===j[r].parents.indexOf(n)&&j[r].parents.push(n):(s=[n],t=r),-1===e.children.indexOf(r)&&e.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+n),s=[]),I(r)},o=function(n){return{configurable:!0,enumerable:!0,get:function(){return I[n]},set:function(e){I[n]=e}}};for(var i in I)Object.prototype.hasOwnProperty.call(I,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(n){return"ready"===f&&u("prepare"),v++,I.e(n).then(e,function(n){throw e(),n});function e(){v--,"prepare"===f&&(x[n]||z(n),0===v&&0===g&&O())}},r.t=function(n,e){return 1&e&&(n=r(n)),I.t(n,-2&e)},r}function l(n){var e={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:t!==n,active:!0,accept:function(n,t){if(void 0===n)e._selfAccepted=!0;else if("function"==typeof n)e._selfAccepted=n;else if("object"==typeof n)for(var r=0;r<n.length;r++)e._acceptedDependencies[n[r]]=t||function(){};else e._acceptedDependencies[n]=t||function(){}},decline:function(n){if(void 0===n)e._selfDeclined=!0;else if("object"==typeof n)for(var t=0;t<n.length;t++)e._declinedDependencies[n[t]]=!0;else e._declinedDependencies[n]=!0},dispose:function(n){e._disposeHandlers.push(n)},addDisposeHandler:function(n){e._disposeHandlers.push(n)},removeDisposeHandler:function(n){var t=e._disposeHandlers.indexOf(n);t>=0&&e._disposeHandlers.splice(t,1)},check:k,apply:E,status:function(n){if(!n)return f;p.push(n)},addStatusHandler:function(n){p.push(n)},removeStatusHandler:function(n){var e=p.indexOf(n);e>=0&&p.splice(e,1)},data:a[n]};return t=void 0,e}var p=[],f="idle";function u(n){f=n;for(var e=0;e<p.length;e++)p[e].call(null,n)}var h,m,b,g=0,v=0,x={},w={},y={};function _(n){return+n+""===n?+n:n}function k(n){if("idle"!==f)throw new Error("check() is only allowed in idle status");return r=n,u("check"),(e=i,e=e||1e4,new Promise(function(n,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,i=I.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=e,r.send(null)}catch(n){return t(n)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)n();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+i+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(n){return void t(n)}n(e)}}})).then(function(n){if(!n)return u("idle"),null;w={},x={},y=n.c,b=n.h,u("prepare");var e=new Promise(function(n,e){h={resolve:n,reject:e}});m={};return z(0),"prepare"===f&&0===v&&0===g&&O(),e});var e}function z(n){y[n]?(w[n]=!0,g++,function(n){var e=document.createElement("script");e.charset="utf-8",e.src=I.p+""+n+"."+o+".hot-update.js",document.head.appendChild(e)}(n)):x[n]=!0}function O(){u("ready");var n=h;if(h=null,n)if(r)Promise.resolve().then(function(){return E(r)}).then(function(e){n.resolve(e)},function(e){n.reject(e)});else{var e=[];for(var t in m)Object.prototype.hasOwnProperty.call(m,t)&&e.push(_(t));n.resolve(e)}}function E(e){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var t,r,i,d,c;function l(n){for(var e=[n],t={},r=e.map(function(n){return{chain:[n],id:n}});r.length>0;){var o=r.pop(),i=o.id,a=o.chain;if((d=j[i])&&!d.hot._selfAccepted){if(d.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(d.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var s=0;s<d.parents.length;s++){var c=d.parents[s],l=j[c];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([c]),moduleId:i,parentId:c};-1===e.indexOf(c)&&(l.hot._acceptedDependencies[i]?(t[c]||(t[c]=[]),p(t[c],[i])):(delete t[c],e.push(c),r.push({chain:a.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:n,outdatedModules:e,outdatedDependencies:t}}function p(n,e){for(var t=0;t<e.length;t++){var r=e[t];-1===n.indexOf(r)&&n.push(r)}}e=e||{};var h={},g=[],v={},x=function(){console.warn("[HMR] unexpected require("+k.moduleId+") to disposed module")};for(var w in m)if(Object.prototype.hasOwnProperty.call(m,w)){var k;c=_(w);var z=!1,O=!1,E=!1,S="";switch((k=m[w]?l(c):{type:"disposed",moduleId:w}).chain&&(S="\nUpdate propagation: "+k.chain.join(" -> ")),k.type){case"self-declined":e.onDeclined&&e.onDeclined(k),e.ignoreDeclined||(z=new Error("Aborted because of self decline: "+k.moduleId+S));break;case"declined":e.onDeclined&&e.onDeclined(k),e.ignoreDeclined||(z=new Error("Aborted because of declined dependency: "+k.moduleId+" in "+k.parentId+S));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(k),e.ignoreUnaccepted||(z=new Error("Aborted because "+c+" is not accepted"+S));break;case"accepted":e.onAccepted&&e.onAccepted(k),O=!0;break;case"disposed":e.onDisposed&&e.onDisposed(k),E=!0;break;default:throw new Error("Unexception type "+k.type)}if(z)return u("abort"),Promise.reject(z);if(O)for(c in v[c]=m[c],p(g,k.outdatedModules),k.outdatedDependencies)Object.prototype.hasOwnProperty.call(k.outdatedDependencies,c)&&(h[c]||(h[c]=[]),p(h[c],k.outdatedDependencies[c]));E&&(p(g,[k.moduleId]),v[c]=x)}var A,C=[];for(r=0;r<g.length;r++)c=g[r],j[c]&&j[c].hot._selfAccepted&&v[c]!==x&&C.push({module:c,errorHandler:j[c].hot._selfAccepted});u("dispose"),Object.keys(y).forEach(function(n){!1===y[n]&&function(n){delete installedChunks[n]}(n)});for(var R,D,U=g.slice();U.length>0;)if(c=U.pop(),d=j[c]){var q={},M=d.hot._disposeHandlers;for(i=0;i<M.length;i++)(t=M[i])(q);for(a[c]=q,d.hot.active=!1,delete j[c],delete h[c],i=0;i<d.children.length;i++){var P=j[d.children[i]];P&&((A=P.parents.indexOf(c))>=0&&P.parents.splice(A,1))}}for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(d=j[c]))for(D=h[c],i=0;i<D.length;i++)R=D[i],(A=d.children.indexOf(R))>=0&&d.children.splice(A,1);for(c in u("apply"),o=b,v)Object.prototype.hasOwnProperty.call(v,c)&&(n[c]=v[c]);var L=null;for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(d=j[c])){D=h[c];var H=[];for(r=0;r<D.length;r++)if(R=D[r],t=d.hot._acceptedDependencies[R]){if(-1!==H.indexOf(t))continue;H.push(t)}for(r=0;r<H.length;r++){t=H[r];try{t(D)}catch(n){e.onErrored&&e.onErrored({type:"accept-errored",moduleId:c,dependencyId:D[r],error:n}),e.ignoreErrored||L||(L=n)}}}for(r=0;r<C.length;r++){var T=C[r];c=T.module,s=[c];try{I(c)}catch(n){if("function"==typeof T.errorHandler)try{T.errorHandler(n)}catch(t){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:t,originalError:n}),e.ignoreErrored||L||(L=t),L||(L=n)}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:c,error:n}),e.ignoreErrored||L||(L=n)}}return L?(u("fail"),Promise.reject(L)):(u("idle"),new Promise(function(n){n(g)}))}var j={};function I(e){if(j[e])return j[e].exports;var t=j[e]={i:e,l:!1,exports:{},hot:l(e),parents:(d=s,s=[],d),children:[]};return n[e].call(t.exports,t,t.exports,c(e)),t.l=!0,t.exports}I.m=n,I.c=j,I.d=function(n,e,t){I.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},I.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},I.t=function(n,e){if(1&e&&(n=I(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(I.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)I.d(t,r,function(e){return n[e]}.bind(null,r));return t},I.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return I.d(e,"a",e),e},I.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},I.p="",I.h=function(){return o},c(5)(I.s=5)}([function(n,e,t){(e=n.exports=t(2)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Poppins);",""]),e.push([n.i,"@import url(https://fonts.googleapis.com/css?family=Questrial);",""]),e.push([n.i,'/* http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0-modified | 20110126\r\n   License: none (public domain)\r\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* make sure to set some focus styles for accessibility */\n:focus {\n  outline: 0; }\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol,\nul {\n  list-style: none; }\n\nblockquote,\nq {\n  quotes: none; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-decoration,\ninput[type="search"]::-webkit-search-results-button,\ninput[type="search"]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n\ninput[type="search"] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box; }\n\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical; }\n\n/**\r\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\r\n */\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%; }\n\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\r\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\r\n * Known issue: no IE 6 support.\r\n */\n[hidden] {\n  display: none; }\n\n/**\r\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\r\n *    `em` units.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\nhtml {\n  font-size: 100%;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\r\n * Address `outline` inconsistency between Chrome and other browsers.\r\n */\na:focus {\n  outline: thin dotted; }\n\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\na:active,\na:hover {\n  outline: 0; }\n\n/**\r\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\r\n * 2. Improve image quality when scaled in IE 7.\r\n */\nimg {\n  border: 0;\n  /* 1 */\n  -ms-interpolation-mode: bicubic;\n  /* 2 */ }\n\n/**\r\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\r\n */\nfigure {\n  margin: 0; }\n\n/**\r\n * Correct margin displayed oddly in IE 6/7.\r\n */\nform {\n  margin: 0; }\n\n/**\r\n * Define consistent border, margin, and padding.\r\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\r\n * 1. Correct color not being inherited in IE 6/7/8/9.\r\n * 2. Correct text not wrapping in Firefox 3.\r\n * 3. Correct alignment displayed oddly in IE 6/7.\r\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  white-space: normal;\n  /* 2 */\n  *margin-left: -7px;\n  /* 3 */ }\n\n/**\r\n * 1. Correct font size not being inherited in all browsers.\r\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\r\n *    and Chrome.\r\n * 3. Improve appearance and consistency in all browsers.\r\n */\nbutton,\ninput,\nselect,\ntextarea {\n  font-size: 100%;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  vertical-align: baseline;\n  /* 3 */\n  *vertical-align: middle;\n  /* 3 */ }\n\n/**\r\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\nbutton,\ninput {\n  line-height: normal; }\n\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\r\n * Correct `select` style inheritance in Firefox 4+ and Opera.\r\n */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\r\n *    Known issue: inner spacing remains in IE 6.\r\n */\nbutton,\nhtml input[type="button"],\ninput[type="reset"],\ninput[type="submit"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n  *overflow: visible;\n  /* 4 */ }\n\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\r\n * 1. Address box sizing set to content-box in IE 8/9.\r\n * 2. Remove excess padding in IE 8/9.\r\n * 3. Remove excess padding in IE 7.\r\n *    Known issue: excess padding remains in IE 6.\r\n */\ninput[type="checkbox"],\ninput[type="radio"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n  *height: 13px;\n  /* 3 */\n  *width: 13px;\n  /* 3 */ }\n\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\ninput[type="search"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box; }\n\n/**\r\n * Remove inner padding and search cancel button in Safari 5 and Chrome\r\n * on OS X.\r\n */\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\r\n * Remove inner padding and border in Firefox 3+.\r\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\r\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\r\n * 2. Improve readability and alignment in all browsers.\r\n */\ntextarea {\n  overflow: auto;\n  /* 1 */\n  vertical-align: top;\n  /* 2 */ }\n\n/**\r\n * Remove most spacing between table cells.\r\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n  color: #222; }\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none; }\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none; }\n\nimg {\n  vertical-align: middle; }\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0; }\n\ntextarea {\n  resize: vertical; }\n\n.chromeframe {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0; }\n\n/*--font---------------------------------------------------------------*/\n/* 10px*/\n/*--color---------------------------------------------------------------*/\n/* Color per component\r\n---------------------------------------------------------------*/\n/* layout\r\n---------------------------------------------------------------*/\n/* $mq\r\n---------------------------------------------------------------*/\n.inside-container {\n  padding: 0 40px;\n  margin: auto; }\n\n.display-none {\n  display: none; }\n\n.margin-auto {\n  margin: auto; }\n\nhtml {\n  font-size: 62.5%; }\n\nbody {\n  width: 100vw;\n  background: #3f3244;\n  color: #fff;\n  max-width: 100vw;\n  overflow-x: hidden;\n  align-items: center;\n  font-family: "Poppins", sans-serif, sans-serif; }\n\na:hover,\na {\n  outline: none; }\n\na {\n  text-decoration: none; }\n\n* {\n  box-sizing: border-box; }\n\np {\n  font-size: 1.4rem;\n  font-family: "Open Sans";\n  margin: 0 0 10px 0;\n  color: #2f2235; }\n\nb {\n  font-size: 1.4rem;\n  font-family: "Open Sans";\n  font-weight: 700; }\n\na {\n  font-size: 1.4rem;\n  font-family: "Open Sans";\n  color: #2f2235;\n  text-decoration: none; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: "Montserrat";\n  font-weight: 700;\n  margin: 0 0 20px 0;\n  color: #2f2235; }\n\nh1 {\n  font-size: 3.2rem;\n  line-height: 38px; }\n\nh2 {\n  font-size: 2.6rem;\n  line-height: 32px; }\n\nh3 {\n  font-size: 2.4rem;\n  line-height: 30px; }\n\nh4 {\n  font-size: 2rem;\n  line-height: 26px; }\n\nh5 {\n  font-size: 1.8rem;\n  line-height: 24px; }\n\nh6 {\n  font-size: 1.6rem;\n  line-height: 22px; }\n\n.subtitle {\n  font-size: 3rem; }\n\n.title {\n  font-size: 5rem;\n  font-weight: 1000; }\n\n.bold {\n  font-weight: 1000;\n  font-family: "Montserrat"; }\n\n.main-portfolio__work {\n  margin: 2vh 0px;\n  padding: 4vh 0px !important; }\n\n.main-portfolio__team {\n  margin: 2vh 0px;\n  padding: 4vh 0px !important;\n  display: block; }\n\n.repo-cards {\n  columns: 2; }\n  .repo-cards__card {\n    width: 85%;\n    padding: 2.5vh 5%;\n    display: inline-block;\n    border-radius: 5px;\n    color: #fff;\n    border: 1px solid rgba(0, 0, 0, 0.08);\n    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);\n    transition: 0.4s ease-in-out;\n    margin: 2vh 0px;\n    transform: scale(1);\n    background: #141414; }\n    .repo-cards__card:hover {\n      cursor: pointer;\n      border: 1px solid rgba(0, 0, 0, 0);\n      box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.06);\n      transform: scale(1.03); }\n    .repo-cards__card__title {\n      font-size: 2.4rem;\n      font-weight: 700;\n      margin: 1vh 0px;\n      padding: 0px 1px;\n      word-wrap: break-word; }\n    .repo-cards__card__about {\n      font-size: 1.8rem;\n      font-family: "Questrial", sans-serif;\n      margin: 2vh 0px;\n      font-weight: 700;\n      word-wrap: break-word; }\n      .repo-cards__card__about span {\n        display: block; }\n    .repo-cards__card__bottom {\n      margin: 1vh 0px;\n      font-size: 1.4rem;\n      word-wrap: break-word; }\n      .repo-cards__card__bottom span {\n        margin-right: 20px;\n        font-weight: 700; }\n        .repo-cards__card__bottom span i {\n          font-size: 1.5rem; }\n          .repo-cards__card__bottom span i.fa-code {\n            display: inline-block; }\n\n.main-portfolio__blog {\n  margin: 2vh 0px;\n  padding: 2vh 0px !important; }\n\n.blogs-cards {\n  columns: 2; }\n  .blogs-cards__card {\n    width: 85%;\n    display: inline-block;\n    border-radius: 5px;\n    color: #fff;\n    border: 1px solid rgba(0, 0, 0, 0.04);\n    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);\n    transition: 0.4s ease-in-out;\n    transform: scale(1);\n    padding: 0px;\n    margin: 2vh 0px;\n    background: #141414; }\n    .blogs-cards__card__img {\n      width: 100%;\n      border-radius: 5px 5px 0px 0px; }\n    .blogs-cards__card__content {\n      padding: 2.5vh 5%; }\n      .blogs-cards__card__content__title {\n        font-size: 2.4rem;\n        font-weight: 700;\n        margin: 1vh 0px;\n        padding: 0px 1px;\n        word-wrap: break-word; }\n      .blogs-cards__card__content__about {\n        font-size: 1.8rem;\n        font-family: "Questrial", sans-serif;\n        margin: 2vh 0px;\n        font-weight: 700;\n        word-wrap: break-word; }\n    .blogs-cards__card:hover {\n      cursor: pointer;\n      border: 1px solid rgba(0, 0, 0, 0);\n      box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.06);\n      transform: scale(1.03); }\n\n.main-portfolio__footer {\n  width: 100%;\n  padding: 8vh 0px;\n  text-align: center;\n  font-weight: 700;\n  font-size: 1.2rem; }\n  .main-portfolio__footer a {\n    color: #fff;\n    font-family: "Questrial", sans-serif;\n    font-weight: 700;\n    font-size: 1.8rem; }\n    .main-portfolio__footer a:hover {\n      transition: color 0.5s ease;\n      color: #a9aca9 !important; }\n\n.main-portfolio {\n  padding: 4vh 3vw;\n  height: auto;\n  display: inline-block;\n  padding-left: 33vw; }\n  .main-portfolio h1 {\n    font-size: 5rem;\n    color: #fff;\n    font-weight: 700;\n    font-family: "Questrial", sans-serif; }\n\n@media (max-width: 800px) {\n  .main-portfolio {\n    width: 100vw;\n    padding: 4vh 5vw;\n    height: auto;\n    display: inline-block;\n    padding-left: 5vw; }\n    .main-portfolio__work {\n      margin: 0px; }\n    .main-portfolio__blog {\n      margin: 0px; }\n  .repo-cards {\n    columns: 1; }\n    .repo-cards__card {\n      width: 88%; }\n  .blogs-cards {\n    columns: 1; }\n    .blogs-cards__card {\n      width: 88%; } }\n\n.profile {\n  width: 25vw;\n  padding: 4vh 2vw;\n  height: 100vh;\n  display: flex;\n  overflow: hidden;\n  flex-direction: column;\n  justify-content: center;\n  text-align: left;\n  background: linear-gradient(90deg, rgba(10, 10, 10, 0.6), #3f3244), url("https://images.unsplash.com/photo-1553748024-d1b27fb3f960?w=500&h=1000&q=80&fit=crop") center center;\n  background-size: cover !important;\n  background-repeat: no-repeat;\n  position: fixed;\n  color: #fff !important; }\n  .profile__img {\n    min-height: 15vw;\n    min-width: 15vw;\n    max-height: 180px;\n    max-width: 180px;\n    padding: 20px;\n    border-radius: 15px;\n    background-size: cover !important;\n    background-image: url(https://avatars1.githubusercontent.com/u/46107517?v=4); }\n  .profile div {\n    font-weight: 700;\n    margin: 1.5vh 0px; }\n  .profile__username {\n    font-size: 1.8rem;\n    font-weight: 700; }\n    .profile__username span {\n      display: block;\n      font-size: 2.4rem; }\n    .profile__username a {\n      display: inline-block; }\n      .profile__username a:hover {\n        transition: color 0.5s ease;\n        color: #a9aca9 !important; }\n  .profile__userbio {\n    display: block;\n    font-size: 2.6rem;\n    font-family: "Questrial", sans-serif;\n    width: 100%; }\n  .profile__about {\n    font-size: 1.8rem;\n    font-family: "Questrial", sans-serif; }\n    .profile__about span {\n      margin: 1vh 0px;\n      display: block;\n      color: #bfc3ba; }\n      .profile__about span a {\n        font-size: 1.8rem;\n        color: #bfc3ba; }\n        .profile__about span a:hover {\n          transition: color 0.5s ease;\n          color: #fff; }\n      .profile__about span i {\n        font-size: 1.6rem; }\n      .profile__about span:hover {\n        transition: color 0.5s ease;\n        color: #fff; }\n  .profile__about a,\n  .profile__username a {\n    color: #fff;\n    font-weight: 700; }\n\n@media (max-width: 800px) {\n  .profile {\n    background: linear-gradient(180deg, rgba(10, 10, 10, 0.6), #3f3244), url("https://images.unsplash.com/photo-1553748024-d1b27fb3f960?w=500&h=1000&q=80&fit=crop") center center; } }\n\n@media (max-width: 800px) {\n  .profile {\n    width: 100vw;\n    padding: 4vh 5vw;\n    height: auto;\n    text-align: center;\n    position: relative; }\n    .profile__img {\n      padding: 60px;\n      margin: 0px auto !important; } }\n\n.blog_arrow {\n  position: absolute;\n  color: #fff;\n  font-size: 2.6rem;\n  margin-left: 5vw;\n  margin-top: 4vh; }\n\n.blog_footer {\n  width: 100%;\n  padding: 8vh 0px;\n  text-align: center;\n  font-weight: 700;\n  font-size: 1.2rem; }\n  .blog_footer a {\n    color: #fff;\n    font-family: "Questrial", sans-serif;\n    font-weight: 700;\n    font-size: 1.8rem; }\n    .blog_footer a:hover {\n      transition: color 0.5s ease;\n      color: #a9aca9 !important; }\n\n.blog_post__subtitle {\n  color: #bfc3ba; }\n\n.blog_post p {\n  font-size: 1.6rem;\n  line-height: 25px;\n  word-spacing: 1.2px;\n  margin: 5vh 0px;\n  text-align: justify;\n  color: #bfc3ba; }\n  .blog_post p span {\n    padding: 2px 4px;\n    background: #fff;\n    color: #3f3244 !important; }\n  .blog_post p a {\n    color: #fff;\n    font-family: "Questrial", sans-serif;\n    font-weight: 700;\n    font-size: 1.6rem; }\n    .blog_post p a:hover {\n      transition: color 0.5s ease;\n      color: #a9aca9 !important; }\n\n.blog_post p,\n.blog_post img {\n  width: 100%;\n  margin: 2vh 0px;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.08); }\n\n.blog_posts {\n  padding: 1vh 0px;\n  font-family: "Questrial", sans-serif;\n  width: 60vw;\n  margin: 0px 20vw;\n  text-align: left;\n  margin-top: 3vh;\n  z-index: 1; }\n  .blog_posts__title {\n    font-size: 5rem;\n    color: #fff;\n    font-weight: 700;\n    font-family: "Questrial", sans-serif; }\n  .blog_posts__subtitle {\n    color: #bfc3ba; }\n\n@media (max-width: 800px) {\n  .blog_posts {\n    width: 90vw;\n    margin: 0px 5vw;\n    text-align: left;\n    margin-top: 0vh;\n    z-index: 1; } }\n\n.blog_profile {\n  width: 60vw;\n  margin: 0px 20vw;\n  margin-top: 10vh;\n  text-align: left;\n  z-index: 1;\n  display: flex;\n  align-items: center; }\n  .blog_profile__img {\n    border-radius: 50%;\n    width: 90px;\n    height: 90px;\n    background-size: cover !important;\n    background-repeat: no-repeat;\n    background: url("https://avatars1.githubusercontent.com/u/46107517?v=4") center center; }\n  .blog_profile__username {\n    padding-left: 2vw;\n    font-size: 1.8rem;\n    color: #fff;\n    font-family: "Poppins", sans-serif;\n    font-weight: 700; }\n    .blog_profile__username span,\n    .blog_profile__username a {\n      font-size: 2rem;\n      font-family: "Questrial", sans-serif !important;\n      display: block; }\n    .blog_profile__username a {\n      color: #fff; }\n      .blog_profile__username a:hover {\n        transition: color 0.5s ease;\n        color: #a9aca9 !important; }\n    .blog_profile__username b {\n      font-size: 1.2rem;\n      font-family: "Poppins", sans-serif;\n      font-weight: 700; }\n\n.blog_background {\n  width: 100vw;\n  height: 55vh;\n  background: linear-gradient(180deg, rgba(10, 10, 10, 0.1), #3f3244), url("https://images.unsplash.com/photo-1553748024-d1b27fb3f960?w=500&h=1000&q=80&fit=crop");\n  background-size: cover !important;\n  background-repeat: no-repeat;\n  position: absolute;\n  z-index: -1;\n  margin-top: -10vh; }\n\n@media (max-width: 800px) {\n  .blog_profile {\n    width: 90vw;\n    margin: 0px 5vw;\n    margin-top: 10vh;\n    text-align: left;\n    z-index: 1; }\n  .blog_arrow {\n    position: relative;\n    color: #fff;\n    font-size: 2.6rem;\n    margin-left: 5vw;\n    top: 5vh; }\n  .blog img {\n    margin: 1vh 0px !important; }\n  .blog p {\n    margin: 2vh 0px; } }\n\n.loading {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  background: #3f3244;\n  z-index: 999;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.spinner {\n  animation: rotate 0.5s infinite linear;\n  width: 50px;\n  height: 50px;\n  border: 2px solid #3f3244;\n  border-bottom: 2px solid #fff;\n  border-radius: 50%;\n  margin: 0; }\n\n@keyframes rotate {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n::-webkit-scrollbar {\n  width: 5px;\n  height: 5px; }\n\n::-webkit-scrollbar-track {\n  background: #3f3244; }\n\n::-webkit-scrollbar-thumb {\n  background: #fff; }\n\n::selection {\n  color: #3f3244;\n  background: #fff; }\n',""])},function(n,e,t){var r=t(0);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},i=t(3)(r,o);r.locals&&(n.exports=r.locals),n.hot.accept(0,function(){var e=t(0);if("string"==typeof e&&(e=[[n.i,e,""]]),!function(n,e){var t,r=0;for(t in n){if(!e||n[t]!==e[t])return!1;r++}for(t in e)r--;return 0===r}(r.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(e)}),n.hot.dispose(function(){i()})},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(d," */")),i=r.sources.map(function(n){return"/*# sourceURL=".concat(r.sourceRoot).concat(n," */")});return[t].concat(i).concat([o]).join("\n")}var a,s,d;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<n.length;a++){var s=n[a];null!=s[0]&&r[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="(".concat(s[2],") and (").concat(t,")")),e.push(s))}},e}},function(n,e,t){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var r=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}}(),d=null,c=0,l=[],p=t(4);function f(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(v(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(v(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function u(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function h(n,e){var t=s(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),l.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(n.insertAt.before,t);t.insertBefore(e,o)}}function m(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=l.indexOf(n);e>=0&&l.splice(e,1)}function b(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return t.nc}();r&&(n.attrs.nonce=r)}return g(e,n.attrs),h(n,e),e}function g(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function v(n,e){var t,r,o,i;if(e.transform&&n.css){if(!(i="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=i}if(e.singleton){var a=c++;t=d||(d=b(e)),r=y.bind(null,t,a,!1),o=y.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",g(e,n.attrs),h(n,e),e}(e),r=function(n,e,t){var r=t.css,o=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=p(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,e),o=function(){m(t),t.href&&URL.revokeObjectURL(t.href)}):(t=b(e),r=function(n,e){var t=e.css,r=e.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){m(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=u(n,e);return f(t,e),function(n){for(var r=[],o=0;o<t.length;o++){var a=t[o];(s=i[a.id]).refs--,r.push(s)}n&&f(u(n,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete i[s.id]}}}};var x,w=(x=[],function(n,e){return x[n]=e,x.filter(Boolean).join("\n")});function y(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o,i=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,e,t){"use strict";t.r(e);setTimeout(function(){document.querySelector(".loading").classList.add("animated"),document.querySelector(".loading").classList.add("fadeOut"),setTimeout(function(){document.querySelector(".loading").classList.remove("animated"),document.querySelector(".loading").classList.remove("fadeOut"),document.querySelector(".loading").style.display="none"},500)},1e3),t(1)}]);