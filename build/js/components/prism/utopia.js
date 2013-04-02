/**
 * Utopia: A JavaScript util library that assumes modern standards support and doesn't fix any browser bugs
 * @author Lea Verou (http://lea.verou.me)
 * MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Last update: 2012-4-29
 */

function $(e,t){return typeof e=="string"?(t||document).querySelector(e):e}function $$(e,t){var n=(t||document).querySelectorAll(e);try{return Array.prototype.slice.call(n)}catch(r){var i=Array(n.length);for(var s=n.length;s-->0;)i[s]=n[s];return i}}Array.prototype.forEach||(Array.prototype.forEach=function(e,t){for(var n=0,r=this.length;n<r;++n)e.call(t||this,this[n],n,this)}),$$("[id]").forEach(function(e){window[e.id]=e}),String.prototype.splice=function(e,t,n){return t=+t||0,n=n||"",this.slice(0,e)+n+this.slice(e+t)},function(){var e=window.Utopia={type:function(e){if(e===null)return"null";if(e===undefined)return"undefined";var t=Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1];return t=t?t.toLowerCase():"",t=="number"&&isNaN(e)?"NaN":t},each:function(t,n,r){if(!e.type(n)=="function")throw Error("The second argument in Utopia.each() must be a function");r=r||t;for(var i in t)if(t.hasOwnProperty&&t.hasOwnProperty(i)){var s=n.call(r,t[i],i);if(!!s||s===0||s==="")return s}return null},merge:function(e){var t={};for(var n=0;n<arguments.length;n++){var r=arguments[n];for(var i in r)t[i]=r[i]}return t},attach:function(e,t){for(var n=0;n<arguments.length;n++){var r=arguments[n];for(var i in r)i in e||(e[i]=r[i])}return e},element:{create:function(){var t;if(e.type(arguments[0])==="string")if(e.type(arguments[1])==="object")t=arguments[1],t.tag=arguments[0];else{t={tag:arguments[0]};if(e.type(arguments[1])==="array")t.contents=arguments[1];else if(e.type(arguments[1])==="string"||e.type(arguments[1])==="number")t.contents=[""+arguments[1]]}else t=arguments[0];var n=t.namespace||"",r;n?r=document.createElementNS(n,t.tag):r=document.createElement(t.tag),t.className&&(t.properties=t.properties||{},t.properties.className=t.className),e.element.set(r,t);if(t.before){var i=$(t.before);i&&i.parentNode&&i.parentNode.insertBefore(r,i)}if(t.after&&r.parentNode===null){var s=$(t.after);s&&s.parentNode&&s.parentNode.insertBefore(r,s.nextSibling)}return t.inside&&r.parentNode===null&&$(t.inside).appendChild(r),r},set:function(t,n){return e.element.prop(t,n.properties||n.prop),e.element.attr(t,n.attributes||n.attr),e.element.contents(t,n.contents),t},prop:function(e,t){if(t)for(var n in t)e[n]=t[n];return e},attr:function(e,t){if(t)for(attr in t)e.setAttribute(attr,t[attr]);return e},contents:function(t,n,r){if(n||n===0){e.type(n)!=="array"&&(n=[n]);var i=t.firstChild;for(var s=0;s<n.length;s++){var o=n[s],u;switch(e.type(o)){case"string":if(o==="")continue;case"number":u=document.createTextNode(o);break;case"object":u=e.element.create(o);break;default:u=o}u&&(!r||r==="end"?t.appendChild(u):r==="start"&&t.insertBefore(u,i))}}return t}},elements:{},event:{bind:function(t,n,r,i){if(e.type(t)==="string"||e.type(t)==="array"){var s=e.type(t)==="string"?$$(t):t;s.forEach(function(t){e.event.bind(t,n,r,i)})}else if(e.type(n)==="string")i?t["on"+n]=r:t.addEventListener(n,r,!1);else if(e.type(n)==="array")for(var o=0;o<n.length;o++)e.event.bind(t,n[o],r,arguments[2]);else for(var u in n)e.event.bind(t,u,n[u],arguments[2])},fire:function(t,n,r){if(e.type(t)==="string"||e.type(t)==="array"){var i=e.type(t)==="string"?$$(t):t;i.forEach(function(t){e.event.fire(t,n,r)})}else if(document.createEvent){var s=document.createEvent("HTMLEvents");s.initEvent(n,!0,!0),s.custom=!0,r&&e.attach(s,r),t.dispatchEvent(s)}}},xhr:function(e){document.body.setAttribute("data-loading","");var t=new XMLHttpRequest,n=e.method||"GET",r=e.data||"";t.open(n,e.url+(n==="GET"&&r?"?"+r:""),!0),e.headers=e.headers||{},n!=="GET"&&!e.headers["Content-type"]&&!e.headers["Content-Type"]&&t.setRequestHeader("Content-type","application/x-www-form-urlencoded");for(var i in e.headers)t.setRequestHeader(i,e.headers[i]);return t.onreadystatechange=function(){t.readyState===4&&(document.body.removeAttribute("data-loading"),e.callback(t))},t.send(n==="GET"?null:r),t},script:function(t,n,r){return r=r||document,e.element.create({tag:"script",properties:{src:t,async:!0,onload:n},inside:r.documentElement})},offset:function(e){var t=0,n=0,r=e;if(r.parentNode){do t+=r.offsetLeft,n+=r.offsetTop;while((r=r.offsetParent)&&r.nodeType<9);r=e;do t-=r.scrollLeft,n-=r.scrollTop;while((r=r.parentNode)&&!/body/i.test(r.nodeName))}return{top:n,right:innerWidth-t-e.offsetWidth,bottom:innerHeight-n-e.offsetHeight,left:t}}};["set","prop","attr","contents"].forEach(function(t){e.elements[t]=function(n){n=e.type(n)==="string"?$$(n):Array.prototype.slice.call(n);var r=Array.prototype.slice.call(arguments);return r.shift(),n=n.map(function(n){return e.element[t](n,r)}),n}})}(),window.$u=window.$u||Utopia;