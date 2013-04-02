/*

Holder - 1.9 - client side image placeholders
(c) 2012-2013 Ivan Malopinsky / http://imsky.co

Provided under the Apache 2.0 License: http://www.apache.org/licenses/LICENSE-2.0
Commercial use requires attribution.

*/

var Holder=Holder||{};(function(e,t){function o(e,t){var n="complete",r="readystatechange",i=!1,s=i,o=!0,u=e.document,a=u.documentElement,f=u.addEventListener?"addEventListener":"attachEvent",l=u.addEventListener?"removeEventListener":"detachEvent",c=u.addEventListener?"":"on",h=function(o){(o.type!=r||u.readyState==n)&&((o.type=="load"?e:u)[l](c+o.type,h,i),!s&&(s=!0)&&t.call(e,null))},p=function(){try{a.doScroll("left")}catch(e){setTimeout(p,50);return}h("poll")};if(u.readyState==n)t.call(e,"lazy");else{if(u.createEventObject&&a.doScroll){try{o=!e.frameElement}catch(d){}o&&p()}u[f](c+"DOMContentLoaded",h,i),u[f](c+r,h,i),e[f](c+"load",h,i)}}function u(e){e=e.match(/^(\W)?(.*)/);var t=document["getElement"+(e[1]?e[1]=="#"?"ById":"sByClassName":"sByTagName")](e[2]),n=[];return t!=null&&(t.length?n=t:t.length==0?n=t:n=[t]),n}function a(e,t){var n={};for(var r in e)n[r]=e[r];for(var i in t)n[i]=t[i];return n}function f(e,t,n){var r=[t,e].sort(),i=Math.round(r[1]/16),s=Math.round(r[0]/16),o=Math.max(n.size,i);return{height:o}}function l(e,t,n,r){var i=f(t.width,t.height,n),o=i.height,u=t.width*r,a=t.height*r,l=n.font?n.font:"sans-serif";s.width=u,s.height=a,e.textAlign="center",e.textBaseline="middle",e.fillStyle=n.background,e.fillRect(0,0,u,a),e.fillStyle=n.foreground,e.font="bold "+o+"px "+l;var c=n.text?n.text:t.width+"x"+t.height;return e.measureText(c).width/u>1&&(o=n.size/(e.measureText(c).width/u)),e.font="bold "+o*r+"px "+l,e.fillText(c,u/2,a/2,u),s.toDataURL("image/png")}function c(e,t,n,i){var s=n.dimensions,o=n.theme,u=n.text?decodeURIComponent(n.text):n.text,f=s.width+"x"+s.height;o=u?a(o,{text:u}):o,o=n.font?a(o,{font:n.font}):o;var c=1;window.devicePixelRatio&&window.devicePixelRatio>1&&(c=window.devicePixelRatio);if(e=="image"){t.setAttribute("data-src",i),t.setAttribute("alt",u?u:o.text?o.text+" ["+f+"]":f);if(r||!n.auto)t.style.width=s.width+"px",t.style.height=s.height+"px";r?t.style.backgroundColor=o.background:t.setAttribute("src",l(v,s,o,c))}else r||(t.style.backgroundImage="url("+l(v,s,o,c)+")",t.style.backgroundSize=s.width+"px "+s.height+"px")}function h(e,t,n){var r=t.dimensions,i=t.theme,s=t.text,o=r.width+"x"+r.height;i=s?a(i,{text:s}):i;var u=document.createElement("div");u.style.backgroundColor=i.background,u.style.color=i.foreground,u.className=e.className+" holderjs-fluid",u.style.width=t.dimensions.width+(t.dimensions.width.indexOf("%")>0?"":"px"),u.style.height=t.dimensions.height+(t.dimensions.height.indexOf("%")>0?"":"px"),u.id=e.id,e.style.width=0,e.style.height=0,i.text?u.appendChild(document.createTextNode(i.text)):(u.appendChild(document.createTextNode(o)),m.push(u),setTimeout(p,0)),e.parentNode.insertBefore(u,e.nextSibling),window.jQuery&&jQuery(function(t){t(e).on("load",function(){e.style.width=u.style.width,e.style.height=u.style.height,t(e).show(),t(u).remove()})})}function p(){for(i in m){if(!m.hasOwnProperty(i))continue;var e=m[i],t=e.firstChild;e.style.lineHeight=e.offsetHeight+"px",t.data=e.offsetWidth+"x"+e.offsetHeight}}function d(t,n){var r={theme:g.themes.gray},i=!1;for(sl=t.length,j=0;j<sl;j++){var s=t[j];e.flags.dimensions.match(s)?(i=!0,r.dimensions=e.flags.dimensions.output(s)):e.flags.fluid.match(s)?(i=!0,r.dimensions=e.flags.fluid.output(s),r.fluid=!0):e.flags.colors.match(s)?r.theme=e.flags.colors.output(s):n.themes[s]?r.theme=n.themes[s]:e.flags.text.match(s)?r.text=e.flags.text.output(s):e.flags.font.match(s)?r.font=e.flags.font.output(s):e.flags.auto.match(s)&&(r.auto=!0)}return i?r:!1}var n=!1,r=!1,s=document.createElement("canvas");document.getElementsByClassName||(document.getElementsByClassName=function(e){var t=document,n,r,i,s=[];if(t.querySelectorAll)return t.querySelectorAll("."+e);if(t.evaluate){r=".//*[contains(concat(' ', @class, ' '), ' "+e+" ')]",n=t.evaluate(r,t,null,0,null);while(i=n.iterateNext())s.push(i)}else{n=t.getElementsByTagName("*"),r=new RegExp("(^|\\s)"+e+"(\\s|$)");for(i=0;i<n.length;i++)r.test(n[i].className)&&s.push(n[i])}return s}),window.getComputedStyle||(window.getComputedStyle=function(e,t){return this.el=e,this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;return t=="float"&&(t="styleFloat"),n.test(t)&&(t=t.replace(n,function(){return arguments[2].toUpperCase()})),e.currentStyle[t]?e.currentStyle[t]:null},this}),Object.prototype.hasOwnProperty||(Object.prototype.hasOwnProperty=function(e){var t=this.__proto__||this.constructor.prototype;return e in this&&(!(e in t)||t[e]!==this[e])});if(!s.getContext)r=!0;else if(s.toDataURL("image/png").indexOf("data:image/png")<0)r=!0;else var v=s.getContext("2d");var m=[],g={domain:"holder.js",images:"img",bgnodes:".holderjs",themes:{gray:{background:"#eee",foreground:"#aaa",size:12},social:{background:"#3a5a97",foreground:"#fff",size:12},industrial:{background:"#434A52",foreground:"#C2F200",size:12}},stylesheet:".holderjs-fluid {font-size:16px;font-weight:bold;text-align:center;font-family:sans-serif;margin:0}"};e.flags={dimensions:{regex:/^(\d+)x(\d+)$/,output:function(e){var t=this.regex.exec(e);return{width:+t[1],height:+t[2]}}},fluid:{regex:/^([0-9%]+)x([0-9%]+)$/,output:function(e){var t=this.regex.exec(e);return{width:t[1],height:t[2]}}},colors:{regex:/#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i,output:function(e){var t=this.regex.exec(e);return{size:g.themes.gray.size,foreground:"#"+t[2],background:"#"+t[1]}}},text:{regex:/text\:(.*)/,output:function(e){return this.regex.exec(e)[1]}},font:{regex:/font\:(.*)/,output:function(e){return this.regex.exec(e)[1]}},auto:{regex:/^auto$/}};for(var y in e.flags){if(!e.flags.hasOwnProperty(y))continue;e.flags[y].match=function(e){return e.match(this.regex)}}e.add_theme=function(t,n){return t!=null&&n!=null&&(g.themes[t]=n),e},e.add_image=function(t,n){var r=u(n);if(r.length)for(var i=0,s=r.length;i<s;i++){var o=document.createElement("img");o.setAttribute("data-src",t),r[i].appendChild(o)}return e},e.run=function(t){var r=a(g,t),i=[];r.images instanceof window.NodeList?imageNodes=r.images:r.images instanceof window.Node?imageNodes=[r.images]:imageNodes=u(r.images),r.elements instanceof window.NodeList?bgnodes=r.bgnodes:r.bgnodes instanceof window.Node?bgnodes=[r.bgnodes]:bgnodes=u(r.bgnodes),n=!0;for(l=0,f=imageNodes.length;l<f;l++)i.push(imageNodes[l]);var s=document.getElementById("holderjs-style");s||(s=document.createElement("style"),s.setAttribute("id","holderjs-style"),s.type="text/css",document.getElementsByTagName("head")[0].appendChild(s)),s.styleSheet?s.styleSheet+=r.stylesheet:s.textContent+=r.stylesheet;var o=new RegExp(r.domain+'/(.*?)"?\\)');for(var f=bgnodes.length,l=0;l<f;l++){var p=window.getComputedStyle(bgnodes[l],null).getPropertyValue("background-image"),v=p.match(o);if(v){var m=d(v[1].split("/"),r);m&&c("background",bgnodes[l],m,p)}}for(var f=i.length,l=0;l<f;l++){var p=i[l].getAttribute("src")||i[l].getAttribute("data-src");if(p!=null&&p.indexOf(r.domain)>=0){var m=d(p.substr(p.lastIndexOf(r.domain)+r.domain.length+1).split("/"),r);m&&(m.fluid?h(i[l],m,p):c("image",i[l],m,p))}}return e},o(t,function(){window.addEventListener?(window.addEventListener("resize",p,!1),window.addEventListener("orientationchange",p,!1)):window.attachEvent("onresize",p),n||e.run()}),typeof define=="function"&&define.amd&&define("Holder",[],function(){return e})})(Holder,window);