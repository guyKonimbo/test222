/*! For license information please see contentScript.js.LICENSE.txt */
(()=>{"use strict";var t={408:(t,e)=>{Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.iterator;var o={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},r=Object.assign,n={};function a(t,e,r){this.props=t,this.context=e,this.refs=n,this.updater=r||o}function c(){}function s(t,e,r){this.props=t,this.context=e,this.refs=n,this.updater=r||o}a.prototype.isReactComponent={},a.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},a.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},c.prototype=a.prototype;var u=s.prototype=new c;u.constructor=s,r(u,a.prototype),u.isPureReactComponent=!0;Array.isArray,Object.prototype.hasOwnProperty;var i={current:null};e.useEffect=function(t,e){return i.current.useEffect(t,e)},e.useState=function(t){return i.current.useState(t)}},294:(t,e,o)=>{t.exports=o(408)}},e={};function o(r){var n=e[r];if(void 0!==n)return n.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,o),a.exports}(()=>{var t=o(294);function e(){const[e,o]=(0,t.useState)(null);return(0,t.useEffect)((()=>{const t=document.querySelector("h1");o(t.textContent)}),[]),e}const r=e();console.log(r),chrome.runtime.onMessage.addListener((function(t,o,r){if("EXECUTE_SCRIPT"===t.type){const t=e();chrome.runtime.sendMessage({type:"DATA",data:t})}})),window.onload=t=>{console.log("page is fully loaded")}})()})();