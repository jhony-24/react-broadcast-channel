(()=>{"use strict";var e={293:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var a=r(t(811));n.default=function(e){var n=e.children,t=e.channel,r=a.default(t).emit;return n?n((function(e){r(e)})):null}},443:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var a=r(t(811));n.default=function(e){var n=e.children,t=e.channel,r=a.default(t).data;return n?n(r):null}},842:(e,n)=>{function t(e){return new BroadcastChannel(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.emitMessageFromChannel=n.getChannelByName=n.registerChannel=n.createNewChannel=n.channels=void 0,n.channels=[],n.createNewChannel=t,n.registerChannel=function(e){if(Array.isArray(e)){var r=e.map((function(e){return t(e)}));n.channels.push.apply(n.channels,r)}else n.channels.push(t(e))},n.getChannelByName=function(e){var t=null;return n.channels.forEach((function(n){n.name===e&&(t=n)})),t},n.emitMessageFromChannel=function(e){var t=e.name,r=e.message;n.channels.forEach((function(e){e.name===t&&e.postMessage(r)}))}},370:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.BroadcastEmiter=n.BroadcastSubscriber=n.useBroadcastChannel=n.registerChannel=void 0;var a=t(842);Object.defineProperty(n,"registerChannel",{enumerable:!0,get:function(){return a.registerChannel}});var u=t(811);Object.defineProperty(n,"useBroadcastChannel",{enumerable:!0,get:function(){return r(u).default}});var s=t(443);Object.defineProperty(n,"BroadcastSubscriber",{enumerable:!0,get:function(){return r(s).default}});var l=t(293);Object.defineProperty(n,"BroadcastEmiter",{enumerable:!0,get:function(){return r(l).default}})},811:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0});var r=t(427),a=t(842);n.default=function(e){var n=r.useState(null),t=n[0],u=n[1],s=r.useCallback((function(e){e(t)}),[t]);return r.useEffect((function(){var n=a.getChannelByName(e),t=function(e){u(e.data)};return n&&n.addEventListener("message",t),function(){n&&n.removeEventListener("message",t)}}),[]),{emit:function(n){u(n),a.emitMessageFromChannel({name:e,message:n})},subscribe:s,data:t}}},427:e=>{e.exports=require("react")}},n={},t=function t(r){var a=n[r];if(void 0!==a)return a.exports;var u=n[r]={exports:{}};return e[r].call(u.exports,u,u.exports,t),u.exports}(370),r=exports;for(var a in t)r[a]=t[a];t.__esModule&&Object.defineProperty(r,"__esModule",{value:!0})})();