try {

    if(typeof require === 'function') {

        //removed anonymous define to work with requirejs without having to load through the framework: "function"==typeof define&&define.amd?define([],n):"object"==typeof module&&module.exports?module.exports=n():
        !function(e,t){"use strict";var r={};!function(){var e=document.getElementsByTagName("script"),t=e[e.length-1];if(t)for(var n,o=t.attributes,i=0,a=o.length;i<a;i++)/data-(\w+)$/.test(o[i].nodeName)&&("false"===(n=o[i].nodeValue)&&(n=!1),r[RegExp.$1]=n)}();var n=function(){var t=function(e){var t,r,n="0.5.4",o={name:"honeybadger.js",url:"https://github.com/honeybadger-io/honeybadger-js",version:n,language:"javascript"},i=!1,a=!1;function c(e,t){var r={};for(var n in e)r[n]=e[n];for(var n in t)r[n]=t[n];return r}function s(e){return!!t&&(t.name===e.name&&(t.message===e.message&&t.stack===e.stack))}function u(e){return e.stacktrace||e.stack||void 0}return function(f){var l=[],p=[],d={context:{},beforeNotifyHandlers:[],errorsSent:0};if("object"==typeof f)for(var v in f)d[v]=f[v];function y(){if(e.console){var t=Array.prototype.slice.call(arguments);t.unshift("[Honeybadger]"),console.log.apply(console,t)}}function g(){if(h("debug"))return y.apply(e,arguments)}function h(e,t){var r=d[e];return void 0===r&&(r=d[e.toLowerCase()]),"false"===r&&(r=!1),void 0!==r?r:t}function m(e){return!/function|symbol/.test(typeof e)&&("object"!=typeof e||void 0!==e.hasOwnProperty)}function b(t){if(h("disabled",!1))return!1;if((r=h("maxErrors"))&&d.errorsSent>=r)return!1;var r;try{var n=new(e.XMLHttpRequest||ActiveXObject)("MSXML2.XMLHTTP.3.0");return n.open("GET",t,h("async",!0)),n.send(),void d.errorsSent++}catch(e){y("Error encountered during XHR request (will retry): "+e)}var o=new Image;o.src=t}function w(e){t=r=null;var n=h("apiKey",h("api_key"));if(!n)return y("Unable to send error report: no API key has been configured."),!1;var o="http"+(h("ssl",!0)?"s":"")+"://"+h("host","api.honeybadger.io")+"/v1/notices/js.gif?"+function e(t,r,n){var o,i,a,c;a=[];n||(n=0);if(n>=h("max_depth",8))return encodeURIComponent(r)+"=[MAX DEPTH REACHED]";for(o in t)c=t[o],t.hasOwnProperty(o)&&null!=o&&null!=c&&(m(c)||(c=Object.prototype.toString.call(c)),i=r?r+"["+o+"]":o,a.push("object"==typeof c?e(c,i,n+1):encodeURIComponent(i)+"="+encodeURIComponent(c)));return a.join("&")}({notice:e})+"&api_key="+n+"&t="+(new Date).getTime();return b(o),!0}function E(e,n){if(e||(e={}),"[object Error]"===Object.prototype.toString.call(e)){var a=e;e=c(e,{name:a.name,message:a.message,stack:u(a)})}if("object"!=typeof e){var f=String(e);e={message:f}}if(s(e))return!1;if(r&&i&&w(r),0===function(){var t,r;for(t in r=[],e)({}).hasOwnProperty.call(e,t)&&r.push(t);return r}().length)return!1;if(n&&(e=c(e,n)),function(e,t){var r=e.message;for(var n in t)if(r.match(t[n]))return!0;return!1}(e,h("ignorePatterns")))return!1;if(function(e,t){var r,n;for(r=0,n=e.length;r<n;r++)if(!1===(0,e[r])(t))return!0;return!1}(d.beforeNotifyHandlers,e))return!1;var l=function(){var e={};e.HTTP_USER_AGENT=navigator.userAgent,document.referrer.match(/\S/)&&(e.HTTP_REFERER=document.referrer);return e}();"string"==typeof e.cookies?l.HTTP_COOKIE=e.cookies:"object"==typeof e.cookies&&(l.HTTP_COOKIE=function(e){if("object"!=typeof e)return;var t=[];for(var r in e)t.push(r+"="+e[r]);return t.join(";")}(e.cookies));var v={notifier:o,error:{class:e.name||"Error",message:e.message,backtrace:e.stack,generator:e.generator,fingerprint:e.fingerprint},request:{url:e.url||document.URL,component:e.component||h("component"),action:e.action||h("action"),context:c(d.context,e.context),cgi_data:l,params:e.params},server:{project_root:e.projectRoot||e.project_root||h("projectRoot",h("project_root",window.location.protocol+"//"+window.location.host)),environment_name:e.environment||h("environment"),revision:e.revision||h("revision")}};return r=v,t=e,i?(g("Deferring notice.",e,v),window.setTimeout(function(){s(e)&&w(v)})):(g("Queuing notice.",e,v),p.push(v)),e}var k=!0;if(window.atob||(k=!1),window.ErrorEvent)try{0===new window.ErrorEvent("").colno&&(k=!1)}catch(e){}function j(e,t){try{return"function"!=typeof e?e:function(e){if("function"!=typeof Object.isExtensible)return!0;return Object.isExtensible(e)}(e)?(e.___hb||(e.___hb=function(){var r=h("onerror",!0);if(!(k&&(r||t)||t&&!r))return e.apply(this,arguments);try{return e.apply(this,arguments)}catch(e){throw E(e),e}}),e.___hb.___hb=e.___hb,e.___hb):e}catch(t){return e}}d.notify=function(e,t,r){if(e||(e={}),"[object Error]"===Object.prototype.toString.call(e)){var n=e;e=c(e,{name:n.name,message:n.message,stack:u(n)})}if("object"!=typeof e){var o=String(e);e={message:o}}if(t&&"object"!=typeof t){var i=String(t);t={name:i}}return t&&(e=c(e,t)),"object"==typeof r&&(e=c(e,r)),E(e,function(e){var t;if(e&&(t=u(e)))return{stack:t,generator:void 0};try{throw new Error("")}catch(e){if(t=u(e))return{stack:t,generator:"throw"}}t=["<call-stack>"];var r=arguments.callee;for(;r&&t.length<10;){/function(?:\s+([\w$]+))+\s*\(/.test(r.toString())?t.push(RegExp.$1||"<anonymous>"):t.push("<anonymous>");try{r=r.caller}catch(e){break}}return{stack:t.join("\n"),generator:"walk"}}(e))},d.wrap=function(e){return j(e,!0)},d.setContext=function(e){return"object"==typeof e&&(d.context=c(d.context,e)),d},d.resetContext=function(e){return d.context="object"==typeof e?c({},e):{},d},d.configure=function(e){for(var t in e)d[t]=e[t];return d},d.beforeNotify=function(e){return d.beforeNotifyHandlers.push(e),d};var _=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++)if(t in this&&this[t]===e)return t;return-1};function T(e,t,r){if(!a&&e&&t&&r){var n=e[t];e[t]=r(n)}}d.reset=function(){for(var e in d.context={},d.beforeNotifyHandlers=[],d)-1==_.call(l,e)&&(d[e]=void 0);return d.resetMaxErrors(),d},d.resetMaxErrors=function(){return d.errorsSent=0},d.getVersion=function(){return n};var x=function(e){return function(t,r){if("function"==typeof t){var n=Array.prototype.slice.call(arguments,2);return t=j(t),e(function(){t.apply(null,n)},r)}return e(t,r)}};for(var v in T(window,"setTimeout",x),T(window,"setInterval",x),"EventTarget Window Node ApplicationCache AudioTrackList ChannelMergerNode CryptoOperation EventSource FileReader HTMLUnknownElement IDBDatabase IDBRequest IDBTransaction KeyOperation MediaController MessagePort ModalWindow Notification SVGElementInstance Screen TextTrack TextTrackCue TextTrackList WebSocket WebSocketWorker Worker XMLHttpRequest XMLHttpRequestEventTarget XMLHttpRequestUpload".replace(/\w+/g,function(e){var t=window[e]&&window[e].prototype;t&&t.hasOwnProperty&&t.hasOwnProperty("addEventListener")&&(T(t,"addEventListener",function(e){return function(t,r,n,o){try{r&&null!=r.handleEvent&&(r.handleEvent=j(r.handleEvent))}catch(e){y(e)}return e.call(this,t,j(r),n,o)}}),T(t,"removeEventListener",function(e){return function(t,r,n,o){return e.call(this,t,r,n,o),e.call(this,t,j(r),n,o)}}))}),T(window,"onerror",function(e){return function(r,n,o,i,a){return function(e,r,n,o,i){if(g("window.onerror callback invoked.",arguments),t)return;if(!h("onerror",!0))return;if(0===n&&/Script error\.?/.test(e))return void y("Ignoring cross-domain script error. Use CORS to enable tracking of these types of errors.",arguments);var a=[e,"\n    at ? (",r||"unknown",":",n||0,":",o||0,")"].join("");if(i){var c={stack:u(i)};return c.stack||(c={stack:a}),void E(i,c)}E({name:"window.onerror",message:e,stack:a})}(r,n,o,i,a),"function"==typeof e&&e.apply(this,arguments)}}),a=!0,d)l.push(v);if(g("Initializing honeybadger.js "+n),/complete|interactive|loaded/.test(document.readyState))i=!0,g("honeybadger.js 0.5.4 ready");else{g("Installing ready handler");var S=function(){var e;for(i=!0,g("honeybadger.js 0.5.4 ready");e=p.pop();)w(e)};document.addEventListener?document.addEventListener("DOMContentLoaded",S,!0):window.attachEvent("onload",S)}return d}}(e),n=t(r);return n.factory=t,n};e.Honeybadger=n()}(this);

        Honeybadger.configure({
            apiKey: '5a08bf30',
            environment: 'production',
            onerror: true,
            async: true,
            maxErrors: 20,
            disabled: 'production' === 'development'
        });

        console.log("*** HONEY BADGER SETUP: " + Honeybadger);

        Honeybadger.beforeNotify(function(notice) {
            console.log('**** HONEYBADGER BEFORE: ' + notice.stack);
            if (/reservations.travelclick.com|gc.synxis.com|reztrip.com|res.windsurfercrs.com|fe.avvio.com|secure-hotel-booking.com/.test(notice.stack)) { return false; }
            if (/theguestbook.com[/](?!honeybadger-)/.test(notice.stack) == false) { return false; }
        });


    } else {

        !function(e,t){"use strict";var r={};!function(){var e=document.getElementsByTagName("script"),t=e[e.length-1];if(t)for(var n,o=t.attributes,i=0,a=o.length;i<a;i++)/data-(\w+)$/.test(o[i].nodeName)&&("false"===(n=o[i].nodeValue)&&(n=!1),r[RegExp.$1]=n)}();var n=function(){var t=function(e){var t,r,n="0.5.4",o={name:"honeybadger.js",url:"https://github.com/honeybadger-io/honeybadger-js",version:n,language:"javascript"},i=!1,a=!1;function c(e,t){var r={};for(var n in e)r[n]=e[n];for(var n in t)r[n]=t[n];return r}function s(e){return!!t&&(t.name===e.name&&(t.message===e.message&&t.stack===e.stack))}function u(e){return e.stacktrace||e.stack||void 0}return function(f){var l=[],p=[],d={context:{},beforeNotifyHandlers:[],errorsSent:0};if("object"==typeof f)for(var v in f)d[v]=f[v];function y(){if(e.console){var t=Array.prototype.slice.call(arguments);t.unshift("[Honeybadger]"),console.log.apply(console,t)}}function g(){if(h("debug"))return y.apply(e,arguments)}function h(e,t){var r=d[e];return void 0===r&&(r=d[e.toLowerCase()]),"false"===r&&(r=!1),void 0!==r?r:t}function m(e){return!/function|symbol/.test(typeof e)&&("object"!=typeof e||void 0!==e.hasOwnProperty)}function b(t){if(h("disabled",!1))return!1;if((r=h("maxErrors"))&&d.errorsSent>=r)return!1;var r;try{var n=new(e.XMLHttpRequest||ActiveXObject)("MSXML2.XMLHTTP.3.0");return n.open("GET",t,h("async",!0)),n.send(),void d.errorsSent++}catch(e){y("Error encountered during XHR request (will retry): "+e)}var o=new Image;o.src=t}function w(e){t=r=null;var n=h("apiKey",h("api_key"));if(!n)return y("Unable to send error report: no API key has been configured."),!1;var o="http"+(h("ssl",!0)?"s":"")+"://"+h("host","api.honeybadger.io")+"/v1/notices/js.gif?"+function e(t,r,n){var o,i,a,c;a=[];n||(n=0);if(n>=h("max_depth",8))return encodeURIComponent(r)+"=[MAX DEPTH REACHED]";for(o in t)c=t[o],t.hasOwnProperty(o)&&null!=o&&null!=c&&(m(c)||(c=Object.prototype.toString.call(c)),i=r?r+"["+o+"]":o,a.push("object"==typeof c?e(c,i,n+1):encodeURIComponent(i)+"="+encodeURIComponent(c)));return a.join("&")}({notice:e})+"&api_key="+n+"&t="+(new Date).getTime();return b(o),!0}function E(e,n){if(e||(e={}),"[object Error]"===Object.prototype.toString.call(e)){var a=e;e=c(e,{name:a.name,message:a.message,stack:u(a)})}if("object"!=typeof e){var f=String(e);e={message:f}}if(s(e))return!1;if(r&&i&&w(r),0===function(){var t,r;for(t in r=[],e)({}).hasOwnProperty.call(e,t)&&r.push(t);return r}().length)return!1;if(n&&(e=c(e,n)),function(e,t){var r=e.message;for(var n in t)if(r.match(t[n]))return!0;return!1}(e,h("ignorePatterns")))return!1;if(function(e,t){var r,n;for(r=0,n=e.length;r<n;r++)if(!1===(0,e[r])(t))return!0;return!1}(d.beforeNotifyHandlers,e))return!1;var l=function(){var e={};e.HTTP_USER_AGENT=navigator.userAgent,document.referrer.match(/\S/)&&(e.HTTP_REFERER=document.referrer);return e}();"string"==typeof e.cookies?l.HTTP_COOKIE=e.cookies:"object"==typeof e.cookies&&(l.HTTP_COOKIE=function(e){if("object"!=typeof e)return;var t=[];for(var r in e)t.push(r+"="+e[r]);return t.join(";")}(e.cookies));var v={notifier:o,error:{class:e.name||"Error",message:e.message,backtrace:e.stack,generator:e.generator,fingerprint:e.fingerprint},request:{url:e.url||document.URL,component:e.component||h("component"),action:e.action||h("action"),context:c(d.context,e.context),cgi_data:l,params:e.params},server:{project_root:e.projectRoot||e.project_root||h("projectRoot",h("project_root",window.location.protocol+"//"+window.location.host)),environment_name:e.environment||h("environment"),revision:e.revision||h("revision")}};return r=v,t=e,i?(g("Deferring notice.",e,v),window.setTimeout(function(){s(e)&&w(v)})):(g("Queuing notice.",e,v),p.push(v)),e}var k=!0;if(window.atob||(k=!1),window.ErrorEvent)try{0===new window.ErrorEvent("").colno&&(k=!1)}catch(e){}function j(e,t){try{return"function"!=typeof e?e:function(e){if("function"!=typeof Object.isExtensible)return!0;return Object.isExtensible(e)}(e)?(e.___hb||(e.___hb=function(){var r=h("onerror",!0);if(!(k&&(r||t)||t&&!r))return e.apply(this,arguments);try{return e.apply(this,arguments)}catch(e){throw E(e),e}}),e.___hb.___hb=e.___hb,e.___hb):e}catch(t){return e}}d.notify=function(e,t,r){if(e||(e={}),"[object Error]"===Object.prototype.toString.call(e)){var n=e;e=c(e,{name:n.name,message:n.message,stack:u(n)})}if("object"!=typeof e){var o=String(e);e={message:o}}if(t&&"object"!=typeof t){var i=String(t);t={name:i}}return t&&(e=c(e,t)),"object"==typeof r&&(e=c(e,r)),E(e,function(e){var t;if(e&&(t=u(e)))return{stack:t,generator:void 0};try{throw new Error("")}catch(e){if(t=u(e))return{stack:t,generator:"throw"}}t=["<call-stack>"];var r=arguments.callee;for(;r&&t.length<10;){/function(?:\s+([\w$]+))+\s*\(/.test(r.toString())?t.push(RegExp.$1||"<anonymous>"):t.push("<anonymous>");try{r=r.caller}catch(e){break}}return{stack:t.join("\n"),generator:"walk"}}(e))},d.wrap=function(e){return j(e,!0)},d.setContext=function(e){return"object"==typeof e&&(d.context=c(d.context,e)),d},d.resetContext=function(e){return d.context="object"==typeof e?c({},e):{},d},d.configure=function(e){for(var t in e)d[t]=e[t];return d},d.beforeNotify=function(e){return d.beforeNotifyHandlers.push(e),d};var _=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++)if(t in this&&this[t]===e)return t;return-1};function T(e,t,r){if(!a&&e&&t&&r){var n=e[t];e[t]=r(n)}}d.reset=function(){for(var e in d.context={},d.beforeNotifyHandlers=[],d)-1==_.call(l,e)&&(d[e]=void 0);return d.resetMaxErrors(),d},d.resetMaxErrors=function(){return d.errorsSent=0},d.getVersion=function(){return n};var x=function(e){return function(t,r){if("function"==typeof t){var n=Array.prototype.slice.call(arguments,2);return t=j(t),e(function(){t.apply(null,n)},r)}return e(t,r)}};for(var v in T(window,"setTimeout",x),T(window,"setInterval",x),"EventTarget Window Node ApplicationCache AudioTrackList ChannelMergerNode CryptoOperation EventSource FileReader HTMLUnknownElement IDBDatabase IDBRequest IDBTransaction KeyOperation MediaController MessagePort ModalWindow Notification SVGElementInstance Screen TextTrack TextTrackCue TextTrackList WebSocket WebSocketWorker Worker XMLHttpRequest XMLHttpRequestEventTarget XMLHttpRequestUpload".replace(/\w+/g,function(e){var t=window[e]&&window[e].prototype;t&&t.hasOwnProperty&&t.hasOwnProperty("addEventListener")&&(T(t,"addEventListener",function(e){return function(t,r,n,o){try{r&&null!=r.handleEvent&&(r.handleEvent=j(r.handleEvent))}catch(e){y(e)}return e.call(this,t,j(r),n,o)}}),T(t,"removeEventListener",function(e){return function(t,r,n,o){return e.call(this,t,r,n,o),e.call(this,t,j(r),n,o)}}))}),T(window,"onerror",function(e){return function(r,n,o,i,a){return function(e,r,n,o,i){if(g("window.onerror callback invoked.",arguments),t)return;if(!h("onerror",!0))return;if(0===n&&/Script error\.?/.test(e))return void y("Ignoring cross-domain script error. Use CORS to enable tracking of these types of errors.",arguments);var a=[e,"\n    at ? (",r||"unknown",":",n||0,":",o||0,")"].join("");if(i){var c={stack:u(i)};return c.stack||(c={stack:a}),void E(i,c)}E({name:"window.onerror",message:e,stack:a})}(r,n,o,i,a),"function"==typeof e&&e.apply(this,arguments)}}),a=!0,d)l.push(v);if(g("Initializing honeybadger.js "+n),/complete|interactive|loaded/.test(document.readyState))i=!0,g("honeybadger.js 0.5.4 ready");else{g("Installing ready handler");var S=function(){var e;for(i=!0,g("honeybadger.js 0.5.4 ready");e=p.pop();)w(e)};document.addEventListener?document.addEventListener("DOMContentLoaded",S,!0):window.attachEvent("onload",S)}return d}}(e),n=t(r);return n.factory=t,n};"function"==typeof define&&define.amd?define([],n):"object"==typeof module&&module.exports?module.exports=n():e.Honeybadger=n()}(this);

        Honeybadger.configure({
            apiKey: '5a08bf30',
            environment: 'production',
            onerror: true,
            async: true,
            maxErrors: 20,
            disabled: 'production' === 'development'
        });

        console.log("*** HONEY BADGER SETUP: " + Honeybadger);

        Honeybadger.beforeNotify(function(notice) {
            console.log('**** HONEYBADGER BEFORE: ' + notice.stack);
            if (/reservations.travelclick.com|gc.synxis.com|reztrip.com|res.windsurfercrs.com|fe.avvio.com|secure-hotel-booking.com/.test(notice.stack)) { return false; }
            if (/theguestbook.com[/](?!honeybadger-)/.test(notice.stack) == false) { return false; }
        });

    }


} catch (e) {
    console.log("**** Honey load error: " + e);
}

