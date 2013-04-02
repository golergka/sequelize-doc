/**
 * @license
 * Lo-Dash 1.0.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash underscore -o ./dist/lodash.underscore.js`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.4.4 <http://underscorejs.org/>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
 * Available under MIT license <http://lodash.com/license>
 */

(function(e,t){function Y(e){if(e&&typeof e=="object"&&e.__wrapped__)return e;if(!(this instanceof Y))return new Y(e);this.__wrapped__=e}function Z(e){return e.charCodeAt(0)}function et(e,t){var n=e.index,r=t.index;e=e.criteria,t=t.criteria;if(e!==t){if(e>t||typeof e=="undefined")return 1;if(e<t||typeof t=="undefined")return-1}return n<r?-1:1}function tt(e,t,n,r){function u(){var a=arguments,f=s?this:t;i||(e=t[o]),n.length&&(a=a.length?(a=at(a),r?a.concat(n):n.concat(a)):n);if(this instanceof u){ut.prototype=e.prototype,f=new ut,ut.prototype=null;var l=e.apply(f,a);return _t(l)?l:f}return e.apply(f,a)}var i=Mt(e),s=!n,o=t;return s&&(n=t),i||(t=e),u}function nt(e,t,n){if(e==null)return Un;var r=typeof e;if(r!="function"){if(r!="object")return function(t){return t[e]};var i=dt(e);return function(t){var n=i.length,r=!1;while(n--)if(!(r=t[i[n]]===e[i[n]]))break;return r}}return typeof t!="undefined"?n===1?function(n){return e.call(t,n)}:n===2?function(n,r){return e.call(t,n,r)}:n===4?function(n,r,i,s){return e.call(t,n,r,i,s)}:function(n,r,i){return e.call(t,n,r,i)}:e}function it(e){return"\\"+G[e]}function st(e){return gt[e]}function ot(e){return typeof e.toString!="function"&&typeof (e+"")=="string"}function ut(){}function at(e,t,n){t||(t=0),typeof n=="undefined"&&(n=e?e.length:0);var r=-1,i=n-t||0,s=Array(i<0?0:i);while(++r<i)s[r]=e[t+r];return s}function ft(e){return yt[e]}function lt(e){return k.call(e)==B}function vt(e){var t=!1;if(!e||typeof e!="object"||lt(e))return t;var n=e.constructor;return!Mt(n)||n instanceof n?(ct(e,function(e,n){t=n}),t===!1||N.call(e,t)):t}function mt(e){var t=[];return ht(e,function(e,n){t.push(n)}),t}function bt(e){if(!e)return e;for(var t=1,n=arguments.length;t<n;t++){var r=arguments[t];if(r)for(var i in r)e[i]=r[i]}return e}function wt(e){return _t(e)?pt(e)?at(e):bt({},e):e}function Et(e){if(!e)return e;for(var t=1,n=arguments.length;t<n;t++){var r=arguments[t];if(r)for(var i in r)e[i]==null&&(e[i]=r[i])}return e}function St(e){var t=[];return ct(e,function(e,n){Mt(e)&&t.push(n)}),t.sort()}function xt(e,t){return e?N.call(e,t):!1}function Tt(e){var t=-1,n=dt(e),r=n.length,i={};while(++t<r){var s=n[t];i[e[s]]=s}return i}function Nt(e){return e===!0||e===!1||k.call(e)==F}function Ct(e){return e instanceof Date||k.call(e)==I}function kt(e){return e?e.nodeType===1:!1}function Lt(e){if(!e)return!0;if(pt(e)||jt(e))return!e.length;for(var t in e)if(N.call(e,t))return!1;return!0}function At(e,t,n,r){if(e===t)return e!==0||1/e==1/t;var i=typeof e,s=typeof t;if(e===e&&(!e||i!="function"&&i!="object")&&(!t||s!="function"&&s!="object"))return!1;if(e==null||t==null)return e===t;var o=k.call(e),u=k.call(t);if(o!=u)return!1;switch(o){case F:case I:return+e==+t;case R:return e!=+e?t!=+t:e==0?1/e==1/t:e==+t;case z:case W:return e==t+""}var f=o==j;if(!f){if(e.__wrapped__||t.__wrapped__)return At(e.__wrapped__||e,t.__wrapped__||t,n,r);if(o!=U)return!1;var l=e.constructor,c=t.constructor;if(l!=c&&!(Mt(l)&&l instanceof l&&Mt(c)&&c instanceof c))return!1}n||(n=[]),r||(r=[]);var h=n.length;while(h--)if(n[h]==e)return r[h]==t;var p=!0,d=0;n.push(e),r.push(t);if(f){d=t.length,p=d==e.length;if(p)while(d--)if(!(p=At(e[d],t[d],n,r)))break;return p}return ct(t,function(t,i,s){if(N.call(s,i))return d++,!(p=N.call(e,i)&&At(e[i],t,n,r))&&a}),p&&ct(e,function(e,t,n){if(N.call(n,t))return!(p=--d>-1)&&a}),p}function Ot(e){return O(e)&&!M(parseFloat(e))}function Mt(e){return typeof e=="function"}function _t(e){return e?Q[typeof e]:!1}function Dt(e){return Ht(e)&&e!=+e}function Pt(e){return e===null}function Ht(e){return typeof e=="number"||k.call(e)==R}function Bt(e){return e instanceof RegExp||k.call(e)==z}function jt(e){return typeof e=="string"||k.call(e)==W}function Ft(e){return typeof e=="undefined"}function It(e){var t=x.apply(s,arguments),n={};return ct(e,function(e,r){mn(t,r,1)<0&&(n[r]=e)}),n}function qt(e){var t=-1,n=dt(e),r=n.length,i=Array(r);while(++t<r){var s=n[t];i[t]=[s,e[s]]}return i}function Rt(e){var t=0,n=x.apply(s,arguments),r=n.length,i={};while(++t<r){var o=n[t];o in e&&(i[o]=e[o])}return i}function Ut(e){var t=-1,n=dt(e),r=n.length,i=Array(r);while(++t<r)i[t]=e[n[t]];return i}function zt(e,t){var n=e?e.length:0,r=!1;return typeof n=="number"?r=mn(e,t)>-1:rt(e,function(e){return(r=e===t)&&a}),r}function Wt(e,t,n){var r={};return t=nt(t,n),Kt(e,function(e,n,i){n=t(e,n,i)+"",N.call(r,n)?r[n]++:r[n]=1}),r}function Xt(e,t,n){var r=!0;t=nt(t,n);if(pt(e)){var i=-1,s=e.length;while(++i<s)if(!(r=!!t(e[i],i,e)))break}else rt(e,function(e,n,i){return!(r=!!t(e,n,i))&&a});return r}function Vt(e,t,n){var r=[];t=nt(t,n);if(pt(e)){var i=-1,s=e.length;while(++i<s){var o=e[i];t(o,i,e)&&r.push(o)}}else rt(e,function(e,n,i){t(e,n,i)&&r.push(e)});return r}function $t(e,t,n){var r;return t=nt(t,n),Kt(e,function(e,n,i){if(t(e,n,i))return r=e,a}),r}function Jt(e,t){return cn(e,t,!0)}function Kt(e,t,n){if(t&&typeof n=="undefined"&&pt(e)){var r=-1,i=e.length;while(++r<i)if(t(e[r],r,e)===a)break}else rt(e,t,n)}function Qt(e,t,n){var r={};return t=nt(t,n),Kt(e,function(e,n,i){n=t(e,n,i)+"",(N.call(r,n)?r[n]:r[n]=[]).push(e)}),r}function Gt(e,t){var n=at(arguments,2),r=-1,i=typeof t=="function",s=e?e.length:0,o=Array(typeof s=="number"?s:0);return Kt(e,function(e){o[++r]=(i?t:e[t]).apply(e,n)}),o}function Yt(e,t,n){var r=-1,i=e?e.length:0,s=Array(typeof i=="number"?i:0);t=nt(t,n);if(pt(e))while(++r<i)s[r]=t(e[r],r,e);else rt(e,function(e,n,i){s[++r]=t(e,n,i)});return s}function Zt(e,t,n){var r=-Infinity,i=r;if(!t&&pt(e)){var s=-1,o=e.length;while(++s<o){var u=e[s];u>i&&(i=u)}}else t=nt(t,n),rt(e,function(e,n,s){var o=t(e,n,s);o>r&&(r=o,i=e)});return i}function en(e,t,n){var r=Infinity,i=r;if(!t&&pt(e)){var s=-1,o=e.length;while(++s<o){var u=e[s];u<i&&(i=u)}}else t=nt(t,n),rt(e,function(e,n,s){var o=t(e,n,s);o<r&&(r=o,i=e)});return i}function nn(e,t,n,r){var i=arguments.length<3;t=nt(t,r,4);if(pt(e)){var s=-1,o=e.length;i&&(n=e[++s]);while(++s<o)n=t(n,e[s],s,e)}else rt(e,function(e,r,s){n=i?(i=!1,e):t(n,e,r,s)});return n}function rn(e,t,n,r){var i=e,s=e?e.length:0,o=arguments.length<3;if(typeof s!="number"){var u=dt(e);s=u.length}return t=nt(t,r,4),Kt(e,function(e,r,a){r=u?u[--s]:--s,n=o?(o=!1,i[r]):t(n,i[r],r,a)}),n}function sn(e,t,n){return t=nt(t,n),Vt(e,function(e,n,r){return!t(e,n,r)})}function on(e){var t=-1,n=e?e.length:0,r=Array(typeof n=="number"?n:0);return Kt(e,function(e){var n=T(H()*(++t+1));r[t]=r[n],r[n]=e}),r}function un(e){var t=e?e.length:0;return typeof t=="number"?t:dt(e).length}function an(e,t,n){var r;t=nt(t,n);if(pt(e)){var i=-1,s=e.length;while(++i<s)if(r=t(e[i],i,e))break}else rt(e,function(e,n,i){return(r=t(e,n,i))&&a});return!!r}function fn(e,t,n){var r=-1,i=e?e.length:0,s=Array(typeof i=="number"?i:0);t=nt(t,n),Kt(e,function(e,n,i){s[++r]={criteria:t(e,n,i),index:r,value:e}}),i=s.length,s.sort(et);while(i--)s[i]=s[i].value;return s}function ln(e){return e&&typeof e.length=="number"?at(e):Ut(e)}function cn(e,t,n){return n&&Lt(t)?null:(n?$t:Vt)(e,t)}function hn(e){var t=-1,n=e?e.length:0,r=[];while(++t<n){var i=e[t];i&&r.push(i)}return r}function pn(e){var t=-1,n=e.length,r=x.apply(s,arguments),i=[];while(++t<n){var o=e[t];mn(r,o,n)<0&&i.push(o)}return i}function dn(e,t,n){if(e){var r=0,i=e.length;if(typeof t!="number"&&t!=null){var s=-1;t=nt(t,n);while(++s<i&&t(e[s],s,e))r++}else{r=t;if(r==null||n)return e[0]}return at(e,0,P(D(0,r),i))}}function vn(e,t){var n=-1,r=e?e.length:0,i=[];while(++n<r){var s=e[n];pt(s)?C.apply(i,t?s:vn(s)):i.push(s)}return i}function mn(e,t,n){var r=-1,i=e?e.length:0;if(typeof n=="number")r=(n<0?D(0,i+n):n||0)-1;else if(n)return r=Tn(e,t),e[r]===t?r:-1;while(++r<i)if(e[r]===t)return r;return-1}function gn(e,t,n){if(!e)return[];var r=0,i=e.length;if(typeof t!="number"&&t!=null){var s=i;t=nt(t,n);while(s--&&t(e[s],s,e))r++}else r=t==null||n?1:t||r;return at(e,0,P(D(0,i-r),i))}function yn(e){var t=arguments,n=t.length,r=-1,i=e?e.length:0,s=[];e:while(++r<i){var o=e[r];if(mn(s,o)<0){var u=n;while(--u)if(mn(t[u],o)<0)continue e;s.push(o)}}return s}function bn(e,t,n){if(e){var r=0,i=e.length;if(typeof t!="number"&&t!=null){var s=i;t=nt(t,n);while(s--&&t(e[s],s,e))r++}else{r=t;if(r==null||n)return e[i-1]}return at(e,D(0,i-r))}}function wn(e,t,n){var r=e?e.length:0;typeof n=="number"&&(r=(n<0?D(0,r+n):P(n,r-1))+1);while(r--)if(e[r]===t)return r;return-1}function En(e,t){var n=-1,r=e?e.length:0,i={};while(++n<r){var s=e[n];t?i[s]=t[n]:i[s[0]]=s[1]}return i}function Sn(e,t,n){e=+e||0,n=+n||1,t==null&&(t=e,e=0);var r=-1,i=D(0,S((t-e)/n)),s=Array(i);while(++r<i)s[r]=e,e+=n;return s}function xn(e,t,n){if(typeof t!="number"&&t!=null){var r=0,i=-1,s=e?e.length:0;t=nt(t,n);while(++i<s&&t(e[i],i,e))r++}else r=t==null||n?1:D(0,t);return at(e,r)}function Tn(e,t,n,r){var i=0,s=e?e.length:i;n=n?nt(n,r,1):Un,t=n(t);while(i<s){var o=i+s>>>1;n(e[o])<t?i=o+1:s=o}return i}function Nn(){return Cn(x.apply(s,arguments))}function Cn(e,t,n,r){var i=-1,s=e?e.length:0,o=[],u=o;typeof t=="function"&&(r=n,n=t,t=!1),n&&(u=[],n=nt(n,r));while(++i<s){var a=e[i],f=n?n(a,i,e):a;if(t?!i||u[u.length-1]!==f:mn(u,f)<0)n&&u.push(f),o.push(a)}return o}function kn(e){var t=-1,n=e.length,r=[];while(++t<n){var i=e[t];mn(arguments,i,1)<0&&r.push(i)}return r}function Ln(e){var t=-1,n=e?Zt(tn(arguments,"length")):0,r=Array(n);while(++t<n)r[t]=tn(arguments,t);return r}function An(e,t){return e<1?t():function(){if(--e<1)return t.apply(this,arguments)}}function On(e,t){return $||L&&arguments.length>2?L.call.apply(L,arguments):tt(e,t,at(arguments,2))}function Mn(e){var t=x.apply(s,arguments),n=t.length>1?0:(t=St(e),-1),r=t.length;while(++n<r){var i=t[n];e[i]=On(e[i],e)}return e}function _n(){var e=arguments;return function(){var t=arguments,n=e.length;while(n--)t=[e[n].apply(this,t)];return t[0]}}function Dn(e,t,n){function u(){o=null,n||(i=e.apply(s,r))}var r,i,s,o;return function(){var a=n&&!o;return r=arguments,s=this,clearTimeout(o),o=setTimeout(u,t),a&&(i=e.apply(s,r)),i}}function Pn(e,n){var r=at(arguments,2);return setTimeout(function(){e.apply(t,r)},n)}function Hn(e){var n=at(arguments,1);return setTimeout(function(){e.apply(t,n)},1)}function Bn(e,t){var n={};return function(){var r=(t?t.apply(this,arguments):arguments[0])+"";return N.call(n,r)?n[r]:n[r]=e.apply(this,arguments)}}function jn(e){var t,n;return function(){return t?n:(t=!0,n=e.apply(this,arguments),e=null,n)}}function Fn(e){return tt(e,at(arguments,1))}function In(e,t){function u(){o=new Date,s=null,r=e.apply(i,n)}var n,r,i,s,o=0;return function(){var a=new Date,f=t-(a-o);return n=arguments,i=this,f<=0?(clearTimeout(s),s=null,o=a,r=e.apply(i,n)):s||(s=setTimeout(u,f)),r}}function qn(e,t){return function(){var n=[e];return C.apply(n,arguments),t.apply(this,n)}}function Rn(e){return e==null?"":(e+"").replace(b,st)}function Un(e){return e}function zn(e){Kt(St(e),function(t){var n=Y[t]=e[t];Y.prototype[t]=function(){var e=[this.__wrapped__];C.apply(e,arguments);var t=n.apply(Y,e);return this.__chain__&&(t=new Y(t),t.__chain__=!0),t}})}function Wn(){return e._=f,this}function Xn(e,t){return e==null&&t==null&&(t=1),e=+e||0,t==null&&(t=e,e=0),e+T(H()*((+t||0)-e+1))}function Vn(e,t){var n=e?e[t]:null;return Mt(n)?e[t]():n}function $n(e,t,n){e||(e=""),n=Et({},n,Y.templateSettings);var r=0,i="__p += '",s=n.variable,o=RegExp((n.escape||y).source+"|"+(n.interpolate||y).source+"|"+(n.evaluate||y).source+"|$","g");e.replace(o,function(t,n,s,o,u){return i+=e.slice(r,u).replace(w,it),n&&(i+="' +\n_.escape("+n+") +\n'"),o&&(i+="';\n"+o+";\n__p += '"),s&&(i+="' +\n((__t = ("+s+")) == null ? '' : __t) +\n'"),r=u+t.length,t}),i+="';\n",s||(s="obj",i="with ("+s+" || {}) {\n"+i+"\n}\n"),i="function("+s+") {\n"+"var __t, __p = '', __j = Array.prototype.join;\n"+"function print() { __p += __j.call(arguments, '') }\n"+i+"return __p\n}";try{var u=Function("_","return "+i)(Y)}catch(a){throw a.source=i,a}return t?u(t):(u.source=i,u)}function Jn(e,t,n){e=+e||0;var r=-1,i=Array(e);while(++r<e)i[r]=t.call(n,r);return i}function Kn(e){return e==null?"":(e+"").replace(l,ft)}function Qn(e){var t=++u+"";return e?e+t:t}function Gn(e){return e=new Y(e),e.__chain__=!0,e}function Yn(e,t){return t(e),e}function Zn(){return this.__chain__=!0,this}function er(){return this.__wrapped__+""}function tr(){return this.__wrapped__}var n=typeof exports=="object"&&exports,r=typeof module=="object"&&module&&module.exports==n&&module,i=typeof global=="object"&&global;i.global===i&&(e=i);var s=[],o={},u=0,a=o,f=e._,l=/&(?:amp|lt|gt|quot|#39);/g,c=/\b__p \+= '';/g,h=/\b(__p \+=) '' \+/g,p=/(__e\(.*?\)|\b__t\)) \+\n'';/g,d=/\w*$/,v=RegExp("^"+(o.valueOf+"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),m=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,g=/<%=([\s\S]+?)%>/g,y=/($^)/,b=/[&<>"']/g,w=/['\n\r\t\u2028\u2029\\]/g,E=0,S=Math.ceil,x=s.concat,T=Math.floor,N=o.hasOwnProperty,C=s.push,k=o.toString,L=v.test(L=at.bind)&&L,A=v.test(A=Array.isArray)&&A,O=e.isFinite,M=e.isNaN,_=v.test(_=Object.keys)&&_,D=Math.max,P=Math.min,H=Math.random,B="[object Arguments]",j="[object Array]",F="[object Boolean]",I="[object Date]",q="[object Function]",R="[object Number]",U="[object Object]",z="[object RegExp]",W="[object String]",X=!!e.attachEvent,V=L&&!/\n|true/.test(L+X),$=L&&!V,J=(J={0:1,length:1},s.splice.call(J,0,1),J[0]),K=arguments.constructor==Object,Q={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,"undefined":!1},G={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"};Y.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:g,variable:""};var rt=function(e,t,n){var r,i=e,s=i;if(!i)return s;t=t&&typeof n=="undefined"?t:nt(t,n);var o=i.length;r=-1;if(typeof o=="number"){while(++r<o)if(t(i[r],r,e)===a)return s}else for(r in i)if(N.call(i,r)&&t(i[r],r,e)===a)return s};lt(arguments)||(lt=function(e){return e?N.call(e,"callee"):!1});var ct=function(e,t){var n,r=e,i=r;if(!r)return i;if(!Q[typeof r])return i;t||(t=Un);for(n in r)if(t(r[n],n,e)===a)return i;return i},ht=function(e,t){var n,r=e,i=r;if(!r)return i;if(!Q[typeof r])return i;t||(t=Un);for(n in r)if(N.call(r,n)&&t(r[n],n,e)===a)return i;return i},pt=A||function(e){return K&&e instanceof Array||k.call(e)==j},dt=_?function(e){return _t(e)?_(e):[]}:mt,gt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},yt=Tt(gt);Mt(/x/)&&(Mt=function(e){return e instanceof Function||k.call(e)==q});var tn=Yt;V&&r&&typeof setImmediate=="function"&&(Hn=On(setImmediate,e)),Y.after=An,Y.bind=On,Y.bindAll=Mn,Y.compact=hn,Y.compose=_n,Y.countBy=Wt,Y.debounce=Dn,Y.defaults=Et,Y.defer=Hn,Y.delay=Pn,Y.difference=pn,Y.filter=Vt,Y.flatten=vn,Y.forEach=Kt,Y.functions=St,Y.groupBy=Qt,Y.initial=gn,Y.intersection=yn,Y.invert=Tt,Y.invoke=Gt,Y.keys=dt,Y.map=Yt,Y.max=Zt,Y.memoize=Bn,Y.min=en,Y.object=En,Y.omit=It,Y.once=jn,Y.pairs=qt,Y.partial=Fn,Y.pick=Rt,Y.pluck=tn,Y.range=Sn,Y.reject=sn,Y.rest=xn,Y.shuffle=on,Y.sortBy=fn,Y.tap=Yn,Y.throttle=In,Y.times=Jn,Y.toArray=ln,Y.union=Nn,Y.uniq=Cn,Y.values=Ut,Y.where=cn,Y.without=kn,Y.wrap=qn,Y.zip=Ln,Y.collect=Yt,Y.drop=xn,Y.each=Kt,Y.extend=bt,Y.methods=St,Y.select=Vt,Y.tail=xn,Y.unique=Cn,Y.clone=wt,Y.contains=zt,Y.escape=Rn,Y.every=Xt,Y.find=$t,Y.findWhere=Jt,Y.has=xt,Y.identity=Un,Y.indexOf=mn,Y.isArguments=lt,Y.isArray=pt,Y.isBoolean=Nt,Y.isDate=Ct,Y.isElement=kt,Y.isEmpty=Lt,Y.isEqual=At,Y.isFinite=Ot,Y.isFunction=Mt,Y.isNaN=Dt,Y.isNull=Pt,Y.isNumber=Ht,Y.isObject=_t,Y.isRegExp=Bt,Y.isString=jt,Y.isUndefined=Ft,Y.lastIndexOf=wn,Y.mixin=zn,Y.noConflict=Wn,Y.random=Xn,Y.reduce=nn,Y.reduceRight=rn,Y.result=Vn,Y.size=un,Y.some=an,Y.sortedIndex=Tn,Y.template=$n,Y.unescape=Kn,Y.uniqueId=Qn,Y.all=Xt,Y.any=an,Y.detect=$t,Y.foldl=nn,Y.foldr=rn,Y.include=zt,Y.inject=nn,Y.first=dn,Y.last=bn,Y.take=dn,Y.head=dn,Y.chain=Gn,Y.VERSION="1.0.1",zn(Y),Y.prototype.chain=Zn,Y.prototype.value=tr,rt(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=s[e];Y.prototype[e]=function(){var e=this.__wrapped__;return t.apply(e,arguments),J&&e.length===0&&delete e[0],this}}),rt(["concat","join","slice"],function(e){var t=s[e];Y.prototype[e]=function(){var e=this.__wrapped__,n=t.apply(e,arguments);return this.__chain__&&(n=new Y(n),n.__chain__=!0),n}}),n?r?(r.exports=Y)._=Y:n._=Y:e._=Y})(this);