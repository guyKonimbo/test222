/*! For license information please see 711.js.LICENSE.txt */
"use strict";(self.webpackChunkreactjs_chrome=self.webpackChunkreactjs_chrome||[]).push([[711],{682:(e,t,n)=>{function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}var r;n.d(t,{aU:()=>r,q_:()=>l,Ep:()=>u,cP:()=>s}),function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(r||(r={}));var i="beforeunload";function l(e){void 0===e&&(e={});var t=e.window,n=void 0===t?document.defaultView:t,l=n.history;function h(){var e=s(n.location.hash.substr(1)),t=e.pathname,a=void 0===t?"/":t,r=e.search,i=void 0===r?"":r,o=e.hash,c=void 0===o?"":o,u=l.state||{};return[u.idx,{pathname:a,search:i,hash:c,state:u.usr||null,key:u.key||"default"}]}var p=null;function f(){if(p)b.call(p),p=null;else{var e=r.Pop,t=h(),n=t[0],a=t[1];if(b.length){if(null!=n){var i=v-n;i&&(p={action:e,location:a,retry:function(){O(-1*i)}},O(i))}}else w(e)}}n.addEventListener("popstate",f),n.addEventListener("hashchange",(function(){u(h()[1])!==u(g)&&f()}));var d=r.Pop,m=h(),v=m[0],g=m[1],y=c(),b=c();function P(e){return function(){var e=document.querySelector("base"),t="";if(e&&e.getAttribute("href")){var a=n.location.href,r=a.indexOf("#");t=-1===r?a:a.slice(0,r)}return t}()+"#"+("string"==typeof e?e:u(e))}function x(e,t){return void 0===t&&(t=null),a({pathname:g.pathname,hash:"",search:""},"string"==typeof e?s(e):e,{state:t,key:Math.random().toString(36).substr(2,8)})}function E(e,t){return[{usr:e.state,key:e.key,idx:t},P(e)]}function C(e,t,n){return!b.length||(b.call({action:e,location:t,retry:n}),!1)}function w(e){d=e;var t=h();v=t[0],g=t[1],y.call({action:d,location:g})}function O(e){l.go(e)}return null==v&&(v=0,l.replaceState(a({},l.state,{idx:v}),"")),{get action(){return d},get location(){return g},createHref:P,push:function e(t,a){var i=r.Push,o=x(t,a);if(C(i,o,(function(){e(t,a)}))){var c=E(o,v+1),u=c[0],s=c[1];try{l.pushState(u,"",s)}catch(e){n.location.assign(s)}w(i)}},replace:function e(t,n){var a=r.Replace,i=x(t,n);if(C(a,i,(function(){e(t,n)}))){var o=E(i,v),c=o[0],u=o[1];l.replaceState(c,"",u),w(a)}},go:O,back:function(){O(-1)},forward:function(){O(1)},listen:function(e){return y.push(e)},block:function(e){var t=b.push(e);return 1===b.length&&n.addEventListener(i,o),function(){t(),b.length||n.removeEventListener(i,o)}}}}function o(e){e.preventDefault(),e.returnValue=""}function c(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter((function(e){return e!==t}))}},call:function(t){e.forEach((function(e){return e&&e(t)}))}}}function u(e){var t=e.pathname,n=void 0===t?"/":t,a=e.search,r=void 0===a?"":a,i=e.hash,l=void 0===i?"":i;return r&&"?"!==r&&(n+="?"===r.charAt(0)?r:"?"+r),l&&"#"!==l&&(n+="#"===l.charAt(0)?l:"#"+l),n}function s(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}},711:(e,t,n)=>{n.d(t,{UT:()=>c,rU:()=>u});var a=n(294),r=n(682),i=n(974);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}const o=["onClick","reloadDocument","replace","state","target","to"];function c(e){let{basename:t,children:n,window:l}=e,o=(0,a.useRef)();null==o.current&&(o.current=(0,r.q_)({window:l}));let c=o.current,[u,s]=(0,a.useState)({action:c.action,location:c.location});return(0,a.useLayoutEffect)((()=>c.listen(s)),[c]),(0,a.createElement)(i.F0,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:c})}const u=(0,a.forwardRef)((function(e,t){let{onClick:n,reloadDocument:c,replace:u=!1,state:s,target:h,to:p}=e,f=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o),d=(0,i.oQ)(p),m=function(e,t){let{target:n,replace:l,state:o}=void 0===t?{}:t,c=(0,i.s0)(),u=(0,i.TH)(),s=(0,i.WU)(e);return(0,a.useCallback)((t=>{if(!(0!==t.button||n&&"_self"!==n||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t))){t.preventDefault();let n=!!l||(0,r.Ep)(u)===(0,r.Ep)(s);c(e,{replace:n,state:o})}}),[u,c,s,l,o,n,e])}(p,{replace:u,state:s,target:h});return(0,a.createElement)("a",l({},f,{href:d,onClick:function(e){n&&n(e),e.defaultPrevented||c||m(e)},ref:t,target:h}))}))},974:(e,t,n)=>{n.d(t,{AW:()=>u,F0:()=>s,TH:()=>d,WU:()=>v,Z5:()=>h,oQ:()=>p,s0:()=>m});var a=n(294),r=n(682);function i(e,t){if(!e)throw new Error(t)}const l=(0,a.createContext)(null),o=(0,a.createContext)(null),c=(0,a.createContext)({outlet:null,matches:[]});function u(e){i(!1)}function s(e){let{basename:t="/",children:n=null,location:c,navigationType:u=r.aU.Pop,navigator:s,static:h=!1}=e;f()&&i(!1);let p=S(t),d=(0,a.useMemo)((()=>({basename:p,navigator:s,static:h})),[p,s,h]);"string"==typeof c&&(c=(0,r.cP)(c));let{pathname:m="/",search:v="",hash:g="",state:y=null,key:b="default"}=c,P=(0,a.useMemo)((()=>{let e=O(m,p);return null==e?null:{pathname:e,search:v,hash:g,state:y,key:b}}),[p,m,v,g,y,b]);return null==P?null:(0,a.createElement)(l.Provider,{value:d},(0,a.createElement)(o.Provider,{children:n,value:{location:P,navigationType:u}}))}function h(e){let{children:t,location:n}=e;return function(e,t){f()||i(!1);let{matches:n}=(0,a.useContext)(c),l=n[n.length-1],o=l?l.params:{},u=(l&&l.pathname,l?l.pathnameBase:"/");l&&l.route;let s,h=d();if(t){var p;let e="string"==typeof t?(0,r.cP)(t):t;"/"===u||(null==(p=e.pathname)?void 0:p.startsWith(u))||i(!1),s=e}else s=h;let m=s.pathname||"/",v=function(e,t,n){void 0===n&&(n="/");let a=O(("string"==typeof t?(0,r.cP)(t):t).pathname||"/",n);if(null==a)return null;let i=y(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]))?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let l=null;for(let e=0;null==l&&e<i.length;++e)l=E(i[e],a);return l}(e,{pathname:"/"===u?m:m.slice(u.length)||"/"});return function(e,t){return void 0===t&&(t=[]),null==e?null:e.reduceRight(((n,r,i)=>(0,a.createElement)(c.Provider,{children:void 0!==r.route.element?r.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,i+1))}})),null)}(v&&v.map((e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:k([u,e.pathname]),pathnameBase:"/"===e.pathnameBase?u:k([u,e.pathnameBase])}))),n)}(g(t),n)}function p(e){f()||i(!1);let{basename:t,navigator:n}=(0,a.useContext)(l),{hash:o,pathname:c,search:u}=v(e),s=c;if("/"!==t){let n=function(e){return""===e||""===e.pathname?"/":"string"==typeof e?(0,r.cP)(e).pathname:e.pathname}(e),a=null!=n&&n.endsWith("/");s="/"===c?t+(a?"/":""):k([t,c])}return n.createHref({pathname:s,search:u,hash:o})}function f(){return null!=(0,a.useContext)(o)}function d(){return f()||i(!1),(0,a.useContext)(o).location}function m(){f()||i(!1);let{basename:e,navigator:t}=(0,a.useContext)(l),{matches:n}=(0,a.useContext)(c),{pathname:r}=d(),o=JSON.stringify(n.map((e=>e.pathnameBase))),u=(0,a.useRef)(!1);return(0,a.useEffect)((()=>{u.current=!0})),(0,a.useCallback)((function(n,a){if(void 0===a&&(a={}),!u.current)return;if("number"==typeof n)return void t.go(n);let i=w(n,JSON.parse(o),r);"/"!==e&&(i.pathname=k([e,i.pathname])),(a.replace?t.replace:t.push)(i,a.state)}),[e,t,o,r])}function v(e){let{matches:t}=(0,a.useContext)(c),{pathname:n}=d(),r=JSON.stringify(t.map((e=>e.pathnameBase)));return(0,a.useMemo)((()=>w(e,JSON.parse(r),n)),[e,r,n])}function g(e){let t=[];return a.Children.forEach(e,(e=>{if(!(0,a.isValidElement)(e))return;if(e.type===a.Fragment)return void t.push.apply(t,g(e.props.children));e.type!==u&&i(!1);let n={caseSensitive:e.props.caseSensitive,element:e.props.element,index:e.props.index,path:e.props.path};e.props.children&&(n.children=g(e.props.children)),t.push(n)})),t}function y(e,t,n,a){return void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===a&&(a=""),e.forEach(((e,r)=>{let l={relativePath:e.path||"",caseSensitive:!0===e.caseSensitive,childrenIndex:r,route:e};l.relativePath.startsWith("/")&&(l.relativePath.startsWith(a)||i(!1),l.relativePath=l.relativePath.slice(a.length));let o=k([a,l.relativePath]),c=n.concat(l);e.children&&e.children.length>0&&(!0===e.index&&i(!1),y(e.children,t,c,o)),(null!=e.path||e.index)&&t.push({path:o,score:x(o,e.index),routesMeta:c})})),t}const b=/^:\w+$/,P=e=>"*"===e;function x(e,t){let n=e.split("/"),a=n.length;return n.some(P)&&(a+=-2),t&&(a+=2),n.filter((e=>!P(e))).reduce(((e,t)=>e+(b.test(t)?3:""===t?1:10)),a)}function E(e,t){let{routesMeta:n}=e,a={},r="/",i=[];for(let e=0;e<n.length;++e){let l=n[e],o=e===n.length-1,c="/"===r?t:t.slice(r.length)||"/",u=C({path:l.relativePath,caseSensitive:l.caseSensitive,end:o},c);if(!u)return null;Object.assign(a,u.params);let s=l.route;i.push({params:a,pathname:k([r,u.pathname]),pathnameBase:S(k([r,u.pathnameBase])),route:s}),"/"!==u.pathnameBase&&(r=k([r,u.pathnameBase]))}return i}function C(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!0);let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,((e,t)=>(a.push(t),"([^\\/]+)")));return e.endsWith("*")?(a.push("*"),r+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(r,t?void 0:"i"),a]}(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let i=r[0],l=i.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:a.reduce(((e,t,n)=>{if("*"===t){let e=o[n]||"";l=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(t){return e}}(o[n]||""),e}),{}),pathname:i,pathnameBase:l,pattern:e}}function w(e,t,n){let a,i="string"==typeof e?(0,r.cP)(e):e,l=""===e||""===i.pathname?"/":i.pathname;if(null==l)a=n;else{let e=t.length-1;if(l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}a=e>=0?t[e]:"/"}let o=function(e,t){void 0===t&&(t="/");let{pathname:n,search:a="",hash:i=""}="string"==typeof e?(0,r.cP)(e):e,l=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:l,search:W(a),hash:j(i)}}(i,a);return l&&"/"!==l&&l.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function O(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&"/"!==n?null:e.slice(t.length)||"/"}const k=e=>e.join("/").replace(/\/\/+/g,"/"),S=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),W=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",j=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:""},294:(e,t,n)=>{e.exports=n(408)}}]);