function gopherGetUrlParameter() {
    try {
        if (window.location.search.indexOf('show_gopher') > -1){
          return true;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
};

function isGopher() {
    if (!!gopherGetUrlParameter()) {
        sessionStorage.setItem('show_gopher', 'true');
    }
    return (sessionStorage.getItem('show_gopher') == 'true')
}

//checks if gopher led user to page, if so, check if user has entered excluded gb rate, if so, add div to indicate to gopher that user has entered excluded rate
////poll this to make sure gopher knows exactly when user enters this rate IF booking engine polls as well
function updateGopherExtensionIfRateCodeExclusionChanged(excluded_gb_rate) {
    if (isGopher() &&
        typeof chrome !== "undefined" && chrome && chrome.runtime && chrome.runtime.sendMessage) {
        chrome.runtime.sendMessage('eoogedkgacambnleeloiioelfbbmglgf', {excluded_rate: excluded_gb_rate},
            function(response) {
                if (response && response.success) {
                    //do nothing
                }
            }
        );
    }
}
//! moment.js
//! version : 2.5.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function c(a,b){return function(c){return k(a.call(this,c),b)}}function d(a,b){return function(c){return this.lang().ordinal(a.call(this,c),b)}}function e(){}function f(a){w(a),h(this,a)}function g(a){var b=q(a),c=b.year||0,d=b.month||0,e=b.week||0,f=b.day||0,g=b.hour||0,h=b.minute||0,i=b.second||0,j=b.millisecond||0;this._milliseconds=+j+1e3*i+6e4*h+36e5*g,this._days=+f+7*e,this._months=+d+12*c,this._data={},this._bubble()}function h(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return b.hasOwnProperty("toString")&&(a.toString=b.toString),b.hasOwnProperty("valueOf")&&(a.valueOf=b.valueOf),a}function i(a){var b,c={};for(b in a)a.hasOwnProperty(b)&&qb.hasOwnProperty(b)&&(c[b]=a[b]);return c}function j(a){return 0>a?Math.ceil(a):Math.floor(a)}function k(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function l(a,b,c,d){var e,f,g=b._milliseconds,h=b._days,i=b._months;g&&a._d.setTime(+a._d+g*c),(h||i)&&(e=a.minute(),f=a.hour()),h&&a.date(a.date()+h*c),i&&a.month(a.month()+i*c),g&&!d&&db.updateOffset(a),(h||i)&&(a.minute(e),a.hour(f))}function m(a){return"[object Array]"===Object.prototype.toString.call(a)}function n(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function o(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&s(a[d])!==s(b[d]))&&g++;return g+f}function p(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=Tb[a]||Ub[b]||b}return a}function q(a){var b,c,d={};for(c in a)a.hasOwnProperty(c)&&(b=p(c),b&&(d[b]=a[c]));return d}function r(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}db[b]=function(e,f){var g,h,i=db.fn._lang[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=db().utc().set(d,a);return i.call(db.fn._lang,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function s(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function t(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function u(a){return v(a)?366:365}function v(a){return a%4===0&&a%100!==0||a%400===0}function w(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[jb]<0||a._a[jb]>11?jb:a._a[kb]<1||a._a[kb]>t(a._a[ib],a._a[jb])?kb:a._a[lb]<0||a._a[lb]>23?lb:a._a[mb]<0||a._a[mb]>59?mb:a._a[nb]<0||a._a[nb]>59?nb:a._a[ob]<0||a._a[ob]>999?ob:-1,a._pf._overflowDayOfYear&&(ib>b||b>kb)&&(b=kb),a._pf.overflow=b)}function x(a){return null==a._isValid&&(a._isValid=!isNaN(a._d.getTime())&&a._pf.overflow<0&&!a._pf.empty&&!a._pf.invalidMonth&&!a._pf.nullInput&&!a._pf.invalidFormat&&!a._pf.userInvalidated,a._strict&&(a._isValid=a._isValid&&0===a._pf.charsLeftOver&&0===a._pf.unusedTokens.length)),a._isValid}function y(a){return a?a.toLowerCase().replace("_","-"):a}function z(a,b){return b._isUTC?db(a).zone(b._offset||0):db(a).local()}function A(a,b){return b.abbr=a,pb[a]||(pb[a]=new e),pb[a].set(b),pb[a]}function B(a){delete pb[a]}function C(a){var b,c,d,e,f=0,g=function(a){if(!pb[a]&&rb)try{require("./lang/"+a)}catch(b){}return pb[a]};if(!a)return db.fn._lang;if(!m(a)){if(c=g(a))return c;a=[a]}for(;f<a.length;){for(e=y(a[f]).split("-"),b=e.length,d=y(a[f+1]),d=d?d.split("-"):null;b>0;){if(c=g(e.slice(0,b).join("-")))return c;if(d&&d.length>=b&&o(e,d,!0)>=b-1)break;b--}f++}return db.fn._lang}function D(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function E(a){var b,c,d=a.match(vb);for(b=0,c=d.length;c>b;b++)d[b]=Yb[d[b]]?Yb[d[b]]:D(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function F(a,b){return a.isValid()?(b=G(b,a.lang()),Vb[b]||(Vb[b]=E(b)),Vb[b](a)):a.lang().invalidDate()}function G(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(wb.lastIndex=0;d>=0&&wb.test(a);)a=a.replace(wb,c),wb.lastIndex=0,d-=1;return a}function H(a,b){var c,d=b._strict;switch(a){case"DDDD":return Ib;case"YYYY":case"GGGG":case"gggg":return d?Jb:zb;case"Y":case"G":case"g":return Lb;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?Kb:Ab;case"S":if(d)return Gb;case"SS":if(d)return Hb;case"SSS":if(d)return Ib;case"DDD":return yb;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Cb;case"a":case"A":return C(b._l)._meridiemParse;case"X":return Fb;case"Z":case"ZZ":return Db;case"T":return Eb;case"SSSS":return Bb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?Hb:xb;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return xb;default:return c=new RegExp(P(O(a.replace("\\","")),"i"))}}function I(a){a=a||"";var b=a.match(Db)||[],c=b[b.length-1]||[],d=(c+"").match(Qb)||["-",0,0],e=+(60*d[1])+s(d[2]);return"+"===d[0]?-e:e}function J(a,b,c){var d,e=c._a;switch(a){case"M":case"MM":null!=b&&(e[jb]=s(b)-1);break;case"MMM":case"MMMM":d=C(c._l).monthsParse(b),null!=d?e[jb]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[kb]=s(b));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=s(b));break;case"YY":e[ib]=s(b)+(s(b)>68?1900:2e3);break;case"YYYY":case"YYYYY":case"YYYYYY":e[ib]=s(b);break;case"a":case"A":c._isPm=C(c._l).isPM(b);break;case"H":case"HH":case"h":case"hh":e[lb]=s(b);break;case"m":case"mm":e[mb]=s(b);break;case"s":case"ss":e[nb]=s(b);break;case"S":case"SS":case"SSS":case"SSSS":e[ob]=s(1e3*("0."+b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=I(b);break;case"w":case"ww":case"W":case"WW":case"d":case"dd":case"ddd":case"dddd":case"e":case"E":a=a.substr(0,1);case"gg":case"gggg":case"GG":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=b)}}function K(a){var b,c,d,e,f,g,h,i,j,k,l=[];if(!a._d){for(d=M(a),a._w&&null==a._a[kb]&&null==a._a[jb]&&(f=function(b){var c=parseInt(b,10);return b?b.length<3?c>68?1900+c:2e3+c:c:null==a._a[ib]?db().weekYear():a._a[ib]},g=a._w,null!=g.GG||null!=g.W||null!=g.E?h=Z(f(g.GG),g.W||1,g.E,4,1):(i=C(a._l),j=null!=g.d?V(g.d,i):null!=g.e?parseInt(g.e,10)+i._week.dow:0,k=parseInt(g.w,10)||1,null!=g.d&&j<i._week.dow&&k++,h=Z(f(g.gg),k,j,i._week.doy,i._week.dow)),a._a[ib]=h.year,a._dayOfYear=h.dayOfYear),a._dayOfYear&&(e=null==a._a[ib]?d[ib]:a._a[ib],a._dayOfYear>u(e)&&(a._pf._overflowDayOfYear=!0),c=U(e,0,a._dayOfYear),a._a[jb]=c.getUTCMonth(),a._a[kb]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=l[b]=d[b];for(;7>b;b++)a._a[b]=l[b]=null==a._a[b]?2===b?1:0:a._a[b];l[lb]+=s((a._tzm||0)/60),l[mb]+=s((a._tzm||0)%60),a._d=(a._useUTC?U:T).apply(null,l)}}function L(a){var b;a._d||(b=q(a._i),a._a=[b.year,b.month,b.day,b.hour,b.minute,b.second,b.millisecond],K(a))}function M(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function N(a){a._a=[],a._pf.empty=!0;var b,c,d,e,f,g=C(a._l),h=""+a._i,i=h.length,j=0;for(d=G(a._f,g).match(vb)||[],b=0;b<d.length;b++)e=d[b],c=(h.match(H(e,a))||[])[0],c&&(f=h.substr(0,h.indexOf(c)),f.length>0&&a._pf.unusedInput.push(f),h=h.slice(h.indexOf(c)+c.length),j+=c.length),Yb[e]?(c?a._pf.empty=!1:a._pf.unusedTokens.push(e),J(e,c,a)):a._strict&&!c&&a._pf.unusedTokens.push(e);a._pf.charsLeftOver=i-j,h.length>0&&a._pf.unusedInput.push(h),a._isPm&&a._a[lb]<12&&(a._a[lb]+=12),a._isPm===!1&&12===a._a[lb]&&(a._a[lb]=0),K(a),w(a)}function O(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function P(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Q(a){var c,d,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,a._d=new Date(0/0),void 0;for(f=0;f<a._f.length;f++)g=0,c=h({},a),c._pf=b(),c._f=a._f[f],N(c),x(c)&&(g+=c._pf.charsLeftOver,g+=10*c._pf.unusedTokens.length,c._pf.score=g,(null==e||e>g)&&(e=g,d=c));h(a,d||c)}function R(a){var b,c,d=a._i,e=Mb.exec(d);if(e){for(a._pf.iso=!0,b=0,c=Ob.length;c>b;b++)if(Ob[b][1].exec(d)){a._f=Ob[b][0]+(e[6]||" ");break}for(b=0,c=Pb.length;c>b;b++)if(Pb[b][1].exec(d)){a._f+=Pb[b][0];break}d.match(Db)&&(a._f+="Z"),N(a)}else a._d=new Date(d)}function S(b){var c=b._i,d=sb.exec(c);c===a?b._d=new Date:d?b._d=new Date(+d[1]):"string"==typeof c?R(b):m(c)?(b._a=c.slice(0),K(b)):n(c)?b._d=new Date(+c):"object"==typeof c?L(b):b._d=new Date(c)}function T(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function U(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function V(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function W(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function X(a,b,c){var d=hb(Math.abs(a)/1e3),e=hb(d/60),f=hb(e/60),g=hb(f/24),h=hb(g/365),i=45>d&&["s",d]||1===e&&["m"]||45>e&&["mm",e]||1===f&&["h"]||22>f&&["hh",f]||1===g&&["d"]||25>=g&&["dd",g]||45>=g&&["M"]||345>g&&["MM",hb(g/30)]||1===h&&["y"]||["yy",h];return i[2]=b,i[3]=a>0,i[4]=c,W.apply({},i)}function Y(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=db(a).add("d",f),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function Z(a,b,c,d,e){var f,g,h=U(a,0,1).getUTCDay();return c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:u(a-1)+g}}function $(a){var b=a._i,c=a._f;return null===b?db.invalid({nullInput:!0}):("string"==typeof b&&(a._i=b=C().preparse(b)),db.isMoment(b)?(a=i(b),a._d=new Date(+b._d)):c?m(c)?Q(a):N(a):S(a),new f(a))}function _(a,b){db.fn[a]=db.fn[a+"s"]=function(a){var c=this._isUTC?"UTC":"";return null!=a?(this._d["set"+c+b](a),db.updateOffset(this),this):this._d["get"+c+b]()}}function ab(a){db.duration.fn[a]=function(){return this._data[a]}}function bb(a,b){db.duration.fn["as"+a]=function(){return+this/b}}function cb(a){var b=!1,c=db;"undefined"==typeof ender&&(a?(gb.moment=function(){return!b&&console&&console.warn&&(b=!0,console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")),c.apply(null,arguments)},h(gb.moment,c)):gb.moment=db)}for(var db,eb,fb="2.5.1",gb=this,hb=Math.round,ib=0,jb=1,kb=2,lb=3,mb=4,nb=5,ob=6,pb={},qb={_isAMomentObject:null,_i:null,_f:null,_l:null,_strict:null,_isUTC:null,_offset:null,_pf:null,_lang:null},rb="undefined"!=typeof module&&module.exports&&"undefined"!=typeof require,sb=/^\/?Date\((\-?\d+)/i,tb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,ub=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,vb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,wb=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,xb=/\d\d?/,yb=/\d{1,3}/,zb=/\d{1,4}/,Ab=/[+\-]?\d{1,6}/,Bb=/\d+/,Cb=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Db=/Z|[\+\-]\d\d:?\d\d/gi,Eb=/T/i,Fb=/[\+\-]?\d+(\.\d{1,3})?/,Gb=/\d/,Hb=/\d\d/,Ib=/\d{3}/,Jb=/\d{4}/,Kb=/[+-]?\d{6}/,Lb=/[+-]?\d+/,Mb=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Nb="YYYY-MM-DDTHH:mm:ssZ",Ob=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],Pb=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],Qb=/([\+\-]|\d\d)/gi,Rb="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),Sb={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},Tb={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},Ub={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},Vb={},Wb="DDD w W M D d".split(" "),Xb="M D H h m s w W".split(" "),Yb={M:function(){return this.month()+1},MMM:function(a){return this.lang().monthsShort(this,a)},MMMM:function(a){return this.lang().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.lang().weekdaysMin(this,a)},ddd:function(a){return this.lang().weekdaysShort(this,a)},dddd:function(a){return this.lang().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return k(this.year()%100,2)},YYYY:function(){return k(this.year(),4)},YYYYY:function(){return k(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+k(Math.abs(a),6)},gg:function(){return k(this.weekYear()%100,2)},gggg:function(){return k(this.weekYear(),4)},ggggg:function(){return k(this.weekYear(),5)},GG:function(){return k(this.isoWeekYear()%100,2)},GGGG:function(){return k(this.isoWeekYear(),4)},GGGGG:function(){return k(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return s(this.milliseconds()/100)},SS:function(){return k(s(this.milliseconds()/10),2)},SSS:function(){return k(this.milliseconds(),3)},SSSS:function(){return k(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+k(s(a/60),2)+":"+k(s(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+k(s(a/60),2)+k(s(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},Zb=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];Wb.length;)eb=Wb.pop(),Yb[eb+"o"]=d(Yb[eb],eb);for(;Xb.length;)eb=Xb.pop(),Yb[eb+eb]=c(Yb[eb],2);for(Yb.DDDD=c(Yb.DDD,3),h(e.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var b,c,d;for(this._monthsParse||(this._monthsParse=[]),b=0;12>b;b++)if(this._monthsParse[b]||(c=db.utc([2e3,b]),d="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[b]=new RegExp(d.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=db([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var c=this._calendar[a];return"function"==typeof c?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},week:function(a){return Y(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),db=function(c,d,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=c,g._f=d,g._l=e,g._strict=f,g._isUTC=!1,g._pf=b(),$(g)},db.utc=function(c,d,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=c,g._f=d,g._strict=f,g._pf=b(),$(g).utc()},db.unix=function(a){return db(1e3*a)},db.duration=function(a,b){var c,d,e,f=a,h=null;return db.isDuration(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(f={},b?f[b]=a:f.milliseconds=a):(h=tb.exec(a))?(c="-"===h[1]?-1:1,f={y:0,d:s(h[kb])*c,h:s(h[lb])*c,m:s(h[mb])*c,s:s(h[nb])*c,ms:s(h[ob])*c}):(h=ub.exec(a))&&(c="-"===h[1]?-1:1,e=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*c},f={y:e(h[2]),M:e(h[3]),d:e(h[4]),h:e(h[5]),m:e(h[6]),s:e(h[7]),w:e(h[8])}),d=new g(f),db.isDuration(a)&&a.hasOwnProperty("_lang")&&(d._lang=a._lang),d},db.version=fb,db.defaultFormat=Nb,db.updateOffset=function(){},db.lang=function(a,b){var c;return a?(b?A(y(a),b):null===b?(B(a),a="en"):pb[a]||C(a),c=db.duration.fn._lang=db.fn._lang=C(a),c._abbr):db.fn._lang._abbr},db.langData=function(a){return a&&a._lang&&a._lang._abbr&&(a=a._lang._abbr),C(a)},db.isMoment=function(a){return a instanceof f||null!=a&&a.hasOwnProperty("_isAMomentObject")},db.isDuration=function(a){return a instanceof g},eb=Zb.length-1;eb>=0;--eb)r(Zb[eb]);for(db.normalizeUnits=function(a){return p(a)},db.invalid=function(a){var b=db.utc(0/0);return null!=a?h(b._pf,a):b._pf.userInvalidated=!0,b},db.parseZone=function(a){return db(a).parseZone()},h(db.fn=f.prototype,{clone:function(){return db(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=db(this).utc();return 0<a.year()&&a.year()<=9999?F(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):F(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return x(this)},isDSTShifted:function(){return this._a?this.isValid()&&o(this._a,(this._isUTC?db.utc(this._a):db(this._a)).toArray())>0:!1},parsingFlags:function(){return h({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(a){var b=F(this,a||db.defaultFormat);return this.lang().postformat(b)},add:function(a,b){var c;return c="string"==typeof a?db.duration(+b,a):db.duration(a,b),l(this,c,1),this},subtract:function(a,b){var c;return c="string"==typeof a?db.duration(+b,a):db.duration(a,b),l(this,c,-1),this},diff:function(a,b,c){var d,e,f=z(a,this),g=6e4*(this.zone()-f.zone());return b=p(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+f.daysInMonth()),e=12*(this.year()-f.year())+(this.month()-f.month()),e+=(this-db(this).startOf("month")-(f-db(f).startOf("month")))/d,e-=6e4*(this.zone()-db(this).startOf("month").zone()-(f.zone()-db(f).startOf("month").zone()))/d,"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:j(e)},from:function(a,b){return db.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)},fromNow:function(a){return this.from(db(),a)},calendar:function(){var a=z(db(),this).startOf("day"),b=this.diff(a,"days",!0),c=-6>b?"sameElse":-1>b?"lastWeek":0>b?"lastDay":1>b?"sameDay":2>b?"nextDay":7>b?"nextWeek":"sameElse";return this.format(this.lang().calendar(c,this))},isLeapYear:function(){return v(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=V(a,this.lang()),this.add({d:a-b})):b},month:function(a){var b,c=this._isUTC?"UTC":"";return null!=a?"string"==typeof a&&(a=this.lang().monthsParse(a),"number"!=typeof a)?this:(b=this.date(),this.date(1),this._d["set"+c+"Month"](a),this.date(Math.min(b,this.daysInMonth())),db.updateOffset(this),this):this._d["get"+c+"Month"]()},startOf:function(a){switch(a=p(a)){case"year":this.month(0);case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),this},endOf:function(a){return a=p(a),this.startOf(a).add("isoWeek"===a?"week":a,1).subtract("ms",1)},isAfter:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)>+db(a).startOf(b)},isBefore:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)<+db(a).startOf(b)},isSame:function(a,b){return b=b||"ms",+this.clone().startOf(b)===+z(a,this).startOf(b)},min:function(a){return a=db.apply(null,arguments),this>a?this:a},max:function(a){return a=db.apply(null,arguments),a>this?this:a},zone:function(a){var b=this._offset||0;return null==a?this._isUTC?b:this._d.getTimezoneOffset():("string"==typeof a&&(a=I(a)),Math.abs(a)<16&&(a=60*a),this._offset=a,this._isUTC=!0,b!==a&&l(this,db.duration(b-a,"m"),1,!0),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?db(a).zone():0,(this.zone()-a)%60===0},daysInMonth:function(){return t(this.year(),this.month())},dayOfYear:function(a){var b=hb((db(this).startOf("day")-db(this).startOf("year"))/864e5)+1;return null==a?b:this.add("d",a-b)},quarter:function(){return Math.ceil((this.month()+1)/3)},weekYear:function(a){var b=Y(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==a?b:this.add("y",a-b)},isoWeekYear:function(a){var b=Y(this,1,4).year;return null==a?b:this.add("y",a-b)},week:function(a){var b=this.lang().week(this);return null==a?b:this.add("d",7*(a-b))},isoWeek:function(a){var b=Y(this,1,4).week;return null==a?b:this.add("d",7*(a-b))},weekday:function(a){var b=(this.day()+7-this.lang()._week.dow)%7;return null==a?b:this.add("d",a-b)},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},get:function(a){return a=p(a),this[a]()},set:function(a,b){return a=p(a),"function"==typeof this[a]&&this[a](b),this},lang:function(b){return b===a?this._lang:(this._lang=C(b),this)}}),eb=0;eb<Rb.length;eb++)_(Rb[eb].toLowerCase().replace(/s$/,""),Rb[eb]);_("year","FullYear"),db.fn.days=db.fn.day,db.fn.months=db.fn.month,db.fn.weeks=db.fn.week,db.fn.isoWeeks=db.fn.isoWeek,db.fn.toJSON=db.fn.toISOString,h(db.duration.fn=g.prototype,{_bubble:function(){var a,b,c,d,e=this._milliseconds,f=this._days,g=this._months,h=this._data;h.milliseconds=e%1e3,a=j(e/1e3),h.seconds=a%60,b=j(a/60),h.minutes=b%60,c=j(b/60),h.hours=c%24,f+=j(c/24),h.days=f%30,g+=j(f/30),h.months=g%12,d=j(g/12),h.years=d},weeks:function(){return j(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*s(this._months/12)},humanize:function(a){var b=+this,c=X(b,!a,this.lang());return a&&(c=this.lang().pastFuture(b,c)),this.lang().postformat(c)},add:function(a,b){var c=db.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=db.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=p(a),this[a.toLowerCase()+"s"]()},as:function(a){return a=p(a),this["as"+a.charAt(0).toUpperCase()+a.slice(1)+"s"]()},lang:db.fn.lang,toIsoString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"}});for(eb in Sb)Sb.hasOwnProperty(eb)&&(bb(eb,Sb[eb]),ab(eb.toLowerCase()));bb("Weeks",6048e5),db.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},db.lang("en",{ordinal:function(a){var b=a%10,c=1===s(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),rb?(module.exports=db,cb(!0)):"function"==typeof define&&define.amd?define("moment",function(b,c,d){return d.config&&d.config()&&d.config().noGlobal!==!0&&cb(d.config().noGlobal===a),db}):cb()}).call(this);
// we need to check whether date is before or on May 31st, 2020
function checkForValidDate (date) {
  var checkoutDate = moment(date, 'MM-DD-YYYY').format('YYYY-MM-DD');
  var cutoffDate = '2020-06-01';
  return moment(checkoutDate).isBefore(cutoffDate);
}

function getDataLayerKeyReverse(key) {
  for (var i = (window.dataLayer.length - 1); i >= 0; i--) {
      var dataLayerElem = window.dataLayer[i];
      if (key in dataLayerElem) {
        return dataLayerElem[key];
      }
  }
  return null;
}

function getDataLayerKeyForward(key) {
  for (var i = 0; i < window.dataLayer.length; i++) {
      var dataLayerElem = window.dataLayer[i];
      if (key in dataLayerElem) {
        return dataLayerElem[key];
      }
  }
  return null;
}


function getUrlParameter(sParam, windowToUse) {
    if (windowToUse == null) windowToUse = window;
    var sOriginalPageUrl = windowToUse.location.search.substring(1),
        sPageURL = decodeURIComponent(sOriginalPageUrl.replace(/#$/,"")),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

/* We cannot pass show_gopher param into reservHotels BE - show gopher based on IATA */
function gopherLoaded() {
    var urlIata = getUrlParameter('AFF');
    if(urlIata && urlIata == '05542961'){
        sessionStorage.setItem("show_gopher", 'true');
    }
    return isGopher();
}

if(!gopherLoaded()){
    (function() {

        var language = '';
        var jQuery;
        var includeExtraCharges = false;
        var EARN_PERCENTAGE_05 = .05;
        var EARN_PERCENTAGE_15 = .15;
        var taxed_rate = 1 + ( Number("19.0") / 100);

        /* reset excluded_gb_rate */
        sessionStorage.setItem("excluded_gb_rate", false);

        
var number_of_hotels = "700";
var white_label = "Reef Rewards";
var terms_message = '(see <a class="gb-link" href="https://theguestbook.com/assets/terms.pdf" target="_blank"">terms of use</a>).</div></span>';
var terms_message_20 = '(see <a class="gb-link" href="https://theguestbook.com/assets/terms.pdf" target="_blank"">terms of use</a>). The Cash Forward includes an extra 5% bonus for stays with checkout dates through May 2020.</div></span>';
var guestbook_network = ''
// Soft white label message
if (white_label !== 'The Guestbook') {
  terms_message = 'towards a future stay in another destination (redeemable at ' + number_of_hotels + '+ other hotels). Rewards are facilitated through <a class="gb-link" href="http://theguestbook.com/thereefplayacar" \ target="_blank" style="text-decoration: underline;">The Guestbook</a>, and by joining you agree to the <a class="gb-link" href="https://theguestbook.com/assets/terms.pdf" target="_blank" style="text-decoration: underline;"">terms of use</a>.</div></span>';
  guestbook_network= ' and The Guestbook network';
}
var rewards_link = 'https://www.thereefresorts.com/reefplayacar/reef-rewards';
var svg_logo = '<svg version="1.1" id="up_logo_main" class="up-logo-container" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 432 108" enable-background="new 0 0 432 108" xml:space="preserve" height="70" width="280" style="margin-left: 0px;"> <g> <g> <rect x="2.8" y="97.7" fill="#B8B9B9" width="29.3" height="0.4"></rect> <rect x="398" y="97.7" fill="#B8B9B9" width="31.4" height="0.4"></rect> </g> <g> <path fill="#3E434B" d="M55.1,100c0.9,1.1,1.9,1.9,3,2.1v0.5h-2.9l-3.1-4.2h-0.6v1.1c0,2.3,0.3,2.6,1.8,2.6v0.5h-5.2V102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h4.7c2.3,0,3.6,1.2,3.6,2.8c0,1.4-1,2.5-2.7,2.7L55.1,100z M52.8,93.5h-1.3v3.9h1.3c1.3,0,1.9-0.9,1.9-1.9C54.7,94.4,54.1,93.5,52.8,93.5z"></path> <path fill="#3E434B" d="M69.2,100.2l0.1-0.4h0.5l-0.2,2.7h-8.4V102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h5h2.9l0.2,2.7h-0.5L68.7,95c-0.2-1-0.5-1.4-2.6-1.4h-1.5v3.4h0.1c2.3,0,2.4-0.3,2.4-1.8h0.5v4.4h-0.5c0-1.5-0.2-1.8-2.4-1.8h-0.1V99c0,2.3,0.3,2.6,1.8,2.6h0.3C68.7,101.7,69,101.3,69.2,100.2z"></path> <path fill="#3E434B" d="M82.9,99.5l1.6-4.6c0.5-1.3,0.2-1.7-1.2-1.7v-0.4h4.2v0.4c-1.4,0-1.8,0.3-2.3,2l-2.6,7.7h-0.3L80,95.8l-2.3,7.1h-0.3l-2.5-7.7c-0.5-1.6-0.9-2-2.2-2v-0.4h5v0.4c-1.3,0-1.7,0.3-1.2,1.7l1.5,4.6l2.3-6.8h0.4L82.9,99.5z"></path> <path fill="#3E434B" d="M91,100.3c-0.6,1.3-0.6,1.7,1.2,1.7v0.5H88V102c1.4,0,1.6-0.3,2.3-2l3.3-7.7h0.3l3.3,7.7c0.7,1.7,1,2,2.2,2v0.5h-5.1V102c1.6,0,1.8-0.4,1.2-1.7l-0.5-1h-3.7L91,100.3z M93.3,95l-1.5,3.5h3L93.3,95z"></path> <path fill="#3E434B" d="M109.5,100c0.9,1.1,1.9,1.9,3,2.1v0.5h-2.9l-3.1-4.2H106v1.1c0,2.3,0.3,2.6,1.8,2.6v0.5h-5.2V102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h4.7c2.3,0,3.6,1.2,3.6,2.8c0,1.4-1,2.5-2.7,2.7L109.5,100z M107.3,93.5H106v3.9h1.3c1.3,0,1.9-0.9,1.9-1.9C109.1,94.4,108.5,93.5,107.3,93.5z"></path> <path fill="#3E434B" d="M115.6,102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h4.8c3.8,0,5.5,2.2,5.5,4.9c0,2.7-1.7,4.9-5.5,4.9h-4.8V102z M120.5,93.5c-0.1,0-1.1,0-1.5,0v6.4c0,1.5,0.2,1.7,1.3,1.7h0.2c3,0,3.6-2.3,3.6-4.1C124.1,95.8,123.5,93.5,120.5,93.5z"></path> <path fill="#3E434B" d="M129.2,102.5V102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h5.2v0.4c-1.5,0-1.8,0.4-1.8,2.6v3.6c0,2.3,0.3,2.6,1.8,2.6v0.5H129.2z"></path> <path fill="#3E434B" d="M138,93.2v-0.4h2.8l6,7.1v-4.1c0-2.3-0.3-2.6-1.8-2.6v-0.4h4.4v0.4c-1.5,0-1.8,0.4-1.8,2.6v7.1h-0.4l-6.6-7.9v4.4c0,2.3,0.3,2.6,1.8,2.6v0.5H138V102c1.5,0,1.8-0.4,1.8-2.6v-3.6C139.8,93.5,139.5,93.2,138,93.2z"></path> <path fill="#3E434B" d="M157.8,102.9c-2.8,0-5.1-2.4-5.1-5.3c0-2.9,2.3-5.3,5.1-5.3c1.1,0,2.3,0.6,3,1.5c0.2-0.2,0.3-0.7,0.4-1.1h0.4v3.9h-0.5c-0.4-2.1-1.6-3.4-3.4-3.4c-2.5,0-3.3,2.5-3.3,4.4c0,1.9,0.8,4.4,3.3,4.4c1.1,0,2.9-0.7,2.9-1.9c0-0.9-0.8-1.4-1.9-1.4v-0.5h5v0.5c-1.5,0-1.8,0.4-1.8,2.6c0,0,0,0.4,0,0.7C160.5,102,159.1,102.9,157.8,102.9z"></path> <path fill="#3E434B" d="M172.5,102.5V102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h5.2v0.4c-1.5,0-1.8,0.4-1.8,2.6v3.6c0,2.3,0.3,2.6,1.8,2.6v0.5H172.5z"></path> <path fill="#3E434B" d="M181.3,93.2v-0.4h2.8l6,7.1v-4.1c0-2.3-0.3-2.6-1.8-2.6v-0.4h4.4v0.4c-1.5,0-1.8,0.4-1.8,2.6v7.1h-0.4L184,95v4.4c0,2.3,0.3,2.6,1.8,2.6v0.5h-4.4V102c1.5,0,1.8-0.4,1.8-2.6v-3.6C183.1,93.5,182.9,93.2,181.3,93.2z"></path> <path fill="#3E434B" d="M196.4,102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h4.8c3.8,0,5.5,2.2,5.5,4.9c0,2.7-1.7,4.9-5.5,4.9h-4.8V102z M201.2,93.5c-0.1,0-1.1,0-1.5,0v6.4c0,1.5,0.2,1.7,1.3,1.7h0.2c3,0,3.6-2.3,3.6-4.1C204.8,95.8,204.2,93.5,201.2,93.5z"></path> <path fill="#3E434B" d="M218,100.2l0.1-0.4h0.5l-0.2,2.7H210V102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h5h2.9l0.2,2.7h-0.5l-0.1-0.5c-0.2-1-0.5-1.4-2.6-1.4h-1.5v3.4h0.1c2.3,0,2.4-0.3,2.4-1.8h0.5v4.4h-0.5c0-1.5-0.2-1.8-2.4-1.8h-0.1V99c0,2.3,0.3,2.6,1.8,2.6h0.3C217.5,101.7,217.8,101.3,218,100.2z"></path> <path fill="#3E434B" d="M227.4,102v0.5h-5.2V102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h4.7c2.3,0,3.6,1.2,3.6,2.8c0,1.6-1.3,2.8-3.6,2.8h-1.3v1.1C225.6,101.7,225.8,102,227.4,102z M226.9,93.5h-1.3v3.9h1.3c1.3,0,1.9-0.9,1.9-1.9C228.7,94.4,228.1,93.5,226.9,93.5z"></path> <path fill="#3E434B" d="M241.4,100.2l0.1-0.4h0.4l-0.2,2.7h-8.4V102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h5h2.9l0.2,2.7H241l-0.1-0.5c-0.2-1-0.5-1.4-2.6-1.4h-1.5v3.4h0.1c2.3,0,2.4-0.3,2.4-1.8h0.4v4.4h-0.4c0-1.5-0.2-1.8-2.4-1.8h-0.1V99c0,2.3,0.3,2.6,1.8,2.6h0.3C240.9,101.7,241.2,101.3,241.4,100.2z"></path> <path fill="#3E434B" d="M245.6,93.2v-0.4h2.8l6,7.1v-4.1c0-2.3-0.3-2.6-1.8-2.6v-0.4h4.4v0.4c-1.5,0-1.8,0.4-1.8,2.6v7.1h-0.4l-6.6-7.9v4.4c0,2.3,0.3,2.6,1.8,2.6v0.5h-4.4V102c1.5,0,1.8-0.4,1.8-2.6v-3.6C247.4,93.5,247.1,93.2,245.6,93.2z"></path> <path fill="#3E434B" d="M260.6,102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h4.8c3.8,0,5.5,2.2,5.5,4.9c0,2.7-1.7,4.9-5.5,4.9h-4.8V102z M265.5,93.5c-0.1,0-1.1,0-1.5,0v6.4c0,1.5,0.2,1.7,1.3,1.7h0.2c3,0,3.6-2.3,3.6-4.1C269.1,95.8,268.5,93.5,265.5,93.5z"></path> <path fill="#3E434B" d="M282.3,100.2l0.1-0.4h0.4l-0.2,2.7h-8.4V102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h5h2.9l0.2,2.7h-0.5l-0.1-0.5c-0.2-1-0.5-1.4-2.6-1.4h-1.5v3.4h0.1c2.3,0,2.4-0.3,2.4-1.8h0.4v4.4h-0.4c0-1.5-0.2-1.8-2.4-1.8h-0.1V99c0,2.3,0.3,2.6,1.8,2.6h0.3C281.7,101.7,282,101.3,282.3,100.2z"></path> <path fill="#3E434B" d="M286.4,93.2v-0.4h2.8l6,7.1v-4.1c0-2.3-0.3-2.6-1.8-2.6v-0.4h4.4v0.4c-1.5,0-1.8,0.4-1.8,2.6v7.1h-0.4l-6.6-7.9v4.4c0,2.3,0.3,2.6,1.8,2.6v0.5h-4.4V102c1.5,0,1.8-0.4,1.8-2.6v-3.6C288.2,93.5,287.9,93.2,286.4,93.2z"></path> <path fill="#3E434B" d="M304,93.6c-2.1,0-2.3,0.4-2.5,1.4l-0.1,0.4h-0.4l0.1-2.8h10.1l0.2,2.8h-0.5l-0.1-0.4c-0.3-1.1-0.5-1.4-2.6-1.4h-1.2v5.8c0,2.3,0.3,2.6,1.8,2.6v0.5h-5.2V102c1.5,0,1.8-0.4,1.8-2.6v-5.8H304z"></path> <path fill="#3E434B" d="M323.6,102.9c-1.2,0-2.1-0.6-2.5-0.8c-0.1,0.2-0.4,0.5-0.4,0.8h-0.4V99h0.4c0.2,1.9,1.4,3,3.1,3c1,0,1.7-0.5,1.7-1.5c0-0.8-0.6-1.4-1.9-2l-1.5-0.8c-1.1-0.6-1.9-1.5-1.9-2.8c0-1.4,1.2-2.6,2.8-2.6c0.9,0,1.7,0.3,2.1,0.7c0.1-0.1,0.3-0.3,0.3-0.7h0.5v3.8h-0.5c-0.1-1.4-0.7-3-2.4-3c-0.9,0-1.6,0.5-1.6,1.3c0,0.8,0.6,1.2,2,1.9l1.5,0.8c1.3,0.7,1.8,1.7,1.8,2.6C326.8,101.6,325.4,102.9,323.6,102.9z"></path> <path fill="#3E434B" d="M335.3,102v0.5h-5.2V102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h4.7c2.3,0,3.6,1.2,3.6,2.8c0,1.6-1.3,2.8-3.6,2.8h-1.3v1.1C333.6,101.7,333.8,102,335.3,102z M334.8,93.5h-1.3v3.9h1.3c1.3,0,1.9-0.9,1.9-1.9C336.7,94.4,336.1,93.5,334.8,93.5z"></path> <path fill="#3E434B" d="M341.4,102.5V102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h5.2v0.4c-1.5,0-1.8,0.4-1.8,2.6v3.6c0,2.3,0.3,2.6,1.8,2.6v0.5H341.4z"></path> <path fill="#3E434B" d="M357.1,100c0.9,1.1,1.9,1.9,3,2.1v0.5h-2.9l-3.1-4.2h-0.6v1.1c0,2.3,0.3,2.6,1.8,2.6v0.5h-5.2V102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h4.7c2.3,0,3.6,1.2,3.6,2.8c0,1.4-1,2.5-2.7,2.7L357.1,100z M354.8,93.5h-1.3v3.9h1.3c1.3,0,1.9-0.9,1.9-1.9C356.7,94.4,356.1,93.5,354.8,93.5z"></path> <path fill="#3E434B" d="M363.2,102.5V102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h5.2v0.4c-1.5,0-1.8,0.4-1.8,2.6v3.6c0,2.3,0.3,2.6,1.8,2.6v0.5H363.2z"></path> <path fill="#3E434B" d="M374.6,93.6c-2.1,0-2.3,0.4-2.5,1.4l-0.1,0.4h-0.4l0.1-2.8h10.1l0.2,2.8h-0.5l-0.1-0.4c-0.3-1.1-0.5-1.4-2.6-1.4h-1.2v5.8c0,2.3,0.3,2.6,1.8,2.6v0.5h-5.2V102c1.5,0,1.8-0.4,1.8-2.6v-5.8H374.6z"></path> </g> <g> <rect x="2.8" y="14.4" fill="#B8B9B9" width="177.5" height="0.4"></rect> <rect x="249.8" y="14.4" fill="#B8B9B9" width="179.6" height="0.4"></rect> </g> <g> <path fill="#3E434B" d="M194,7.7c-2.7,0-2.9,0.5-3.2,1.9l-0.1,0.6H190l0.2-3.6h12.9l0.2,3.6h-0.6l-0.1-0.6c-0.3-1.4-0.7-1.9-3.4-1.9h-1.5v7.4c0,2.9,0.4,3.4,2.3,3.4v0.6h-6.7v-0.6c1.9,0,2.3-0.5,2.3-3.4V7.7H194z"></path> <path fill="#3E434B" d="M217.7,11.9v-1.4c0-2.9-0.3-3.4-2.3-3.4V6.6h6.6v0.6c-1.9,0-2.3,0.5-2.3,3.4v4.6c0,2.9,0.4,3.4,2.3,3.4v0.6h-6.6v-0.6c1.9,0,2.3-0.5,2.3-3.4V13h-6.6v2.1c0,2.9,0.3,3.4,2.3,3.4v0.6h-6.6v-0.6c1.9,0,2.3-0.5,2.3-3.4v-4.6c0-2.9-0.3-3.4-2.3-3.4V6.6h6.6v0.6c-1.9,0-2.3,0.5-2.3,3.4v1.4H217.7z"></path> <path fill="#3E434B" d="M237,16.2l0.1-0.6h0.6l-0.2,3.5h-10.8v-0.6c1.9,0,2.3-0.5,2.3-3.4v-4.6c0-2.9-0.3-3.4-2.3-3.4V6.6h6.4h3.7l0.2,3.5h-0.6l-0.1-0.6c-0.3-1.3-0.7-1.9-3.3-1.9H231v4.3h0.2c2.9,0,3.1-0.3,3.1-2.3h0.6v5.6h-0.6c0-1.9-0.2-2.3-3.1-2.3H231v1.7c0,2.9,0.3,3.4,2.3,3.4h0.3C236.3,18,236.7,17.6,237,16.2z"></path> </g> <g> <path fill="#3E434B" d="M59.1,58.6V32c0-0.9,0.7-1.7,1.7-1.7h7.6c0.9,0,1.7,0.7,1.7,1.7v26.3c0,8.1,4,12.2,10.7,12.2c6.6,0,10.7-4,10.7-11.9V32c0-0.9,0.7-1.7,1.7-1.7h7.6c0.9,0,1.7,0.7,1.7,1.7v26.3c0,15-8.4,22.3-21.7,22.3S59.1,73.2,59.1,58.6z"></path> <path fill="#3E434B" d="M110.3,30.4h34.4c0.9,0,1.7,0.7,1.7,1.7v6.4c0,0.9-0.7,1.7-1.7,1.7h-24.9v10h21.7c0.9,0,1.7,0.7,1.7,1.7v6.4c0,0.9-0.7,1.7-1.7,1.7h-21.7v10.4h25.2c0.9,0,1.7,0.7,1.7,1.7v6.4c0,0.9-0.7,1.7-1.7,1.7h-34.7c-0.7,0-1.3-0.6-1.3-1.3V31.7C109.1,30.9,109.6,30.4,110.3,30.4z"></path> <path fill="#3E434B" d="M149.8,71.4l4.3-5.2c0.6-0.7,1.6-0.8,2.3-0.2c4.1,3.1,8.4,5,13.5,5c4.5,0,7.1-1.8,7.1-4.7v-0.1c0-2.8-1.7-4.2-10-6.3c-10-2.5-16.4-5.3-16.4-15.1v-0.1c0-9,7.2-14.9,17.3-14.9c6.6,0,12.3,1.9,17.1,5.3c0.7,0.5,0.9,1.5,0.4,2.3l-3.8,5.5c-0.5,0.7-1.5,1-2.2,0.5c-3.9-2.5-7.8-4-11.6-4c-4.2,0-6.4,1.9-6.4,4.3v0.1c0,3.3,2.1,4.3,10.7,6.5c10,2.6,15.7,6.2,15.7,14.8v0.1c0,9.8-7.5,15.3-18.2,15.3c-7,0-14-2.3-19.7-6.9C149.3,73.1,149.2,72.1,149.8,71.4z"></path> <path fill="#3E434B" d="M202.1,40.4h-11.9c-0.9,0-1.7-0.7-1.7-1.7V32c0-0.9,0.7-1.7,1.7-1.7H225c0.9,0,1.7,0.7,1.7,1.7v6.7c0,0.9-0.7,1.7-1.7,1.7H213v38.4c0,0.5-0.4,1-1,1h-8.9c-0.5,0-1-0.4-1-1V40.4z"></path> <path fill="#3E434B" d="M55.4,55L55.4,55c0-2-1.6-3.6-3.6-3.6l-17,0c-0.8,0-1.5,0.7-1.5,1.5v6.5c0,0.8,0.7,1.5,1.5,1.5h8.7c-2,5.8-7.5,9.9-14.3,9.9c-8.8,0-15-7.1-15-15.5V55c0-8.4,6-15.3,14.7-15.4c5.1,0,8.3,1.5,11.6,4.1c0.6,0.5,1.6,0.4,2.1-0.3l4.9-5.9c0.6-0.7,0.4-1.7-0.3-2.2c-4.8-3.7-10-5.7-18.1-5.8l0,0c0,0-0.1,0-0.1,0l0,0C13.9,29.6,2.8,41.1,2.8,55.1v0.1c0,14.1,11,25.4,26.2,25.4c13.2,0,23.2-8.6,25.7-19.9h0v0c0.4-1.8,0.6-3.7,0.6-5.6V55z"></path> </g> <g> <path fill="#B8B9B9" d="M231.5,31.3c0-0.5,0.4-1,1-1H253c5.7,0,10.1,1.6,12.9,4.4c2.3,2.3,3.4,5,3.4,8.4v0.1c0,5.6-3,8.7-6.5,10.7c5.7,2.2,9.3,5.5,9.3,12.2v0.1c0,9-7.4,13.6-18.5,13.6h-21.1c-0.5,0-1-0.4-1-1V31.3z M250.7,50.4c4.8,0,7.8-1.6,7.8-5.2V45c0-3.3-2.5-5.1-7.1-5.1h-9.3v10.5H250.7z M253.6,70.3c4.8,0,7.7-1.7,7.7-5.4v-0.1c0-3.3-2.5-5.4-8.1-5.4h-11.1v10.9H253.6z"></path> <path fill="#B8B9B9" d="M273.7,55.2v-0.1c0-14.1,11.1-25.6,26.4-25.6c15.3,0,26.2,11.4,26.2,25.4v0.1c0,14.1-11.1,25.6-26.4,25.6C284.7,80.7,273.7,69.3,273.7,55.2z M315,55.2v-0.1c0-8.5-6.2-15.5-15-15.5c-8.8,0-14.8,6.9-14.8,15.4v0.1c0,8.5,6.2,15.5,15,15.5C308.9,70.6,315,63.7,315,55.2z"></path> <path fill="#B8B9B9" d="M329.6,55.2v-0.1c0-14.1,11.1-25.6,26.4-25.6c15.3,0,26.2,11.4,26.2,25.4v0.1c0,14.1-11.1,25.6-26.4,25.6C340.5,80.7,329.6,69.3,329.6,55.2z M370.8,55.2v-0.1c0-8.5-6.2-15.5-15-15.5C347,39.5,341,46.5,341,55v0.1c0,8.5,6.2,15.5,15,15.5C364.7,70.6,370.8,63.7,370.8,55.2z"></path> <path fill="#B8B9B9" d="M428.7,30.4h-10.8c-0.5,0-0.9,0.2-1.2,0.6l-19,21.8c-1.2,1.4-1.2,3.4,0,4.7l19,21.8c0.3,0.4,0.8,0.6,1.2,0.6h10.8c0.6,0,1-0.8,0.6-1.3l-20.9-23.5l20.9-23.5C429.7,31.1,429.3,30.4,428.7,30.4z"></path> <path fill="#B8B9B9" d="M395.8,79.8h-8.3c-0.7,0-1.3-0.6-1.3-1.3V31.7c0-0.7,0.6-1.3,1.3-1.3h8.3c0.7,0,1.3,0.6,1.3,1.3v46.9C397.1,79.3,396.5,79.8,395.8,79.8z"></path> </g> </g> <a xlink:href="/" target="_top"> <rect x="0" y="0" width="100%" height="100%" style="stroke: #333366; fill: #6666cc;" fill-opacity="0" stroke-opacity="0"></rect> </a> </svg>';
var svgImg = '<a class="gb-logo" href="https://theguestbook.com/thereefplayacar" target="_blank"><img class="gb-new-logo" align="left" src="https://az736576.vo.msecnd.net/assets/theguestbook_new_logo_color_mark_70_width-76492b61c17c16337583c5db01a03b79.png"></a>';
var banner_texts = {
    'direct_booking_text':{
      'en': '+ EARN {amount} CASH REWARDS',
      'es': '+ {amount} RECOMPENSAS EN EFECTIVO',
      'fr': '+ {amount} De Récompense En Argent sur toutes les chambres',
      'de': '+ {amount} CASHBACK VORTEILE ERHALTEN',
      'pt': '+ {amount} Recompensas em dinheiro',
      'it': '+ {amount} Ricompensati',
    },
    'cash_rewards': {
        'en': 'Cash Rewards',
        'es': 'Recompensas en efectivo',
        'de': 'Rückerstattung',
        'sp': 'Recompensas',
        'pt': 'Recompensas em dinheiro',
        'it': 'Ricompensati',
        'fr': 'remise en liquide'
    },
    'cash_rewards_earned': {
      'en': 'Cash Rewards Earned',
      'es': 'Recompensas en efectivo',
      'de': 'Rückerstattung',
    	'sp': 'Recompensas',
    	'pt': 'Recompensas em dinheiro',
    	'it': 'Ricompensati',
    	'fr': 'remise en liquide'
  },
    'static_banner':{
        'en': 'EARN 15% CASH REWARDS ON HOTEL RATES',
        'es': 'Todas las reservas directas ganan 15% de recompensas en efectivo',
        'fr': 'Gagnez 15% De Récompense En Argent sur toutes les chambres',
        'de': '15% CASHBACK VORTEILE ERHALTEN',
        'pt': '15% Recompensas em dinheiro',
        'it': '15% Ricompensati',
    },
    'static_banner_20':{
        'en': 'EARN 20% CASH REWARDS ON HOTEL RATES',
        'es': 'Todas las reservas directas ganan 20% de recompensas en efectivo',
        'fr': 'Gagnez 20% De Récompense En Argent sur toutes les chambres',
        'de': '20% CASHBACK VORTEILE ERHALTEN'
    },
    'direct_booking_text_mobile':{
        'en': '<span class="banner-text">All direct bookings <br /> earn </span> \
                         <span class="banner-text gb-green">15%<span class="mobile-cash-class"> Cash</span> Rewards</span>',
        'fr': '<span class="banner-text">All direct bookings <br /> earn </span> \
                         <span class="banner-text gb-green">15%<span class="mobile-cash-class"> Cash</span> Rewards</span>',
        'es': '<span class="banner-text">All direct bookings <br /> earn </span> \
                         <span class="banner-text gb-green">15%<span class="mobile-cash-class"> Cash</span> Rewards</span>',
        'de': '<span class="banner-text">All direct bookings <br /> earn </span> \
                         <span class="banner-text gb-green">15%<span class="mobile-cash-class"> Cash</span> Rewards</span>',
        'it': '<span class="banner-text">All direct bookings <br /> earn </span> \
                         <span class="banner-text gb-green">15%<span class="mobile-cash-class"> Cash</span> Rewards</span>',
        'pt': '<span class="banner-text">All direct bookings <br /> earn </span> \
                         <span class="banner-text gb-green">15%<span class="mobile-cash-class"> Cash</span> Rewards</span>',
    },
    'direct_booking_text_mobile_20':{
        'en': '<span class="banner-text">All direct bookings <br /> earn </span> \
                         <span class="banner-text gb-green">20%<span class="mobile-cash-class"> Cash</span> Rewards</span>',
        'fr': '<span class="banner-text">All direct bookings <br /> earn </span> \
                         <span class="banner-text gb-green">20%<span class="mobile-cash-class"> Cash</span> Rewards</span>',
        'es': '<span class="banner-text">All direct bookings <br /> earn </span> \
                         <span class="banner-text gb-green">20%<span class="mobile-cash-class"> Cash</span> Rewards</span>',
        'de': '<span class="banner-text">All direct bookings <br /> earn </span> \
                         <span class="banner-text gb-green">20%<span class="mobile-cash-class"> Cash</span> Rewards</span>',
    },
    
    'tooltip_text':{
      'header_text': {
        'en': 'ENROLL WHEN YOU BOOK & CHOOSE YOUR REWARD AFTER YOUR STAY:',
        'es': 'COMO AGRADECIMIENTO EXTRA POR RESERVAR CON NOSOTROS:',
        'de': 'ALS ZUSÄTZLICHER DANK FÜR IHRE BUCHUNG:',
        'fr': 'ENROLL WHEN YOU BOOK & CHOOSE YOUR REWARD AFTER YOUR STAY:',
        'pt': 'INSCREVA-SE AO RESERVAR E RECEBA A SUA RECOMPENSA APÓS A ESTADIA:',
        'it': 'ENROLL WHEN YOU BOOK & CHOOSE YOUR REWARD AFTER YOUR STAY:',
      },
      'footer_text': {
        'en': '<div class="for-gb-members">For members of ' + white_label + ' only - enroll for free on the checkout page<br>* Rewards are based on room rate totals, excluding taxes and fees.</div>',
        'es': '<div class="for-gb-members"><sup>*</sup> Solo para los miembros de ' + white_label + ' (inscríbase gratis en la página de confirmación)</div>',
        'fr': '<div class="for-gb-members">* Uniquement pour les membres de ' + white_label + ' (inscrivez-vous gratuitement sur la page de confirmation).</div>',
        'de': '<div class="for-gb-members">* Nur für Mitglieder von ' + white_label + ' (gratis Anmeldung auf der Bestätigungsseite).</div>',
        'pt': '<div class="for-gb-members">* Somente para membros do ' + white_label + ' (inscreva-se gratuitamente na página de checkout)</div>',
        'it': '<div class="for-gb-members">* Solo per i membri ' + white_label + ' (inscriviti gratuitamente alla pagina di conferma).</div>',
        
      },
      
      'content_text': {
          'en': "<li> \
                                    <span class='bold-font'>5% Cash Back</span>\
                                    via PayPal or gift cards; or \
                                 </li> \
                                 <li> \
                                    <span class='bold-font'>5% Cash for a Cause</span> \
                                    to donate to your favorite charity; or \
                                 <li> \
                                    <span class='bold-font'>15% Cash Forward</span> \
                                     with any of The Guestbook's " + number_of_hotels + "+ hotels \
                                 </li> \
                             ",
       'es': "<li> \
                                    <span class='bold-font'>5% de <span class='uppercase'>Reembolso\
                                   en efectivo</span></span> a través de PayPal o tarjetas de regalo; o \
                                 </li> \
                                 <li> \
                                    <span class='bold-font'>5% de <span class='uppercase'>Donación Caritativa</span></span> \
                                    a tu causa favorita; o \
                                 <li> \
                                    <span class='bold-font'>15% de <span class='uppercase'>Cash Forward</span></span> \
                                     para una estancia gratis en más de " + number_of_hotels + " hoteles \
                                 </li> \
                             ",
        'fr': "<li> \
                                    <span class='bold-font'>5% <span class='uppercase'>Récompense\
                                    </span></span> via Paypal ou gift cards; ou \
                                 </li> \
                                 <li> \
                                    <span class='bold-font'>5% <span class='uppercase'>don de charité</span></span> \
                                    à votre cause préférée; ou \
                                 <li> \
                                    <span class='bold-font'>15% <span class='uppercase'>Cash Forward</span></span> \
                                    pour un futur séjour dans une autre destination (dans " + number_of_hotels + "+ autres hôtels) \
                                 </li> \
                             ",
        'de': "<li> \
                                    <span class='bold-font'>5% <span class='uppercase'>Cash Back\
                                   </span></span> via PayPal oder Gutschein; oder \
                                 </li> \
                                 <li> \
                                    <span class='bold-font'>5% <span class='uppercase'>Wohltätigkeits Spende</span></span> \
                                    um an Ihre bevorzugte Wohltätigkeitsorganisation zu spenden; oder \
                                 <li> \
                                    <span class='bold-font'>15% <span class='uppercase'>Cash Forward</span></span> \
                                    für einen zukünftigen Aufenthalts in über " + number_of_hotels + "+ anderen Hotels) \
                                 </li> \
                             ",
          'it': "<li> \
                                    <span class='bold-font'>5% <span class='uppercase'>Cash Back\
                                   </span></span> via PayPal o carta regalo; o \
                                 </li> \
                                 <li> \
                                    <span class='bold-font'>5% <span class='uppercase'>donazione caritatevole</span></span> \
                                    alla tua causa favorita; o \
                                 <li> \
                                    <span class='bold-font'>15% <span class='uppercase'>Cash Forward</span></span> \
                                    per vincere un soggiorno gratuito in più di " + number_of_hotels + " diversi hotel \
                                 </li> \
                             ",
          'pt': "<li> \
                                    <span class='bold-font'>5% <span class='uppercase'>VOLTA A DINHEIRO\
                                   </span></span> via PayPal ou cartões oferta; ou \
                                 </li> \
                                 <li> \
                                    <span class='bold-font'>5% <span class='uppercase'>OFEREÇA A UMA CAUSA</span></span> \
                                    para doar à sua instituição de caridade preferida; ou \
                                 <li> \
                                    <span class='bold-font'>15% <span class='uppercase'>Cash Forward</span></span> \
                                    para ganhar uma estadia gratuita em mais de " + number_of_hotels + "+ hotéis diferentes \
                                 </li> \
                             "
      },
      'content_text_20': {
          'en': "<li> \
                                    <span class='bold-font'>5% Cash Back</span>\
                                    via PayPal or gift cards; or \
                                 </li> \
                                 <li> \
                                    <span class='bold-font'>5% Cash for a Cause</span> \
                                    to donate to your favorite charity; or \
                                 <li> \
                                    <span class='bold-font'><span style='text-decoration: line-through;'>15%</span> 20% Cash Forward</span> \
                                     with any of The Guestbook's " + number_of_hotels + "+ hotels \
                                 </li> \
                             ",
       'es': "<li> \
                                    <span class='bold-font'>5% de <span class='uppercase'>Reembolso\
                                   en efectivo</span></span> a través de PayPal o tarjetas de regalo; o \
                                 </li> \
                                 <li> \
                                    <span class='bold-font'>5% de <span class='uppercase'>Donación Caritativa</span></span> \
                                    a tu causa favorita; o \
                                 <li> \
                                    <span class='bold-font'><span style='text-decoration: line-through;'>15%</span> 20% de <span class='uppercase'>Cash Forward</span></span> \
                                     para una estancia gratis en más de " + number_of_hotels + " hoteles \
                                 </li> \
                             "
      }
    },
   
   
    'booking_confirmation_text': {
      "en" : "<div class='booking-conf-banner-text-wrapper list-banner-text booking-confirmation-text-desktop booking-confirmation-text banner-text-for-prices-view js-price-view-banner-text'>" +
                        "<div class='booking-conf-banner-image'>" + svgImg + "</div>" +
                        "<div class='booking-conf-banner-text'>" + 
                            "For this stay, you'll earn <span class='bold-font gb-green'> {amount} Cash Back</span> via Paypal or gift cards," + 
                            "<span class='bold-font gb-green'> {amount} Cash for a Cause</span> to donate to your favorite charity, or " + 
                            "<span class='bold-font gb-green'>{trip_amount} Cash Forward</span> towards a future " +
                        "stay in another destination.</div>" +
                    "</div>",
      "es" : "<div class='booking-conf-banner-text-wrapper list-banner-text booking-confirmation-text-desktop booking-confirmation-text banner-text-for-prices-view js-price-view-banner-text'>\
                        <div class='booking-conf-banner-image'>" + svgImg + "</div>" +
                        "<div class='booking-conf-banner-text'>" +
                            "Para esta estadía, obtendrá <span class='bold-font gb-green'> {amount} Cash Back</span> a través de Paypal o tarjetas de regalo, o " +
                            "<span class='bold-font gb-green'> {amount} de donación caritativa</span> a su causa favorita, o " +
                            "<span class='bold-font gb-green'>{trip_amount} Cash Forward</span> para una futura " +
                        "estadía en otro destino.</div>" +
                    "</div>",
      "fr" : "<div class='booking-conf-banner-text-wrapper list-banner-text booking-confirmation-text-desktop booking-confirmation-text banner-text-for-prices-view js-price-view-banner-text'>" +
                    "<div class='booking-conf-banner-image'>" + svgImg + "</div>" +
                    "<div class='booking-conf-banner-text'>" + 
                        "Pour ce séjour, vous serez recompensé[e] selon votre choix entre <span class='bold-font gb-green'> {amount} Récompense</span> via Paypal ou gift cards," + 
                        "<span class='bold-font gb-green'> {amount} don de charité</span> à votre cause préférée, ou " + 
                        "<span class='bold-font gb-green'>{trip_amount} Cash Forward</span> pour des prochains séjours.</div>" +
                "</div>",
      "de" : "<div class='booking-conf-banner-text-wrapper list-banner-text booking-confirmation-text-desktop booking-confirmation-text banner-text-for-prices-view js-price-view-banner-text'>" +
                    "<div class='booking-conf-banner-image'>" + svgImg + "</div>" +
                    "<div class='booking-conf-banner-text'>" + 
                        "Für diesen Aufenthalt, erhalten Sie nach Wahl <span class='bold-font gb-green'> {amount} Cash Back</span> via Paypal oder gift cards," + 
                        "<span class='bold-font gb-green'> {amount} Wohltätigkeits Spende</span> um an Ihre bevorzugte Wohltätigkeitsorganisation zu spenden, oder " + 
                        "<span class='bold-font gb-green'>{trip_amount} Cash Forward</span> für zukünftige Reisen.</div> " +
                "</div>",
      "it" : "<div class='booking-conf-banner-text-wrapper list-banner-text booking-confirmation-text-desktop booking-confirmation-text banner-text-for-prices-view js-price-view-banner-text'>" +
                    "<div class='booking-conf-banner-image'>" + svgImg + "</div>" +
                    "<div class='booking-conf-banner-text'>" + 
                        "Per questo soggiorno, riceverai la tua scelta per <span class='bold-font gb-green'> {amount} Cash Back</span> via Paypal o gift cards," + 
                        "<span class='bold-font gb-green'> {amount} donazione caritatevole</span> alla tua causa favorita, o " + 
                        "<span class='bold-font gb-green'>{trip_amount} Cash Forward</span> verso un viaggio futuro.</div>" +
                "</div>",
      "pt" : "<div class='booking-conf-banner-text-wrapper list-banner-text booking-confirmation-text-desktop booking-confirmation-text banner-text-for-prices-view js-price-view-banner-text'>" +
                    "<div class='booking-conf-banner-image'>" + svgImg + "</div>" +
                    "<div class='booking-conf-banner-text'>" + 
                        "Para esta  estadia, você poderá escolher entre <span class='bold-font gb-green'> {amount} VOLTA A DINHEIRO</span> via Paypal ou gift cards," + 
                        "<span class='bold-font gb-green'> {amount} Donación Caritativa</span> para doar à sua instituição de caridade preferida, ou " + 
                        "<span class='bold-font gb-green'>{trip_amount} Cash Forward</span> para uma futura estadia em outro destino.</div>" +
                "</div>"
    },
    'guestbook_membership': {
      'not_a_member': {        
        'en': '\
                    <label><input type="checkbox" class="join_gb_membership">\
                        <span class="enroll_text">Enroll in <a class="gb-link" href="' + rewards_link + '" target="_blank" class="join-gb-link">' + white_label + '</a> now\
                            for your choice of:\
                            <span class="bold-font">{amount} Cash Back</span>, <span class="bold-font">{amount} Cash for a Cause</span>\
                           , or <span class="bold-font">{trip_amount} Cash Forward</span> ' + terms_message,
        'es': '\
                    <label><input type="checkbox" class="join_gb_membership">\
                        <span class="enroll_text">Inscríbase en <a class="gb-link" href="' + rewards_link + '" target="_blank" class="join-gb-link">' + white_label + '</a>\
                            para su elección de:\
                            <span class="bold-font">{amount} Reembolso en efectivo</span>, o <span class="bold-font">{amount} Donación caritativa</span>\
                           , o <span class="bold-font">{trip_amount} Cash Forward</span> para una estancia \
                           gratis en más de ' + number_of_hotels + ' hoteles. \
                           Las recompensas se facilitan a través de The Guestbook, y al unirse acepta los <a class="gb-link" href="https://theguestbook.com/assets/terms.pdf" target="_blank" style="text-decoration: underline;"">Términos de uso</a>. \
                           </p></div></span>',
        'fr': '\
                    <label><input type="checkbox" class="join_gb_membership">\
                        <span class="enroll_text">Inscrivez-vous maintenant à <a class="gb-link" href="' + rewards_link + '" target="_blank" class="join-gb-link">' + white_label + '</a>\
                            pour votre choix entre:\
                            <span class="bold-font">{amount} Récompense</span>, ou <span class="bold-font">{amount} don de charité</span>\
                           , ou <span class="bold-font">{trip_amount} Cash Forward</span> (<a class="gb-link" href="https://theguestbook.com/assets/terms.pdf" target="_blank" style="text-decoration: underline;"">conditions d\'utilisation</a>). \
                           </p></div></span>',
        'de': '\
                    <label><input type="checkbox" class="join_gb_membership">\
                        <span class="enroll_text">Jetzt bei <a class="gb-link" href="' + rewards_link + '" target="_blank" class="join-gb-link">' + white_label + '</a>\
                            mitmachen und Vorteil wählen:\
                            <span class="bold-font">{amount} Cash Back</span>, oder <span class="bold-font">{amount} Wohltätigkeits Spende</span>\
                           , oder <span class="bold-font">{trip_amount} Cash Forward</span> (<a class="gb-link" href="https://theguestbook.com/assets/terms.pdf" target="_blank" style="text-decoration: underline;"">Bestimmungen</a>). \
                           </p></div></span>',
        'it': '\
                    <label><input type="checkbox" class="join_gb_membership">\
                        <span class="enroll_text">Inscrivetevi al <a class="gb-link" href="' + rewards_link + '" target="_blank" class="join-gb-link">' + white_label + '</a>\
                            ora per la vostra scelta:\
                            <span class="bold-font">{amount} Cash Back</span>, o <span class="bold-font">{amount} donazione caritatevole</span>\
                           , o <span class="bold-font">{trip_amount} Cash Forward</span> (<a class="gb-link" href="https://theguestbook.com/assets/terms.pdf" target="_blank" style="text-decoration: underline;"">i termini di utilizzo</a>). \
                           </p></div></span>',
        'pt': '\
                    <label><input type="checkbox" class="join_gb_membership">\
                        <span class="enroll_text">Inscreva-se já no <a class="gb-link" href="' + rewards_link + '" target="_blank" class="join-gb-link">' + white_label + '</a>\
                            escolha:\
                            <span class="bold-font">{amount} VOLTA A DINHEIRO</span>, ou <span class="bold-font">{amount} OFEREÇA A UMA CAUSA</span>\
                           , ou <span class="bold-font">{trip_amount} Cash Forward</span> (<a class="gb-link" href="https://theguestbook.com/assets/terms.pdf" target="_blank" style="text-decoration: underline;"">termos de utilização</a>). \
                           </p></div></span>'
      },
      'member': {
        'en': '</div>\
                            <div class="right"><p>Thank you for being a member of ' +  white_label + guestbook_network + '. On this stay, \
                            you\'ll receive your choice of: <span class="bold-font">{amount} Cash Back</span>, <span class="bold-font">{amount} Cash for a Cause</span>, or \
                            <span class="bold-font">{trip_amount} Cash Forward</span> towards a future stay in another destination (redeemable at ' + number_of_hotels + '+ other hotels).</span></p></div>',
        'es': '</div>\
                            <div class="right"><p>Gracias por ser miembro de ' +  white_label + '. En esta estadía, recibirá su opción de: \
                            <span class="bold-font"> {amount} de reembolso</span>, o\
                            <span class="bold-font"> {amount} de donación caritativa</span>, o\
                            <span class="bold-font">{trip_amount} de Cash Forward</span> para una estancia \
                           gratis en más de ' + number_of_hotels + ' hoteles.</p></div>',
        'fr': '</div>\
                            <div class="right"><p>Merci d\'être membre de ' +  white_label + '. Pour ce séjour, vous serez recompensé[e] selon votre choix entre: \
                            <span class="bold-font"> {amount} Récompense</span>, ou\
                            <span class="bold-font"> {amount} don de charité</span>, ou\
                            <span class="bold-font">{trip_amount} Cash Forward</span>.</p></div>',
        'de': '</div>\
                            <div class="right"><p>Danke das Sie ein Mitglied von ' +  white_label + '. Für diesen Aufenthalt, erhalten Sie nach Wahl: \
                            <span class="bold-font"> {amount} Cash Back</span>, oder\
                            <span class="bold-font"> {amount} Wohltätigkeits Spende</span>, oder\
                            <span class="bold-font">{trip_amount} Cash Forward</span>.</p></div>',
        'it': '</div>\
                            <div class="right"><p>Grazie per aver partecipato al ' +  white_label + '. Per questo soggiorno, riceverai la tua scelta per: \
                            <span class="bold-font"> {amount} Cash Back</span>, o\
                            <span class="bold-font"> {amount} donazione caritatevole</span>, o\
                            <span class="bold-font">{trip_amount} Cash Forward</span>.</p></div>',
        'pt': '</div>\
                            <div class="right"><p>Obrigado por fazer parte do ' +  white_label + '. Para esta  estadia, você poderá escolher entre: \
                            <span class="bold-font"> {amount} VOLTA A DINHEIRO</span>, ou\
                            <span class="bold-font"> {amount} OFEREÇA A UMA CAUSA</span>, ou\
                            <span class="bold-font">{trip_amount} Cash Forward</span>.</p></div>'
      }
    },
    'guestbook_membership_20': {
      'not_a_member': {        
        'en': '\
                    <label><input type="checkbox" class="join_gb_membership">\
                        <span class="enroll_text">Enroll in <a class="gb-link" href="' + rewards_link + '" target="_blank" class="join-gb-link">' + white_label + '</a> now\
                            for your choice of:\
                            <span class="bold-font">{amount} Cash Back</span>, <span class="bold-font">{amount} Cash for a Cause</span>\
                           , or <span class="bold-font">{trip_amount} Cash Forward</span> ' + terms_message_20,
        'es': '\
                    <label><input type="checkbox" class="join_gb_membership">\
                        <span class="enroll_text">Inscríbase en <a class="gb-link" href="' + rewards_link + '" target="_blank" class="join-gb-link">' + white_label + '</a> now\
                            para su elección de:\
                            <span class="bold-font">{amount} Reembolso en efectivo</span>, o <span class="bold-font">{amount} Donación caritativa</span>\
                           , o <span class="bold-font">{trip_amount} Cash Forward</span> para una estancia \
                           gratis en más de ' + number_of_hotels + ' hoteles. \
                           Las recompensas se facilitan a través de The Guestbook, y al unirse acepta los <a class="gb-link" href="https://theguestbook.com/assets/terms.pdf" target="_blank" style="text-decoration: underline;"">Términos de uso</a>. \
                           </p></div></span>'
      },
      'member': {
        'en': '</div>\
                            <div class="right"><p>Thank you for being a member of ' +  white_label + guestbook_network + '. On this stay, \
                            you\'ll receive your choice of: <span class="bold-font">{amount} Cash Back</span>, <span class="bold-font">{amount} Cash for a Cause</span>, or \
                            <span class="bold-font">{trip_amount} Cash Forward</span> towards a future stay in another destination (redeemable at ' + number_of_hotels + '+ other hotels).</span> The Cash Forward includes an extra 5% bonus for stays with checkout dates through May 2020.</p></div>',
        'es': '</div>\
                            <div class="right"><p>Gracias por ser miembro de ' +  white_label + '. En esta estadía, recibirá su opción de: \
                            <span class="bold-font"> {amount} de reembolso</span>, o\
                            <span class="bold-font"> {amount} de donación caritativa</span>, o\
                            <span class="bold-font">{trip_amount} de Cash Forward</span> para una estancia \
                           gratis en más de ' + number_of_hotels + ' hoteles.</p></div>'
      }
    }
};


        var accesors = {
            'static_banner': '.travel-cal-legend',        
            'dynamic_banner': '.hotel-listing-text .price, .preci:visible, .room-row-list .price-c',
            'dynamic_banner_modal': '.fancybox-wrap .hotel-price',
            'total_booking_banner': '.group.total-price'
            }

        if (window.jQuery === undefined || window.jQuery.fn.jquery !== '2.1.4') {
            var script_tag = document.createElement('script');
            script_tag.setAttribute("type", "text/javascript");
            script_tag.setAttribute("src",
                "https://az736576.vo.msecnd.net/assets/jquery-2.1.4.min-e1dcbfff12f1137779a5089b5acf691c.js");
            if (script_tag.readyState) {
                script_tag.onreadystatechange = function() {
                    if (this.readyState == 'complete' || this.readyState == 'loaded') {
                        scriptLoadHandler();
                    }
                };
            } else {
                script_tag.onload = scriptLoadHandler;
            }
            (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
        } else {
            jQuery = window.jQuery;
            var script_tag = document.createElement('script');
            script_tag.setAttribute("type", "text/javascript");
            script_tag.setAttribute("src", "https://az736576.vo.msecnd.net/assets/moment.min-f79bbd3382e481bdf8881fa7d08fcb46.js");
            (document.getElementsByTagName("head")[0] || document.documentElement || document.head).appendChild(script_tag);
            if (script_tag.readyState) {
                script_tag.onreadystatechange = function() {
                    if (this.readyState == 'complete' || this.readyState == 'loaded') {
                        main();
                    }
                };
            } else {
                script_tag.onload = main;
            }
        }

        function scriptLoadHandler() {
            jQuery = window.jQuery.noConflict(true);
            var script_tag = document.createElement('script');
            script_tag.setAttribute("type", "text/javascript");
            script_tag.setAttribute("src", "https://az736576.vo.msecnd.net/assets/moment.min-f79bbd3382e481bdf8881fa7d08fcb46.js");
            (document.getElementsByTagName("head")[0] || document.documentElement || document.head).appendChild(script_tag);
            if (script_tag.readyState) {
                script_tag.onreadystatechange = function() {
                    if (this.readyState == 'complete' || this.readyState == 'loaded') {
                        main();
                    }
                };
            } else {
                script_tag.onload = main;
            }
        }

        function parseRawPrice(raw_price) {
            return raw_price.
            replace(/\,[0-9]{1,2}$|\.[0-9]{1,2}$/, '-' + raw_price.match(/[0-9]{1,2}$/).toString()).
            replace(/\,|\.|\s/g, '').
            replace('-', '.');
        }

        function isMobileDevice() {
            return (jQuery(window).width() < 785 ||
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))

            ;
        }

        function getDefaultCurrencyCode(){
            if ($("input[name='currency']").val() == "USD") return "USD";
            if ($("input[name='currency']").val() == "MXN") return "MXN";
            if ($("input[name='user-currency']").val() == "USD") return "USD";
            if ($("input[name='user-currency']").val() == "MXN") return "MXN";
            if ($('.custom-price').length) return window.getComputedStyle(document.querySelector('.custom-price'), ':after').content.replace(/\"/g, '');
            if ($('.price-total').length) return window.getComputedStyle(document.querySelector('.price-total'), ':after').content.replace(/\"/g, '');
            return "US$";
        }

        function evenRound(num, decimalPlaces) {
            var decimals = decimalPlaces || 0;
            return Number(Math.round(num+'e'+decimals)+'e-'+decimals);
        }

        function calculateTotalFromRawPrice(rawPriceElement, useNodeValue) {
            if (typeof useNodeValue == 'undefined') {
                useNodeValue = false;
            }
            if (jQuery.isEmptyObject(rawPriceElement)) {
                return false;
            } else {
                var rawPrice = useNodeValue == false ? rawPriceElement.text().trim() : rawPriceElement.nodeValue.trim();
                return parseRawPrice(rawPrice.replace(/[^\d.\,\ ]/g, '').trim());
            }
        }

        function getCurrencySymbol(argAbbreviation) {
            switch (argAbbreviation) {
                case 'USD':
                    return '$';
                    break;
                case 'US$':
                    return '$';
                    break;
                case 'EUR':
                    return '€';
                    break;
                case 'GBP':
                    return '£'
                    break;
                default:
                    return (argAbbreviation + " ");
                    break;
            }
        }

        function get_browser_info() {
            var ua = navigator.userAgent,
                tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if (/trident/i.test(M[1])) {
                tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                return "name: IE" + " version: " + (tem[1] || '');
            }
            if (M[1] === 'Chrome') {
                tem = ua.match(/\bOPR\/(\d+)/)
                if (tem != null) {
                    return "name: Opera" + " version: " + tem[1];
                }
            }
            M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
            if ((tem = ua.match(/version\/(\d+)/i)) != null) {
                M.splice(1, 1, tem[1]);
            }
            //return "name: " + M[0] + " version: " + M[1];
            return M[0] + " " + M[1];
        }

        function main() {

            (function($) {

                $.fn.waitUntilExists = function(handler, shouldRunHandlerOnce, isChild) {
                    var found = 'found';
                    var $this = $(this.selector);
                    var $elements = $this.not(function() {
                        return jQuery(this).data(found);
                    }).each(handler).data(found, true);

                    if (!isChild) {
                        (window.waitUntilExists_Intervals = window.waitUntilExists_Intervals || {})[this.selector] =
                        window.setInterval(function() {
                            $this.waitUntilExists(handler, shouldRunHandlerOnce, true);
                        }, 500);
                    } else if (shouldRunHandlerOnce && $elements.length) {
                        window.clearInterval(window.waitUntilExists_Intervals[this.selector]);
                    }

                    return $this;
                }
                
                $.fn.textIgnoreChildren = function() {
                    return $(this).clone().children().remove().end().text();
                };
            }(jQuery));

            language = jQuery('html').attr('lang');

                setInterval(function() {
                    /* Check to see if exclusions apply */
                    var hotelIdentifier = "thereefplayacar";
                    // URL Params 
                    var urlIata = getUrlParameter('AFF') ? getUrlParameter('AFF') : (getUrlParameter('aff') ? getUrlParameter('aff') : null);
                    // All codes (outside of IATA) seems to be passed through PC
                    var urlPromo = getUrlParameter('PC') ? getUrlParameter('PC') : null;
                    // Check to see if this is for flight and hotel
                    var urlFlight = getUrlParameter('airport') ? getUrlParameter('airport') : null;
                    // Block all messaging if IATA exists in url
                    if (urlIata) {
                        sessionStorage.setItem("excluded_gb_rate", true);
                    } 
                    // Block messaging for the Reef Resorts if it includes flight
                    if (hotelIdentifier.includes('thereef')) {
                        if (urlFlight){
                            sessionStorage.setItem("excluded_gb_rate", true);
                        }   
                    }
                    // If group exclusion is enabled
                        if (hotelIdentifier.includes('thereef')) {
                            if(urlPromo){
                                sessionStorage.setItem("excluded_gb_rate", true);
                            }
                        }
                    // If corp exclusion is enabled
                        if (hotelIdentifier.includes('thereef')) {
                            if(urlPromo){
                                sessionStorage.setItem("excluded_gb_rate", true);
                            }
                        }

                    if (sessionStorage.getItem("excluded_gb_rate") == true || sessionStorage.getItem("excluded_gb_rate") == "true") {
                        jQuery('.guestbook_membership_wrapper').hide();
                        jQuery('.js-booking-banner').hide();
                        jQuery('.js-static-price-banner').hide();
                        jQuery('.gb-dynamic-banner').hide();
                    } else {
                        jQuery('.guestbook_membership_wrapper').show();
                        jQuery('.js-booking-banner').show();
                        jQuery('.js-static-price-banner').show();
                        jQuery('.gb-dynamic-banner').show();
                    }
                }, 200);


            function isGuestbookMember(rewardsAmount, tripCashAmount, currency, email) {
                var currencySymbol = getCurrencySymbol(currency.trim());
                jQuery.ajax({
                    type: 'GET',
                    url: 'https://theguestbook.com/api/v1/member_info',
                    crossDomain: true,
                    data: {
                        email: email
                    },
                    dataType: 'json'
                }).done(function(data, textStatus, jqXHR) {
                    sessionStorage.setItem('gb_agree_check', false);
                    if (data.success == true) {
                        var is_member = "not_a_member";
                        if (rewardsAmount > 0) {
                            if (data.is_current_member == false) {
                                is_member = "not_a_member";
                                jQuery('.already_a_member').remove();
                                sessionStorage.setItem('wantsToBeAmember', 0);
                            } else {
                                is_member = "member";
                                jQuery('.not_a_member').remove();

                                sessionStorage.setItem('wantsToBeAmember', 1);

                            }
                            var separator = " ";
                            if (sessionStorage.getItem('showCashFwd20') == 'true') {
                                var lang_index = typeof banner_texts['guestbook_membership_20'][is_member][language] !== 'undefined' ? language : 'en';
                                var output = banner_texts['guestbook_membership_20'][is_member][lang_index].
                                    replace(/{amount}/g, rewardsAmount.toFixed(2) + separator + getDefaultCurrencyCode()).
                                    replace("{trip_amount}", (tripCashAmount).toFixed(2) + separator + getDefaultCurrencyCode());
                            } else {
                                var lang_index = typeof banner_texts['guestbook_membership'][is_member][language] !== 'undefined' ? language : 'en';
                                var output = banner_texts['guestbook_membership'][is_member][lang_index].
                                    replace(/{amount}/g, rewardsAmount.toFixed(2) + separator + getDefaultCurrencyCode()).
                                    replace("{trip_amount}", (tripCashAmount).toFixed(2) + separator + getDefaultCurrencyCode());
                            }
                            
                            if (jQuery('.guestbook_membership_wrapper').length) {
                                jQuery('.guestbook_membership_wrapper').remove();
                            }
                            if (jQuery('.guestbook_membership_wrapper_mobile').length) {
                                jQuery('.guestbook_membership_wrapper_mobile').remove();
                            }
                            
                            
                            var $membershipEl = jQuery('<div />');
                            $membershipEl.addClass('guestbook_membership_wrapper').addClass('color-md-12');
                            if (is_member == "member") {
                                $membershipEl.addClass("already_a_member");
                                $membershipEl.removeClass('gbHide');
                            } else {
                                $membershipEl.addClass("not_a_member");
                            }
                            jQuery(output).prependTo($membershipEl);
                            $membershipEl.insertAfter($('#agreepay').closest('label'));
                                
                        }
                    } else {
                        console.log('error: ' + textStatus);
                    }
                }).fail(function(jqXHR, textStatus, errorThrown) {

                });
            }

            /* MOBILE VERSION MEMBERSHIP POPUP */


            function createTooltip() {
                var tooltip_element = 'tooltip_text';
                if (typeof language == 'undefined') {
                    language = 'en';
                }
                var lang_index = typeof banner_texts[tooltip_element]['header_text'][language] !== 'undefined' ? language : 'en';
                var tooltipHeader = jQuery('<div />', {
                    class: 'tooltip-header',
                    html: banner_texts[tooltip_element]['header_text'][lang_index]
                });
                if (sessionStorage.getItem('showCashFwd20') == 'true') {
                   lang_index = typeof banner_texts[tooltip_element]['content_text_20'][language] !== 'undefined' ? language : 'en';
                    var tooltipContent = jQuery('<ul>', {
                        class: 'dashed',
                        html: banner_texts[tooltip_element]['content_text_20'][lang_index] 
                    }); 
                } else {
                    lang_index = typeof banner_texts[tooltip_element]['content_text'][language] !== 'undefined' ? language : 'en';
                    var tooltipContent = jQuery('<ul>', {
                        class: 'dashed',
                        html: banner_texts[tooltip_element]['content_text'][lang_index] 
                    }); 
                }
                
                lang_index = typeof banner_texts[tooltip_element]['footer_text'][language] !== 'undefined' ? language : 'en';
                var tooltipFooter = jQuery('<div />', {
                    html: banner_texts[tooltip_element]['footer_text'][lang_index]
                })
                var tooltip = jQuery('<div />', {
                    id: "theguestbook_details",
                    class: "js-desktop-tooltip"
                });
                jQuery(tooltip).addClass('gbHide').css("display", "none");
                tooltipHeader.appendTo(tooltip);
                tooltipContent.appendTo(tooltip);
                tooltipFooter.appendTo(tooltip);
                return tooltip;

            }



            function saveBookingDetails(config) {
                if (jQuery.isEmptyObject(config)) {
                    return false;
                }



                var data = {
                    email: config.email,
                    first_name: config.first_name,
                    last_name: config.last_name,
                    confirmation_number: jQuery(".hotel-conf .c-code").text().trim(),
                    checkin_date: config.checkin_date,
                    checkout_date: config.checkout_date,
                    checkin_string: config.checkin_string,
                    checkout_string: config.checkout_string,
                    rate_type: config.rate_type,
                    room_name: config.room_name,
                    currency_code: config.currencyCode,
                    currency_symbol: config.currencySymbol,
                    lang_code: config.lang_code,
                    total: config.total,
                    total_with_taxes: config.totalWithTaxes,
                    hotel_identifier: "thereefplayacar",
                    dont_ab_track: false,
                    browser_info: get_browser_info(),
                    ab_version_viewed: "true"
                }
                
                /* store rewards details for the checkout/payment page*/
                var rewardsDetails = {
                    currencySymbol: config.currencySymbol.trim(),
                    rewardsAmount: config.totalRewards
                };
                sessionStorage.setItem('gbRewards', JSON.stringify(rewardsDetails));
                sessionStorage.setItem('gbBookingDetails', JSON.stringify(data));

            }

            /* SUBMIT REQUEST */
            function submitReservationToTheGB() {
                var targetForBanner;
                var sessionData = JSON.parse(sessionStorage.getItem('gbBookingDetails'));

                if(sessionData != null){
                    var confirmationNumber = jQuery('.c-code').text().trim();
                    var language = jQuery('html').attr('lang');
                    
                    sessionData['confirmation_number'] = confirmationNumber;
                    targetForBanner = jQuery(".hotel-info-wrap .col-two-third").length ? jQuery(".hotel-info-wrap .col-two-third") : jQuery(".inf-stay .row");

                    if (sessionStorage.getItem('gb_agree_check') == null) {
                        sessionStorage.setItem('gb_agree_check', false);
                    }
                    sessionData['agreed_enrollment_checked'] = sessionStorage.getItem('gb_agree_check');
                    sessionData['ab_version_viewed'] = "true";
                    sessionData['total'] = evenRound(sessionData['total'] * 1, 2);
                    sessionData['total_with_taxes'] = calculateTotalFromRawPrice(jQuery(".prices-box-inner div:last span:last"));
                    var rewards = sessionStorage.getItem('gbRewards');
                    jQuery.ajax({
                        xhrFields: {
                            withCredentials: true
                        },
                        type: 'POST',
                        url: "https://theguestbook.com/api/v1/submit_booking_engine_reservation",
                        crossDomain: true,
                        data: sessionData,
                        dataType: 'json'
                    }).done(function(data, textStatus, jqXHR) {
                        console.log(data);
                        if (data.success == true && sessionStorage.getItem('wantsToBeAmember') == 1) {
                            var bookingDetails = JSON.parse(sessionStorage.getItem('gbRewards'));
                            var currency = bookingDetails.currencySymbol;
                            var totalAmt = bookingDetails.rewardsAmount;
                            var separator = " ";
                            var lang_index = typeof banner_texts['booking_confirmation_text'][language] !== 'undefined' ? language : 'en';
                            EARN_PERCENTAGE_15 = .15;
                            if (sessionStorage.getItem('showCashFwd20') == 'true') {
                                EARN_PERCENTAGE_15 = .2;
                            }
                            if (!jQuery('.booking-conf-banner-text-wrapper').length) {
                                jQuery('<div />', {
                                    class: '',
                                    html: banner_texts['booking_confirmation_text'][language].
                                    replace(/{amount}/g, evenRound(sessionData['total'] * EARN_PERCENTAGE_05, 2).toFixed(2) + separator + currency).
                                    replace("{trip_amount}", evenRound(sessionData['total'] * EARN_PERCENTAGE_15, 2).toFixed(2) + separator + currency)

                                }).appendTo(targetForBanner);
                                //target.appendTo(jQuery('.Receipt-footer'));
                            }

                        }
                    }).fail(function(data, textStatus, jqXHR) {});
                }
               
            }

            function bookingBanner() {
                jQuery(accesors.total_booking_banner).waitUntilExists(function() {
                    if (sessionStorage.getItem('showCashFwd20') == 'true') {
                        EARN_PERCENTAGE_15 = 0.2;
                    }
                    //if confirmation number on page like in submit reservation, then do the confirmation msg else its the page before confirmation and use everything below
                    var lang_index = typeof banner_texts['direct_booking_text'][language] !== 'undefined' ? language : 'en';
                    var my_target = jQuery('.group.total-price');
                    var total_with_taxes = document.querySelector('#TotalDue').value - document.querySelector('#amenities_total').value;

                    
                    if(jQuery('.flight-details-box').length){
                        total_with_taxes = total_with_taxes - document.querySelector('#flight_total').value;
                    }

                    var total = total_with_taxes / taxed_rate;
                    var $subtotalBanner = jQuery('<div />');

                    if (!jQuery('.js-subtotal-banner').length) {
                        $subtotalBanner.addClass('subtotal-booking-banner').addClass('js-booking-banner').removeClass('roomsumtitleorangesmall').addClass('lang-' + language);

                        var currency = getDefaultCurrencyCode();
                        var subtotalTarget = jQuery('.f-left:contains("Subtotal")');
                        if (language == 'de') {
                            subtotalTarget = jQuery('.f-left:contains("Zwischensumme")');
                        } else if (language == 'fr') {
                            subtotalTarget = jQuery('.f-left:contains("Sous-total")');
                        }
                        var subtotalRaw = subtotalTarget.next();
                        if (subtotalRaw) {
                            total = (subtotalRaw.text().trim().replace(',', '') * 1) - document.querySelector('#amenities_total').value;
                            if(jQuery('.flight-details-box').length){
                                total -= document.querySelector('#flight_total').value;
                            }
                        }
                        var totalRewards = evenRound(total * EARN_PERCENTAGE_15, 2);
                        var tripRewards = evenRound(total * EARN_PERCENTAGE_05, 2);
                        var separator = " ";
                        // var text_for_banner = banner_texts['direct_booking_text'][lang_index];
                        var text_for_banner = '<span>' + banner_texts['cash_rewards_earned'][language] + '</span>';
                        $subtotalBanner.html( text_for_banner + ':' + '<span class="last-child"> ' + evenRound(total * EARN_PERCENTAGE_15, 2).toFixed(2) + separator + currency + '</span>' );
                        $subtotalBanner.attr('data-total', total.toFixed(2));
                        $subtotalBanner.attr('data-total-with-taxes', (total_with_taxes * 1).toFixed(2));
                        $subtotalBanner.attr('data-total-rewards', totalRewards);
                        $subtotalBanner.attr('data-trip-rewards', tripRewards);
                        $subtotalBanner.attr('data-currency', currency);

                        setTimeout( function(){ 
                            $subtotalBanner.insertAfter(my_target);
                            var tooltipElement = isMobileDevice() ? jQuery('.gb-modal-mask') : jQuery('#theguestbook_details');
                            bindTriggerTooltipToElements(['.js-booking-banner'], tooltipElement, 35, -125);
                        }, 500 )
                        
                    }
                });

            }

            var css_link = jQuery("<link>", {
                rel: "stylesheet",
                type: "text/css",
                href: 'https://az736576.vo.msecnd.net/assets/booking_enrollment/reservhotel_enrollment/base-f02d5fd8eff51361990f1216e886022e.css'
            });

            css_link.appendTo('head');

            jQuery('body').append("<style>\n    :root{\n        --primary-color-var: #44C8F5;\n        --secondary-color-var: #FFFFFF;\n    }\n\n    #theguestbook_details_mobile svg{\n        fill: #44C8F5;\n    }\n\n    #theguestbook_details_mobile svg ul.dashed li.numbered-list span.to-receive, .gb-green, .guestbook_membership_wrapper span.bold-font,\n    .subtotal-booking-banner.line-detail div, .subtotal-booking-banner{\n        color: #44C8F5!important;\n    }\n\n    .gb-modal-mask .dashed .footer-input-email button{\n        background: #44C8F5;\n    } \n\n    .static-price-banner, .theguestbook-details, #theguestbook_details, .gb-dynamic-banner span{\n        background-color: #44C8F5;\n    }\n\n    #theguestbook_details {\n        border: 2px solid #44C8F5;\n    }\n\n    .static-price-banner, .theguestbook-details, #theguestbook_details, .gb-dynamic-banner span {\n        color: #FFFFFF;\n    }\n    \n<\/style>\n");

            // trigger to show or hide banner should user decide to select "Book Hotel + Air" or "Book Hotel Only"
            jQuery('.step-1').waitUntilExists(function(){
                var hotelIdentifier = "thereefplayacar";
                if (hotelIdentifier.includes('thereef')) {
                    jQuery('#A').on('click', function() {
                        jQuery('.static-price-banner').addClass('hide');
                    });
    
                    jQuery('#H').on('click', function() {
                        jQuery('.static-price-banner').removeClass('hide');
                    });   
                }
            });

                /**
* THIS FILE CONTAINS THE MOBILE MODAL FUNCTIONALITY:
*   - modal creation function
*   - the modified ttriggerTooltip function(to cover the modal events)
*   - the translator function
*   - the content object + svg logos
*   - the getHotelIdentifier function that is called on the join btn click
*/

var getHotelIdentifier = function(){
    return 'thereefplayacar';
}
var svg_logo = '<svg version="1.1" id="up_logo_main" class="up-logo-container" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 432 108" enable-background="new 0 0 432 108" xml:space="preserve" height="70" width="280" style="margin-left: 0px;"> <g> <g> <rect x="2.8" y="97.7" fill="#B8B9B9" width="29.3" height="0.4"></rect> <rect x="398" y="97.7" fill="#B8B9B9" width="31.4" height="0.4"></rect> </g> <g> <path fill="#3E434B" d="M55.1,100c0.9,1.1,1.9,1.9,3,2.1v0.5h-2.9l-3.1-4.2h-0.6v1.1c0,2.3,0.3,2.6,1.8,2.6v0.5h-5.2V102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h4.7c2.3,0,3.6,1.2,3.6,2.8c0,1.4-1,2.5-2.7,2.7L55.1,100z M52.8,93.5h-1.3v3.9h1.3c1.3,0,1.9-0.9,1.9-1.9C54.7,94.4,54.1,93.5,52.8,93.5z"></path> <path fill="#3E434B" d="M69.2,100.2l0.1-0.4h0.5l-0.2,2.7h-8.4V102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h5h2.9l0.2,2.7h-0.5L68.7,95c-0.2-1-0.5-1.4-2.6-1.4h-1.5v3.4h0.1c2.3,0,2.4-0.3,2.4-1.8h0.5v4.4h-0.5c0-1.5-0.2-1.8-2.4-1.8h-0.1V99c0,2.3,0.3,2.6,1.8,2.6h0.3C68.7,101.7,69,101.3,69.2,100.2z"></path> <path fill="#3E434B" d="M82.9,99.5l1.6-4.6c0.5-1.3,0.2-1.7-1.2-1.7v-0.4h4.2v0.4c-1.4,0-1.8,0.3-2.3,2l-2.6,7.7h-0.3L80,95.8l-2.3,7.1h-0.3l-2.5-7.7c-0.5-1.6-0.9-2-2.2-2v-0.4h5v0.4c-1.3,0-1.7,0.3-1.2,1.7l1.5,4.6l2.3-6.8h0.4L82.9,99.5z"></path> <path fill="#3E434B" d="M91,100.3c-0.6,1.3-0.6,1.7,1.2,1.7v0.5H88V102c1.4,0,1.6-0.3,2.3-2l3.3-7.7h0.3l3.3,7.7c0.7,1.7,1,2,2.2,2v0.5h-5.1V102c1.6,0,1.8-0.4,1.2-1.7l-0.5-1h-3.7L91,100.3z M93.3,95l-1.5,3.5h3L93.3,95z"></path> <path fill="#3E434B" d="M109.5,100c0.9,1.1,1.9,1.9,3,2.1v0.5h-2.9l-3.1-4.2H106v1.1c0,2.3,0.3,2.6,1.8,2.6v0.5h-5.2V102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h4.7c2.3,0,3.6,1.2,3.6,2.8c0,1.4-1,2.5-2.7,2.7L109.5,100z M107.3,93.5H106v3.9h1.3c1.3,0,1.9-0.9,1.9-1.9C109.1,94.4,108.5,93.5,107.3,93.5z"></path> <path fill="#3E434B" d="M115.6,102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h4.8c3.8,0,5.5,2.2,5.5,4.9c0,2.7-1.7,4.9-5.5,4.9h-4.8V102z M120.5,93.5c-0.1,0-1.1,0-1.5,0v6.4c0,1.5,0.2,1.7,1.3,1.7h0.2c3,0,3.6-2.3,3.6-4.1C124.1,95.8,123.5,93.5,120.5,93.5z"></path> <path fill="#3E434B" d="M129.2,102.5V102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h5.2v0.4c-1.5,0-1.8,0.4-1.8,2.6v3.6c0,2.3,0.3,2.6,1.8,2.6v0.5H129.2z"></path> <path fill="#3E434B" d="M138,93.2v-0.4h2.8l6,7.1v-4.1c0-2.3-0.3-2.6-1.8-2.6v-0.4h4.4v0.4c-1.5,0-1.8,0.4-1.8,2.6v7.1h-0.4l-6.6-7.9v4.4c0,2.3,0.3,2.6,1.8,2.6v0.5H138V102c1.5,0,1.8-0.4,1.8-2.6v-3.6C139.8,93.5,139.5,93.2,138,93.2z"></path> <path fill="#3E434B" d="M157.8,102.9c-2.8,0-5.1-2.4-5.1-5.3c0-2.9,2.3-5.3,5.1-5.3c1.1,0,2.3,0.6,3,1.5c0.2-0.2,0.3-0.7,0.4-1.1h0.4v3.9h-0.5c-0.4-2.1-1.6-3.4-3.4-3.4c-2.5,0-3.3,2.5-3.3,4.4c0,1.9,0.8,4.4,3.3,4.4c1.1,0,2.9-0.7,2.9-1.9c0-0.9-0.8-1.4-1.9-1.4v-0.5h5v0.5c-1.5,0-1.8,0.4-1.8,2.6c0,0,0,0.4,0,0.7C160.5,102,159.1,102.9,157.8,102.9z"></path> <path fill="#3E434B" d="M172.5,102.5V102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h5.2v0.4c-1.5,0-1.8,0.4-1.8,2.6v3.6c0,2.3,0.3,2.6,1.8,2.6v0.5H172.5z"></path> <path fill="#3E434B" d="M181.3,93.2v-0.4h2.8l6,7.1v-4.1c0-2.3-0.3-2.6-1.8-2.6v-0.4h4.4v0.4c-1.5,0-1.8,0.4-1.8,2.6v7.1h-0.4L184,95v4.4c0,2.3,0.3,2.6,1.8,2.6v0.5h-4.4V102c1.5,0,1.8-0.4,1.8-2.6v-3.6C183.1,93.5,182.9,93.2,181.3,93.2z"></path> <path fill="#3E434B" d="M196.4,102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h4.8c3.8,0,5.5,2.2,5.5,4.9c0,2.7-1.7,4.9-5.5,4.9h-4.8V102z M201.2,93.5c-0.1,0-1.1,0-1.5,0v6.4c0,1.5,0.2,1.7,1.3,1.7h0.2c3,0,3.6-2.3,3.6-4.1C204.8,95.8,204.2,93.5,201.2,93.5z"></path> <path fill="#3E434B" d="M218,100.2l0.1-0.4h0.5l-0.2,2.7H210V102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h5h2.9l0.2,2.7h-0.5l-0.1-0.5c-0.2-1-0.5-1.4-2.6-1.4h-1.5v3.4h0.1c2.3,0,2.4-0.3,2.4-1.8h0.5v4.4h-0.5c0-1.5-0.2-1.8-2.4-1.8h-0.1V99c0,2.3,0.3,2.6,1.8,2.6h0.3C217.5,101.7,217.8,101.3,218,100.2z"></path> <path fill="#3E434B" d="M227.4,102v0.5h-5.2V102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h4.7c2.3,0,3.6,1.2,3.6,2.8c0,1.6-1.3,2.8-3.6,2.8h-1.3v1.1C225.6,101.7,225.8,102,227.4,102z M226.9,93.5h-1.3v3.9h1.3c1.3,0,1.9-0.9,1.9-1.9C228.7,94.4,228.1,93.5,226.9,93.5z"></path> <path fill="#3E434B" d="M241.4,100.2l0.1-0.4h0.4l-0.2,2.7h-8.4V102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h5h2.9l0.2,2.7H241l-0.1-0.5c-0.2-1-0.5-1.4-2.6-1.4h-1.5v3.4h0.1c2.3,0,2.4-0.3,2.4-1.8h0.4v4.4h-0.4c0-1.5-0.2-1.8-2.4-1.8h-0.1V99c0,2.3,0.3,2.6,1.8,2.6h0.3C240.9,101.7,241.2,101.3,241.4,100.2z"></path> <path fill="#3E434B" d="M245.6,93.2v-0.4h2.8l6,7.1v-4.1c0-2.3-0.3-2.6-1.8-2.6v-0.4h4.4v0.4c-1.5,0-1.8,0.4-1.8,2.6v7.1h-0.4l-6.6-7.9v4.4c0,2.3,0.3,2.6,1.8,2.6v0.5h-4.4V102c1.5,0,1.8-0.4,1.8-2.6v-3.6C247.4,93.5,247.1,93.2,245.6,93.2z"></path> <path fill="#3E434B" d="M260.6,102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h4.8c3.8,0,5.5,2.2,5.5,4.9c0,2.7-1.7,4.9-5.5,4.9h-4.8V102z M265.5,93.5c-0.1,0-1.1,0-1.5,0v6.4c0,1.5,0.2,1.7,1.3,1.7h0.2c3,0,3.6-2.3,3.6-4.1C269.1,95.8,268.5,93.5,265.5,93.5z"></path> <path fill="#3E434B" d="M282.3,100.2l0.1-0.4h0.4l-0.2,2.7h-8.4V102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h5h2.9l0.2,2.7h-0.5l-0.1-0.5c-0.2-1-0.5-1.4-2.6-1.4h-1.5v3.4h0.1c2.3,0,2.4-0.3,2.4-1.8h0.4v4.4h-0.4c0-1.5-0.2-1.8-2.4-1.8h-0.1V99c0,2.3,0.3,2.6,1.8,2.6h0.3C281.7,101.7,282,101.3,282.3,100.2z"></path> <path fill="#3E434B" d="M286.4,93.2v-0.4h2.8l6,7.1v-4.1c0-2.3-0.3-2.6-1.8-2.6v-0.4h4.4v0.4c-1.5,0-1.8,0.4-1.8,2.6v7.1h-0.4l-6.6-7.9v4.4c0,2.3,0.3,2.6,1.8,2.6v0.5h-4.4V102c1.5,0,1.8-0.4,1.8-2.6v-3.6C288.2,93.5,287.9,93.2,286.4,93.2z"></path> <path fill="#3E434B" d="M304,93.6c-2.1,0-2.3,0.4-2.5,1.4l-0.1,0.4h-0.4l0.1-2.8h10.1l0.2,2.8h-0.5l-0.1-0.4c-0.3-1.1-0.5-1.4-2.6-1.4h-1.2v5.8c0,2.3,0.3,2.6,1.8,2.6v0.5h-5.2V102c1.5,0,1.8-0.4,1.8-2.6v-5.8H304z"></path> <path fill="#3E434B" d="M323.6,102.9c-1.2,0-2.1-0.6-2.5-0.8c-0.1,0.2-0.4,0.5-0.4,0.8h-0.4V99h0.4c0.2,1.9,1.4,3,3.1,3c1,0,1.7-0.5,1.7-1.5c0-0.8-0.6-1.4-1.9-2l-1.5-0.8c-1.1-0.6-1.9-1.5-1.9-2.8c0-1.4,1.2-2.6,2.8-2.6c0.9,0,1.7,0.3,2.1,0.7c0.1-0.1,0.3-0.3,0.3-0.7h0.5v3.8h-0.5c-0.1-1.4-0.7-3-2.4-3c-0.9,0-1.6,0.5-1.6,1.3c0,0.8,0.6,1.2,2,1.9l1.5,0.8c1.3,0.7,1.8,1.7,1.8,2.6C326.8,101.6,325.4,102.9,323.6,102.9z"></path> <path fill="#3E434B" d="M335.3,102v0.5h-5.2V102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h4.7c2.3,0,3.6,1.2,3.6,2.8c0,1.6-1.3,2.8-3.6,2.8h-1.3v1.1C333.6,101.7,333.8,102,335.3,102z M334.8,93.5h-1.3v3.9h1.3c1.3,0,1.9-0.9,1.9-1.9C336.7,94.4,336.1,93.5,334.8,93.5z"></path> <path fill="#3E434B" d="M341.4,102.5V102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h5.2v0.4c-1.5,0-1.8,0.4-1.8,2.6v3.6c0,2.3,0.3,2.6,1.8,2.6v0.5H341.4z"></path> <path fill="#3E434B" d="M357.1,100c0.9,1.1,1.9,1.9,3,2.1v0.5h-2.9l-3.1-4.2h-0.6v1.1c0,2.3,0.3,2.6,1.8,2.6v0.5h-5.2V102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h4.7c2.3,0,3.6,1.2,3.6,2.8c0,1.4-1,2.5-2.7,2.7L357.1,100z M354.8,93.5h-1.3v3.9h1.3c1.3,0,1.9-0.9,1.9-1.9C356.7,94.4,356.1,93.5,354.8,93.5z"></path> <path fill="#3E434B" d="M363.2,102.5V102c1.5,0,1.8-0.4,1.8-2.6v-3.6c0-2.3-0.3-2.6-1.8-2.6v-0.4h5.2v0.4c-1.5,0-1.8,0.4-1.8,2.6v3.6c0,2.3,0.3,2.6,1.8,2.6v0.5H363.2z"></path> <path fill="#3E434B" d="M374.6,93.6c-2.1,0-2.3,0.4-2.5,1.4l-0.1,0.4h-0.4l0.1-2.8h10.1l0.2,2.8h-0.5l-0.1-0.4c-0.3-1.1-0.5-1.4-2.6-1.4h-1.2v5.8c0,2.3,0.3,2.6,1.8,2.6v0.5h-5.2V102c1.5,0,1.8-0.4,1.8-2.6v-5.8H374.6z"></path> </g> <g> <rect x="2.8" y="14.4" fill="#B8B9B9" width="177.5" height="0.4"></rect> <rect x="249.8" y="14.4" fill="#B8B9B9" width="179.6" height="0.4"></rect> </g> <g> <path fill="#3E434B" d="M194,7.7c-2.7,0-2.9,0.5-3.2,1.9l-0.1,0.6H190l0.2-3.6h12.9l0.2,3.6h-0.6l-0.1-0.6c-0.3-1.4-0.7-1.9-3.4-1.9h-1.5v7.4c0,2.9,0.4,3.4,2.3,3.4v0.6h-6.7v-0.6c1.9,0,2.3-0.5,2.3-3.4V7.7H194z"></path> <path fill="#3E434B" d="M217.7,11.9v-1.4c0-2.9-0.3-3.4-2.3-3.4V6.6h6.6v0.6c-1.9,0-2.3,0.5-2.3,3.4v4.6c0,2.9,0.4,3.4,2.3,3.4v0.6h-6.6v-0.6c1.9,0,2.3-0.5,2.3-3.4V13h-6.6v2.1c0,2.9,0.3,3.4,2.3,3.4v0.6h-6.6v-0.6c1.9,0,2.3-0.5,2.3-3.4v-4.6c0-2.9-0.3-3.4-2.3-3.4V6.6h6.6v0.6c-1.9,0-2.3,0.5-2.3,3.4v1.4H217.7z"></path> <path fill="#3E434B" d="M237,16.2l0.1-0.6h0.6l-0.2,3.5h-10.8v-0.6c1.9,0,2.3-0.5,2.3-3.4v-4.6c0-2.9-0.3-3.4-2.3-3.4V6.6h6.4h3.7l0.2,3.5h-0.6l-0.1-0.6c-0.3-1.3-0.7-1.9-3.3-1.9H231v4.3h0.2c2.9,0,3.1-0.3,3.1-2.3h0.6v5.6h-0.6c0-1.9-0.2-2.3-3.1-2.3H231v1.7c0,2.9,0.3,3.4,2.3,3.4h0.3C236.3,18,236.7,17.6,237,16.2z"></path> </g> <g> <path fill="#3E434B" d="M59.1,58.6V32c0-0.9,0.7-1.7,1.7-1.7h7.6c0.9,0,1.7,0.7,1.7,1.7v26.3c0,8.1,4,12.2,10.7,12.2c6.6,0,10.7-4,10.7-11.9V32c0-0.9,0.7-1.7,1.7-1.7h7.6c0.9,0,1.7,0.7,1.7,1.7v26.3c0,15-8.4,22.3-21.7,22.3S59.1,73.2,59.1,58.6z"></path> <path fill="#3E434B" d="M110.3,30.4h34.4c0.9,0,1.7,0.7,1.7,1.7v6.4c0,0.9-0.7,1.7-1.7,1.7h-24.9v10h21.7c0.9,0,1.7,0.7,1.7,1.7v6.4c0,0.9-0.7,1.7-1.7,1.7h-21.7v10.4h25.2c0.9,0,1.7,0.7,1.7,1.7v6.4c0,0.9-0.7,1.7-1.7,1.7h-34.7c-0.7,0-1.3-0.6-1.3-1.3V31.7C109.1,30.9,109.6,30.4,110.3,30.4z"></path> <path fill="#3E434B" d="M149.8,71.4l4.3-5.2c0.6-0.7,1.6-0.8,2.3-0.2c4.1,3.1,8.4,5,13.5,5c4.5,0,7.1-1.8,7.1-4.7v-0.1c0-2.8-1.7-4.2-10-6.3c-10-2.5-16.4-5.3-16.4-15.1v-0.1c0-9,7.2-14.9,17.3-14.9c6.6,0,12.3,1.9,17.1,5.3c0.7,0.5,0.9,1.5,0.4,2.3l-3.8,5.5c-0.5,0.7-1.5,1-2.2,0.5c-3.9-2.5-7.8-4-11.6-4c-4.2,0-6.4,1.9-6.4,4.3v0.1c0,3.3,2.1,4.3,10.7,6.5c10,2.6,15.7,6.2,15.7,14.8v0.1c0,9.8-7.5,15.3-18.2,15.3c-7,0-14-2.3-19.7-6.9C149.3,73.1,149.2,72.1,149.8,71.4z"></path> <path fill="#3E434B" d="M202.1,40.4h-11.9c-0.9,0-1.7-0.7-1.7-1.7V32c0-0.9,0.7-1.7,1.7-1.7H225c0.9,0,1.7,0.7,1.7,1.7v6.7c0,0.9-0.7,1.7-1.7,1.7H213v38.4c0,0.5-0.4,1-1,1h-8.9c-0.5,0-1-0.4-1-1V40.4z"></path> <path fill="#3E434B" d="M55.4,55L55.4,55c0-2-1.6-3.6-3.6-3.6l-17,0c-0.8,0-1.5,0.7-1.5,1.5v6.5c0,0.8,0.7,1.5,1.5,1.5h8.7c-2,5.8-7.5,9.9-14.3,9.9c-8.8,0-15-7.1-15-15.5V55c0-8.4,6-15.3,14.7-15.4c5.1,0,8.3,1.5,11.6,4.1c0.6,0.5,1.6,0.4,2.1-0.3l4.9-5.9c0.6-0.7,0.4-1.7-0.3-2.2c-4.8-3.7-10-5.7-18.1-5.8l0,0c0,0-0.1,0-0.1,0l0,0C13.9,29.6,2.8,41.1,2.8,55.1v0.1c0,14.1,11,25.4,26.2,25.4c13.2,0,23.2-8.6,25.7-19.9h0v0c0.4-1.8,0.6-3.7,0.6-5.6V55z"></path> </g> <g> <path fill="#B8B9B9" d="M231.5,31.3c0-0.5,0.4-1,1-1H253c5.7,0,10.1,1.6,12.9,4.4c2.3,2.3,3.4,5,3.4,8.4v0.1c0,5.6-3,8.7-6.5,10.7c5.7,2.2,9.3,5.5,9.3,12.2v0.1c0,9-7.4,13.6-18.5,13.6h-21.1c-0.5,0-1-0.4-1-1V31.3z M250.7,50.4c4.8,0,7.8-1.6,7.8-5.2V45c0-3.3-2.5-5.1-7.1-5.1h-9.3v10.5H250.7z M253.6,70.3c4.8,0,7.7-1.7,7.7-5.4v-0.1c0-3.3-2.5-5.4-8.1-5.4h-11.1v10.9H253.6z"></path> <path fill="#B8B9B9" d="M273.7,55.2v-0.1c0-14.1,11.1-25.6,26.4-25.6c15.3,0,26.2,11.4,26.2,25.4v0.1c0,14.1-11.1,25.6-26.4,25.6C284.7,80.7,273.7,69.3,273.7,55.2z M315,55.2v-0.1c0-8.5-6.2-15.5-15-15.5c-8.8,0-14.8,6.9-14.8,15.4v0.1c0,8.5,6.2,15.5,15,15.5C308.9,70.6,315,63.7,315,55.2z"></path> <path fill="#B8B9B9" d="M329.6,55.2v-0.1c0-14.1,11.1-25.6,26.4-25.6c15.3,0,26.2,11.4,26.2,25.4v0.1c0,14.1-11.1,25.6-26.4,25.6C340.5,80.7,329.6,69.3,329.6,55.2z M370.8,55.2v-0.1c0-8.5-6.2-15.5-15-15.5C347,39.5,341,46.5,341,55v0.1c0,8.5,6.2,15.5,15,15.5C364.7,70.6,370.8,63.7,370.8,55.2z"></path> <path fill="#B8B9B9" d="M428.7,30.4h-10.8c-0.5,0-0.9,0.2-1.2,0.6l-19,21.8c-1.2,1.4-1.2,3.4,0,4.7l19,21.8c0.3,0.4,0.8,0.6,1.2,0.6h10.8c0.6,0,1-0.8,0.6-1.3l-20.9-23.5l20.9-23.5C429.7,31.1,429.3,30.4,428.7,30.4z"></path> <path fill="#B8B9B9" d="M395.8,79.8h-8.3c-0.7,0-1.3-0.6-1.3-1.3V31.7c0-0.7,0.6-1.3,1.3-1.3h8.3c0.7,0,1.3,0.6,1.3,1.3v46.9C397.1,79.3,396.5,79.8,395.8,79.8z"></path> </g> </g> <a xlink:href="https://theguestbook.com/thereefplayacar" target="_top"> <rect x="0" y="0" width="100%" height="100%" style="stroke: #333366; fill: #6666cc;" fill-opacity="0" stroke-opacity="0"></rect> </a> </svg>';
var svg_gift = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 376.213 376.213" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 376.213 376.213" width="35" height="35">' +
                    '<g>' +
                        '<g>' +
                            '<path d="m367.663,67.993h-121.004c4.173,0 8.14-5.831 11.474-8.773 11.543-10.158 15.527-24.129 10.654-37.074-6.994-18.588-30.354-27.548-48.908-17.356-16.827,9.269-25.805,25.514-31.773,42.478-5.968-16.964-14.946-33.278-31.756-42.563-18.537-10.209-41.896-1.334-48.908,17.272-4.891,12.928-0.906,27.104 10.637,37.245 3.352,2.941 7.302,8.773 11.474,8.773h-121.003c-4.72,0-8.55,3.01-8.55,7.747v68.402c0,4.72 3.831,9.354 8.55,9.354h8.55v212.952c0,4.72 3.831,9.354 8.55,9.354h153.905 17.101 153.905c4.72,0 8.55-4.634 8.55-9.354v-212.954h8.55c4.72,0 8.55-4.634 8.55-9.354v-68.402c0.002-4.737-3.829-7.747-8.548-7.747zm-139.575-48.018c2.958-1.642 6.019-2.668 9.029-2.668 6.874,0 13.338,4.361 15.75,10.739 2.36,6.225 0.239,13.014-5.968,18.452-9.354,8.225-23.77,21.495-40.734,21.495h-6.43c5.181-17.1 12.158-39.091 28.353-48.018zm-98.773,26.472c-6.208-5.438-8.328-12.073-5.985-18.298 2.411-6.379 8.892-10.944 15.75-10.944 3.027,0 6.071,1.197 9.046,2.822 16.194,8.927 23.171,30.867 28.353,47.967h-6.413c-16.999-0.001-31.414-13.322-40.751-21.547zm-112.214,38.647h150.229c1.18,0 2.48-0.171 3.677,0.171v51.131h-145.356-8.55v-51.302zm17.1,68.402h136.805v205.207h-136.805v-205.207zm307.811,205.207h-136.805v-205.207h136.805v205.207zm17.1-222.307h-8.55-145.355v-51.131c1.197-0.342 2.497-0.171 3.677-0.171h150.229v51.302z"/>' + 
                        '</g>' +
                    '</g>' +
                '</svg>';
var tooltip_mobile = '<div class="gb-modal-mask gbHide" style="display: none">' + 
      '<div id="theguestbook_details_mobile" class="mobile-gb-modal js-mobile-gb-modal">' + 
          '<div class="tooltip-header">' + svg_gift + '<div class="js-close modal-close"> x </div>' + 
              '<div class="modal-header">%{extra_thanks_mobile}</div></div>' + 
              '<ul class="dashed">' + 
                  '<li class="numbered-list"><span class="to-receive">5% %{cash_back}</span> %{via_paypal} %{or} %{gift_cards}</li>' + 
                  '<li class="numbered-list"><span class="to-receive">5% %{charitable_donation}</span> %{to_your_fav_cause}</li>' + 
                  '<li class="numbered-list"><span class="to-receive">15% <span class="uppercase">%{trip_cash}</span></span> %{towards_future_travel}</li>' + 
                  '<li class="footer-input-email">' + 
                      '<input type="email" id="myEmail" placeholder="%{enter_email_address}">' + 
                      '<button class="js-join-gb uppercase">%{join_for_free}</button>' + 
                  '</li>' + 
                  '<li class="footer-join"><a href="https://theguestbook.com/assets/terms.pdf" class="uppercase" target="_blank">%{terms_of_use_2}</a></li>' + 
              '</ul>' + 
      '</div>' + 
  '</div>';
var tooltip_mobile_20 = '<div class="gb-modal-mask gbHide" style="display: none">' + 
      '<div id="theguestbook_details_mobile" class="mobile-gb-modal js-mobile-gb-modal">' + 
          '<div class="tooltip-header">' + svg_gift + '<div class="js-close modal-close"> x </div>' + 
              '<div class="modal-header">%{extra_thanks_mobile}</div></div>' + 
              '<ul class="dashed">' + 
                  '<li class="numbered-list"><span class="to-receive">5% %{cash_back}</span> %{via_paypal} %{or} %{gift_cards}</li>' + 
                  '<li class="numbered-list"><span class="to-receive">5% %{charitable_donation}</span> %{to_your_fav_cause}</li>' + 
                  '<li class="numbered-list"><span class="to-receive"><span style="text-decoration: line-through;">15%</span> 20% <span class="uppercase">%{trip_cash}</span></span> %{towards_future_travel}</li>' + 
                  '<li class="footer-input-email">' + 
                      '<input type="email" id="myEmail" placeholder="%{enter_email_address}">' + 
                      '<button class="js-join-gb uppercase">%{join_for_free}</button>' + 
                  '</li>' + 
                  '<li class="footer-join"><a href="https://theguestbook.com/assets/terms.pdf" class="uppercase" target="_blank">%{terms_of_use_2}</a></li>' + 
              '</ul>' + 
      '</div>' + 
  '</div>';

var translator_texts = {
    'join_html': {
        'en': "<button class='js-join-gb'>%{join%%uppercase%%}</button>",
        'fr': "<button class='js-join-gb' style='width: 165px;'>%{join%%uppercase%%}</button>",
        'it': "<button class='js-join-gb' style='width: 115px;'>%{join%%uppercase%%}</button>"
    },
    'extra_thanks': {
        'en': 'AS AN EXTRA THANKS FOR BOOKING WITH US',
        'es': 'Como agradecimiento extra por reservar con nosotros:',
        'de': 'Als zusätzlicher Dank für Ihre Buchung',
        'fr': 'Afin de vous remercier de votre réservation',
        'it': 'Un ringraziamento extra per prenotare da noi'
    },
    'extra_thanks_mobile': {
        'en': 'ENROLL WHEN YOU BOOK & <br/>CHOOSE YOUR REWARD AFTER YOUR STAY:',
        'es': '<span class="uppercase">Como agradecimiento adicional<br/>por reservar con nosotros, recibirá<br/>uno de los siguientes:</span>',
        'de': 'Als zusätzlicher Dank für Ihre Buchung',
        'fr': 'Afin de vous remercier de votre réservation',
        'it': 'Un ringraziamento extra per prenotare da noi'
    },
    'members_only': {
        'en': "For members of The Guestbook only (enroll for free on the confirmation page)",
        'de': "Nur für Mitglieder von The Guestbook (gratis Anmeldung auf der Bestätigungsseite)",
        'fr': "Réservé uniquement aux membres de The Guestbook (inscrivez-vous gratuitement sur la page de confirmation)",
        'it': "Solo per i membri The Guestbook (inscriviti gratuitamente alla pagina di conferma)"
    },
    'members_only_html': {
        'en': "<li class='numbered-list for-gb-members'>* %{members_only}</li>",
        'fr': "<li class='numbered-list for-gb-members' style='padding-left: 35px; padding-right: 51px;'>* %{members_only}</li>"
    },
    'receive_following': {
        'en': "you'll receive </br> one of the following",
        'fr': 'vous serez recompensé[e] selon votre choix entre',
        'it': 'riceverai la tua scelta per'
    },

    'terms_of_use_2': {
        'en': 'Terms of Use',
        'de': 'Bestimmungen',
        'fr': 'conditions d\'utilisation',
        'it': 'i termini di utilizzo',
        'es': 'Términos de Uso'
    },

    'extra_thanks_2': {
        'en': 'AS AN EXTRA THANKS FOR </br> BOOKING WITH US',
        'de': 'Als zusätzlicher Dank für </br> Ihre Buchung',
        'fr': 'Les membres de The Guestbook reçoivent'
    },
    'enter_email': {
        'en': 'enter email',
        'de': 'E-Mail eingeben',
        'fr': 'Insérez votre email',
        'it': 'Inserire indirizzo e-mail'
    },
    'enter_email_address': {
        'en': 'enter email address',
        'de': 'E-Mail eingeben',
        'fr': 'Insérez votre email',
        'it': 'Inserire indirizzo e-mail',
        'es': 'Introduzca su correo electrónico'
    },

    'to_your_fav_cause': {
        'en': 'to donate to your favorite charity',
        'de': 'Ihrer Wahl',
        'fr': 'la cause de votre choix',
        'it': 'alla tua causa favorita',
        'es': 'a tu causa favorita'
    },
    'cash_back': {
        'en': 'Cash Back',
        'es': 'de reembolso en efectivo',
        'de': 'Cash Back',
        'fr': 'Récompense',
        'pt': 'VOLTA A DINHEIRO',
        'it': 'Cash Back'
    },
    'or': {
        'en': 'or',
        'de': 'oder',
        'fr': 'ou',
        'it': 'o',
        'es': 'o'
    },
    'via_paypal': {
        'en': 'VIA PAYPAL',
        'de': 'VIA PAYPAL',
        'fr': 'VIA PAYPAL',
        'it': 'VIA PAYPAL',
        'es': 'a través de PayPal'
    },
    'gift_cards': {
        'en': 'gift cards',
        'de': 'Gutscheinen',
        'fr': 'cartes cadeaux',
        'it': 'carta regalo',
        'es': 'tarjetas de regalo'
    },
    'charitable_donation': {
        'en': 'Cash for a Cause',
        'de': 'Wohltätige Spende',
        'fr': 'don pour soutenir',
        'it': 'donazione caritatevole',
        'es': 'de donación caritativa'
    },
    'trip_cash': {
        'en': 'Cash Forward',
        'es': 'Cash Forward',
        'de': 'Cash Forward',
        'fr': 'Cash Forward',
        'pt': 'Cash Forward',
        'it': 'Cash Forward'
    },
    'join_for_free': {
        'en': 'Join for free',
        'es': 'Únete gratis'
    },
    'towards_future_travel': {
        'en': 'with any of The Guestbook\'s 700+ hotels',
        'fr': 'pour des prochains séjours',
        'it': 'per un futuro soggiorno',
        'es': 'para una futura estadía'
    },
    'tooltip_text_mobile': {
        'header_text': {
            'en': svg_logo + "<div class='js-close modal-close'> x </div><div class='modal-header'>%{extra_thanks%%uppercase%%}:</div>"
        },
        'content_text': {
            'en': "<li class='numbered-list'><span class='roundcircle'><div style='margin-top:-1px;'>1</div></span><span class='bold-font'>5% %{cash_back%%uppercase%%} %{via} PayPal %{or} %{gift_cards}; %{or} </span></li><li class='numbered-list'><span class='roundcircle'><div style='margin-top:-1px;'>2</div></span><span class='bold-font'>5% %{charitable_donation%%uppercase%%} %{to_your_fav_cause}; %{or} </span></li><li class='numbered-list'><span class='roundcircle'><div>3</div></span><span class='bold-font'>15% %{trip_cash%%uppercase%%} %{towards_future_travel} </span></li>%{members_only_html}<li class='footer-input-email'><input type='email' id='myEmail' placeholder='%{enter_email}' /></li><li class='footer-join'>%{join_html}</li>"
        },
        'content_text_20': {
            'en': "<li class='numbered-list'><span class='roundcircle'><div style='margin-top:-1px;'>1</div></span><span class='bold-font'>5% %{cash_back%%uppercase%%} %{via} PayPal %{or} %{gift_cards}; %{or} </span></li><li class='numbered-list'><span class='roundcircle'><div style='margin-top:-1px;'>2</div></span><span class='bold-font'>5% %{charitable_donation%%uppercase%%} %{to_your_fav_cause}; %{or} </span></li><li class='numbered-list'><span class='roundcircle'><div>3</div></span><span class='bold-font'><span style='text-decoration: line-through;'>15%</span> 20% %{trip_cash%%uppercase%%} %{towards_future_travel} </span></li>%{members_only_html}<li class='footer-input-email'><input type='email' id='myEmail' placeholder='%{enter_email}' /></li><li class='footer-join'>%{join_html}</li>"
        }
    },
}

if(typeof jQueryGuestbook + '' == 'undefined'){
    jQueryGuestbook = jQuery;
}

function translator(obj, lang) {
    var defaultLang = detectLanguage();
    if (!lang) {
        lang = defaultLang;
    }
    var str;
    if (typeof obj === 'string') {
        str = obj
    } else if (typeof obj === 'object') {
        str = obj[lang]
        if (obj[lang]) {
            str = obj[lang]
        } else {
            str = obj[defaultLang];
        }
    }

    var nestedPhrasesToReplace = str.match(/%{(.*?)}/g);
    while (nestedPhrasesToReplace && nestedPhrasesToReplace.length > 0) {
        if (nestedPhrasesToReplace) {
            str = replacePhrases(str, nestedPhrasesToReplace, lang);
        }
        nestedPhrasesToReplace = str.match(/%{(.*?)}/g);
    }

    return str;
}

function detectLanguage(){
    var language = jQuery('html').attr('lang');
    return language;
}

function replacePhrases(str, nestedPhrasesToReplace, lang) {
    var defaultLang = jQuery('html').attr('lang');
    if (!lang) {
        lang = detectLanguage();
    }
    for (var i = 0; i < nestedPhrasesToReplace.length; i++) {
        var currentPhraseKey = nestedPhrasesToReplace[i].replace(/%{|}/g, '');
        var currentPhraseFormatting = currentPhraseKey.match(/%%(.*?)%%/g);
        if (currentPhraseFormatting && currentPhraseFormatting.length > 0) {
            currentPhraseFormatting = currentPhraseFormatting[0];
            currentPhraseKey = currentPhraseKey.replace(currentPhraseFormatting, '');
        }
        if (translator_texts[currentPhraseKey]) {
            var phraseToReplaceWith = translator_texts[currentPhraseKey][lang] ? translator_texts[currentPhraseKey][lang] : translator_texts[currentPhraseKey][defaultLang];
            if (currentPhraseFormatting) {
                var parsedFormatting = currentPhraseFormatting.replace(/%/g, '');
                if (parsedFormatting === 'uppercase') {
                    phraseToReplaceWith = phraseToReplaceWith.toUpperCase();
                } else if (parsedFormatting === 'lowercase') {
                    phraseToReplaceWith = phraseToReplaceWith.toLowerCase();
                } else if (parsedFormatting === 'titlecase') {
                    phraseToReplaceWith = titleCase(phraseToReplaceWith);
                }
            }
            str = str.replace(new RegExp(nestedPhrasesToReplace[i], 'g'), phraseToReplaceWith);
        } else {
            str = str.replace(new RegExp(nestedPhrasesToReplace[i], 'g'), currentPhraseKey);
        }
    }
    return str;
}      

function createTooltipMobile(){

    if (sessionStorage.getItem('showCashFwd20') == 'true') {
      return jQuery(translator(tooltip_mobile_20)).addClass('lang-' + detectLanguage());
    } else {
      return jQuery(translator(tooltip_mobile)).addClass('lang-' + detectLanguage());
    }
    

}

function triggerTooltip(targetElements, tooltipElement, passedInOffsetTop, passedInOffsetLeft){
    var is_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (jQueryGuestbook(window).width() > 753 && !is_mobile) {
        jQueryGuestbook.each(targetElements, function(_, targetElement) {
          // var offset_top;
          if (typeof passedInOffsetTop == 'undefined'){
            passedInOffsetTop = 30;
          }
          if (typeof passedInOffsetLeft == 'undefined') passedInOffsetLeft = 0
            jQueryGuestbook(targetElement).removeAttr('style');
          jQueryGuestbook(targetElement).on('mouseenter', function() {
                  var targetOffset = jQueryGuestbook(this).offset();
                  tooltipElement.css('left', jQueryGuestbook(this).offset().left + passedInOffsetLeft).css('top', jQueryGuestbook(this).offset().top + passedInOffsetTop).fadeIn(200);

                  // tooltipElement.css('width', targetElement.outerWidth());
                  tooltipElement.removeClass('gbHide');
                  var t1 = setTimeout(function() {tooltipElement.fadeIn(200)},1);
                  tooltipElement.stop(true, true).fadeIn(200);
                  clearTimeout(t1);

           });
           jQueryGuestbook(targetElement).on('mouseleave', function() {
                  var t2 = setTimeout(function() {tooltipElement.fadeOut(200)},1);
                  tooltipElement.stop(true, true).fadeOut(200);
                  clearTimeout(t2);
            });
        });

    } else {
        jQueryGuestbook.each(targetElements, function(_, targetElement) {
            var targetElement = jQueryGuestbook(targetElement);
            targetElement.
            off('mouseenter').
            off('mouseleave');
            //createTooltipMobile().appendTo(jQueryGuestbook('body'));

            targetElement.on('click touchstart', function(event){
                event.preventDefault();
                event.stopPropagation();

                jQueryGuestbook(".gb-modal-mask").removeClass('gbHide').removeAttr('style');
            })
            jQueryGuestbook('.js-close').waitUntilExists(function() {
                var _self = this;
                jQueryGuestbook('.js-close').on('click', function() {
                    if (tooltipElement.hasClass('change-body')) {
                        tooltipElement.find('ul li.join-success').remove();
                        tooltipElement.find('ul li.gbHide').each(function(index, elem) {
                            jQueryGuestbook(elem).removeClass('gbHide');
                        });
                        tooltipElement.removeClass('change-body');
                    }
                    tooltipElement.addClass('gbHide');
                });
            });

            jQueryGuestbook("#myEmail").off().on('keypress', function(e) {
               // Enter pressed?
               if(e.which == 10 || e.which == 13) {
                   jQueryGuestbook('.js-join-gb').click();
               }
            });
            jQueryGuestbook('.js-join-gb').unbind('click');
            jQueryGuestbook('.js-join-gb').on('click', function(event){
                event.preventDefault();
                if(jQueryGuestbook("#myEmail").val() != ''){
                    jQueryGuestbook.ajax({
                        type: 'POST',
                        url: 'https://theguestbook.com/api/v1/sign_up',
                        crossDomain: true,
                        data: { email: jQueryGuestbook("#myEmail").val(), hotel: getHotelIdentifier(), lang: detectLanguage() },
                        dataType: 'json'
                    }).done(function(data, textStatus, jqXHR ){
                        tooltipElement.find('ul li').each(function(index, elem) {
                            jQueryGuestbook(elem).addClass('gbHide');
                        });
                        tooltipElement.find('ul').append('<li class="join-success">' + data.msg + '</li>');
                        tooltipElement.addClass('change-body');
                        jQueryGuestbook("#myEmail").val('');
                    }).fail(function(jqXHR, textStatus, errorThrown){
                        console.log(errorThrown);
                    });
                }
            });
        });
        
    }

}

/**
    @param selector list Array - array of string elements
*/

function bindTriggerTooltipToElements(selectorList, tooltipElement, passedInOffsetTop, passedInOffsetLeft){
    var tooltipElement = isMobileDevice() ? jQueryGuestbook('.gb-modal-mask') : jQueryGuestbook('#theguestbook_details');
    setTimeout(function(){
        triggerTooltip(selectorList, tooltipElement, passedInOffsetTop, passedInOffsetLeft);
    }, 500);
    jQueryGuestbook(window).on('resize', function(){
        tooltipElement = isMobileDevice() ? jQueryGuestbook('.gb-modal-mask') : jQueryGuestbook('#theguestbook_details');
        
        setTimeout(function(){
            triggerTooltip(selectorList, tooltipElement, passedInOffsetTop, passedInOffsetLeft);
        }, 500);
    })
}

                if(window.location.search.includes('dDate')) {
                    // grab checkout date and check whether date is valid for extra 5%
                    var checkoutDate = getUrlParameter('dDate');

                    checkoutDate = moment(checkoutDate).format('MM-DD-YYYY');

                    var isValidDate = checkForValidDate(checkoutDate);
                    if(isValidDate) {
                        
                        sessionStorage.setItem('showCashFwd20', true);
                        EARN_PERCENTAGE_15 = .20;
                    } else {
                        
                        sessionStorage.setItem('showCashFwd20', false);
                        EARN_PERCENTAGE_15 = .15;
                    }
                    // $('.gb-modal-mask').remove();
                    // $('#theguestbook_details').remove();
                    // createTooltip().appendTo(jQuery('body'));
                    // createTooltipMobile().appendTo(jQuery('body'));
                    
                }

                createTooltip().appendTo(jQuery('body'));
                createTooltipMobile().appendTo(jQuery('body'));
                
                var getNbNights = function(){
                    var checkinDate = moment(jQuery("#aDate").val());                            
                    var checkoutDate = moment(jQuery("#dDate").val());
                    return checkoutDate.diff(checkinDate, 'days');
                }

                function setupDynamicBanners(elements){
                    jQuery(elements).each(function() {
                        var target = jQuery(this);
                        var amtRaw = 0;

                        if (target.hasClass('price') || target.hasClass('price-c')) {
                            amtRaw = target.text().trim();
                        } else {
                            if(target.closest('.fancybox-wrap').length)
                                amtRaw = target.clone().children().remove().end().text().trim();
                            else
                                amtRaw = target.find('span.custom-price').text().trim()
                        }
                        if(amtRaw != ""){
                            var currency = getDefaultCurrencyCode();
                            var priceRaw = amtRaw.replace(currency, '').trim();
                            var price = parseRawPrice(priceRaw.replace(/[^\d.\,\ ]/g, '').trim());
                            var num_nights = getNbNights();

                            if (!isNaN(price) && target.parent().find('div.gb-text-banner').length == 0) {
                                price = price / taxed_rate;
                                var lang_index = typeof banner_texts['direct_booking_text'][language] !== 'undefined' ? language : 'en';
                                var text_for_banner = banner_texts['direct_booking_text'][lang_index].replace(/{amount}/g, evenRound(price * num_nights * EARN_PERCENTAGE_15).toFixed(2) + ' ' + currency);
                                
                                if (sessionStorage.getItem('showCashFwd20') == 'true') {
                                    text_for_banner = banner_texts['direct_booking_text'][lang_index].replace(/{amount}/g, '20%');
                                } else {
                                    text_for_banner = banner_texts['direct_booking_text'][lang_index].replace(/{amount}/g, '15%');
                                }     

                                var dynamicEl = jQuery("<div />", {
                                    class: 'js-dynamic-banner gb-text-banner gb-dynamic-banner lang-' + language
                                });
                                dynamicEl.html('<span>' + text_for_banner + '</span>');

                                if(!target.hasClass('preci'))
                                    dynamicEl.insertAfter(target);
                                else{
                                    if(!target.closest('.mobileprice').find('.js-dynamic-banner').length)
                                        dynamicEl.insertAfter(target.closest('.sta-div-preci').next());
                                }

                                var tooltipElement = isMobileDevice() ? jQuery('.gb-modal-mask') : jQuery('#theguestbook_details');
                                bindTriggerTooltipToElements(['.gb-text-banner'], tooltipElement, 30, -35);
                                if(sessionStorage.getItem("gb_packages_enabled") == "1" && target.closest('.fancybox-wrap').length){
                                    jQuery('.js-dynamic-banner').remove();
                                }
                            }
                        }
                    })
                }

                jQuery(accesors.static_banner).waitUntilExists(function() {
                    var target = jQuery(this);
                    if(!target.find('.js-static-price-banner').length){
                        var lang_index = typeof banner_texts['static_banner'][language] !== 'undefined' ? language : 'en';
                        var banner_dummy_text = banner_texts['static_banner'][lang_index];
                        var $staticPriceBannerElementWrapper = jQuery("<div >", {
                                html: "<ul class='static-price-banner js-static-price-banner hide bold-font lang-" + language + "'><li class='static-banner-text uppercase'>" + banner_dummy_text + "</li>",
                            class: "travel-cal-legend"
                        });

                        $staticPriceBannerElementWrapper.insertAfter(target);
                        
                        var tooltipElement = isMobileDevice() ? jQuery('.gb-modal-mask') : jQuery('#theguestbook_details');
                        jQuery('#theguestbook_details').css('width', '370px');
                        bindTriggerTooltipToElements(['.js-static-price-banner']);
                    }

                });

                jQuery(accesors.dynamic_banner + ":last").waitUntilExists(function() {

                    setupDynamicBanners(accesors.dynamic_banner);
                });

                jQuery(accesors.dynamic_banner_modal + ':last').waitUntilExists(function() {

                    setupDynamicBanners(accesors.dynamic_banner_modal);
                });

                jQuery(".tablemob .price b:first").waitUntilExists(function(){
                    
                    var num_nights = getNbNights();
                    jQuery(".tablemob .price").each(function(){
                        if(jQuery(this).text().trim() != ""){ 
                            var target = jQuery(this).find('b:last');
                            var amtRaw = target.text().trim();
                            var currency = amtRaw.split(" ")[1];
                            var priceRaw = amtRaw.replace(currency, '').trim();
                            
                            target.closest('.tablemob').find(".js-dynamic-banner-sub").remove();
                            var extra_class = !target.closest('.tablemob').find('[id^=promoSelect]').length ? ' no-promotion' : '';
                            if(jQuery("ul.rate-types-list li").length > 1){
                                extra_class = " no-promotion-multi";
                            }
                        }
                    })
                });

                var first_time = 1;

            
            bookingBanner();

            jQuery(window).resize(function() {
                if (isMobileDevice()) {
                    jQuery('.js-desktop-tooltip').addClass('gbHide');
                    //jQuery('.js-mobile-gb-modal').removeClass('gbHide');
                } else {
                    jQuery('.js-desktop-tooltip').removeClass('gbHide');
                    jQuery('.js-mobile-gb-modal').addClass('gbHide');
                }
            });

            jQuery(".rate-type-btn:visible:first").waitUntilExists(function(){

                jQuery(".rate-type-btn").off().on('click', function(){
                    if(typeof first_time + '' == 'undefined'){
                        first_time = 1;
                    }
                    if(first_time != 1){
                        jQuery('.js-booking-banner-box').remove();
                        var lang_index = typeof banner_texts['direct_booking_text'][language] !== 'undefined' ? language : 'en';
                        var my_target = jQuery('.hotel_grand_total').closest('.line-detail');
                        if($(".summary-details:last .line-detail:eq(1) span:last").text() != ""){
                            var total_with_taxes = calculateTotalFromRawPrice($(".summary-details:last .line-detail:eq(1) span:last"));
                            var taxesDomEl = jQuery('.group.total-price').prev();
                           
                            var total = total_with_taxes / taxed_rate;
                            var $subtotalBanner = jQuery('<div />');
                            if (!jQuery('.js-booking-banner-box').length) {
                                $subtotalBanner.addClass('subtotal-booking-banner').addClass('js-booking-banner-box').addClass('line-detail').removeClass('roomsumtitleorangesmall');
                                var currency = $(".summary-details:last .line-detail:eq(1) span:last").text().trim().split(" ")[1];
                                var totalRewards = evenRound(total * EARN_PERCENTAGE_15, 2);
                                var tripRewards = evenRound(total * EARN_PERCENTAGE_05, 2);
                                var separator = " ";
                                // var text_for_banner = banner_texts['direct_booking_text'][lang_index];
                                var text_for_banner = '<div class="info-line"></div><div class="info-h hold">' + banner_texts['cash_rewards'][language] + '</div>';
                                $subtotalBanner.html( text_for_banner + '<div class="info-v bold"> ' + evenRound(total * EARN_PERCENTAGE_15, 2).toFixed(2) + separator + currency + '</div>' );
                                $subtotalBanner.attr('data-total', total);
                                $subtotalBanner.attr('data-total-rewards', totalRewards);
                                $subtotalBanner.attr('data-trip-rewards', tripRewards);
                                $subtotalBanner.attr('data-currency', currency);
                                setTimeout( function(){ 
                                    $subtotalBanner.insertAfter(my_target);
                                    var tooltipElement = isMobileDevice() ? jQuery('.gb-modal-mask') : jQuery('#theguestbook_details');
                                    bindTriggerTooltipToElements(['.js-booking-banner-box'], tooltipElement, 35, -140); 
                                }, 500 )
                                
                            }
                        }
                    } else {
                        first_time = 0;
                    }
                    
                })
            });
            


            jQuery(".js-booking-banner").waitUntilExists(function(){
                if (sessionStorage.getItem("excluded_gb_rate") == false || sessionStorage.getItem("excluded_gb_rate") == "false") {
                    jQuery('#email').waitUntilExists(function() {
                        var extra_classes = "light-shadows ui-widget-header gb-total-banner-final ui-corner-all ui-widget-content";
                        if (isMobileDevice()) {
                            extra_classes += " mobile-sum-banner-text";
                        }
    
                        isGuestbookMember(jQuery(".js-booking-banner").data("trip-rewards"), jQuery(".js-booking-banner").data("total-rewards"), jQuery(".js-booking-banner").data("currency"), jQuery(this).val());
    
    
                        /* EMAIL CHANGE EVENT HANDLER */
                        /* check if user is Guestbook member */
                        jQuery(this).on('blur', function(evt) {
                            jQuery('.js-booking-banner, .js-booking-banner-box').removeClass('gbHide');
                            isGuestbookMember(jQuery(".js-booking-banner").data("trip-rewards"), jQuery(".js-booking-banner").data("total-rewards"), jQuery(".js-booking-banner").data("currency"), jQuery(this).val());
    
    
                        });
    
    
                    });
                }
            });
            


            

            jQuery('#reservation_holder_details').waitUntilExists(function() {
                var totalSelector = jQuery(".total-amount");
                var taxes = 0;
                var totalPrice = totalSelector.text().replace(/\./g, '').replace(",", '.') * 1;
                if (includeExtraCharges == true) {
                    var totalRewards = evenRound(totalPrice * EARN_PERCENTAGE_15);
                    var tripRewards = evenRound(totalPrice * EARN_PERCENTAGE_05);


                } else {
                    var totalRewards = evenRound((totalPrice - taxes) * EARN_PERCENTAGE_15);
                    var tripRewards = evenRound((totalPrice - taxes) * EARN_PERCENTAGE_05);

                }
                //totalSumBanner(jQuery("#fbrform").find(".row:first > div:first"), jQuery("#fbrform").find(".row:first"), extra_classes);
                if (sessionStorage.getItem("excluded_gb_rate") == false || sessionStorage.getItem("excluded_gb_rate") == "false") {
                    isGuestbookMember(tripRewards, totalRewards, jQuery("select[name=currency]").val(), jQuery("#email").val());

                    jQuery("#email").off('blur').off('change').on('blur change', function(evt) {
                        jQuery('.js-gb-rewards-table').removeClass('gbHide');
                        isGuestbookMember(tripRewards, totalRewards, jQuery("select[name=currency]").val(), jQuery(this).val());


                    });
                }


            });

            
            


            jQuery(".join_gb_membership").waitUntilExists(function() {
                jQuery(".join_gb_membership").on('click', function() {
                    sessionStorage.setItem('gb_agree_check', jQuery(this).prop('checked'));
                    if (jQuery(this).prop('checked') == true) {
                        jQuery('.js-booking-banner').removeClass('gbHide');
                        jQuery(this).parent().addClass('checked');
                        sessionStorage.setItem('wantsToBeAmember', 1);
                    } else {
                        jQuery('.js-booking-banner').addClass('gbHide');
                        jQuery(this).parent().removeClass('checked');
                        sessionStorage.setItem('wantsToBeAmember', 0);
                    }
                });
            });


            /* INSERT REWARDS DETAILS ON CHECKOUT/PAYMENT PAGE */


            jQuery("#next-step").waitUntilExists(function() {
                jQuery("#next-step").on('click', function() {
                    if (jQuery(".guestbook_membership_wrapper").length && jQuery("#CCNum").length){
                        let checkinDate = moment(jQuery("#aDate").val()).format('YYYY-MM-DD');
                        let checkoutDate = moment(jQuery("#dDate").val()).format('YYYY-MM-DD');

                        let dateStrings = jQuery('.travel-details-box .room-info .room-detail-1 p');
                        let checkinString = moment(dateStrings.eq(0).textIgnoreChildren()).format('YYYY-MM-DD');
                        let checkoutString = moment(dateStrings.eq(1).textIgnoreChildren()).format('YYYY-MM-DD');

                        let roomInfo = jQuery(".travel-details-box .room-description h3");

                        var currency_code = (getDefaultCurrencyCode() == "MX" || getDefaultCurrencyCode() == "MXN") ? "MXN" : getDefaultCurrencyCode();
                        var cfgParam = {
                            last_name: jQuery("#lname1").val(),
                            first_name: jQuery("#fname1").val(),
                            email: jQuery("#email").val(),
                            room_name: roomInfo.eq(0).text().trim(),
                            rate_type: roomInfo.eq(1).text().trim(),
                            total: jQuery(".js-booking-banner").data('total'),
                            totalWithTaxes: jQuery(".js-booking-banner").data('total-with-taxes'),
                            totalRewards: jQuery(".js-booking-banner").data('total-rewards'),
                            tripRewards: jQuery(".js-booking-banner").data('trip-rewards'),
                            currencyCode: currency_code,
                            currencySymbol: getDefaultCurrencyCode(),
                            lang_code: jQuery('html').attr('lang'),
                            checkin_date: checkinDate,
                            checkout_date: checkoutDate,
                            checkin_string: checkinString,
                            checkout_string: checkoutString
                        }
                        saveBookingDetails(cfgParam);
                    }
                    
                });
            });

            jQuery('.c-code').waitUntilExists(function(){
                if(getUrlParameter('cancel') != "S"){
                    setTimeout(function(){ submitReservationToTheGB(); }, 500);
                }
                
            })


            /* CANCEL BOOKING VIEW */
            if (getUrlParameter('cancel') == 'S' && typeof getUrlParameter('conf') + '' != "undefined") {
                var today = new Date(),
                    month = (today.getMonth() + 1) <= 9 ? "0" + (today.getMonth() + 1) : (today.getMonth() + 1),
                    day = today.getDate() <= 9 ? "0" + today.getDate() : today.getDate();
                var data = {
                    //TODO: get email from previous page otherwise cancellation doesn't work. Or make it work with just confirmation number and hotel...
                    
                    confirmation_number: getUrlParameter('conf'),
                    cancellation_number: getUrlParameter('conf'),
                    cancellation_date: today.getFullYear() + "-" + month + "-" + day,
                    hotel_identifier: "thereefplayacar"
                };
                jQuery.ajax({
                    type: 'POST',
                    url: "https://theguestbook.com/api/v1/submit_booking_engine_cancellation",
                    crossDomain: true,
                    data: data,
                    dataType: 'json'
                }).done(function(data, textStatus, jqXHR) {
                    console.log(data);
                    window.localStorage.setItem('confirmation', null)
                }).fail(function(data, textStatus, jqXHR) {

                });
                
            }
        }
    })();
    
}
