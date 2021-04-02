/*! For license information please see index.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["react-broadcast-channel"]=e():t["react-broadcast-channel"]=e()}(self,(function(){return(()=>{"use strict";var t={418:t=>{var e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,a){for(var i,u,c=o(t),f=1;f<arguments.length;f++){for(var s in i=Object(arguments[f]))r.call(i,s)&&(c[s]=i[s]);if(e){u=e(i);for(var l=0;l<u.length;l++)n.call(i,u[l])&&(c[u[l]]=i[u[l]])}}return c}},408:(t,e,r)=>{var n=r(418);if("function"==typeof Symbol&&Symbol.for){var o=Symbol.for;o("react.element"),o("react.portal"),o("react.fragment"),o("react.strict_mode"),o("react.profiler"),o("react.provider"),o("react.context"),o("react.forward_ref"),o("react.suspense"),o("react.memo"),o("react.lazy")}"function"==typeof Symbol&&Symbol.iterator;function a(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},u={};function c(t,e,r){this.props=t,this.context=e,this.refs=u,this.updater=r||i}function f(){}function s(t,e,r){this.props=t,this.context=e,this.refs=u,this.updater=r||i}c.prototype.isReactComponent={},c.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error(a(85));this.updater.enqueueSetState(this,t,e,"setState")},c.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},f.prototype=c.prototype;var l=s.prototype=new f;l.constructor=s,n(l,c.prototype),l.isPureReactComponent=!0;Object.prototype.hasOwnProperty;var p=null;function y(){var t=p;if(null===t)throw Error(a(321));return t}e.useCallback=function(t,e){return y().useCallback(t,e)},e.useEffect=function(t,e){return y().useEffect(t,e)},e.useState=function(t){return y().useState(t)}},294:(t,e,r)=>{t.exports=r(408)}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};return(()=>{r.r(n),r.d(n,{BroadcastEmiter:()=>f,BroadcastSubscriber:()=>c,registerChannel:()=>e,useBroadcastChannel:()=>i});var t=[];function e(e){t.push(function(t){return new BroadcastChannel(t)}(e))}var o=r(294);function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(e){var r,n,i=(r=(0,o.useState)(null),n=2,function(t){if(Array.isArray(t))return t}(r)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}}(r,n)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=i[0],c=i[1],f=(0,o.useCallback)((function(t){t(u)}),[u]);return(0,o.useEffect)((function(){var r=function(e){var r=null;return t.forEach((function(t){t.name===e&&(r=t)})),r}(e),n=function(t){c(t.data)};return r&&r.addEventListener("message",n),function(){r&&r.removeEventListener("message",n)}}),[]),{emit:function(r){c(u),function(e){var r=e.name,n=e.message;t.forEach((function(t){t.name===r&&t.postMessage(n)}))}({name:e,message:r})},subscribe:f}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const c=function(t){var e,r,n=t.children,a=i(t.channel).subscribe,c=(e=(0,o.useState)(null),r=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}}(e,r)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),f=c[0],s=c[1];return(0,o.useEffect)((function(){a((function(t){s(t)}))}),[]),n?n(f):null},f=function(t){var e=t.children,r=i(t.channel).emit;return e?e((function(t){r(t)})):null}})(),n})()}));