(function(e,t){
var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){
return new b.fn.init(e,t,r);
},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){
return t.toUpperCase();
},H=function(e){
(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready());
},q=function(){
o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H));
};
b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){
var i,a;
if(!e){
return this;
}
if("string"==typeof e){
if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n){
return !n||n.jquery?(n||r).find(e):this.constructor(n).find(e);
}
if(i[1]){
if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n)){
for(i in n){
b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);
}
}
return this;
}
if(a=o.getElementById(i[2]),a&&a.parentNode){
if(a.id!==i[2]){
return r.find(e);
}
this.length=1,this[0]=a;
}
return this.context=o,this.selector=e,this;
}
return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this));
},selector:"",length:0,size:function(){
return this.length;
},toArray:function(){
return h.call(this);
},get:function(e){
return null==e?this.toArray():0>e?this[this.length+e]:this[e];
},pushStack:function(e){
var t=b.merge(this.constructor(),e);
return t.prevObject=this,t.context=this.context,t;
},each:function(e,t){
return b.each(this,e,t);
},ready:function(e){
return b.ready.promise().done(e),this;
},slice:function(){
return this.pushStack(h.apply(this,arguments));
},first:function(){
return this.eq(0);
},last:function(){
return this.eq(-1);
},eq:function(e){
var t=this.length,n=+e+(0>e?t:0);
return this.pushStack(n>=0&&t>n?[this[n]]:[]);
},map:function(e){
return this.pushStack(b.map(this,function(t,n){
return e.call(t,n,t);
}));
},end:function(){
return this.prevObject||this.constructor(null);
},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){
var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;
for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++){
if(null!=(o=arguments[u])){
for(i in o){
e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));
}
}
}
return s;
},b.extend({noConflict:function(t){
return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b;
},isReady:!1,readyWait:1,holdReady:function(e){
e?b.readyWait++:b.ready(!0);
},ready:function(e){
if(e===!0?!--b.readyWait:!b.isReady){
if(!o.body){
return setTimeout(b.ready);
}
b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"));
}
},isFunction:function(e){
return "function"===b.type(e);
},isArray:Array.isArray||function(e){
return "array"===b.type(e);
},isWindow:function(e){
return null!=e&&e==e.window;
},isNumeric:function(e){
return !isNaN(parseFloat(e))&&isFinite(e);
},type:function(e){
return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e;
},isPlainObject:function(e){
if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e)){
return !1;
}
try{
if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf")){
return !1;
}
}
catch(n){
return !1;
}
var r;
for(r in e){
}
return r===t||y.call(e,r);
},isEmptyObject:function(e){
var t;
for(t in e){
return !1;
}
return !0;
},error:function(e){
throw Error(e);
},parseHTML:function(e,t,n){
if(!e||"string"!=typeof e){
return null;
}
"boolean"==typeof t&&(n=t,t=!1),t=t||o;
var r=C.exec(e),i=!n&&[];
return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes));
},parseJSON:function(n){
return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t);
},parseXML:function(n){
var r,i;
if(!n||"string"!=typeof n){
return null;
}
try{
e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n));
}
catch(o){
r=t;
}
return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r;
},noop:function(){
},globalEval:function(t){
t&&b.trim(t)&&(e.execScript||function(t){
e.eval.call(e,t);
})(t);
},camelCase:function(e){
return e.replace(j,"ms-").replace(D,L);
},nodeName:function(e,t){
return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase();
},each:function(e,t,n){
var r,i=0,o=e.length,a=M(e);
if(n){
if(a){
for(;o>i;i++){
if(r=t.apply(e[i],n),r===!1){
break;
}
}
}else{
for(i in e){
if(r=t.apply(e[i],n),r===!1){
break;
}
}
}
}else{
if(a){
for(;o>i;i++){
if(r=t.call(e[i],i,e[i]),r===!1){
break;
}
}
}else{
for(i in e){
if(r=t.call(e[i],i,e[i]),r===!1){
break;
}
}
}
}
return e;
},trim:v&&!v.call("??")?function(e){
return null==e?"":v.call(e);
}:function(e){
return null==e?"":(e+"").replace(T,"");
},makeArray:function(e,t){
var n=t||[];
return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n;
},inArray:function(e,t,n){
var r;
if(t){
if(g){
return g.call(t,e,n);
}
for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++){
if(n in t&&t[n]===e){
return n;
}
}
}
return -1;
},merge:function(e,n){
var r=n.length,i=e.length,o=0;
if("number"==typeof r){
for(;r>o;o++){
e[i++]=n[o];
}
}else{
while(n[o]!==t){
e[i++]=n[o++];
}
}
return e.length=i,e;
},grep:function(e,t,n){
var r,i=[],o=0,a=e.length;
for(n=!!n;a>o;o++){
r=!!t(e[o],o),n!==r&&i.push(e[o]);
}
return i;
},map:function(e,t,n){
var r,i=0,o=e.length,a=M(e),s=[];
if(a){
for(;o>i;i++){
r=t(e[i],i,n),null!=r&&(s[s.length]=r);
}
}else{
for(i in e){
r=t(e[i],i,n),null!=r&&(s[s.length]=r);
}
}
return f.apply([],s);
},guid:1,proxy:function(e,n){
var r,i,o;
return "string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){
return e.apply(n||this,r.concat(h.call(arguments)));
},i.guid=e.guid=e.guid||b.guid++,i):t;
},access:function(e,n,r,i,o,a,s){
var u=0,l=e.length,c=null==r;
if("object"===b.type(r)){
o=!0;
for(u in r){
b.access(e,n,u,r[u],!0,a,s);
}
}else{
if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){
return c.call(b(e),n);
})),n)){
for(;l>u;u++){
n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));
}
}
}
return o?e:c?n.call(e):l?n(e[0],r):a;
},now:function(){
return (new Date).getTime();
}}),b.ready.promise=function(t){
if(!n){
if(n=b.Deferred(),"complete"===o.readyState){
setTimeout(b.ready);
}else{
if(o.addEventListener){
o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);
}else{
o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);
var r=!1;
try{
r=null==e.frameElement&&o.documentElement;
}
catch(i){
}
r&&r.doScroll&&function a(){
if(!b.isReady){
try{
r.doScroll("left");
}
catch(e){
return setTimeout(a,50);
}
q(),b.ready();
}
}();
}
}
}
return n.promise(t);
},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){
l["[object "+t+"]"]=t.toLowerCase();
});
function M(e){
var t=e.length,n=b.type(e);
return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e);
};
r=b(o);
var _1={};
function F(e){
var t=_1[e]={};
return b.each(e.match(w)||[],function(e,n){
t[n]=!0;
}),t;
};
b.Callbacks=function(e){
e="string"==typeof e?_1[e]||F(e):b.extend({},e);
var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){
for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++){
if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){
r=!1;
break;
}
}
n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable());
},p={add:function(){
if(u){
var t=u.length;
(function i(t){
b.each(t,function(t,n){
var r=b.type(n);
"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n);
});
})(arguments),n?o=u.length:r&&(s=t,c(r));
}
return this;
},remove:function(){
return u&&b.each(arguments,function(e,t){
var r;
while((r=b.inArray(t,u,r))>-1){
u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--);
}
}),this;
},has:function(e){
return e?b.inArray(e,u)>-1:!(!u||!u.length);
},empty:function(){
return u=[],this;
},disable:function(){
return u=l=r=t,this;
},disabled:function(){
return !u;
},lock:function(){
return l=t,r||p.disable(),this;
},locked:function(){
return !l;
},fireWith:function(e,t){
return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this;
},fire:function(){
return p.fireWith(this,arguments),this;
},fired:function(){
return !!i;
}};
return p;
},b.extend({Deferred:function(e){
var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){
return n;
},always:function(){
return i.done(arguments).fail(arguments),this;
},then:function(){
var e=arguments;
return b.Deferred(function(n){
b.each(t,function(t,o){
var a=o[0],s=b.isFunction(e[t])&&e[t];
i[o[1]](function(){
var e=s&&s.apply(this,arguments);
e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments);
});
}),e=null;
}).promise();
},promise:function(e){
return null!=e?b.extend(e,r):r;
}},i={};
return r.pipe=r.then,b.each(t,function(e,o){
var a=o[2],s=o[3];
r[o[1]]=a.add,s&&a.add(function(){
n=s;
},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){
return i[o[0]+"With"](this===i?r:this,arguments),this;
},i[o[0]+"With"]=a.fireWith;
}),r.promise(i),e&&e.call(i,i),i;
},when:function(e){
var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){
return function(r){
t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n);
};
},s,u,l;
if(r>1){
for(s=Array(r),u=Array(r),l=Array(r);r>t;t++){
n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;
}
}
return i||o.resolveWith(l,n),o.promise();
}}),b.support=function(){
var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");
if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length){
return {};
}
s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;
try{
delete d.test;
}
catch(h){
t.deleteExpando=!1;
}
a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){
t.noCloneEvent=!1;
}),d.cloneNode(!0).click());
for(f in {submit:!0,change:!0,focusin:!0}){
d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;
}
return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){
var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];
u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null);
}),n=s=u=l=r=a=null,t;
}();
var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;
function P(e,n,r,i){
if(b.acceptData(e)){
var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;
if(f&&p[f]&&(i||p[f].data)||!u||r!==t){
return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a;
}
}
};
function R(e,t,n){
if(b.acceptData(e)){
var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;
if(s[u]){
if(t&&(o=n?s[u]:s[u].data)){
b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));
for(r=0,i=t.length;i>r;r++){
delete o[t[r]];
}
if(!(n?$:b.isEmptyObject)(o)){
return;
}
}
(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null);
}
}
};
b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){
return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e);
},data:function(e,t,n){
return P(e,t,n);
},removeData:function(e,t){
return R(e,t);
},_data:function(e,t,n){
return P(e,t,n,!0);
},_removeData:function(e,t){
return R(e,t,!0);
},acceptData:function(e){
if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType){
return !1;
}
var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];
return !t||t!==!0&&e.getAttribute("classid")===t;
}}),b.fn.extend({data:function(e,n){
var r,i,o=this[0],a=0,s=null;
if(e===t){
if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){
for(r=o.attributes;r.length>a;a++){
i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));
}
b._data(o,"parsedAttrs",!0);
}
return s;
}
return "object"==typeof e?this.each(function(){
b.data(this,e);
}):b.access(this,function(n){
return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){
b.data(this,e,n);
}),t);
},null,n,arguments.length>1,null,!0);
},removeData:function(e){
return this.each(function(){
b.removeData(this,e);
});
}});
function W(e,n,r){
if(r===t&&1===e.nodeType){
var i="data-"+n.replace(B,"-$1").toLowerCase();
if(r=e.getAttribute(i),"string"==typeof r){
try{
r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r;
}
catch(o){
}
b.data(e,n,r);
}else{
r=t;
}
}
return r;
};
function $(e){
var t;
for(t in e){
if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t){
return !1;
}
}
return !0;
};
b.extend({queue:function(e,n,r){
var i;
return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t;
},dequeue:function(e,t){
t=t||"fx";
var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){
b.dequeue(e,t);
};
"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire();
},_queueHooks:function(e,t){
var n=t+"queueHooks";
return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){
b._removeData(e,t+"queue"),b._removeData(e,n);
})});
}}),b.fn.extend({queue:function(e,n){
var r=2;
return "string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){
var t=b.queue(this,e,n);
b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e);
});
},dequeue:function(e){
return this.each(function(){
b.dequeue(this,e);
});
},delay:function(e,t){
return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){
var r=setTimeout(t,e);
n.stop=function(){
clearTimeout(r);
};
});
},clearQueue:function(e){
return this.queue(e||"fx",[]);
},promise:function(e,n){
var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){
--i||o.resolveWith(a,[a]);
};
"string"!=typeof e&&(n=e,e=t),e=e||"fx";
while(s--){
r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));
}
return u(),o.promise(n);
}});
var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;
b.fn.extend({attr:function(e,t){
return b.access(this,b.attr,e,t,arguments.length>1);
},removeAttr:function(e){
return this.each(function(){
b.removeAttr(this,e);
});
},prop:function(e,t){
return b.access(this,b.prop,e,t,arguments.length>1);
},removeProp:function(e){
return e=b.propFix[e]||e,this.each(function(){
try{
this[e]=t,delete this[e];
}
catch(n){
}
});
},addClass:function(e){
var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;
if(b.isFunction(e)){
return this.each(function(t){
b(this).addClass(e.call(this,t,this.className));
});
}
if(u){
for(t=(e||"").match(w)||[];s>a;a++){
if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){
o=0;
while(i=t[o++]){
0>r.indexOf(" "+i+" ")&&(r+=i+" ");
}
n.className=b.trim(r);
}
}
}
return this;
},removeClass:function(e){
var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;
if(b.isFunction(e)){
return this.each(function(t){
b(this).removeClass(e.call(this,t,this.className));
});
}
if(u){
for(t=(e||"").match(w)||[];s>a;a++){
if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){
o=0;
while(i=t[o++]){
while(r.indexOf(" "+i+" ")>=0){
r=r.replace(" "+i+" "," ");
}
}
n.className=e?b.trim(r):"";
}
}
}
return this;
},toggleClass:function(e,t){
var n=typeof e,r="boolean"==typeof t;
return b.isFunction(e)?this.each(function(n){
b(this).toggleClass(e.call(this,n,this.className,t),t);
}):this.each(function(){
if("string"===n){
var o,a=0,s=b(this),u=t,l=e.match(w)||[];
while(o=l[a++]){
u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o);
}
}else{
(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"");
}
});
},hasClass:function(e){
var t=" "+e+" ",n=0,r=this.length;
for(;r>n;n++){
if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0){
return !0;
}
}
return !1;
},val:function(e){
var n,r,i,o=this[0];
if(arguments.length){
return i=b.isFunction(e),this.each(function(n){
var o,a=b(this);
1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){
return null==e?"":e+"";
})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set" in r&&r.set(this,o,"value")!==t||(this.value=o));
});
}
if(o){
return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get" in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n);
}
}}),b.extend({valHooks:{option:{get:function(e){
var t=e.attributes.value;
return !t||t.specified?e.value:e.text;
}},select:{get:function(e){
var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;
for(;s>u;u++){
if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){
if(t=b(n).val(),o){
return t;
}
a.push(t);
}
}
return a;
},set:function(e,t){
var n=b.makeArray(t);
return b(e).find("option").each(function(){
this.selected=b.inArray(b(this).val(),n)>=0;
}),n.length||(e.selectedIndex=-1),n;
}}},attr:function(e,n,r){
var o,a,s,u=e.nodeType;
if(e&&3!==u&&8!==u&&2!==u){
return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get" in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set" in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t));
}
},removeAttr:function(e,t){
var n,r,i=0,o=t&&t.match(w);
if(o&&1===e.nodeType){
while(n=o[i++]){
r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r);
}
}
},attrHooks:{type:{set:function(e,t){
if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){
var n=e.value;
return e.setAttribute("type",t),n&&(e.value=n),t;
}
}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){
var i,o,a,s=e.nodeType;
if(e&&3!==s&&8!==s&&2!==s){
return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set" in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get" in o&&null!==(i=o.get(e,n))?i:e[n];
}
},propHooks:{tabIndex:{get:function(e){
var n=e.getAttributeNode("tabindex");
return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t;
}}}}),z={get:function(e,n){
var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);
return o&&o.value!==!1?n.toLowerCase():t;
},set:function(e,t,n){
return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n;
}},K&&Q||(b.attrHooks.value={get:function(e,n){
var r=e.getAttributeNode(n);
return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t;
},set:function(e,n,r){
return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r);
}}),Q||(I=b.valHooks.button={get:function(e,n){
var r=e.getAttributeNode(n);
return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t;
},set:function(e,n,r){
var i=e.getAttributeNode(r);
return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t;
}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){
I.set(e,""===t?!1:t,n);
}},b.each(["width","height"],function(e,n){
b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){
return ""===r?(e.setAttribute(n,"auto"),r):t;
}});
})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){
b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){
var r=e.getAttribute(n,2);
return null==r?t:r;
}});
}),b.each(["href","src"],function(e,t){
b.propHooks[t]={get:function(e){
return e.getAttribute(t,4);
}};
})),b.support.style||(b.attrHooks.style={get:function(e){
return e.style.cssText||t;
},set:function(e,t){
return e.style.cssText=t+"";
}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){
var t=e.parentNode;
return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null;
}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){
b.valHooks[this]={get:function(e){
return null===e.getAttribute("value")?"on":e.value;
}};
}),b.each(["radio","checkbox"],function(){
b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){
return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t;
}});
});
var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;
function it(){
return !0;
};
function ot(){
return !1;
};
b.event={global:{},add:function(e,n,r,o,a){
var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);
if(v){
r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){
return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments);
},f.elem=e),n=(n||"").match(w)||[""],l=n.length;
while(l--){
s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;
}
e=null;
}
},remove:function(e,t,n,r,i){
var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);
if(m&&(c=m.events)){
t=(t||"").match(w)||[""],l=t.length;
while(l--){
if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){
p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;
while(o--){
a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));
}
u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d]);
}else{
for(d in c){
b.event.remove(e,d+t[l],n,r,!0);
}
}
}
b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"));
}
},trigger:function(n,r,i,a){
var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];
if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){
if(!a&&!p.noBubble&&!b.isWindow(i)){
for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode){
h.push(l),f=l;
}
f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e);
}
d=0;
while((l=h[d++])&&!n.isPropagationStopped()){
n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();
}
if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){
f=i[u],f&&(i[u]=null),b.event.triggered=g;
try{
i[g]();
}
catch(v){
}
b.event.triggered=t,f&&(i[u]=f);
}
return n.result;
}
},dispatch:function(e){
e=b.event.fix(e);
var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};
if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){
s=b.event.handlers.call(this,e,l),n=0;
while((o=s[n++])&&!e.isPropagationStopped()){
e.currentTarget=o.elem,a=0;
while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped()){
(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()));
}
}
return c.postDispatch&&c.postDispatch.call(this,e),e.result;
}
},handlers:function(e,n){
var r,i,o,a,s=[],u=n.delegateCount,l=e.target;
if(u&&l.nodeType&&(!e.button||"click"!==e.type)){
for(;l!=this;l=l.parentNode||this){
if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){
for(o=[],a=0;u>a;a++){
i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);
}
o.length&&s.push({elem:l,handlers:o});
}
}
}
return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s;
},fix:function(e){
if(e[b.expando]){
return e;
}
var t,n,r,i=e.type,a=e,s=this.fixHooks[i];
s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;
while(t--){
n=r[t],e[n]=a[n];
}
return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e;
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){
return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e;
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){
var r,i,a,s=n.button,u=n.fromElement;
return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e;
}},special:{load:{noBubble:!0},click:{trigger:function(){
return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t;
}},focus:{trigger:function(){
if(this!==o.activeElement&&this.focus){
try{
return this.focus(),!1;
}
catch(e){
}
}
},delegateType:"focusin"},blur:{trigger:function(){
return this===o.activeElement&&this.blur?(this.blur(),!1):t;
},delegateType:"focusout"},beforeunload:{postDispatch:function(e){
e.result!==t&&(e.originalEvent.returnValue=e.result);
}}},simulate:function(e,t,n,r){
var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});
r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault();
}},b.removeEvent=o.removeEventListener?function(e,t,n){
e.removeEventListener&&e.removeEventListener(t,n,!1);
}:function(e,t,n){
var r="on"+t;
e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n));
},b.Event=function(e,n){
return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n);
},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){
var e=this.originalEvent;
this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1);
},stopPropagation:function(){
var e=this.originalEvent;
this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0);
},stopImmediatePropagation:function(){
this.isImmediatePropagationStopped=it,this.stopPropagation();
}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){
b.event.special[e]={delegateType:t,bindType:t,handle:function(e){
var n,r=this,i=e.relatedTarget,o=e.handleObj;
return (!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n;
}};
}),b.support.submitBubbles||(b.event.special.submit={setup:function(){
return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){
var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;
r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){
e._submit_bubble=!0;
}),b._data(r,"submitBubbles",!0));
}),t);
},postDispatch:function(e){
e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0));
},teardown:function(){
return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t);
}}),b.support.changeBubbles||(b.event.special.change={setup:function(){
return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){
"checked"===e.originalEvent.propertyName&&(this._just_changed=!0);
}),b.event.add(this,"click._change",function(e){
this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0);
})),!1):(b.event.add(this,"beforeactivate._change",function(e){
var t=e.target;
Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){
!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0);
}),b._data(t,"changeBubbles",!0));
}),t);
},handle:function(e){
var n=e.target;
return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t;
},teardown:function(){
return b.event.remove(this,"._change"),!Z.test(this.nodeName);
}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){
var n=0,r=function(e){
b.event.simulate(t,e.target,b.event.fix(e),!0);
};
b.event.special[t]={setup:function(){
0===n++&&o.addEventListener(e,r,!0);
},teardown:function(){
0===--n&&o.removeEventListener(e,r,!0);
}};
}),b.fn.extend({on:function(e,n,r,i,o){
var a,s;
if("object"==typeof e){
"string"!=typeof n&&(r=r||n,n=t);
for(a in e){
this.on(a,n,r,e[a],o);
}
return this;
}
if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1){
i=ot;
}else{
if(!i){
return this;
}
}
return 1===o&&(s=i,i=function(e){
return b().off(e),s.apply(this,arguments);
},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){
b.event.add(this,e,i,r,n);
});
},one:function(e,t,n,r){
return this.on(e,t,n,r,1);
},off:function(e,n,r){
var i,o;
if(e&&e.preventDefault&&e.handleObj){
return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;
}
if("object"==typeof e){
for(o in e){
this.off(o,n,e[o]);
}
return this;
}
return (n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){
b.event.remove(this,e,r,n);
});
},bind:function(e,t,n){
return this.on(e,null,t,n);
},unbind:function(e,t){
return this.off(e,null,t);
},delegate:function(e,t,n,r){
return this.on(t,e,n,r);
},undelegate:function(e,t,n){
return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n);
},trigger:function(e,t){
return this.each(function(){
b.event.trigger(e,t,this);
});
},triggerHandler:function(e,n){
var r=this[0];
return r?b.event.trigger(e,n,r,!0):t;
}}),function(e,t){
var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){
var t=0,n=this.length;
for(;n>t;t++){
if(this[t]===e){
return t;
}
}
return -1;
},_1="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_1+"*("+F+")"+_1+"*(?:"+B+_1+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_1+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_1+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_1+"+$","g"),$=RegExp("^"+_1+"*,"+_1+"*"),I=RegExp("^"+_1+"*([\\x20\\t\\r\\n\\f>+~])"+_1+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_1+"*(even|odd|(([+-]|)(\\d*)n|)"+_1+"*(?:([+-]|)"+_1+"*(\\d+)|))"+_1+"*\\)|)","i"),needsContext:RegExp("^"+_1+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_1+"*((?:-\\d)?\\d*)"+_1+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){
var n="0x"+t-65536;
return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n);
};
try{
q.call(w.documentElement.childNodes,0)[0].nodeType;
}
catch(nt){
q=function(e){
var t,n=[];
while(t=this[e++]){
n.push(t);
}
return n;
};
}
function rt(e){
return Y.test(e+"");
};
function it(){
var e,t=[];
return e=function(n,r){
return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r;
};
};
function ot(e){
return e[x]=!0,e;
};
function at(e){
var t=p.createElement("div");
try{
return e(t);
}
catch(n){
return !1;
}
finally{
t=null;
}
};
function st(e,t,n,r){
var i,o,a,s,u,l,f,g,m,v;
if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e){
return n;
}
if(1!==(s=t.nodeType)&&9!==s){
return [];
}
if(!d&&!r){
if(i=J.exec(e)){
if(a=i[1]){
if(9===s){
if(o=t.getElementById(a),!o||!o.parentNode){
return n;
}
if(o.id===a){
return n.push(o),n;
}
}else{
if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a){
return n.push(o),n;
}
}
}else{
if(i[2]){
return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;
}
if((a=i[3])&&T.getByClassName&&t.getElementsByClassName){
return H.apply(n,q.call(t.getElementsByClassName(a),0)),n;
}
}
}
if(T.qsa&&!h.test(e)){
if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){
l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;
while(u--){
l[u]=g+dt(l[u]);
}
m=V.test(e)&&t.parentNode||t,v=l.join(",");
}
if(v){
try{
return H.apply(n,q.call(m.querySelectorAll(v),0)),n;
}
catch(b){
}
finally{
f||t.removeAttribute("id");
}
}
}
}
return wt(e.replace(W,"$1"),t,n,r);
};
a=st.isXML=function(e){
var t=e&&(e.ownerDocument||e).documentElement;
return t?"HTML"!==t.nodeName:!1;
},c=st.setDocument=function(e){
var n=e?e.ownerDocument||e:w;
return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){
return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length;
}),T.attributes=at(function(e){
e.innerHTML="<select></select>";
var t=typeof e.lastChild.getAttribute("multiple");
return "boolean"!==t&&"string"!==t;
}),T.getByClassName=at(function(e){
return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1;
}),T.getByName=at(function(e){
e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);
var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;
return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t;
}),i.attrHandle=at(function(e){
return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href");
})?{}:{href:function(e){
return e.getAttribute("href",2);
},type:function(e){
return e.getAttribute("type");
}},T.getIdNotName?(i.find.ID=function(e,t){
if(typeof t.getElementById!==A&&!d){
var n=t.getElementById(e);
return n&&n.parentNode?[n]:[];
}
},i.filter.ID=function(e){
var t=e.replace(et,tt);
return function(e){
return e.getAttribute("id")===t;
};
}):(i.find.ID=function(e,n){
if(typeof n.getElementById!==A&&!d){
var r=n.getElementById(e);
return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[];
}
},i.filter.ID=function(e){
var t=e.replace(et,tt);
return function(e){
var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");
return n&&n.value===t;
};
}),i.find.TAG=T.tagNameNoComments?function(e,n){
return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t;
}:function(e,t){
var n,r=[],i=0,o=t.getElementsByTagName(e);
if("*"===e){
while(n=o[i++]){
1===n.nodeType&&r.push(n);
}
return r;
}
return o;
},i.find.NAME=T.getByName&&function(e,n){
return typeof n.getElementsByName!==A?n.getElementsByName(name):t;
},i.find.CLASS=T.getByClassName&&function(e,n){
return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e);
},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){
e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_1+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked");
}),at(function(e){
e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_1+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:");
})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){
T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R);
}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){
var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)));
}:function(e,t){
if(t){
while(t=t.parentNode){
if(t===e){
return !0;
}
}
}
return !1;
},v=f.compareDocumentPosition?function(e,t){
var r;
return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1;
}:function(e,t){
var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];
if(e===t){
return u=!0,0;
}
if(!o||!a){
return e===n?-1:t===n?1:o?-1:a?1:0;
}
if(o===a){
return ut(e,t);
}
r=e;
while(r=r.parentNode){
s.unshift(r);
}
r=t;
while(r=r.parentNode){
l.unshift(r);
}
while(s[i]===l[i]){
i++;
}
return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0;
},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p;
},st.matches=function(e,t){
return st(e,null,null,t);
},st.matchesSelector=function(e,t){
if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t))){
try{
var n=m.call(e,t);
if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType){
return n;
}
}
catch(r){
}
}
return st(t,p,null,[e]).length>0;
},st.contains=function(e,t){
return (e.ownerDocument||e)!==p&&c(e),y(e,t);
},st.attr=function(e,t){
var n;
return (e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null;
},st.error=function(e){
throw Error("Syntax error, unrecognized expression: "+e);
},st.uniqueSort=function(e){
var t,n=[],r=1,i=0;
if(u=!T.detectDuplicates,e.sort(v),u){
for(;t=e[r];r++){
t===e[r-1]&&(i=n.push(r));
}
while(i--){
e.splice(n[i],1);
}
}
return e;
};
function ut(e,t){
var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);
if(r){
return r;
}
if(n){
while(n=n.nextSibling){
if(n===t){
return -1;
}
}
}
return e?1:-1;
};
function lt(e){
return function(t){
var n=t.nodeName.toLowerCase();
return "input"===n&&t.type===e;
};
};
function ct(e){
return function(t){
var n=t.nodeName.toLowerCase();
return ("input"===n||"button"===n)&&t.type===e;
};
};
function pt(e){
return ot(function(t){
return t=+t,ot(function(n,r){
var i,o=e([],n.length,t),a=o.length;
while(a--){
n[i=o[a]]&&(n[i]=!(r[i]=n[i]));
}
});
});
};
o=st.getText=function(e){
var t,n="",r=0,i=e.nodeType;
if(i){
if(1===i||9===i||11===i){
if("string"==typeof e.textContent){
return e.textContent;
}
for(e=e.firstChild;e;e=e.nextSibling){
n+=o(e);
}
}else{
if(3===i||4===i){
return e.nodeValue;
}
}
}else{
for(;t=e[r];r++){
n+=o(t);
}
}
return n;
},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){
return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4);
},CHILD:function(e){
return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e;
},PSEUDO:function(e){
var t,n=!e[5]&&e[2];
return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3));
}},filter:{TAG:function(e){
return "*"===e?function(){
return !0;
}:(e=e.replace(et,tt).toLowerCase(),function(t){
return t.nodeName&&t.nodeName.toLowerCase()===e;
});
},CLASS:function(e){
var t=k[e+" "];
return t||(t=RegExp("(^|"+_1+")"+e+"("+_1+"|$)"))&&k(e,function(e){
return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"");
});
},ATTR:function(e,t,n){
return function(r){
var i=st.attr(r,e);
return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0;
};
},CHILD:function(e,t,n,r,i){
var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;
return 1===r&&0===i?function(e){
return !!e.parentNode;
}:function(t,n,u){
var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;
if(m){
if(o){
while(g){
p=t;
while(p=p[g]){
if(s?p.nodeName.toLowerCase()===y:1===p.nodeType){
return !1;
}
}
h=g="only"===e&&!h&&"nextSibling";
}
return !0;
}
if(h=[a?m.firstChild:m.lastChild],a&&v){
c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];
while(p=++d&&p&&p[g]||(f=d=0)||h.pop()){
if(1===p.nodeType&&++f&&p===t){
c[e]=[N,d,f];
break;
}
}
}else{
if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N){
f=l[1];
}else{
while(p=++d&&p&&p[g]||(f=d=0)||h.pop()){
if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t)){
break;
}
}
}
}
return f-=i,f===r||0===f%r&&f/r>=0;
}
};
},PSEUDO:function(e,t){
var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);
return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){
var i,o=r(e,t),a=o.length;
while(a--){
i=M.call(e,o[a]),e[i]=!(n[i]=o[a]);
}
}):function(e){
return r(e,0,n);
}):r;
}},pseudos:{not:ot(function(e){
var t=[],n=[],r=s(e.replace(W,"$1"));
return r[x]?ot(function(e,t,n,i){
var o,a=r(e,null,i,[]),s=e.length;
while(s--){
(o=a[s])&&(e[s]=!(t[s]=o));
}
}):function(e,i,o){
return t[0]=e,r(t,null,o,n),!n.pop();
};
}),has:ot(function(e){
return function(t){
return st(e,t).length>0;
};
}),contains:ot(function(e){
return function(t){
return (t.textContent||t.innerText||o(t)).indexOf(e)>-1;
};
}),lang:ot(function(e){
return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){
var n;
do{
if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang){
return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");
}
}while((t=t.parentNode)&&1===t.nodeType);
return !1;
};
}),target:function(t){
var n=e.location&&e.location.hash;
return n&&n.slice(1)===t.id;
},root:function(e){
return e===f;
},focus:function(e){
return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex);
},enabled:function(e){
return e.disabled===!1;
},disabled:function(e){
return e.disabled===!0;
},checked:function(e){
var t=e.nodeName.toLowerCase();
return "input"===t&&!!e.checked||"option"===t&&!!e.selected;
},selected:function(e){
return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0;
},empty:function(e){
for(e=e.firstChild;e;e=e.nextSibling){
if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType){
return !1;
}
}
return !0;
},parent:function(e){
return !i.pseudos.empty(e);
},header:function(e){
return Q.test(e.nodeName);
},input:function(e){
return G.test(e.nodeName);
},button:function(e){
var t=e.nodeName.toLowerCase();
return "input"===t&&"button"===e.type||"button"===t;
},text:function(e){
var t;
return "input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type);
},first:pt(function(){
return [0];
}),last:pt(function(e,t){
return [t-1];
}),eq:pt(function(e,t,n){
return [0>n?n+t:n];
}),even:pt(function(e,t){
var n=0;
for(;t>n;n+=2){
e.push(n);
}
return e;
}),odd:pt(function(e,t){
var n=1;
for(;t>n;n+=2){
e.push(n);
}
return e;
}),lt:pt(function(e,t,n){
var r=0>n?n+t:n;
for(;--r>=0;){
e.push(r);
}
return e;
}),gt:pt(function(e,t,n){
var r=0>n?n+t:n;
for(;t>++r;){
e.push(r);
}
return e;
})}};
for(n in {radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){
i.pseudos[n]=lt(n);
}
for(n in {submit:!0,reset:!0}){
i.pseudos[n]=ct(n);
}
function ft(e,t){
var n,r,o,a,s,u,l,c=E[e+" "];
if(c){
return t?0:c.slice(0);
}
s=e,u=[],l=i.preFilter;
while(s){
(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));
for(a in i.filter){
!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));
}
if(!n){
break;
}
}
return t?s.length:s?st.error(e):E(e,u).slice(0);
};
function dt(e){
var t=0,n=e.length,r="";
for(;n>t;t++){
r+=e[t].value;
}
return r;
};
function ht(e,t,n){
var i=t.dir,o=n&&"parentNode"===i,a=C++;
return t.first?function(t,n,r){
while(t=t[i]){
if(1===t.nodeType||o){
return e(t,n,r);
}
}
}:function(t,n,s){
var u,l,c,p=N+" "+a;
if(s){
while(t=t[i]){
if((1===t.nodeType||o)&&e(t,n,s)){
return !0;
}
}
}else{
while(t=t[i]){
if(1===t.nodeType||o){
if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){
if((u=l[1])===!0||u===r){
return u===!0;
}
}else{
if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0){
return !0;
}
}
}
}
}
};
};
function gt(e){
return e.length>1?function(t,n,r){
var i=e.length;
while(i--){
if(!e[i](t,n,r)){
return !1;
}
}
return !0;
}:e[0];
};
function mt(e,t,n,r,i){
var o,a=[],s=0,u=e.length,l=null!=t;
for(;u>s;s++){
(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));
}
return a;
};
function yt(e,t,n,r,i,o){
return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){
var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;
if(n&&n(m,y,s,u),r){
l=mt(y,d),r(l,[],s,u),c=l.length;
while(c--){
(p=l[c])&&(y[d[c]]=!(m[d[c]]=p));
}
}
if(o){
if(i||e){
if(i){
l=[],c=y.length;
while(c--){
(p=y[c])&&l.push(m[c]=p);
}
i(null,y=[],l,u);
}
c=y.length;
while(c--){
(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p));
}
}
}else{
y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y);
}
});
};
function vt(e){
var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){
return e===t;
},s,!0),p=ht(function(e){
return M.call(t,e)>-1;
},s,!0),f=[function(e,n,r){
return !a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r));
}];
for(;o>u;u++){
if(n=i.relative[e[u].type]){
f=[ht(gt(f),n)];
}else{
if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){
for(r=++u;o>r;r++){
if(i.relative[e[r].type]){
break;
}
}
return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e));
}
f.push(n);
}
}
return gt(f);
};
function bt(e,t){
var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){
var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||0.1;
for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){
if(a&&h){
g=0;
while(m=e[g++]){
if(m(h,u,c)){
f.push(h);
break;
}
}
w&&(N=k,r=++n);
}
o&&((h=!m&&h)&&v--,s&&x.push(h));
}
if(v+=b,o&&b!==v){
g=0;
while(m=t[g++]){
m(x,y,u,c);
}
if(s){
if(v>0){
while(b--){
x[b]||y[b]||(y[b]=L.call(f));
}
}
y=mt(y);
}
H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f);
}
return w&&(N=k,l=T),x;
};
return o?ot(s):s;
};
s=st.compile=function(e,t){
var n,r=[],i=[],o=S[e+" "];
if(!o){
t||(t=ft(e)),n=t.length;
while(n--){
o=vt(t[n]),o[x]?r.push(o):i.push(o);
}
o=S(e,bt(i,r));
}
return o;
};
function xt(e,t,n){
var r=0,i=t.length;
for(;i>r;r++){
st(e,t[r],n);
}
return n;
};
function wt(e,t,n,r){
var o,a,u,l,c,p=ft(e);
if(!r&&1===p.length){
if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){
if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t){
return n;
}
e=e.slice(a.shift().value.length);
}
o=U.needsContext.test(e)?0:a.length;
while(o--){
if(u=a[o],i.relative[l=u.type]){
break;
}
if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){
if(a.splice(o,1),e=r.length&&dt(a),!e){
return H.apply(n,q.call(r,0)),n;
}
break;
}
}
}
return s(e,p)(r,t,d,n,V.test(e)),n;
};
i.pseudos.nth=i.pseudos.eq;
function Tt(){
};
i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains;
}(e);
var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};
b.fn.extend({find:function(e){
var t,n,r,i=this.length;
if("string"!=typeof e){
return r=this,this.pushStack(b(e).filter(function(){
for(t=0;i>t;t++){
if(b.contains(r[t],this)){
return !0;
}
}
}));
}
for(n=[],t=0;i>t;t++){
b.find(e,this[t],n);
}
return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n;
},has:function(e){
var t,n=b(e,this),r=n.length;
return this.filter(function(){
for(t=0;r>t;t++){
if(b.contains(this,n[t])){
return !0;
}
}
});
},not:function(e){
return this.pushStack(ft(this,e,!1));
},filter:function(e){
return this.pushStack(ft(this,e,!0));
},is:function(e){
return !!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0);
},closest:function(e,t){
var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;
for(;i>r;r++){
n=this[r];
while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){
if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){
o.push(n);
break;
}
n=n.parentNode;
}
}
return this.pushStack(o.length>1?b.unique(o):o);
},index:function(e){
return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1;
},add:function(e,t){
var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);
return this.pushStack(b.unique(r));
},addBack:function(e){
return this.add(null==e?this.prevObject:this.prevObject.filter(e));
}}),b.fn.andSelf=b.fn.addBack;
function pt(e,t){
do{
e=e[t];
}while(e&&1!==e.nodeType);
return e;
};
b.each({parent:function(e){
var t=e.parentNode;
return t&&11!==t.nodeType?t:null;
},parents:function(e){
return b.dir(e,"parentNode");
},parentsUntil:function(e,t,n){
return b.dir(e,"parentNode",n);
},next:function(e){
return pt(e,"nextSibling");
},prev:function(e){
return pt(e,"previousSibling");
},nextAll:function(e){
return b.dir(e,"nextSibling");
},prevAll:function(e){
return b.dir(e,"previousSibling");
},nextUntil:function(e,t,n){
return b.dir(e,"nextSibling",n);
},prevUntil:function(e,t,n){
return b.dir(e,"previousSibling",n);
},siblings:function(e){
return b.sibling((e.parentNode||{}).firstChild,e);
},children:function(e){
return b.sibling(e.firstChild);
},contents:function(e){
return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes);
}},function(e,t){
b.fn[e]=function(n,r){
var i=b.map(this,t,n);
return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i);
};
}),b.extend({filter:function(e,t,n){
return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t);
},dir:function(e,n,r){
var i=[],o=e[n];
while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r))){
1===o.nodeType&&i.push(o),o=o[n];
}
return i;
},sibling:function(e,t){
var n=[];
for(;e;e=e.nextSibling){
1===e.nodeType&&e!==t&&n.push(e);
}
return n;
}});
function ft(e,t,n){
if(t=t||0,b.isFunction(t)){
return b.grep(e,function(e,r){
var i=!!t.call(e,r,e);
return i===n;
});
}
if(t.nodeType){
return b.grep(e,function(e){
return e===t===n;
});
}
if("string"==typeof t){
var r=b.grep(e,function(e){
return 1===e.nodeType;
});
if(ut.test(t)){
return b.filter(t,r,!n);
}
t=b.filter(t,r);
}
return b.grep(e,function(e){
return b.inArray(e,t)>=0===n;
});
};
function dt(e){
var t=ht.split("|"),n=e.createDocumentFragment();
if(n.createElement){
while(t.length){
n.createElement(t.pop());
}
}
return n;
};
var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));
At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){
return b.access(this,function(e){
return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e));
},null,e,arguments.length);
},wrapAll:function(e){
if(b.isFunction(e)){
return this.each(function(t){
b(this).wrapAll(e.call(this,t));
});
}
if(this[0]){
var t=b(e,this[0].ownerDocument).eq(0).clone(!0);
this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){
var e=this;
while(e.firstChild&&1===e.firstChild.nodeType){
e=e.firstChild;
}
return e;
}).append(this);
}
return this;
},wrapInner:function(e){
return b.isFunction(e)?this.each(function(t){
b(this).wrapInner(e.call(this,t));
}):this.each(function(){
var t=b(this),n=t.contents();
n.length?n.wrapAll(e):t.append(e);
});
},wrap:function(e){
var t=b.isFunction(e);
return this.each(function(n){
b(this).wrapAll(t?e.call(this,n):e);
});
},unwrap:function(){
return this.parent().each(function(){
b.nodeName(this,"body")||b(this).replaceWith(this.childNodes);
}).end();
},append:function(){
return this.domManip(arguments,!0,function(e){
(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e);
});
},prepend:function(){
return this.domManip(arguments,!0,function(e){
(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild);
});
},before:function(){
return this.domManip(arguments,!1,function(e){
this.parentNode&&this.parentNode.insertBefore(e,this);
});
},after:function(){
return this.domManip(arguments,!1,function(e){
this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling);
});
},remove:function(e,t){
var n,r=0;
for(;null!=(n=this[r]);r++){
(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));
}
return this;
},empty:function(){
var e,t=0;
for(;null!=(e=this[t]);t++){
1===e.nodeType&&b.cleanData(Ot(e,!1));
while(e.firstChild){
e.removeChild(e.firstChild);
}
e.options&&b.nodeName(e,"select")&&(e.options.length=0);
}
return this;
},clone:function(e,t){
return e=null==e?!1:e,t=null==t?e:t,this.map(function(){
return b.clone(this,e,t);
});
},html:function(e){
return b.access(this,function(e){
var n=this[0]||{},r=0,i=this.length;
if(e===t){
return 1===n.nodeType?n.innerHTML.replace(gt,""):t;
}
if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){
e=e.replace(vt,"<$1></$2>");
try{
for(;i>r;r++){
n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);
}
n=0;
}
catch(o){
}
}
n&&this.empty().append(e);
},null,e,arguments.length);
},replaceWith:function(e){
var t=b.isFunction(e);
return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){
var t=this.nextSibling,n=this.parentNode;
n&&(b(this).remove(),n.insertBefore(e,t));
});
},detach:function(e){
return this.remove(e,!0);
},domManip:function(e,n,r){
e=f.apply([],e);
var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);
if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g)){
return this.each(function(i){
var o=d.eq(i);
m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r);
});
}
if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){
for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++){
o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);
}
if(a){
for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++){
o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));
}
}
l=i=null;
}
return this;
}});
function Lt(e,t){
return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t));
};
function Ht(e){
var t=e.getAttributeNode("type");
return e.type=(t&&t.specified)+"/"+e.type,e;
};
function qt(e){
var t=Et.exec(e.type);
return t?e.type=t[1]:e.removeAttribute("type"),e;
};
function Mt(e,t){
var n,r=0;
for(;null!=(n=e[r]);r++){
b._data(n,"globalEval",!t||b._data(t[r],"globalEval"));
}
};
function _2(e,t){
if(1===t.nodeType&&b.hasData(e)){
var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;
if(s){
delete a.handle,a.events={};
for(n in s){
for(r=0,i=s[n].length;i>r;r++){
b.event.add(t,n,s[n][r]);
}
}
}
a.data&&(a.data=b.extend({},a.data));
}
};
function Ft(e,t){
var n,r,i;
if(1===t.nodeType){
if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){
i=b._data(t);
for(r in i.events){
b.removeEvent(t,r,i.handle);
}
t.removeAttribute(b.expando);
}
"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue);
}
};
b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){
b.fn[e]=function(e){
var n,r=0,i=[],o=b(e),a=o.length-1;
for(;a>=r;r++){
n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());
}
return this.pushStack(i);
};
});
function Ot(e,n){
var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;
if(!s){
for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++){
!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));
}
}
return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s;
};
function Bt(e){
Nt.test(e.type)&&(e.defaultChecked=e.checked);
};
b.extend({clone:function(e,t,n){
var r,i,o,a,s,u=b.contains(e.ownerDocument,e);
if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e))){
for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a){
r[a]&&Ft(i,r[a]);
}
}
if(t){
if(n){
for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++){
_2(i,r[a]);
}
}else{
_2(e,o);
}
}
return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o;
},buildFragment:function(e,t,n,r){
var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;
for(;p>h;h++){
if(o=e[h],o||0===o){
if("object"===b.type(o)){
b.merge(d,o.nodeType?[o]:o);
}else{
if(wt.test(o)){
s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];
while(i--){
s=s.lastChild;
}
if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){
o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;
while(i--){
b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l);
}
}
b.merge(d,s.childNodes),s.textContent="";
while(s.firstChild){
s.removeChild(s.firstChild);
}
s=f.lastChild;
}else{
d.push(t.createTextNode(o));
}
}
}
}
s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;
while(o=d[h++]){
if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){
i=0;
while(o=s[i++]){
kt.test(o.type||"")&&n.push(o);
}
}
}
return s=null,f;
},cleanData:function(e,t){
var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;
for(;null!=(n=e[s]);s++){
if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){
if(a.events){
for(r in a.events){
f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);
}
}
l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o));
}
}
}});
var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];
function tn(e,t){
if(t in e){
return t;
}
var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;
while(i--){
if(t=en[i]+n,t in e){
return t;
}
}
return r;
};
function nn(e,t){
return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e);
};
function rn(e,t){
var n,r,i,o=[],a=0,s=e.length;
for(;s>a;a++){
r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));
}
for(a=0;s>a;a++){
r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));
}
return e;
};
b.fn.extend({css:function(e,n){
return b.access(this,function(e,n,r){
var i,o,a={},s=0;
if(b.isArray(n)){
for(o=Rt(e),i=n.length;i>s;s++){
a[n[s]]=b.css(e,n[s],!1,o);
}
return a;
}
return r!==t?b.style(e,n,r):b.css(e,n);
},e,n,arguments.length>1);
},show:function(){
return rn(this,!0);
},hide:function(){
return rn(this);
},toggle:function(e){
var t="boolean"==typeof e;
return this.each(function(){
(t?e:nn(this))?b(this).show():b(this).hide();
});
}}),b.extend({cssHooks:{opacity:{get:function(e,t){
if(t){
var n=Wt(e,"opacity");
return ""===n?"1":n;
}
}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){
var o,a,s,u=b.camelCase(n),l=e.style;
if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t){
return s&&"get" in s&&(o=s.get(e,!1,i))!==t?o:l[n];
}
if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set" in s&&(r=s.set(e,r,i))===t))){
try{
l[n]=r;
}
catch(c){
}
}
}
},css:function(e,n,r,i){
var o,a,s,u=b.camelCase(n);
return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get" in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a;
},swap:function(e,t,n,r){
var i,o,a={};
for(o in t){
a[o]=e.style[o],e.style[o]=t[o];
}
i=n.apply(e,r||[]);
for(o in t){
e.style[o]=a[o];
}
return i;
}}),e.getComputedStyle?(Rt=function(t){
return e.getComputedStyle(t,null);
},Wt=function(e,n,r){
var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;
return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u;
}):o.documentElement.currentStyle&&(Rt=function(e){
return e.currentStyle;
},Wt=function(e,n,r){
var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;
return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u;
});
function on(e,t,n){
var r=Vt.exec(t);
return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t;
};
function an(e,t,n,r,i){
var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;
for(;4>o;o+=2){
"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));
}
return a;
};
function sn(e,t,n){
var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);
if(0>=i||null==i){
if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i)){
return i;
}
r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0;
}
return i+an(e,t,n||(a?"border":"content"),r,o)+"px";
};
function un(e){
var t=o,n=Gt[e];
return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n;
};
function ln(e,t){
var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");
return n.remove(),r;
};
b.each(["height","width"],function(e,n){
b.cssHooks[n]={get:function(e,r,i){
return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){
return sn(e,n,i);
}):sn(e,n,i):t;
},set:function(e,t,r){
var i=r&&Rt(e);
return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0);
}};
}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){
return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?0.01*parseFloat(RegExp.$1)+"":t?"1":"";
},set:function(e,t){
var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";
n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i);
}}),b(function(){
b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){
return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t;
}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){
b.cssHooks[n]={get:function(e,r){
return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t;
}};
});
}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){
return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"));
},b.expr.filters.visible=function(e){
return !b.expr.filters.hidden(e);
}),b.each({margin:"",padding:"",border:"Width"},function(e,t){
b.cssHooks[e+t]={expand:function(n){
var r=0,i={},o="string"==typeof n?n.split(" "):[n];
for(;4>r;r++){
i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];
}
return i;
}},Ut.test(e)||(b.cssHooks[e+t].set=on);
});
var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;
b.fn.extend({serialize:function(){
return b.param(this.serializeArray());
},serializeArray:function(){
return this.map(function(){
var e=b.prop(this,"elements");
return e?b.makeArray(e):this;
}).filter(function(){
var e=this.type;
return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e));
}).map(function(e,t){
var n=b(this).val();
return null==n?null:b.isArray(n)?b.map(n,function(e){
return {name:t.name,value:e.replace(fn,"\r\n")};
}):{name:t.name,value:n.replace(fn,"\r\n")};
}).get();
}}),b.param=function(e,n){
var r,i=[],o=function(e,t){
t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t);
};
if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e)){
b.each(e,function(){
o(this.name,this.value);
});
}else{
for(r in e){
gn(r,e[r],n,o);
}
}
return i.join("&").replace(cn,"+");
};
function gn(e,t,n,r){
var i;
if(b.isArray(t)){
b.each(t,function(t,i){
n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r);
});
}else{
if(n||"object"!==b.type(t)){
r(e,t);
}else{
for(i in t){
gn(e+"["+i+"]",t[i],n,r);
}
}
}
};
b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){
b.fn[t]=function(e,n){
return arguments.length>0?this.on(t,null,e,n):this.trigger(t);
};
}),b.fn.hover=function(e,t){
return this.mouseenter(e).mouseleave(t||e);
};
var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");
try{
yn=a.href;
}
catch(Ln){
yn=o.createElement("a"),yn.href="",yn=yn.href;
}
mn=En.exec(yn.toLowerCase())||[];
function Hn(e){
return function(t,n){
"string"!=typeof t&&(n=t,t="*");
var r,i=0,o=t.toLowerCase().match(w)||[];
if(b.isFunction(n)){
while(r=o[i++]){
"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n);
}
}
};
};
function qn(e,n,r,i){
var o={},a=e===jn;
function s(u){
var l;
return o[u]=!0,b.each(e[u]||[],function(e,u){
var c=u(n,r,i);
return "string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1);
}),l;
};
return s(n.dataTypes[0])||!o["*"]&&s("*");
};
function Mn(e,n){
var r,i,o=b.ajaxSettings.flatOptions||{};
for(i in n){
n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);
}
return r&&b.extend(!0,e,r),e;
};
b.fn.load=function(e,n,r){
if("string"!=typeof e&&Sn){
return Sn.apply(this,arguments);
}
var i,o,a,s=this,u=e.indexOf(" ");
return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){
o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e);
}).complete(r&&function(e,t){
s.each(r,o||[e.responseText,t,e]);
}),this;
},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){
b.fn[t]=function(e){
return this.on(t,e);
};
}),b.each(["get","post"],function(e,n){
b[n]=function(e,r,i,o){
return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i});
};
}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){
return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e);
},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){
"object"==typeof e&&(n=e,e=t),n=n||{};
var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){
var t;
if(2===x){
if(!c){
c={};
while(t=Tn.exec(a)){
c[t[1].toLowerCase()]=t[2];
}
}
t=c[e.toLowerCase()];
}
return null==t?null:t;
},getAllResponseHeaders:function(){
return 2===x?a:null;
},setRequestHeader:function(e,t){
var n=e.toLowerCase();
return x||(e=v[n]=v[n]||e,y[e]=t),this;
},overrideMimeType:function(e){
return x||(p.mimeType=e),this;
},statusCode:function(e){
var t;
if(e){
if(2>x){
for(t in e){
m[t]=[m[t],e[t]];
}
}else{
N.always(e[N.status]);
}
}
return this;
},abort:function(e){
var t=e||T;
return l&&l.abort(t),k(0,t),this;
}};
if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x){
return N;
}
u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);
for(i in p.headers){
N.setRequestHeader(i,p.headers[i]);
}
if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x)){
return N.abort();
}
T="abort";
for(i in {success:1,error:1,complete:1}){
N[i](p[i]);
}
if(l=qn(jn,p,n,N)){
N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){
N.abort("timeout");
},p.timeout));
try{
x=1,l.send(y,k);
}
catch(C){
if(!(2>x)){
throw C;
}
k(-1,C);
}
}else{
k(-1,"No Transport");
}
function k(e,n,r,i){
var c,y,v,w,T,C=n;
2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_3(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")));
};
return N;
},getScript:function(e,n){
return b.get(e,t,n,"script");
},getJSON:function(e,t,n){
return b.get(e,t,n,"json");
}});
function _3(e,n,r){
var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;
for(s in c){
s in r&&(n[c[s]]=r[s]);
}
while("*"===l[0]){
l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));
}
if(o){
for(s in u){
if(u[s]&&u[s].test(o)){
l.unshift(s);
break;
}
}
}
if(l[0] in r){
a=l[0];
}else{
for(s in r){
if(!l[0]||e.converters[s+" "+l[0]]){
a=s;
break;
}
i||(i=s);
}
a=a||i;
}
return a?(a!==l[0]&&l.unshift(a),r[a]):t;
};
function Fn(e,t){
var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];
if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1]){
for(i in e.converters){
a[i.toLowerCase()]=e.converters[i];
}
}
for(;r=u[++s];){
if("*"!==r){
if("*"!==l&&l!==r){
if(i=a[l+" "+r]||a["* "+r],!i){
for(n in a){
if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){
i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));
break;
}
}
}
if(i!==!0){
if(i&&e["throws"]){
t=i(t);
}else{
try{
t=i(t);
}
catch(c){
return {state:"parsererror",error:i?c:"No conversion from "+l+" to "+r};
}
}
}
}
l=r;
}
}
return {state:"success",data:t};
};
b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){
return b.globalEval(e),e;
}}}),b.ajaxPrefilter("script",function(e){
e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1);
}),b.ajaxTransport("script",function(e){
if(e.crossDomain){
var n,r=o.head||b("head")[0]||o.documentElement;
return {send:function(t,i){
n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){
(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"));
},r.insertBefore(n,r.firstChild);
},abort:function(){
n&&n.onload(t,!0);
}};
}
});
var On=[],Bn=/(=)\?(?=&|$)|\?\?/;
b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){
var e=On.pop()||b.expando+"_"+vn++;
return this[e]=!0,e;
}}),b.ajaxPrefilter("json jsonp",function(n,r,i){
var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");
return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){
return s||b.error(o+" was not called"),s[0];
},n.dataTypes[0]="json",a=e[o],e[o]=function(){
s=arguments;
},i.always(function(){
e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t;
}),"script"):t;
});
var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){
var e;
for(e in Pn){
Pn[e](t,!0);
}
};
function In(){
try{
return new e.XMLHttpRequest;
}
catch(t){
}
};
function zn(){
try{
return new e.ActiveXObject("Microsoft.XMLHTTP");
}
catch(t){
}
};
b.ajaxSettings.xhr=e.ActiveXObject?function(){
return !this.isLocal&&In()||zn();
}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials" in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){
if(!n.crossDomain||b.support.cors){
var r;
return {send:function(i,o){
var a,s,u=n.xhr();
if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields){
for(s in n.xhrFields){
u[s]=n.xhrFields[s];
}
}
n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");
try{
for(s in i){
u.setRequestHeader(s,i[s]);
}
}
catch(l){
}
u.send(n.hasContent&&n.data||null),r=function(e,i){
var s,l,c,p;
try{
if(r&&(i||4===u.readyState)){
if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i){
4!==u.readyState&&u.abort();
}else{
p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);
try{
c=u.statusText;
}
catch(f){
c="";
}
s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404;
}
}
}
catch(d){
i||o(-1,d);
}
p&&o(s,c,p,l);
},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r();
},abort:function(){
r&&r(t,!0);
}};
}
});
var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){
var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;
if(o){
if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){
s=b.css(i.elem,e,!0)||n||1;
do{
u=u||".5",s/=u,b.style(i.elem,e,s+r);
}while(u!==(u=i.cur()/a)&&1!==u&&--l);
}
i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n;
}
return i;
}]};
function Kn(){
return setTimeout(function(){
Xn=t;
}),Xn=b.now();
};
function Zn(e,t){
b.each(t,function(t,n){
var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;
for(;o>i;i++){
if(r[i].call(e,t,n)){
return;
}
}
});
};
function er(e,t,n){
var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){
delete u.elem;
}),u=function(){
if(i){
return !1;
}
var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;
for(;u>a;a++){
l.tweens[a].run(o);
}
return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1);
},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){
var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);
return l.tweens.push(r),r;
},stop:function(t){
var n=0,r=t?l.tweens.length:0;
if(i){
return this;
}
for(i=!0;r>n;n++){
l.tweens[n].run(1);
}
return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this;
}}),c=l.props;
for(tr(c,l.opts.specialEasing);a>o;o++){
if(r=Gn[o].call(l,e,c,l.opts)){
return r;
}
}
return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always);
};
function tr(e,t){
var n,r,i,o,a;
for(i in e){
if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand" in a){
n=a.expand(n),delete e[r];
for(i in n){
i in e||(e[i]=n[i],t[i]=o);
}
}else{
t[r]=o;
}
}
};
b.Animation=b.extend(er,{tweener:function(e,t){
b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");
var n,r=0,i=e.length;
for(;i>r;r++){
n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t);
}
},prefilter:function(e,t){
t?Gn.unshift(e):Gn.push(e);
}});
function nr(e,t,n){
var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);
n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){
c.unqueued||p();
}),c.unqueued++,f.always(function(){
f.always(function(){
c.unqueued--,b.queue(e,"fx").length||c.empty.fire();
});
})),1===e.nodeType&&("height" in t||"width" in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){
d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2];
}));
for(i in t){
if(a=t[i],Vn.exec(a)){
if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show")){
continue;
}
g.push(i);
}
}
if(o=g.length){
s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden" in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){
b(e).hide();
}),f.done(function(){
var t;
b._removeData(e,"fxshow");
for(t in h){
b.style(e,t,h[t]);
}
});
for(i=0;o>i;i++){
r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0));
}
}
};
function rr(e,t,n,r,i){
return new rr.prototype.init(e,t,n,r,i);
};
b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){
this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px");
},cur:function(){
var e=rr.propHooks[this.prop];
return e&&e.get?e.get(this):rr.propHooks._default.get(this);
},run:function(e){
var t,n=rr.propHooks[this.prop];
return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this;
}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){
var t;
return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop];
},set:function(e){
b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now;
}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){
e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now);
}},b.each(["toggle","show","hide"],function(e,t){
var n=b.fn[t];
b.fn[t]=function(e,r,i){
return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i);
};
}),b.fn.extend({fadeTo:function(e,t,n,r){
return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r);
},animate:function(e,t,n,r){
var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){
var t=er(this,b.extend({},e),o);
a.finish=function(){
t.stop(!0);
},(i||b._data(this,"finish"))&&t.stop(!0);
};
return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a);
},stop:function(e,n,r){
var i=function(e){
var t=e.stop;
delete e.stop,t(r);
};
return "string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){
var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);
if(n){
a[n]&&a[n].stop&&i(a[n]);
}else{
for(n in a){
a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);
}
}
for(n=o.length;n--;){
o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));
}
(t||!r)&&b.dequeue(this,e);
});
},finish:function(e){
return e!==!1&&(e=e||"fx"),this.each(function(){
var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;
for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;){
o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));
}
for(t=0;a>t;t++){
r[t]&&r[t].finish&&r[t].finish.call(this);
}
delete n.finish;
});
}});
function ir(e,t){
var n,r={height:e},i=0;
for(t=t?1:0;4>i;i+=2-t){
n=Zt[i],r["margin"+n]=r["padding"+n]=e;
}
return t&&(r.opacity=r.width=e),r;
};
b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){
b.fn[e]=function(e,n,r){
return this.animate(t,e,n,r);
};
}),b.speed=function(e,t,n){
var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};
return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){
b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue);
},r;
},b.easing={linear:function(e){
return e;
},swing:function(e){
return 0.5-Math.cos(e*Math.PI)/2;
}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){
var e,n=b.timers,r=0;
for(Xn=b.now();n.length>r;r++){
e=n[r],e()||n[r]!==e||n.splice(r--,1);
}
n.length||b.fx.stop(),Xn=t;
},b.fx.timer=function(e){
e()&&b.timers.push(e)&&b.fx.start();
},b.fx.interval=13,b.fx.start=function(){
Un||(Un=setInterval(b.fx.tick,b.fx.interval));
},b.fx.stop=function(){
clearInterval(Un),Un=null;
},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){
return b.grep(b.timers,function(t){
return e===t.elem;
}).length;
}),b.fn.offset=function(e){
if(arguments.length){
return e===t?this:this.each(function(t){
b.offset.setOffset(this,e,t);
});
}
var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;
if(s){
return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o;
}
},b.offset={setOffset:function(e,t,n){
var r=b.css(e,"position");
"static"===r&&(e.style.position="relative");
var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;
u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using" in t?t.using.call(e,l):i.css(l);
}},b.fn.extend({position:function(){
if(this[0]){
var e,t,n={top:0,left:0},r=this[0];
return "fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)};
}
},offsetParent:function(){
return this.map(function(){
var e=this.offsetParent||o.documentElement;
while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position")){
e=e.offsetParent;
}
return e||o.documentElement;
});
}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){
var r=/Y/.test(n);
b.fn[e]=function(i){
return b.access(this,function(e,i,o){
var a=or(e);
return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t);
},e,i,arguments.length,null);
};
});
function or(e){
return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1;
};
b.each({Height:"height",Width:"width"},function(e,n){
b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){
b.fn[i]=function(i,o){
var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");
return b.access(this,function(n,r,i){
var o;
return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s);
},n,a?i:t,a,null);
};
});
}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){
return b;
});
})(window);

if("undefined"==typeof jQuery){
throw new Error("Bootstrap requires jQuery");
}
+function(a){
"use strict";
function b(){
var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(var c in b){
if(void 0!==a.style[c]){
return {end:b[c]};
}
}
return !1;
};
a.fn.emulateTransitionEnd=function(b){
var c=!1,d=this;
a(this).one(a.support.transition.end,function(){
c=!0;
});
var e=function(){
c||a(d).trigger(a.support.transition.end);
};
return setTimeout(e,b),this;
},a(function(){
a.support.transition=b();
});
}(jQuery),+function(a){
"use strict";
var b="[data-dismiss=\"alert\"]",c=function(c){
a(c).on("click",b,this.close);
};
c.prototype.close=function(b){
function c(){
f.trigger("closed.bs.alert").remove();
};
var d=a(this),e=d.attr("data-target");
e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));
var f=a(e);
b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c());
};
var d=a.fn.alert;
a.fn.alert=function(b){
return this.each(function(){
var d=a(this),e=d.data("bs.alert");
e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d);
});
},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){
return a.fn.alert=d,this;
},a(document).on("click.bs.alert.data-api",b,c.prototype.close);
}(jQuery),+function(a){
"use strict";
var b=function(c,d){
this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1;
};
b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){
var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();
b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){
"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c));
},this),0);
},b.prototype.toggle=function(){
var a=!0,b=this.$element.closest("[data-toggle=\"buttons\"]");
if(b.length){
var c=this.$element.find("input");
"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change");
}
a&&this.$element.toggleClass("active");
};
var c=a.fn.button;
a.fn.button=function(c){
return this.each(function(){
var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;
e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c);
});
},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){
return a.fn.button=c,this;
},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){
var c=a(b.target);
c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault();
});
}(jQuery),+function(a){
"use strict";
var b=function(b,c){
this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this));
};
b.DEFAULTS={interval:5000,pause:"hover",wrap:!0},b.prototype.cycle=function(b){
return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this;
},b.prototype.getActiveIndex=function(){
return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active);
},b.prototype.to=function(b){
var c=this,d=this.getActiveIndex();
return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){
c.to(b);
}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]));
},b.prototype.pause=function(b){
return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this;
},b.prototype.next=function(){
return this.sliding?void 0:this.slide("next");
},b.prototype.prev=function(){
return this.sliding?void 0:this.slide("prev");
},b.prototype.slide=function(b,c){
var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;
if(!e.length){
if(!this.options.wrap){
return;
}
e=this.$element.find(".item")[h]();
}
if(e.hasClass("active")){
return this.sliding=!1;
}
var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});
return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){
var b=a(i.$indicators.children()[i.getActiveIndex()]);
b&&b.addClass("active");
})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){
e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){
i.$element.trigger("slid.bs.carousel");
},0);
}).emulateTransitionEnd(1000*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this);
};
var c=a.fn.carousel;
a.fn.carousel=function(c){
return this.each(function(){
var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;
e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle();
});
},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){
return a.fn.carousel=c,this;
},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){
var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");
g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault();
}),a(window).on("load",function(){
a("[data-ride=\"carousel\"]").each(function(){
var b=a(this);
b.carousel(b.data());
});
});
}(jQuery),+function(a){
"use strict";
var b=function(c,d){
this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle();
};
b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){
var a=this.$element.hasClass("width");
return a?"width":"height";
},b.prototype.show=function(){
if(!this.transitioning&&!this.$element.hasClass("in")){
var b=a.Event("show.bs.collapse");
if(this.$element.trigger(b),!b.isDefaultPrevented()){
var c=this.$parent&&this.$parent.find("> .panel > .in");
if(c&&c.length){
var d=c.data("bs.collapse");
if(d&&d.transitioning){
return;
}
c.collapse("hide"),d||c.data("bs.collapse",null);
}
var e=this.dimension();
this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;
var f=function(){
this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse");
};
if(!a.support.transition){
return f.call(this);
}
var g=a.camelCase(["scroll",e].join("-"));
this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g]);
}
}
},b.prototype.hide=function(){
if(!this.transitioning&&this.$element.hasClass("in")){
var b=a.Event("hide.bs.collapse");
if(this.$element.trigger(b),!b.isDefaultPrevented()){
var c=this.dimension();
this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;
var d=function(){
this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse");
};
return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this);
}
}
},b.prototype.toggle=function(){
this[this.$element.hasClass("in")?"hide":"show"]();
};
var c=a.fn.collapse;
a.fn.collapse=function(c){
return this.each(function(){
var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);
!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]();
});
},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){
return a.fn.collapse=c,this;
},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){
var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);
g&&g.transitioning||(j&&j.find("[data-toggle=collapse][data-parent=\""+i+"\"]").not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h);
});
}(jQuery),+function(a){
"use strict";
function b(b){
a(d).remove(),a(e).each(function(){
var d=c(a(this)),e={relatedTarget:this};
d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e));
});
};
function c(b){
var c=b.attr("data-target");
c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));
var d=c&&a(c);
return d&&d.length?d:b.parent();
};
var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){
a(b).on("click.bs.dropdown",this.toggle);
};
f.prototype.toggle=function(d){
var e=a(this);
if(!e.is(".disabled, :disabled")){
var f=c(e),g=f.hasClass("open");
if(b(),!g){
"ontouchstart" in document.documentElement&&!f.closest(".navbar-nav").length&&a("<div class=\"dropdown-backdrop\"/>").insertAfter(a(this)).on("click",b);
var h={relatedTarget:this};
if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented()){
return;
}
f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus();
}
return !1;
}
},f.prototype.keydown=function(b){
if(/(38|40|27)/.test(b.keyCode)){
var d=a(this);
if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){
var f=c(d),g=f.hasClass("open");
if(!g||g&&27==b.keyCode){
return 27==b.which&&f.find(e).focus(),d.click();
}
var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);
if(i.length){
var j=i.index(i.filter(":focus"));
38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus();
}
}
}
};
var g=a.fn.dropdown;
a.fn.dropdown=function(b){
return this.each(function(){
var c=a(this),d=c.data("bs.dropdown");
d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c);
});
},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){
return a.fn.dropdown=g,this;
},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){
a.stopPropagation();
}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown);
}(jQuery),+function(a){
"use strict";
var b=function(b,c){
this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){
this.$element.trigger("loaded.bs.modal");
},this));
};
b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){
return this[this.isShown?"hide":"show"](a);
},b.prototype.show=function(b){
var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});
this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal","[data-dismiss=\"modal\"]",a.proxy(this.hide,this)),this.backdrop(function(){
var d=a.support.transition&&c.$element.hasClass("fade");
c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();
var e=a.Event("shown.bs.modal",{relatedTarget:b});
d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){
c.$element.focus().trigger(e);
}).emulateTransitionEnd(300):c.$element.focus().trigger(e);
}));
},b.prototype.hide=function(b){
b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal());
},b.prototype.enforceFocus=function(){
a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){
this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus();
},this));
},b.prototype.escape=function(){
this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){
27==a.which&&this.hide();
},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal");
},b.prototype.hideModal=function(){
var a=this;
this.$element.hide(),this.backdrop(function(){
a.removeBackdrop(),a.$element.trigger("hidden.bs.modal");
});
},b.prototype.removeBackdrop=function(){
this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null;
},b.prototype.backdrop=function(b){
var c=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){
var d=a.support.transition&&c;
if(this.$backdrop=a("<div class=\"modal-backdrop "+c+"\" />").appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){
a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this));
},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b){
return;
}
d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b();
}else{
!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b();
}
};
var c=a.fn.modal;
a.fn.modal=function(c,d){
return this.each(function(){
var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);
f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d);
});
},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){
return a.fn.modal=c,this;
},a(document).on("click.bs.modal.data-api","[data-toggle=\"modal\"]",function(b){
var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());
c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){
c.is(":visible")&&c.focus();
});
}),a(document).on("show.bs.modal",".modal",function(){
a(document.body).addClass("modal-open");
}).on("hidden.bs.modal",".modal",function(){
a(document.body).removeClass("modal-open");
});
}(jQuery),+function(a){
"use strict";
var b=function(a,b){
this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b);
};
b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:"<div class=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\"></div></div>",trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){
this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);
for(var e=this.options.trigger.split(" "),f=e.length;f--;){
var g=e[f];
if("click"==g){
this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));
}else{
if("manual"!=g){
var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";
this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this));
}
}
}
this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle();
},b.prototype.getDefaults=function(){
return b.DEFAULTS;
},b.prototype.getOptions=function(b){
return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b;
},b.prototype.getDelegateOptions=function(){
var b={},c=this.getDefaults();
return this._options&&a.each(this._options,function(a,d){
c[a]!=d&&(b[a]=d);
}),b;
},b.prototype.enter=function(b){
var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);
return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void (c.timeout=setTimeout(function(){
"in"==c.hoverState&&c.show();
},c.options.delay.show)):c.show();
},b.prototype.leave=function(b){
var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);
return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void (c.timeout=setTimeout(function(){
"out"==c.hoverState&&c.hide();
},c.options.delay.hide)):c.hide();
},b.prototype.show=function(){
var b=a.Event("show.bs."+this.type);
if(this.hasContent()&&this.enabled){
if(this.$element.trigger(b),b.isDefaultPrevented()){
return;
}
var c=this,d=this.tip();
this.setContent(),this.options.animation&&d.addClass("fade");
var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);
g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);
var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;
if(g){
var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;
e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e);
}
var q=this.getCalculatedOffset(e,h,i,j);
this.applyPlacement(q,e),this.hoverState=null;
var r=function(){
c.$element.trigger("shown.bs."+c.type);
};
a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r();
}
},b.prototype.applyPlacement=function(b,c){
var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);
isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){
e.css({top:Math.round(a.top),left:Math.round(a.left)});
}},b),0),e.addClass("in");
var j=e[0].offsetWidth,k=e[0].offsetHeight;
if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){
var l=0;
b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left");
}else{
this.replaceArrow(k-g,k,"top");
}
d&&e.offset(b);
},b.prototype.replaceArrow=function(a,b,c){
this.arrow().css(c,a?50*(1-a/b)+"%":"");
},b.prototype.setContent=function(){
var a=this.tip(),b=this.getTitle();
a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right");
},b.prototype.hide=function(){
function b(){
"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type);
};
var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);
return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this);
},b.prototype.fixTitle=function(){
var a=this.$element;
(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","");
},b.prototype.hasContent=function(){
return this.getTitle();
},b.prototype.getPosition=function(){
var b=this.$element[0];
return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset());
},b.prototype.getCalculatedOffset=function(a,b,c,d){
return "bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width};
},b.prototype.getTitle=function(){
var a,b=this.$element,c=this.options;
return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title);
},b.prototype.tip=function(){
return this.$tip=this.$tip||a(this.options.template);
},b.prototype.arrow=function(){
return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow");
},b.prototype.validate=function(){
this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null);
},b.prototype.enable=function(){
this.enabled=!0;
},b.prototype.disable=function(){
this.enabled=!1;
},b.prototype.toggleEnabled=function(){
this.enabled=!this.enabled;
},b.prototype.toggle=function(b){
var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;
c.tip().hasClass("in")?c.leave(c):c.enter(c);
},b.prototype.destroy=function(){
clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type);
};
var c=a.fn.tooltip;
a.fn.tooltip=function(c){
return this.each(function(){
var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;
(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]());
});
},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){
return a.fn.tooltip=c,this;
};
}(jQuery),+function(a){
"use strict";
var b=function(a,b){
this.init("popover",a,b);
};
if(!a.fn.tooltip){
throw new Error("Popover requires tooltip.js");
}
b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:"<div class=\"popover\"><div class=\"arrow\"></div><h3 class=\"popover-title\"></h3><div class=\"popover-content\"></div></div>"}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){
return b.DEFAULTS;
},b.prototype.setContent=function(){
var a=this.tip(),b=this.getTitle(),c=this.getContent();
a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide();
},b.prototype.hasContent=function(){
return this.getTitle()||this.getContent();
},b.prototype.getContent=function(){
var a=this.$element,b=this.options;
return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content);
},b.prototype.arrow=function(){
return this.$arrow=this.$arrow||this.tip().find(".arrow");
},b.prototype.tip=function(){
return this.$tip||(this.$tip=a(this.options.template)),this.$tip;
};
var c=a.fn.popover;
a.fn.popover=function(c){
return this.each(function(){
var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;
(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]());
});
},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){
return a.fn.popover=c,this;
};
}(jQuery),+function(a){
"use strict";
function b(c,d){
var e,f=a.proxy(this.process,this);
this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process();
};
b.DEFAULTS={offset:10},b.prototype.refresh=function(){
var b=this.$element[0]==window?"offset":"position";
this.offsets=a([]),this.targets=a([]);
var c=this;
this.$body.find(this.selector).map(function(){
var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);
return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null;
}).sort(function(a,b){
return a[0]-b[0];
}).each(function(){
c.offsets.push(this[0]),c.targets.push(this[1]);
});
},b.prototype.process=function(){
var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;
if(b>=d){
return g!=(a=f.last()[0])&&this.activate(a);
}
if(g&&b<=e[0]){
return g!=(a=f[0])&&this.activate(a);
}
for(a=e.length;a--;){
g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a]);
}
},b.prototype.activate=function(b){
this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");
var c=this.selector+"[data-target=\""+b+"\"],"+this.selector+"[href=\""+b+"\"]",d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy");
};
var c=a.fn.scrollspy;
a.fn.scrollspy=function(c){
return this.each(function(){
var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;
e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]();
});
},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){
return a.fn.scrollspy=c,this;
},a(window).on("load",function(){
a("[data-spy=\"scroll\"]").each(function(){
var b=a(this);
b.scrollspy(b.data());
});
});
}(jQuery),+function(a){
"use strict";
var b=function(b){
this.element=a(b);
};
b.prototype.show=function(){
var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");
if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){
var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});
if(b.trigger(f),!f.isDefaultPrevented()){
var g=a(d);
this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){
b.trigger({type:"shown.bs.tab",relatedTarget:e});
});
}
}
},b.prototype.activate=function(b,c,d){
function e(){
f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d();
};
var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");
g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in");
};
var c=a.fn.tab;
a.fn.tab=function(c){
return this.each(function(){
var d=a(this),e=d.data("bs.tab");
e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]();
});
},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){
return a.fn.tab=c,this;
},a(document).on("click.bs.tab.data-api","[data-toggle=\"tab\"], [data-toggle=\"pill\"]",function(b){
b.preventDefault(),a(this).tab("show");
});
}(jQuery),+function(a){
"use strict";
var b=function(c,d){
this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition();
};
b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){
if(this.pinnedOffset){
return this.pinnedOffset;
}
this.$element.removeClass(b.RESET).addClass("affix");
var a=this.$window.scrollTop(),c=this.$element.offset();
return this.pinnedOffset=c.top-a;
},b.prototype.checkPositionWithEventLoop=function(){
setTimeout(a.proxy(this.checkPosition,this),1);
},b.prototype.checkPosition=function(){
if(this.$element.is(":visible")){
var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;
"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));
var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;
if(this.affixed!==i){
this.unpin&&this.$element.css("top","");
var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");
this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}));
}
}
};
var c=a.fn.affix;
a.fn.affix=function(c){
return this.each(function(){
var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;
e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]();
});
},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){
return a.fn.affix=c,this;
},a(window).on("load",function(){
a("[data-spy=\"affix\"]").each(function(){
var b=a(this),c=b.data();
c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c);
});
});
}(jQuery);
function ssc_init(){
if(!document.body){
return;
}
var e=document.body;
var t=document.documentElement;
var n=window.innerHeight;
var r=e.scrollHeight;
ssc_root=document.compatMode.indexOf("CSS")>=0?t:e;
ssc_activeElement=e;
ssc_initdone=true;
if(top!=self){
ssc_frame=true;
}else{
if(r>n&&(e.offsetHeight<=n||t.offsetHeight<=n)){
ssc_root.style.height="auto";
if(ssc_root.offsetHeight<=n){
var i=document.createElement("div");
i.style.clear="both";
e.appendChild(i);
}
}
}
if(!ssc_fixedback){
e.style.backgroundAttachment="scroll";
t.style.backgroundAttachment="scroll";
}
if(ssc_keyboardsupport){
ssc_addEvent("keydown",ssc_keydown);
}
};
function ssc_scrollArray(e,t,n,r){
r||(r=1000);
ssc_directionCheck(t,n);
ssc_que.push({x:t,y:n,lastX:t<0?0.99:-0.99,lastY:n<0?0.99:-0.99,start:+(new Date)});
if(ssc_pending){
return;
}
var i=function(){
var s=+(new Date);
var o=0;
var u=0;
for(var a=0;a<ssc_que.length;a++){
var f=ssc_que[a];
var l=s-f.start;
var c=l>=ssc_animtime;
var h=c?1:l/ssc_animtime;
if(ssc_pulseAlgorithm){
h=ssc_pulse(h);
}
var p=f.x*h-f.lastX>>0;
var d=f.y*h-f.lastY>>0;
o+=p;
u+=d;
f.lastX+=p;
f.lastY+=d;
if(c){
ssc_que.splice(a,1);
a--;
}
}
if(t){
var v=e.scrollLeft;
e.scrollLeft+=o;
if(o&&e.scrollLeft===v){
t=0;
}
}
if(n){
var m=e.scrollTop;
e.scrollTop+=u;
if(u&&e.scrollTop===m){
n=0;
}
}
if(!t&&!n){
ssc_que=[];
}
if(ssc_que.length){
setTimeout(i,r/ssc_framerate+1);
}else{
ssc_pending=false;
}
};
setTimeout(i,0);
ssc_pending=true;
};
function ssc_wheel(e){
if(!ssc_initdone){
ssc_init();
}
var t=e.target;
var n=ssc_overflowingAncestor(t);
if(!n||e.defaultPrevented||ssc_isNodeName(ssc_activeElement,"embed")||ssc_isNodeName(t,"embed")&&/\.pdf/i.test(t.src)){
return true;
}
var r=e.wheelDeltaX||0;
var i=e.wheelDeltaY||0;
if(!r&&!i){
i=e.wheelDelta||0;
}
if(Math.abs(r)>1.2){
r*=ssc_stepsize/120;
}
if(Math.abs(i)>1.2){
i*=ssc_stepsize/120;
}
ssc_scrollArray(n,-r,-i);
e.preventDefault();
};
function ssc_keydown(e){
var t=e.target;
var n=e.ctrlKey||e.altKey||e.metaKey;
if(/input|textarea|embed/i.test(t.nodeName)||t.isContentEditable||e.defaultPrevented||n){
return true;
}
if(ssc_isNodeName(t,"button")&&e.keyCode===ssc_key.spacebar){
return true;
}
var r,i=0,s=0;
var o=ssc_overflowingAncestor(ssc_activeElement);
var u=o.clientHeight;
if(o==document.body){
u=window.innerHeight;
}
switch(e.keyCode){
case ssc_key.up:
s=-ssc_arrowscroll;
break;
case ssc_key.down:
s=ssc_arrowscroll;
break;
case ssc_key.spacebar:
r=e.shiftKey?1:-1;
s=-r*u*0.9;
break;
case ssc_key.pageup:
s=-u*0.9;
break;
case ssc_key.pagedown:
s=u*0.9;
break;
case ssc_key.home:
s=-o.scrollTop;
break;
case ssc_key.end:
var a=o.scrollHeight-o.scrollTop-u;
s=a>0?a+10:0;
break;
case ssc_key.left:
i=-ssc_arrowscroll;
break;
case ssc_key.right:
i=ssc_arrowscroll;
break;
default:
return true;
}
ssc_scrollArray(o,i,s);
e.preventDefault();
};
function ssc_mousedown(e){
ssc_activeElement=e.target;
};
function ssc_setCache(e,t){
for(var n=e.length;n--;){
ssc_cache[ssc_uniqueID(e[n])]=t;
}
return t;
};
function ssc_overflowingAncestor(e){
var t=[];
var n=ssc_root.scrollHeight;
do{
var r=ssc_cache[ssc_uniqueID(e)];
if(r){
return ssc_setCache(t,r);
}
t.push(e);
if(n===e.scrollHeight){
if(!ssc_frame||ssc_root.clientHeight+10<n){
return ssc_setCache(t,document.body);
}
}else{
if(e.clientHeight+10<e.scrollHeight){
overflow=getComputedStyle(e,"").getPropertyValue("overflow");
if(overflow==="scroll"||overflow==="auto"){
return ssc_setCache(t,e);
}
}
}
}while(e=e.parentNode);
};
function ssc_addEvent(e,t,n){
window.addEventListener(e,t,n||false);
};
function ssc_removeEvent(e,t,n){
window.removeEventListener(e,t,n||false);
};
function ssc_isNodeName(e,t){
return e.nodeName.toLowerCase()===t.toLowerCase();
};
function ssc_directionCheck(e,t){
e=e>0?1:-1;
t=t>0?1:-1;
if(ssc_direction.x!==e||ssc_direction.y!==t){
ssc_direction.x=e;
ssc_direction.y=t;
ssc_que=[];
}
};
function ssc_pulse_(e){
var t,n,r;
e=e*ssc_pulseScale;
if(e<1){
t=e-(1-Math.exp(-e));
}else{
n=Math.exp(-1);
e-=1;
r=1-Math.exp(-e);
t=n+r*(1-n);
}
return t*ssc_pulseNormalize;
};
function ssc_pulse(e){
if(e>=1){
return 1;
}
if(e<=0){
return 0;
}
if(ssc_pulseNormalize==1){
ssc_pulseNormalize/=ssc_pulse_(1);
}
return ssc_pulse_(e);
};
var ssc_framerate=150;
var ssc_animtime=500;
var ssc_stepsize=150;
var ssc_pulseAlgorithm=true;
var ssc_pulseScale=6;
var ssc_pulseNormalize=1;
var ssc_keyboardsupport=true;
var ssc_arrowscroll=50;
var ssc_frame=false;
var ssc_direction={x:0,y:0};
var ssc_initdone=false;
var ssc_fixedback=true;
var ssc_root=document.documentElement;
var ssc_activeElement;
var ssc_key={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36};
var ssc_que=[];
var ssc_pending=false;
var ssc_cache={};
setInterval(function(){
ssc_cache={};
},10*1000);
var ssc_uniqueID=function(){
var e=0;
return function(t){
return t.ssc_uniqueID||(t.ssc_uniqueID=e++);
};
}();
var ischrome=/chrome/.test(navigator.userAgent.toLowerCase());
if(ischrome){
ssc_addEvent("mousedown",ssc_mousedown);
ssc_addEvent("mousewheel",ssc_wheel);
ssc_addEvent("load",ssc_init);
}
(function(a){
if(typeof define==="function"&&define.amd){
define(["jquery"],a);
}else{
a(jQuery);
}
}(function($){
var j=$.scrollTo=function(a,b,c){
return $(window).scrollTo(a,b,c);
};
j.defaults={axis:"xy",duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};
j.window=function(a){
return $(window)._scrollable();
};
$.fn._scrollable=function(){
return this.map(function(){
var a=this,_1=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])!=-1;
if(!_1){
return a;
}
var b=(a.contentWindow||a).document||a.ownerDocument||a;
return /webkit/i.test(navigator.userAgent)||b.compatMode=="BackCompat"?b.body:b.documentElement;
});
};
$.fn.scrollTo=function(f,g,h){
if(typeof g=="object"){
h=g;
g=0;
}
if(typeof h=="function"){
h={onAfter:h};
}
if(f=="max"){
f=9000000000;
}
h=$.extend({},j.defaults,h);
g=g||h.duration;
h.queue=h.queue&&h.axis.length>1;
if(h.queue){
g/=2;
}
h.offset=_2(h.offset);
h.over=_2(h.over);
return this._scrollable().each(function(){
if(f==null){
return;
}
var d=this,_3=$(d),_4=f,_5,_6={},_7=_3.is("html,body");
switch(typeof _4){
case "number":
case "string":
if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(_4)){
_4=_2(_4);
break;
}
_4=$(_4,this);
if(!_4.length){
return;
}
case "object":
if(_4.is||_4.style){
_5=(_4=$(_4)).offset();
}
}
var e=$.isFunction(h.offset)&&h.offset(d,_4)||h.offset;
$.each(h.axis.split(""),function(i,a){
var b=a=="x"?"Left":"Top",_8=b.toLowerCase(),_9="scroll"+b,_a=d[_9],_b=j.max(d,a);
if(_5){
_6[_9]=_5[_8]+(_7?0:_a-_3.offset()[_8]);
if(h.margin){
_6[_9]-=parseInt(_4.css("margin"+b))||0;
_6[_9]-=parseInt(_4.css("border"+b+"Width"))||0;
}
_6[_9]+=e[_8]||0;
if(h.over[_8]){
_6[_9]+=_4[a=="x"?"width":"height"]()*h.over[_8];
}
}else{
var c=_4[_8];
_6[_9]=c.slice&&c.slice(-1)=="%"?parseFloat(c)/100*_b:c;
}
if(h.limit&&/^\d+$/.test(_6[_9])){
_6[_9]=_6[_9]<=0?0:Math.min(_6[_9],_b);
}
if(!i&&h.queue){
if(_a!=_6[_9]){
_c(h.onAfterFirst);
}
delete _6[_9];
}
});
_c(h.onAfter);
function _c(a){
_3.animate(_6,g,h.easing,a&&function(){
a.call(this,_4,h);
});
};
}).end();
};
j.max=function(a,b){
var c=b=="x"?"Width":"Height",_d="scroll"+c;
if(!$(a).is("html,body")){
return a[_d]-$(a)[c.toLowerCase()]();
}
var d="client"+c,_e=a.ownerDocument.documentElement,_f=a.ownerDocument.body;
return Math.max(_e[_d],_f[_d])-Math.min(_e[d],_f[d]);
};
function _2(a){
return $.isFunction(a)||typeof a=="object"?a:{top:a,left:a};
};
return j;
}));
(function(a){
if(typeof define==="function"&&define.amd){
define(["jquery"],a);
}else{
a(jQuery);
}
}(function($){
var g=location.href.replace(/#.*/,"");
var h=$.localScroll=function(a){
$("body").localScroll(a);
};
h.defaults={duration:1000,axis:"y",event:"click",stop:true,target:window};
$.fn.localScroll=function(a){
a=$.extend({},h.defaults,a);
if(a.hash&&location.hash){
if(a.target){
window.scrollTo(0,0);
}
_10(0,location,a);
}
return a.lazy?this.on(a.event,"a,area",function(e){
if(_11.call(this)){
_10(e,this,a);
}
}):this.find("a,area").filter(_11).bind(a.event,function(e){
_10(e,this,a);
}).end().end();
function _11(){
return !!this.href&&!!this.hash&&this.href.replace(this.hash,"")==g&&(!a.filter||$(this).is(a.filter));
};
};
h.hash=function(){
};
function _10(e,a,b){
var c=a.hash.slice(1),_12=document.getElementById(c)||document.getElementsByName(c)[0];
if(!_12){
return;
}
if(e){
e.preventDefault();
}
var d=$(b.target);
if(b.lock&&d.is(":animated")||b.onBefore&&b.onBefore(e,_12,d)===false){
return;
}
if(b.stop){
d._scrollable().stop(true);
}
if(b.hash){
var f=_12.id===c?"id":"name",$a=$("<a> </a>").attr(f,c).css({position:"absolute",top:$(window).scrollTop(),left:$(window).scrollLeft()});
_12[f]="";
$("body").prepend($a);
location.hash=a.hash;
$a.remove();
_12[f]=c;
}
d.scrollTo(_12,b).trigger("notify.serialScroll",[_12]);
};
return h;
}));
eval(function(p,a,c,k,e,r){
e=function(c){
return (c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36));
};
if(!"".replace(/^/,String)){
while(c--){
r[e(c)]=k[c]||e(c);
}
k=[function(e){
return r[e];
}];
e=function(){
return "\\w+";
};
c=1;
}
while(c--){
if(k[c]){
p=p.replace(new RegExp("\\b"+e(c)+"\\b","g"),k[c]);
}
}
return p;
}("7(A 3c.3q!==\"9\"){3c.3q=9(e){9 t(){}t.5S=e;p 5R t}}(9(e,t,n){h r={1N:9(t,n){h r=c;r.$k=e(n);r.6=e.4M({},e.37.2B.6,r.$k.v(),t);r.2A=t;r.4L()},4L:9(){9 r(e){h n,r=\"\";7(A t.6.33===\"9\"){t.6.33.R(c,[e])}l{1A(n 38 e.d){7(e.d.5M(n)){r+=e.d[n].1K}}t.$k.2y(r)}t.3t()}h t=c,n;7(A t.6.2H===\"9\"){t.6.2H.R(c,[t.$k])}7(A t.6.2O===\"2Y\"){n=t.6.2O;e.5K(n,r)}l{t.3t()}},3t:9(){h e=c;e.$k.v(\"d-4I\",e.$k.2x(\"2w\")).v(\"d-4F\",e.$k.2x(\"H\"));e.$k.z({2u:0});e.2t=e.6.q;e.4E();e.5v=0;e.1X=14;e.23()},23:9(){h e=c;7(e.$k.25().N===0){p b}e.1M();e.4C();e.$S=e.$k.25();e.E=e.$S.N;e.4B();e.$G=e.$k.17(\".d-1K\");e.$K=e.$k.17(\".d-1p\");e.3u=\"U\";e.13=0;e.26=[0];e.m=0;e.4A();e.4z()},4z:9(){h e=c;e.2V();e.2W();e.4t();e.30();e.4r();e.4q();e.2p();e.4o();7(e.6.2o!==b){e.4n(e.6.2o)}7(e.6.O===j){e.6.O=4Q}e.19();e.$k.17(\".d-1p\").z(\"4i\",\"4h\");7(!e.$k.2m(\":3n\")){e.3o()}l{e.$k.z(\"2u\",1)}e.5O=b;e.2l();7(A e.6.3s===\"9\"){e.6.3s.R(c,[e.$k])}},2l:9(){h e=c;7(e.6.1Z===j){e.1Z()}7(e.6.1B===j){e.1B()}e.4g();7(A e.6.3w===\"9\"){e.6.3w.R(c,[e.$k])}},3x:9(){h e=c;7(A e.6.3B===\"9\"){e.6.3B.R(c,[e.$k])}e.3o();e.2V();e.2W();e.4f();e.30();e.2l();7(A e.6.3D===\"9\"){e.6.3D.R(c,[e.$k])}},3F:9(){h e=c;t.1c(9(){e.3x()},0)},3o:9(){h e=c;7(e.$k.2m(\":3n\")===b){e.$k.z({2u:0});t.18(e.1C);t.18(e.1X)}l{p b}e.1X=t.4d(9(){7(e.$k.2m(\":3n\")){e.3F();e.$k.4b({2u:1},2M);t.18(e.1X)}},5x)},4B:9(){h e=c;e.$S.5n('<L H=\"d-1p\">').4a('<L H=\"d-1K\"></L>');e.$k.17(\".d-1p\").4a('<L H=\"d-1p-49\">');e.1H=e.$k.17(\".d-1p-49\");e.$k.z(\"4i\",\"4h\")},1M:9(){h e=c,t=e.$k.1I(e.6.1M),n=e.$k.1I(e.6.2i);7(!t){e.$k.I(e.6.1M)}7(!n){e.$k.I(e.6.2i)}},2V:9(){h t=c,n,r;7(t.6.2Z===b){p b}7(t.6.48===j){t.6.q=t.2t=1;t.6.1h=b;t.6.1s=b;t.6.1O=b;t.6.22=b;t.6.1Q=b;t.6.1R=b;p b}n=e(t.6.47).1f();7(n>(t.6.1s[0]||t.2t)){t.6.q=t.2t}7(t.6.1h!==b){t.6.1h.5g(9(e,t){p e[0]-t[0]});1A(r=0;r<t.6.1h.N;r+=1){7(t.6.1h[r][0]<=n){t.6.q=t.6.1h[r][1]}}}l{7(n<=t.6.1s[0]&&t.6.1s!==b){t.6.q=t.6.1s[1]}7(n<=t.6.1O[0]&&t.6.1O!==b){t.6.q=t.6.1O[1]}7(n<=t.6.22[0]&&t.6.22!==b){t.6.q=t.6.22[1]}7(n<=t.6.1Q[0]&&t.6.1Q!==b){t.6.q=t.6.1Q[1]}7(n<=t.6.1R[0]&&t.6.1R!==b){t.6.q=t.6.1R[1]}}7(t.6.q>t.E&&t.6.46===j){t.6.q=t.E}},4r:9(){h n=c,r,i;7(n.6.2Z!==j){p b}i=e(t).1f();n.3d=9(){7(e(t).1f()!==i){7(n.6.O!==b){t.18(n.1C)}t.5d(r);r=t.1c(9(){i=e(t).1f();n.3x()},n.6.45)}};e(t).44(n.3d)},4f:9(){h e=c;e.2g(e.m);7(e.6.O!==b){e.3j()}},43:9(){h t=c,n=0,r=t.E-t.6.q;t.$G.2f(9(i){h s=e(c);s.z({1f:t.M}).v(\"d-1K\",3p(i));7(i%t.6.q===0||i===r){7(!(i>r)){n+=1}}s.v(\"d-24\",n)})},42:9(){h e=c,t=e.$G.N*e.M;e.$K.z({1f:t*2,T:0});e.43()},2W:9(){h e=c;e.40();e.42();e.3Z();e.3v()},40:9(){h e=c;e.M=1F.4O(e.$k.1f()/e.6.q)},3v:9(){h e=c,t=(e.E*e.M-e.6.q*e.M)*-1;7(e.6.q>e.E){e.D=0;t=0;e.3z=0}l{e.D=e.E-e.6.q;e.3z=t}p t},3Y:9(){p 0},3Z:9(){h t=c,n=0,r=0,i,s,o;t.J=[0];t.3E=[];1A(i=0;i<t.E;i+=1){r+=t.M;t.J.2D(-r);7(t.6.12===j){s=e(t.$G[i]);o=s.v(\"d-24\");7(o!==n){t.3E[n]=t.J[i];n=o}}}},4t:9(){h t=c;7(t.6.2a===j||t.6.1v===j){t.B=e('<L H=\"d-5A\"/>').5m(\"5l\",!t.F.15).5c(t.$k)}7(t.6.1v===j){t.3T()}7(t.6.2a===j){t.3S()}},3S:9(){h t=c,n=e('<L H=\"d-4U\"/>');t.B.1o(n);t.1u=e(\"<L/>\",{\"H\":\"d-1n\",2y:t.6.2U[0]||\"\"});t.1q=e(\"<L/>\",{\"H\":\"d-U\",2y:t.6.2U[1]||\"\"});n.1o(t.1u).1o(t.1q);n.w(\"2X.B 21.B\",'L[H^=\"d\"]',9(e){e.1l()});n.w(\"2n.B 28.B\",'L[H^=\"d\"]',9(n){n.1l();7(e(c).1I(\"d-U\")){t.U()}l{t.1n()}})},3T:9(){h t=c;t.1k=e('<L H=\"d-1v\"/>');t.B.1o(t.1k);t.1k.w(\"2n.B 28.B\",\".d-1j\",9(n){n.1l();7(3p(e(c).v(\"d-1j\"))!==t.m){t.1g(3p(e(c).v(\"d-1j\")),j)}})},3P:9(){h t=c,n,r,i,s,o,u;7(t.6.1v===b){p b}t.1k.2y(\"\");n=0;r=t.E-t.E%t.6.q;1A(s=0;s<t.E;s+=1){7(s%t.6.q===0){n+=1;7(r===s){i=t.E-t.6.q}o=e(\"<L/>\",{\"H\":\"d-1j\"});u=e(\"<3N></3N>\",{4R:t.6.39===j?n:\"\",\"H\":t.6.39===j?\"d-59\":\"\"});o.1o(u);o.v(\"d-1j\",r===s?i:s);o.v(\"d-24\",n);t.1k.1o(o)}}t.35()},35:9(){h t=c;7(t.6.1v===b){p b}t.1k.17(\".d-1j\").2f(9(){7(e(c).v(\"d-24\")===e(t.$G[t.m]).v(\"d-24\")){t.1k.17(\".d-1j\").Z(\"2d\");e(c).I(\"2d\")}})},3e:9(){h e=c;7(e.6.2a===b){p b}7(e.6.2e===b){7(e.m===0&&e.D===0){e.1u.I(\"1b\");e.1q.I(\"1b\")}l 7(e.m===0&&e.D!==0){e.1u.I(\"1b\");e.1q.Z(\"1b\")}l 7(e.m===e.D){e.1u.Z(\"1b\");e.1q.I(\"1b\")}l 7(e.m!==0&&e.m!==e.D){e.1u.Z(\"1b\");e.1q.Z(\"1b\")}}},30:9(){h e=c;e.3P();e.3e();7(e.B){7(e.6.q>=e.E){e.B.3K()}l{e.B.3J()}}},55:9(){h e=c;7(e.B){e.B.3k()}},U:9(e){h t=c;7(t.1E){p b}t.m+=t.6.12===j?t.6.q:1;7(t.m>t.D+(t.6.12===j?t.6.q-1:0)){7(t.6.2e===j){t.m=0;e=\"2k\"}l{t.m=t.D;p b}}t.1g(t.m,e)},1n:9(e){h t=c;7(t.1E){p b}7(t.6.12===j&&t.m>0&&t.m<t.6.q){t.m=0}l{t.m-=t.6.12===j?t.6.q:1}7(t.m<0){7(t.6.2e===j){t.m=t.D;e=\"2k\"}l{t.m=0;p b}}t.1g(t.m,e)},1g:9(e,n,r){h i=c,s;7(i.1E){p b}7(A i.6.1Y===\"9\"){i.6.1Y.R(c,[i.$k])}7(e>=i.D){e=i.D}l 7(e<=0){e=0}i.m=i.d.m=e;7(i.6.2o!==b&&r!==\"4e\"&&i.6.q===1&&i.F.1x===j){i.1t(0);7(i.F.1x===j){i.1L(i.J[e])}l{i.1r(i.J[e],1)}i.2r();i.4l();p b}s=i.J[e];7(i.F.1x===j){i.1T=b;7(n===j){i.1t(\"1w\");t.1c(9(){i.1T=j},i.6.1w)}l 7(n===\"2k\"){i.1t(i.6.2v);t.1c(9(){i.1T=j},i.6.2v)}l{i.1t(\"1m\");t.1c(9(){i.1T=j},i.6.1m)}i.1L(s)}l{7(n===j){i.1r(s,i.6.1w)}l 7(n===\"2k\"){i.1r(s,i.6.2v)}l{i.1r(s,i.6.1m)}}i.2r()},2g:9(e){h t=c;7(A t.6.1Y===\"9\"){t.6.1Y.R(c,[t.$k])}7(e>=t.D||e===-1){e=t.D}l 7(e<=0){e=0}t.1t(0);7(t.F.1x===j){t.1L(t.J[e])}l{t.1r(t.J[e],1)}t.m=t.d.m=e;t.2r()},2r:9(){h e=c;e.26.2D(e.m);e.13=e.d.13=e.26[e.26.N-2];e.26.5f(0);7(e.13!==e.m){e.35();e.3e();e.2l();7(e.6.O!==b){e.3j()}}7(A e.6.3y===\"9\"&&e.13!==e.m){e.6.3y.R(c,[e.$k])}},X:9(){h e=c;e.3A=\"X\";t.18(e.1C)},3j:9(){h e=c;7(e.3A!==\"X\"){e.19()}},19:9(){h e=c;e.3A=\"19\";7(e.6.O===b){p b}t.18(e.1C);e.1C=t.4d(9(){e.U(j)},e.6.O)},1t:9(e){h t=c;7(e===\"1m\"){t.$K.z(t.2z(t.6.1m))}l 7(e===\"1w\"){t.$K.z(t.2z(t.6.1w))}l 7(A e!==\"2Y\"){t.$K.z(t.2z(e))}},2z:9(e){p{\"-1G-1a\":\"2C \"+e+\"1z 2s\",\"-1W-1a\":\"2C \"+e+\"1z 2s\",\"-o-1a\":\"2C \"+e+\"1z 2s\",1a:\"2C \"+e+\"1z 2s\"}},3H:9(){p{\"-1G-1a\":\"\",\"-1W-1a\":\"\",\"-o-1a\":\"\",1a:\"\"}},3I:9(e){p{\"-1G-P\":\"1i(\"+e+\"V, C, C)\",\"-1W-P\":\"1i(\"+e+\"V, C, C)\",\"-o-P\":\"1i(\"+e+\"V, C, C)\",\"-1z-P\":\"1i(\"+e+\"V, C, C)\",P:\"1i(\"+e+\"V, C,C)\"}},1L:9(e){h t=c;t.$K.z(t.3I(e))},3L:9(e){h t=c;t.$K.z({T:e})},1r:9(e,t){h n=c;n.29=b;n.$K.X(j,j).4b({T:e},{54:t||n.6.1m,3M:9(){n.29=j}})},4E:9(){h e=c,r=\"1i(C, C, C)\",i=n.56(\"L\"),s,o,u,a;i.2w.3O=\"  -1W-P:\"+r+\"; -1z-P:\"+r+\"; -o-P:\"+r+\"; -1G-P:\"+r+\"; P:\"+r;s=/1i\\(C, C, C\\)/g;o=i.2w.3O.5i(s);u=o!==14&&o.N===1;a=\"5z\"38 t||t.5Q.4P;e.F={1x:u,15:a}},4q:9(){h e=c;7(e.6.27!==b||e.6.1U!==b){e.3Q();e.3R()}},4C:9(){h e=c,t=[\"s\",\"e\",\"x\"];e.16={};7(e.6.27===j&&e.6.1U===j){t=[\"2X.d 21.d\",\"2N.d 3U.d\",\"2n.d 3V.d 28.d\"]}l 7(e.6.27===b&&e.6.1U===j){t=[\"2X.d\",\"2N.d\",\"2n.d 3V.d\"]}l 7(e.6.27===j&&e.6.1U===b){t=[\"21.d\",\"3U.d\",\"28.d\"]}e.16.3W=t[0];e.16.2K=t[1];e.16.2J=t[2]},3R:9(){h t=c;t.$k.w(\"5y.d\",9(e){e.1l()});t.$k.w(\"21.3X\",9(t){p e(t.1d).2m(\"5C, 5E, 5F, 5N\")})},3Q:9(){9 s(e){7(e.2b!==W){p{x:e.2b[0].2c,y:e.2b[0].41}}7(e.2b===W){7(e.2c!==W){p{x:e.2c,y:e.41}}7(e.2c===W){p{x:e.52,y:e.53}}}}9 o(t){7(t===\"w\"){e(n).w(r.16.2K,a);e(n).w(r.16.2J,f)}l 7(t===\"Q\"){e(n).Q(r.16.2K);e(n).Q(r.16.2J)}}9 u(n){h u=n.3h||n||t.3g,a;7(u.5a===3){p b}7(r.E<=r.6.q){p}7(r.29===b&&!r.6.3f){p b}7(r.1T===b&&!r.6.3f){p b}7(r.6.O!==b){t.18(r.1C)}7(r.F.15!==j&&!r.$K.1I(\"3b\")){r.$K.I(\"3b\")}r.11=0;r.Y=0;e(c).z(r.3H());a=e(c).2h();i.2S=a.T;i.2R=s(u).x-a.T;i.2P=s(u).y-a.5o;o(\"w\");i.2j=b;i.2L=u.1d||u.4c}9 a(o){h u=o.3h||o||t.3g,a,f;r.11=s(u).x-i.2R;r.2I=s(u).y-i.2P;r.Y=r.11-i.2S;7(A r.6.2E===\"9\"&&i.3C!==j&&r.Y!==0){i.3C=j;r.6.2E.R(r,[r.$k])}7((r.Y>8||r.Y<-8)&&r.F.15===j){7(u.1l!==W){u.1l()}l{u.5L=b}i.2j=j}7((r.2I>10||r.2I<-10)&&i.2j===b){e(n).Q(\"2N.d\")}a=9(){p r.Y/5};f=9(){p r.3z+r.Y/5};r.11=1F.3v(1F.3Y(r.11,a()),f());7(r.F.1x===j){r.1L(r.11)}l{r.3L(r.11)}}9 f(n){h s=n.3h||n||t.3g,u,a,f;s.1d=s.1d||s.4c;i.3C=b;7(r.F.15!==j){r.$K.Z(\"3b\")}7(r.Y<0){r.1y=r.d.1y=\"T\"}l{r.1y=r.d.1y=\"3i\"}7(r.Y!==0){u=r.4j();r.1g(u,b,\"4e\");7(i.2L===s.1d&&r.F.15!==j){e(s.1d).w(\"3a.4k\",9(t){t.4S();t.4T();t.1l();e(t.1d).Q(\"3a.4k\")});a=e.4N(s.1d,\"4V\").3a;f=a.4W();a.4X(0,0,f)}}o(\"Q\")}h r=c,i={2R:0,2P:0,4Y:0,2S:0,2h:14,4Z:14,50:14,2j:14,51:14,2L:14};r.29=j;r.$k.w(r.16.3W,\".d-1p\",u)},4j:9(){h e=c,t=e.4m();7(t>e.D){e.m=e.D;t=e.D}l 7(e.11>=0){t=0;e.m=0}p t},4m:9(){h t=c,n=t.6.12===j?t.3E:t.J,r=t.11,i=14;e.2f(n,9(s,o){7(r-t.M/20>n[s+1]&&r-t.M/20<o&&t.34()===\"T\"){i=o;7(t.6.12===j){t.m=e.4p(i,t.J)}l{t.m=s}}l 7(r+t.M/20<o&&r+t.M/20>(n[s+1]||n[s]-t.M)&&t.34()===\"3i\"){7(t.6.12===j){i=n[s+1]||n[n.N-1];t.m=e.4p(i,t.J)}l{i=n[s+1];t.m=s+1}}});p t.m},34:9(){h e=c,t;7(e.Y<0){t=\"3i\";e.3u=\"U\"}l{t=\"T\";e.3u=\"1n\"}p t},4A:9(){h e=c;e.$k.w(\"d.U\",9(){e.U()});e.$k.w(\"d.1n\",9(){e.1n()});e.$k.w(\"d.19\",9(t,n){e.6.O=n;e.19();e.32=\"19\"});e.$k.w(\"d.X\",9(){e.X();e.32=\"X\"});e.$k.w(\"d.1g\",9(t,n){e.1g(n)});e.$k.w(\"d.2g\",9(t,n){e.2g(n)})},2p:9(){h e=c;7(e.6.2p===j&&e.F.15!==j&&e.6.O!==b){e.$k.w(\"57\",9(){e.X()});e.$k.w(\"58\",9(){7(e.32!==\"X\"){e.19()}})}},1Z:9(){h t=c,n,r,i,s,o;7(t.6.1Z===b){p b}1A(n=0;n<t.E;n+=1){r=e(t.$G[n]);7(r.v(\"d-1e\")===\"1e\"){4s}i=r.v(\"d-1K\");s=r.17(\".5b\");7(A s.v(\"1J\")!==\"2Y\"){r.v(\"d-1e\",\"1e\");4s}7(r.v(\"d-1e\")===W){s.3K();r.I(\"4u\").v(\"d-1e\",\"5e\")}7(t.6.4v===j){o=i>=t.m}l{o=j}7(o&&i<t.m+t.6.q&&s.N){t.4w(r,s)}}},4w:9(e,n){9 o(){e.v(\"d-1e\",\"1e\").Z(\"4u\");n.5h(\"v-1J\");7(r.6.4x===\"4y\"){n.5j(5k)}l{n.3J()}7(A r.6.2T===\"9\"){r.6.2T.R(c,[r.$k])}}9 u(){i+=1;7(r.2Q(n.3l(0))||s===j){o()}l 7(i<=2q){t.1c(u,2q)}l{o()}}h r=c,i=0,s;7(n.5p(\"5q\")===\"5r\"){n.z(\"5s-5t\",\"5u(\"+n.v(\"1J\")+\")\");s=j}l{n[0].1J=n.v(\"1J\")}u()},1B:9(){9 s(){h r=e(n.$G[n.m]).2G();n.1H.z(\"2G\",r+\"V\");7(!n.1H.1I(\"1B\")){t.1c(9(){n.1H.I(\"1B\")},0)}}9 o(){i+=1;7(n.2Q(r.3l(0))){s()}l 7(i<=2q){t.1c(o,2q)}l{n.1H.z(\"2G\",\"\")}}h n=c,r=e(n.$G[n.m]).17(\"5w\"),i;7(r.3l(0)!==W){i=0;o()}l{s()}},2Q:9(e){h t;7(!e.3M){p b}t=A e.4D;7(t!==\"W\"&&e.4D===0){p b}p j},4g:9(){h t=c,n;7(t.6.2F===j){t.$G.Z(\"2d\")}t.1D=[];1A(n=t.m;n<t.m+t.6.q;n+=1){t.1D.2D(n);7(t.6.2F===j){e(t.$G[n]).I(\"2d\")}}t.d.1D=t.1D},4n:9(e){h t=c;t.4G=\"d-\"+e+\"-5B\";t.4H=\"d-\"+e+\"-38\"},4l:9(){9 a(e){p{2h:\"5D\",T:e+\"V\"}}h e=c,t=e.4G,n=e.4H,r=e.$G.1S(e.m),i=e.$G.1S(e.13),s=1F.4J(e.J[e.m])+e.J[e.13],o=1F.4J(e.J[e.m])+e.M/2,u=\"5G 5H 5I 5J\";e.1E=j;e.$K.I(\"d-1P\").z({\"-1G-P-1P\":o+\"V\",\"-1W-4K-1P\":o+\"V\",\"4K-1P\":o+\"V\"});i.z(a(s,10)).I(t).w(u,9(){e.3m=j;i.Q(u);e.31(i,t)});r.I(n).w(u,9(){e.36=j;r.Q(u);e.31(r,n)})},31:9(e,t){h n=c;e.z({2h:\"\",T:\"\"}).Z(t);7(n.3m&&n.36){n.$K.Z(\"d-1P\");n.3m=b;n.36=b;n.1E=b}},4o:9(){h e=c;e.d={2A:e.2A,5P:e.$k,S:e.$S,G:e.$G,m:e.m,13:e.13,1D:e.1D,15:e.F.15,F:e.F,1y:e.1y}},3G:9(){h r=c;r.$k.Q(\".d d 21.3X\");e(n).Q(\".d d\");e(t).Q(\"44\",r.3d)},1V:9(){h e=c;7(e.$k.25().N!==0){e.$K.3r();e.$S.3r().3r();7(e.B){e.B.3k()}}e.3G();e.$k.2x(\"2w\",e.$k.v(\"d-4I\")||\"\").2x(\"H\",e.$k.v(\"d-4F\"))},5T:9(){h e=c;e.X();t.18(e.1X);e.1V();e.$k.5U()},5V:9(t){h n=c,r=e.4M({},n.2A,t);n.1V();n.1N(r,n.$k)},5W:9(e,t){h n=c,r;7(!e){p b}7(n.$k.25().N===0){n.$k.1o(e);n.23();p b}n.1V();7(t===W||t===-1){r=-1}l{r=t}7(r>=n.$S.N||r===-1){n.$S.1S(-1).5X(e)}l{n.$S.1S(r).5Y(e)}n.23()},5Z:9(e){h t=c,n;7(t.$k.25().N===0){p b}7(e===W||e===-1){n=-1}l{n=e}t.1V();t.$S.1S(n).3k();t.23()}};e.37.2B=9(t){p c.2f(9(){7(e(c).v(\"d-1N\")===j){p b}e(c).v(\"d-1N\",j);h n=3c.3q(r);n.1N(t,c);e.v(c,\"2B\",n)})};e.37.2B.6={q:5,1h:b,1s:[60,4],1O:[61,3],22:[62,2],1Q:b,1R:[63,1],48:b,46:b,1m:2M,1w:64,2v:65,O:b,2p:b,2a:b,2U:[\"1n\",\"U\"],2e:j,12:b,1v:j,39:b,2Z:j,45:2M,47:t,1M:\"d-66\",2i:\"d-2i\",1Z:b,4v:j,4x:\"4y\",1B:b,2O:b,33:b,3f:j,27:j,1U:j,2F:b,2o:b,3B:b,3D:b,2H:b,3s:b,1Y:b,3y:b,3w:b,2E:b,2T:b}})(67,68,69)",62,382,"||||||options|if||function||false|this|owl||||var||true|elem|else|currentItem|||return|items|||||data|on|||css|typeof|owlControls|0px|maximumItem|itemsAmount|browser|owlItems|class|addClass|positionsInArray|owlWrapper|div|itemWidth|length|autoPlay|transform|off|apply|userItems|left|next|px|undefined|stop|newRelativeX|removeClass||newPosX|scrollPerPage|prevItem|null|isTouch|ev_types|find|clearInterval|play|transition|disabled|setTimeout|target|loaded|width|goTo|itemsCustom|translate3d|page|paginationWrapper|preventDefault|slideSpeed|prev|append|wrapper|buttonNext|css2slide|itemsDesktop|swapSpeed|buttonPrev|pagination|paginationSpeed|support3d|dragDirection|ms|for|autoHeight|autoPlayInterval|visibleItems|isTransition|Math|webkit|wrapperOuter|hasClass|src|item|transition3d|baseClass|init|itemsDesktopSmall|origin|itemsTabletSmall|itemsMobile|eq|isCss3Finish|touchDrag|unWrap|moz|checkVisible|beforeMove|lazyLoad||mousedown|itemsTablet|setVars|roundPages|children|prevArr|mouseDrag|mouseup|isCssFinish|navigation|touches|pageX|active|rewindNav|each|jumpTo|position|theme|sliding|rewind|eachMoveUpdate|is|touchend|transitionStyle|stopOnHover|100|afterGo|ease|orignalItems|opacity|rewindSpeed|style|attr|html|addCssSpeed|userOptions|owlCarousel|all|push|startDragging|addClassActive|height|beforeInit|newPosY|end|move|targetElement|200|touchmove|jsonPath|offsetY|completeImg|offsetX|relativePos|afterLazyLoad|navigationText|updateItems|calculateAll|touchstart|string|responsive|updateControls|clearTransStyle|hoverStatus|jsonSuccess|moveDirection|checkPagination|endCurrent|fn|in|paginationNumbers|click|grabbing|Object|resizer|checkNavigation|dragBeforeAnimFinish|event|originalEvent|right|checkAp|remove|get|endPrev|visible|watchVisibility|Number|create|unwrap|afterInit|logIn|playDirection|max|afterAction|updateVars|afterMove|maximumPixels|apStatus|beforeUpdate|dragging|afterUpdate|pagesInArray|reload|clearEvents|removeTransition|doTranslate|show|hide|css2move|complete|span|cssText|updatePagination|gestures|disabledEvents|buildButtons|buildPagination|mousemove|touchcancel|start|disableTextSelect|min|loops|calculateWidth|pageY|appendWrapperSizes|appendItemsSizes|resize|responsiveRefreshRate|itemsScaleUp|responsiveBaseWidth|singleItem|outer|wrap|animate|srcElement|setInterval|drag|updatePosition|onVisibleItems|block|display|getNewPosition|disable|singleItemTransition|closestItem|transitionTypes|owlStatus|inArray|moveEvents|response|continue|buildControls|loading|lazyFollow|lazyPreload|lazyEffect|fade|onStartup|customEvents|wrapItems|eventTypes|naturalWidth|checkBrowser|originalClasses|outClass|inClass|originalStyles|abs|perspective|loadContent|extend|_data|round|msMaxTouchPoints|5e3|text|stopImmediatePropagation|stopPropagation|buttons|events|pop|splice|baseElWidth|minSwipe|maxSwipe|dargging|clientX|clientY|duration|destroyControls|createElement|mouseover|mouseout|numbers|which|lazyOwl|appendTo|clearTimeout|checked|shift|sort|removeAttr|match|fadeIn|400|clickable|toggleClass|wrapAll|top|prop|tagName|DIV|background|image|url|wrapperWidth|img|500|dragstart|ontouchstart|controls|out|input|relative|textarea|select|webkitAnimationEnd|oAnimationEnd|MSAnimationEnd|animationend|getJSON|returnValue|hasOwnProperty|option|onstartup|baseElement|navigator|new|prototype|destroy|removeData|reinit|addItem|after|before|removeItem|1199|979|768|479|800|1e3|carousel|jQuery|window|document".split("|"),0,{}));
(function(e,t,n,r){
function o(t,n){
this.el=t;
this.$el=e(this.el);
this.options=e.extend({},s,n);
this._defaults=s;
this._name=i;
this.init();
};
var i="nivoLightbox",s={effect:"fade",theme:"default",keyboardNav:true,onInit:function(){
},beforeShowLightbox:function(){
},afterShowLightbox:function(e){
},beforeHideLightbox:function(){
},afterHideLightbox:function(){
},onPrev:function(e){
},onNext:function(e){
},errorMessage:"The requested content cannot be loaded. Please try again later."};
o.prototype={init:function(){
var t=this;
this.$el.on("click",function(e){
e.preventDefault();
t.showLightbox();
});
if(this.options.keyboardNav){
e("body").off("keyup").on("keyup",function(n){
var r=n.keyCode?n.keyCode:n.which;
if(r==27){
t.destructLightbox();
}
if(r==37){
e(".nivo-lightbox-prev").trigger("click");
}
if(r==39){
e(".nivo-lightbox-next").trigger("click");
}
});
}
this.options.onInit.call(this);
},showLightbox:function(){
var t=this;
this.options.beforeShowLightbox.call(this);
var n=this.constructLightbox();
if(!n){
return;
}
var r=n.find(".nivo-lightbox-content");
if(!r){
return;
}
var i=this.$el;
e("body").addClass("nivo-lightbox-body-effect-"+this.options.effect);
this.processContent(r,i);
if(this.$el.attr("data-lightbox-gallery")){
var t=this,s=e("[data-lightbox-gallery=\""+this.$el.attr("data-lightbox-gallery")+"\"]");
e(".nivo-lightbox-nav").show();
e(".nivo-lightbox-prev").off("click").on("click",function(n){
n.preventDefault();
var o=s.index(i);
i=s.eq(o-1);
if(!e(i).length){
i=s.last();
}
t.processContent(r,i);
t.options.onPrev.call(this,[i]);
});
e(".nivo-lightbox-next").off("click").on("click",function(n){
n.preventDefault();
var o=s.index(i);
i=s.eq(o+1);
if(!e(i).length){
i=s.first();
}
t.processContent(r,i);
t.options.onNext.call(this,[i]);
});
}
setTimeout(function(){
n.addClass("nivo-lightbox-open");
t.options.afterShowLightbox.call(this,[n]);
},1);
},processContent:function(n,r){
var i=this;
var s=r.attr("href");
n.html("").addClass("nivo-lightbox-loading");
if(this.isHidpi()&&r.attr("data-lightbox-hidpi")){
s=r.attr("data-lightbox-hidpi");
}
if(s.match(/\.(jpeg|jpg|gif|png)$/)!=null){
var o=e("<img>",{src:s});
o.one("load",function(){
var r=e("<div class=\"nivo-lightbox-image\" />");
r.append(o);
n.html(r).removeClass("nivo-lightbox-loading");
r.css({"line-height":e(".nivo-lightbox-content").height()+"px",height:e(".nivo-lightbox-content").height()+"px"});
e(t).resize(function(){
r.css({"line-height":e(".nivo-lightbox-content").height()+"px",height:e(".nivo-lightbox-content").height()+"px"});
});
}).each(function(){
if(this.complete){
e(this).load();
}
});
o.error(function(){
var t=e("<div class=\"nivo-lightbox-error\"><p>"+i.options.errorMessage+"</p></div>");
n.html(t).removeClass("nivo-lightbox-loading");
});
}else{
if(video=s.match(/(youtube|youtu|vimeo)\.(com|be)\/(watch\?v=(\w+)|(\w+))/)){
var u="",a="nivo-lightbox-video";
if(video[1]=="youtube"){
u="http://www.youtube.com/v/"+video[4];
a="nivo-lightbox-youtube";
}
if(video[1]=="youtu"){
u="http://www.youtube.com/v/"+video[3];
a="nivo-lightbox-youtube";
}
if(video[1]=="vimeo"){
u="http://player.vimeo.com/video/"+video[3];
a="nivo-lightbox-vimeo";
}
if(u){
var f=e("<iframe>",{src:u,"class":a,frameborder:0,vspace:0,hspace:0,scrolling:"auto"});
n.html(f);
f.load(function(){
n.removeClass("nivo-lightbox-loading");
});
}
}else{
if(r.attr("data-lightbox-type")=="ajax"){
var i=this;
e.ajax({url:s,cache:false,success:function(r){
var i=e("<div class=\"nivo-lightbox-ajax\" />");
i.append(r);
n.html(i).removeClass("nivo-lightbox-loading");
if(i.outerHeight()<n.height()){
i.css({position:"relative",top:"50%","margin-top":-(i.outerHeight()/2)+"px"});
}
e(t).resize(function(){
if(i.outerHeight()<n.height()){
i.css({position:"relative",top:"50%","margin-top":-(i.outerHeight()/2)+"px"});
}
});
},error:function(){
var t=e("<div class=\"nivo-lightbox-error\"><p>"+i.options.errorMessage+"</p></div>");
n.html(t).removeClass("nivo-lightbox-loading");
}});
}else{
if(s.substring(0,1)=="#"){
if(e(s).length){
var l=e("<div class=\"nivo-lightbox-inline\" />");
l.append(e(s).clone().show());
n.html(l).removeClass("nivo-lightbox-loading");
if(l.outerHeight()<n.height()){
l.css({position:"relative",top:"50%","margin-top":-(l.outerHeight()/2)+"px"});
}
e(t).resize(function(){
if(l.outerHeight()<n.height()){
l.css({position:"relative",top:"50%","margin-top":-(l.outerHeight()/2)+"px"});
}
});
}else{
var l=e("<div class=\"nivo-lightbox-error\"><p>"+i.options.errorMessage+"</p></div>");
n.html(l).removeClass("nivo-lightbox-loading");
}
}else{
var f=e("<iframe>",{src:s,"class":"nivo-lightbox-item",frameborder:0,vspace:0,hspace:0,scrolling:"auto"});
n.html(f);
f.load(function(){
n.removeClass("nivo-lightbox-loading");
});
}
}
}
}
if(r.attr("title")){
var c=e("<span>",{"class":"nivo-lightbox-title"});
c.text(r.attr("title"));
e(".nivo-lightbox-title-wrap").html(c);
}else{
e(".nivo-lightbox-title-wrap").html("");
}
},constructLightbox:function(){
if(e(".nivo-lightbox-overlay").length){
return e(".nivo-lightbox-overlay");
}
var t=e("<div>",{"class":"nivo-lightbox-overlay nivo-lightbox-theme-"+this.options.theme+" nivo-lightbox-effect-"+this.options.effect});
var n=e("<div>",{"class":"nivo-lightbox-wrap"});
var r=e("<div>",{"class":"nivo-lightbox-content"});
var i=e("<a href=\"#\" class=\"nivo-lightbox-nav nivo-lightbox-prev\">Previous</a><a href=\"#\" class=\"nivo-lightbox-nav nivo-lightbox-next\">Next</a>");
var s=e("<a href=\"#\" class=\"nivo-lightbox-close\" title=\"Close\">Close</a>");
var o=e("<div>",{"class":"nivo-lightbox-title-wrap"});
var u=0;
if(u){
t.addClass("nivo-lightbox-ie");
}
n.append(r);
n.append(o);
t.append(n);
t.append(i);
t.append(s);
e("body").append(t);
var a=this;
t.on("click",function(t){
if(t.target===this||e(t.target).hasClass("nivo-lightbox-content")||e(t.target).hasClass("nivo-lightbox-image")){
a.destructLightbox();
}
});
s.on("click",function(e){
e.preventDefault();
a.destructLightbox();
});
return t;
},destructLightbox:function(){
var t=this;
this.options.beforeHideLightbox.call(this);
e(".nivo-lightbox-overlay").removeClass("nivo-lightbox-open");
e(".nivo-lightbox-nav").hide();
e("body").removeClass("nivo-lightbox-body-effect-"+t.options.effect);
var n=0;
if(n){
e(".nivo-lightbox-overlay iframe").attr("src"," ");
e(".nivo-lightbox-overlay iframe").remove();
}
e(".nivo-lightbox-prev").off("click");
e(".nivo-lightbox-next").off("click");
this.options.afterHideLightbox.call(this);
},isHidpi:function(){
var e="(-webkit-min-device-pixel-ratio: 1.5),\t\t\t\t\t\t\t  (min--moz-device-pixel-ratio: 1.5),\t\t\t\t\t\t\t  (-o-min-device-pixel-ratio: 3/2),\t\t\t\t\t\t\t  (min-resolution: 1.5dppx)";
if(t.devicePixelRatio>1){
return true;
}
if(t.matchMedia&&t.matchMedia(e).matches){
return true;
}
return false;
}};
e.fn[i]=function(t){
return this.each(function(){
if(!e.data(this,i)){
e.data(this,i,new o(this,t));
}
});
};
})(jQuery,window,document);
(function($){
"use strict";
function _13(){
var _14=this;
_14.defaults={hideMode:"fadeToggle",defaultSearchMode:"parent",defaultTarget:".content",throwOnMissingTarget:true,keepStateInCookie:false,cookieName:"simple-expand"};
_14.settings={};
$.extend(_14.settings,_14.defaults);
_14.findLevelOneDeep=function(_15,_16,_17){
return _15.find(_16).filter(function(){
return !$(this).parentsUntil(_15,_17).length;
});
};
_14.setInitialState=function(_18,_19){
var _1a=_14.readState(_18);
if(_1a){
_18.removeClass("collapsed").addClass("expanded");
_14.show(_19);
}else{
_18.removeClass("expanded").addClass("collapsed");
_14.hide(_19);
}
};
_14.hide=function(_1b){
if(_14.settings.hideMode==="fadeToggle"){
_1b.hide();
}else{
if(_14.settings.hideMode==="basic"){
_1b.hide();
}
}
};
_14.show=function(_1c){
if(_14.settings.hideMode==="fadeToggle"){
_1c.show();
}else{
if(_14.settings.hideMode==="basic"){
_1c.show();
}
}
};
_14.checkKeepStateInCookiePreconditions=function(){
if(_14.settings.keepStateInCookie&&$.cookie===undefined){
throw new Error("simple-expand: keepStateInCookie option requires $.cookie to be defined.");
}
};
_14.readCookie=function(){
var _1d=$.cookie(_14.settings.cookieName);
if(_1d===null||_1d===""){
return {};
}else{
return JSON.parse(_1d);
}
};
_14.readState=function(_1e){
if(!_14.settings.keepStateInCookie){
return _1e.hasClass("expanded");
}
var id=_1e.attr("Id");
if(id===undefined){
return;
}
var _1f=_14.readCookie();
var _20=_1f[id];
if(typeof _20!=="undefined"){
return _1f[id]===true;
}else{
return _1e.hasClass("expanded");
}
};
_14.saveState=function(_21,_22){
if(!_14.settings.keepStateInCookie){
return;
}
var id=_21.attr("Id");
if(id===undefined){
return;
}
var _23=_14.readCookie();
_23[id]=_22;
$.cookie(_14.settings.cookieName,JSON.stringify(_23),{raw:true,path:window.location.pathname});
};
_14.toggle=function(_24,_25){
var _26=_14.toggleCss(_24);
if(_14.settings.hideMode==="fadeToggle"){
_25.fadeToggle(150);
}else{
if(_14.settings.hideMode==="basic"){
_25.toggle();
}else{
if($.isFunction(_14.settings.hideMode)){
_14.settings.hideMode(_24,_25,_26);
}
}
}
_14.saveState(_24,_26);
return false;
};
_14.toggleCss=function(_27){
if(_27.hasClass("expanded")){
_27.toggleClass("collapsed expanded");
return false;
}else{
_27.toggleClass("expanded collapsed");
return true;
}
};
_14.findTargets=function(_28,_29,_2a){
var _2b=[];
if(_29==="absolute"){
_2b=$(_2a);
}else{
if(_29==="relative"){
_2b=_14.findLevelOneDeep(_28,_2a,_2a);
}else{
if(_29==="parent"){
var _2c=_28.parent();
do{
_2b=_14.findLevelOneDeep(_2c,_2a,_2a);
if(_2b.length===0){
_2c=_2c.parent();
}
}while(_2b.length===0&&_2c.length!==0);
}
}
}
return _2b;
};
_14.activate=function(_2d,_2e){
$.extend(_14.settings,_2e);
_14.checkKeepStateInCookiePreconditions();
_2d.each(function(){
var _2f=$(this);
var _30=_2f.attr("data-expander-target")||_14.settings.defaultTarget;
var _31=_2f.attr("data-expander-target-search")||_14.settings.defaultSearchMode;
var _32=_14.findTargets(_2f,_31,_30);
if(_32.length===0){
if(_14.settings.throwOnMissingTarget){
throw "simple-expand: Targets not found";
}
return this;
}
_14.setInitialState(_2f,_32);
_2f.click(function(){
return _14.toggle(_2f,_32);
});
});
};
};
window.SimpleExpand=_13;
$.fn.simpleexpand=function(_33){
var _34=new _13;
_34.activate(this,_33);
return this;
};
})(jQuery);
(function(){
var a,b,c,d,e,f=function(a,b){
return function(){
return a.apply(b,arguments);
};
},g=[].indexOf||function(a){
for(var b=0,c=this.length;c>b;b++){
if(b in this&&this[b]===a){
return b;
}
}
return -1;
};
b=function(){
function a(){
};
return a.prototype.extend=function(a,b){
var c,d;
for(c in b){
d=b[c],null==a[c]&&(a[c]=d);
}
return a;
},a.prototype.isMobile=function(a){
return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a);
},a.prototype.addEvent=function(a,b,c){
return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c;
},a.prototype.removeEvent=function(a,b,c){
return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b];
},a.prototype.innerHeight=function(){
return "innerHeight" in window?window.innerHeight:document.documentElement.clientHeight;
},a;
}(),c=this.WeakMap||this.MozWeakMap||(c=function(){
function a(){
this.keys=[],this.values=[];
};
return a.prototype.get=function(a){
var b,c,d,e,f;
for(f=this.keys,b=d=0,e=f.length;e>d;b=++d){
if(c=f[b],c===a){
return this.values[b];
}
}
},a.prototype.set=function(a,b){
var c,d,e,f,g;
for(g=this.keys,c=e=0,f=g.length;f>e;c=++e){
if(d=g[c],d===a){
return void (this.values[c]=b);
}
}
return this.keys.push(a),this.values.push(b);
},a;
}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){
function a(){
"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.");
};
return a.notSupported=!0,a.prototype.observe=function(){
},a;
}()),d=this.getComputedStyle||function(a){
return this.getPropertyValue=function(b){
var c;
return "float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){
return b.toUpperCase();
}),(null!=(c=a.currentStyle)?c[b]:void 0)||null;
},this;
},e=/(\-([a-z]){1})/g,this.WOW=function(){
function e(a){
null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c;
};
return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0},e.prototype.init=function(){
var a;
return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[];
},e.prototype.start=function(){
var b,c,d,e;
if(this.stopped=!1,this.boxes=function(){
var a,c,d,e;
for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++){
b=d[a],e.push(b);
}
return e;
}.call(this),this.all=function(){
var a,c,d,e;
for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++){
b=d[a],e.push(b);
}
return e;
}.call(this),this.boxes.length){
if(this.disabled()){
this.resetStyle();
}else{
for(e=this.boxes,c=0,d=e.length;d>c;c++){
b=e[c],this.applyStyle(b,!0);
}
this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50);
}
}
return this.config.live?new a(function(a){
return function(b){
var c,d,e,f,g;
for(g=[],e=0,f=b.length;f>e;e++){
d=b[e],g.push(function(){
var a,b,e,f;
for(e=d.addedNodes||[],f=[],a=0,b=e.length;b>a;a++){
c=e[a],f.push(this.doSync(c));
}
return f;
}.call(a));
}
return g;
};
}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0;
},e.prototype.stop=function(){
return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0;
},e.prototype.sync=function(){
return a.notSupported?this.doSync(this.element):void 0;
},e.prototype.doSync=function(a){
var b,c,d,e,f;
if(null==a&&(a=this.element),1===a.nodeType){
for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++){
b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);
}
return f;
}
},e.prototype.show=function(a){
return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass;
},e.prototype.applyStyle=function(a,b){
var c,d,e;
return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){
return function(){
return f.customStyle(a,b,d,c,e);
};
}(this));
},e.prototype.animate=function(){
return "requestAnimationFrame" in window?function(a){
return window.requestAnimationFrame(a);
}:function(a){
return a();
};
}(),e.prototype.resetStyle=function(){
var a,b,c,d,e;
for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++){
a=d[b],e.push(a.style.visibility="visible");
}
return e;
},e.prototype.customStyle=function(a,b,c,d,e){
return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a;
},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){
var c,d,e,f;
f=[];
for(c in b){
d=b[c],a[""+c]=d,f.push(function(){
var b,f,g,h;
for(g=this.vendors,h=[],b=0,f=g.length;f>b;b++){
e=g[b],h.push(a[""+e+c.charAt(0).toUpperCase()+c.substr(1)]=d);
}
return h;
}.call(this));
}
return f;
},e.prototype.vendorCSS=function(a,b){
var c,e,f,g,h,i;
for(e=d(a),c=e.getPropertyCSSValue(b),i=this.vendors,g=0,h=i.length;h>g;g++){
f=i[g],c=c||e.getPropertyCSSValue("-"+f+"-"+b);
}
return c;
},e.prototype.animationName=function(a){
var b;
try{
b=this.vendorCSS(a,"animation-name").cssText;
}
catch(c){
b=d(a).getPropertyValue("animation-name");
}
return "none"===b?"":b;
},e.prototype.cacheAnimationName=function(a){
return this.animationNameCache.set(a,this.animationName(a));
},e.prototype.cachedAnimationName=function(a){
return this.animationNameCache.get(a);
},e.prototype.scrollHandler=function(){
return this.scrolled=!0;
},e.prototype.scrollCallback=function(){
var a;
return !this.scrolled||(this.scrolled=!1,this.boxes=function(){
var b,c,d,e;
for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++){
a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));
}
return e;
}.call(this),this.boxes.length||this.config.live)?void 0:this.stop();
},e.prototype.offsetTop=function(a){
for(var b;void 0===a.offsetTop;){
a=a.parentNode;
}
for(b=a.offsetTop;a=a.offsetParent;){
b+=a.offsetTop;
}
return b;
},e.prototype.isVisible=function(a){
var b,c,d,e,f;
return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f;
},e.prototype.util=function(){
return null!=this._util?this._util:this._util=new b;
},e.prototype.disabled=function(){
return !this.config.mobile&&this.util().isMobile(navigator.userAgent);
},e;
}();
}).call(this);
(function(e,t,n,r){
function d(t,n){
this.element=t,this.options=e.extend({},s,n),this._defaults=s,this._name=i,this.init();
};
var i="stellar",s={scrollProperty:"scroll",positionProperty:"position",horizontalScrolling:!0,verticalScrolling:!0,horizontalOffset:0,verticalOffset:0,responsive:!1,parallaxBackgrounds:!0,parallaxElements:!0,hideDistantElements:!0,hideElement:function(e){
e.hide();
},showElement:function(e){
e.show();
}},o={scroll:{getLeft:function(e){
return e.scrollLeft();
},setLeft:function(e,t){
e.scrollLeft(t);
},getTop:function(e){
return e.scrollTop();
},setTop:function(e,t){
e.scrollTop(t);
}},position:{getLeft:function(e){
return parseInt(e.css("left"),10)*-1;
},getTop:function(e){
return parseInt(e.css("top"),10)*-1;
}},margin:{getLeft:function(e){
return parseInt(e.css("margin-left"),10)*-1;
},getTop:function(e){
return parseInt(e.css("margin-top"),10)*-1;
}},transform:{getLeft:function(e){
var t=getComputedStyle(e[0])[f];
return t!=="none"?parseInt(t.match(/(-?[0-9]+)/g)[4],10)*-1:0;
},getTop:function(e){
var t=getComputedStyle(e[0])[f];
return t!=="none"?parseInt(t.match(/(-?[0-9]+)/g)[5],10)*-1:0;
}}},u={position:{setLeft:function(e,t){
e.css("left",t);
},setTop:function(e,t){
e.css("top",t);
}},transform:{setPosition:function(e,t,n,r,i){
e[0].style[f]="translate3d("+(t-n)+"px, "+(r-i)+"px, 0)";
}}},a=function(){
var t=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,n=e("script")[0].style,r="",i;
for(i in n){
if(t.test(i)){
r=i.match(t)[0];
break;
}
}
return "WebkitOpacity" in n&&(r="Webkit"),"KhtmlOpacity" in n&&(r="Khtml"),function(e){
return r+(r.length>0?e.charAt(0).toUpperCase()+e.slice(1):e);
};
}(),f=a("transform"),l=e("<div />",{style:"background:#fff"}).css("background-position-x")!==r,c=l?function(e,t,n){
e.css({"background-position-x":t,"background-position-y":n});
}:function(e,t,n){
e.css("background-position",t+" "+n);
},h=l?function(e){
return [e.css("background-position-x"),e.css("background-position-y")];
}:function(e){
return e.css("background-position").split(" ");
},p=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(e){
setTimeout(e,1000/60);
};
d.prototype={init:function(){
this.options.name=i+"_"+Math.floor(Math.random()*1000000000),this._defineElements(),this._defineGetters(),this._defineSetters(),this._handleWindowLoadAndResize(),this._detectViewport(),this.refresh({firstLoad:!0}),this.options.scrollProperty==="scroll"?this._handleScrollEvent():this._startAnimationLoop();
},_defineElements:function(){
this.element===n.body&&(this.element=t),this.$scrollElement=e(this.element),this.$element=this.element===t?e("body"):this.$scrollElement,this.$viewportElement=this.options.viewportElement!==r?e(this.options.viewportElement):this.$scrollElement[0]===t||this.options.scrollProperty==="scroll"?this.$scrollElement:this.$scrollElement.parent();
},_defineGetters:function(){
var e=this,t=o[e.options.scrollProperty];
this._getScrollLeft=function(){
return t.getLeft(e.$scrollElement);
},this._getScrollTop=function(){
return t.getTop(e.$scrollElement);
};
},_defineSetters:function(){
var t=this,n=o[t.options.scrollProperty],r=u[t.options.positionProperty],i=n.setLeft,s=n.setTop;
this._setScrollLeft=typeof i=="function"?function(e){
i(t.$scrollElement,e);
}:e.noop,this._setScrollTop=typeof s=="function"?function(e){
s(t.$scrollElement,e);
}:e.noop,this._setPosition=r.setPosition||function(e,n,i,s,o){
t.options.horizontalScrolling&&r.setLeft(e,n,i),t.options.verticalScrolling&&r.setTop(e,s,o);
};
},_handleWindowLoadAndResize:function(){
var n=this,r=e(t);
n.options.responsive&&r.bind("load."+this.name,function(){
n.refresh();
}),r.bind("resize."+this.name,function(){
n._detectViewport(),n.options.responsive&&n.refresh();
});
},refresh:function(n){
var r=this,i=r._getScrollLeft(),s=r._getScrollTop();
(!n||!n.firstLoad)&&this._reset(),this._setScrollLeft(0),this._setScrollTop(0),this._setOffsets(),this._findParticles(),this._findBackgrounds(),n&&n.firstLoad&&/WebKit/.test(navigator.userAgent)&&e(t).load(function(){
var e=r._getScrollLeft(),t=r._getScrollTop();
r._setScrollLeft(e+1),r._setScrollTop(t+1),r._setScrollLeft(e),r._setScrollTop(t);
}),this._setScrollLeft(i),this._setScrollTop(s);
},_detectViewport:function(){
var e=this.$viewportElement.offset(),t=e!==null&&e!==r;
this.viewportWidth=this.$viewportElement.width(),this.viewportHeight=this.$viewportElement.height(),this.viewportOffsetTop=t?e.top:0,this.viewportOffsetLeft=t?e.left:0;
},_findParticles:function(){
var t=this,n=this._getScrollLeft(),i=this._getScrollTop();
if(this.particles!==r){
for(var s=this.particles.length-1;s>=0;s--){
this.particles[s].$element.data("stellar-elementIsActive",r);
}
}
this.particles=[];
if(!this.options.parallaxElements){
return;
}
this.$element.find("[data-stellar-ratio]").each(function(n){
var i=e(this),s,o,u,a,f,l,c,h,p,d=0,v=0,m=0,g=0;
if(!i.data("stellar-elementIsActive")){
i.data("stellar-elementIsActive",this);
}else{
if(i.data("stellar-elementIsActive")!==this){
return;
}
}
t.options.showElement(i),i.data("stellar-startingLeft")?(i.css("left",i.data("stellar-startingLeft")),i.css("top",i.data("stellar-startingTop"))):(i.data("stellar-startingLeft",i.css("left")),i.data("stellar-startingTop",i.css("top"))),u=i.position().left,a=i.position().top,f=i.css("margin-left")==="auto"?0:parseInt(i.css("margin-left"),10),l=i.css("margin-top")==="auto"?0:parseInt(i.css("margin-top"),10),h=i.offset().left-f,p=i.offset().top-l,i.parents().each(function(){
var t=e(this);
if(t.data("stellar-offset-parent")===!0){
return d=m,v=g,c=t,!1;
}
m+=t.position().left,g+=t.position().top;
}),s=i.data("stellar-horizontal-offset")!==r?i.data("stellar-horizontal-offset"):c!==r&&c.data("stellar-horizontal-offset")!==r?c.data("stellar-horizontal-offset"):t.horizontalOffset,o=i.data("stellar-vertical-offset")!==r?i.data("stellar-vertical-offset"):c!==r&&c.data("stellar-vertical-offset")!==r?c.data("stellar-vertical-offset"):t.verticalOffset,t.particles.push({$element:i,$offsetParent:c,isFixed:i.css("position")==="fixed",horizontalOffset:s,verticalOffset:o,startingPositionLeft:u,startingPositionTop:a,startingOffsetLeft:h,startingOffsetTop:p,parentOffsetLeft:d,parentOffsetTop:v,stellarRatio:i.data("stellar-ratio")!==r?i.data("stellar-ratio"):1,width:i.outerWidth(!0),height:i.outerHeight(!0),isHidden:!1});
});
},_findBackgrounds:function(){
var t=this,n=this._getScrollLeft(),i=this._getScrollTop(),s;
this.backgrounds=[];
if(!this.options.parallaxBackgrounds){
return;
}
s=this.$element.find("[data-stellar-background-ratio]"),this.$element.data("stellar-background-ratio")&&(s=s.add(this.$element)),s.each(function(){
var s=e(this),o=h(s),u,a,f,l,p,d,v,m,g,y=0,b=0,w=0,E=0;
if(!s.data("stellar-backgroundIsActive")){
s.data("stellar-backgroundIsActive",this);
}else{
if(s.data("stellar-backgroundIsActive")!==this){
return;
}
}
s.data("stellar-backgroundStartingLeft")?c(s,s.data("stellar-backgroundStartingLeft"),s.data("stellar-backgroundStartingTop")):(s.data("stellar-backgroundStartingLeft",o[0]),s.data("stellar-backgroundStartingTop",o[1])),p=s.css("margin-left")==="auto"?0:parseInt(s.css("margin-left"),10),d=s.css("margin-top")==="auto"?0:parseInt(s.css("margin-top"),10),v=s.offset().left-p-n,m=s.offset().top-d-i,s.parents().each(function(){
var t=e(this);
if(t.data("stellar-offset-parent")===!0){
return y=w,b=E,g=t,!1;
}
w+=t.position().left,E+=t.position().top;
}),u=s.data("stellar-horizontal-offset")!==r?s.data("stellar-horizontal-offset"):g!==r&&g.data("stellar-horizontal-offset")!==r?g.data("stellar-horizontal-offset"):t.horizontalOffset,a=s.data("stellar-vertical-offset")!==r?s.data("stellar-vertical-offset"):g!==r&&g.data("stellar-vertical-offset")!==r?g.data("stellar-vertical-offset"):t.verticalOffset,t.backgrounds.push({$element:s,$offsetParent:g,isFixed:s.css("background-attachment")==="fixed",horizontalOffset:u,verticalOffset:a,startingValueLeft:o[0],startingValueTop:o[1],startingBackgroundPositionLeft:isNaN(parseInt(o[0],10))?0:parseInt(o[0],10),startingBackgroundPositionTop:isNaN(parseInt(o[1],10))?0:parseInt(o[1],10),startingPositionLeft:s.position().left,startingPositionTop:s.position().top,startingOffsetLeft:v,startingOffsetTop:m,parentOffsetLeft:y,parentOffsetTop:b,stellarRatio:s.data("stellar-background-ratio")===r?1:s.data("stellar-background-ratio")});
});
},_reset:function(){
var e,t,n,r,i;
for(i=this.particles.length-1;i>=0;i--){
e=this.particles[i],t=e.$element.data("stellar-startingLeft"),n=e.$element.data("stellar-startingTop"),this._setPosition(e.$element,t,t,n,n),this.options.showElement(e.$element),e.$element.data("stellar-startingLeft",null).data("stellar-elementIsActive",null).data("stellar-backgroundIsActive",null);
}
for(i=this.backgrounds.length-1;i>=0;i--){
r=this.backgrounds[i],r.$element.data("stellar-backgroundStartingLeft",null).data("stellar-backgroundStartingTop",null),c(r.$element,r.startingValueLeft,r.startingValueTop);
}
},destroy:function(){
this._reset(),this.$scrollElement.unbind("resize."+this.name).unbind("scroll."+this.name),this._animationLoop=e.noop,e(t).unbind("load."+this.name).unbind("resize."+this.name);
},_setOffsets:function(){
var n=this,r=e(t);
r.unbind("resize.horizontal-"+this.name).unbind("resize.vertical-"+this.name),typeof this.options.horizontalOffset=="function"?(this.horizontalOffset=this.options.horizontalOffset(),r.bind("resize.horizontal-"+this.name,function(){
n.horizontalOffset=n.options.horizontalOffset();
})):this.horizontalOffset=this.options.horizontalOffset,typeof this.options.verticalOffset=="function"?(this.verticalOffset=this.options.verticalOffset(),r.bind("resize.vertical-"+this.name,function(){
n.verticalOffset=n.options.verticalOffset();
})):this.verticalOffset=this.options.verticalOffset;
},_repositionElements:function(){
var e=this._getScrollLeft(),t=this._getScrollTop(),n,r,i,s,o,u,a,f=!0,l=!0,h,p,d,v,m;
if(this.currentScrollLeft===e&&this.currentScrollTop===t&&this.currentWidth===this.viewportWidth&&this.currentHeight===this.viewportHeight){
return;
}
this.currentScrollLeft=e,this.currentScrollTop=t,this.currentWidth=this.viewportWidth,this.currentHeight=this.viewportHeight;
for(m=this.particles.length-1;m>=0;m--){
i=this.particles[m],s=i.isFixed?1:0,this.options.horizontalScrolling?(h=(e+i.horizontalOffset+this.viewportOffsetLeft+i.startingPositionLeft-i.startingOffsetLeft+i.parentOffsetLeft)*-(i.stellarRatio+s-1)+i.startingPositionLeft,d=h-i.startingPositionLeft+i.startingOffsetLeft):(h=i.startingPositionLeft,d=i.startingOffsetLeft),this.options.verticalScrolling?(p=(t+i.verticalOffset+this.viewportOffsetTop+i.startingPositionTop-i.startingOffsetTop+i.parentOffsetTop)*-(i.stellarRatio+s-1)+i.startingPositionTop,v=p-i.startingPositionTop+i.startingOffsetTop):(p=i.startingPositionTop,v=i.startingOffsetTop),this.options.hideDistantElements&&(l=!this.options.horizontalScrolling||d+i.width>(i.isFixed?0:e)&&d<(i.isFixed?0:e)+this.viewportWidth+this.viewportOffsetLeft,f=!this.options.verticalScrolling||v+i.height>(i.isFixed?0:t)&&v<(i.isFixed?0:t)+this.viewportHeight+this.viewportOffsetTop),l&&f?(i.isHidden&&(this.options.showElement(i.$element),i.isHidden=!1),this._setPosition(i.$element,h,i.startingPositionLeft,p,i.startingPositionTop)):i.isHidden||(this.options.hideElement(i.$element),i.isHidden=!0);
}
for(m=this.backgrounds.length-1;m>=0;m--){
o=this.backgrounds[m],s=o.isFixed?0:1,u=this.options.horizontalScrolling?(e+o.horizontalOffset-this.viewportOffsetLeft-o.startingOffsetLeft+o.parentOffsetLeft-o.startingBackgroundPositionLeft)*(s-o.stellarRatio)+"px":o.startingValueLeft,a=this.options.verticalScrolling?(t+o.verticalOffset-this.viewportOffsetTop-o.startingOffsetTop+o.parentOffsetTop-o.startingBackgroundPositionTop)*(s-o.stellarRatio)+"px":o.startingValueTop,c(o.$element,u,a);
}
},_handleScrollEvent:function(){
var e=this,t=!1,n=function(){
e._repositionElements(),t=!1;
},r=function(){
t||(p(n),t=!0);
};
this.$scrollElement.bind("scroll."+this.name,r),r();
},_startAnimationLoop:function(){
var e=this;
this._animationLoop=function(){
p(e._animationLoop),e._repositionElements();
},this._animationLoop();
}},e.fn[i]=function(t){
var n=arguments;
if(t===r||typeof t=="object"){
return this.each(function(){
e.data(this,"plugin_"+i)||e.data(this,"plugin_"+i,new d(this,t));
});
}
if(typeof t=="string"&&t[0]!=="_"&&t!=="init"){
return this.each(function(){
var r=e.data(this,"plugin_"+i);
r instanceof d&&typeof r[t]=="function"&&r[t].apply(r,Array.prototype.slice.call(n,1)),t==="destroy"&&e.data(this,"plugin_"+i,null);
});
}
},e[i]=function(n){
var r=e(t);
return r.stellar.apply(r,Array.prototype.slice.call(arguments,0));
},e[i].scrollProperty=o,e[i].positionProperty=u,t.Stellar=d;
})(jQuery,this,document);
!function(){
function a(){
};
function b(a){
return f.retinaImageSuffix+a;
};
function c(a,c){
if(this.path=a||"","undefined"!=typeof c&&null!==c){
this.at_2x_path=c,this.perform_check=!1;
}else{
if(void 0!==document.createElement){
var d=document.createElement("a");
d.href=this.path,d.pathname=d.pathname.replace(g,b),this.at_2x_path=d.href;
}else{
var e=this.path.split("?");
e[0]=e[0].replace(g,b),this.at_2x_path=e.join("?");
}
this.perform_check=!0;
}
};
function d(a){
this.el=a,this.path=new c(this.el.getAttribute("src"),this.el.getAttribute("data-at2x"));
var b=this;
this.path.check_2x_variant(function(a){
a&&b.swap();
});
};
var e="undefined"==typeof exports?window:exports,f={retinaImageSuffix:"@2x",check_mime_type:!0,force_original_dimensions:!0};
e.Retina=a,a.configure=function(a){
null===a&&(a={});
for(var b in a){
a.hasOwnProperty(b)&&(f[b]=a[b]);
}
},a.init=function(a){
null===a&&(a=e);
var b=a.onload||function(){
};
a.onload=function(){
var a,c,e=document.getElementsByTagName("img"),f=[];
for(a=0;a<e.length;a+=1){
c=e[a],c.getAttributeNode("data-no-retina")||f.push(new d(c));
}
b();
};
},a.isRetina=function(){
var a="(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
return e.devicePixelRatio>1?!0:e.matchMedia&&e.matchMedia(a).matches?!0:!1;
};
var g=/\.\w+$/;
e.RetinaImagePath=c,c.confirmed_paths=[],c.prototype.is_external=function(){
return !(!this.path.match(/^https?\:/i)||this.path.match("//"+document.domain));
},c.prototype.check_2x_variant=function(a){
var b,d=this;
return this.is_external()?a(!1):this.perform_check||"undefined"==typeof this.at_2x_path||null===this.at_2x_path?this.at_2x_path in c.confirmed_paths?a(!0):(b=new XMLHttpRequest,b.open("HEAD",this.at_2x_path),b.onreadystatechange=function(){
if(4!==b.readyState){
return a(!1);
}
if(b.status>=200&&b.status<=399){
if(f.check_mime_type){
var e=b.getResponseHeader("Content-Type");
if(null===e||!e.match(/^image/i)){
return a(!1);
}
}
return c.confirmed_paths.push(d.at_2x_path),a(!0);
}
return a(!1);
},b.send(),void 0):a(!0);
},e.RetinaImage=d,d.prototype.swap=function(a){
function b(){
c.el.complete?(f.force_original_dimensions&&(c.el.setAttribute("width",c.el.offsetWidth),c.el.setAttribute("height",c.el.offsetHeight)),c.el.setAttribute("src",a)):setTimeout(b,5);
};
"undefined"==typeof a&&(a=this.path.at_2x_path);
var c=this;
b();
},a.isRetina()&&a.init(e);
}();
(function($,_35,_36,_37){
var _38=function(_39,_3a){
this.elem=_39;
this.$elem=$(_39);
this.options=_3a;
this.metadata=this.$elem.data("plugin-options");
this.$win=$(_35);
this.sections={};
this.didScroll=false;
this.$doc=$(_36);
this.docHeight=this.$doc.height();
};
_38.prototype={defaults:{navItems:"a",currentClass:"current",changeHash:false,easing:"swing",filter:"",scrollSpeed:750,scrollThreshold:0.5,begin:false,end:false,scrollChange:false},init:function(){
this.config=$.extend({},this.defaults,this.options,this.metadata);
this.$nav=this.$elem.find(this.config.navItems);
if(this.config.filter!==""){
this.$nav=this.$nav.filter(this.config.filter);
}
this.$nav.on("click.onePageNav",$.proxy(this.handleClick,this));
this.getPositions();
this.bindInterval();
this.$win.on("resize.onePageNav",$.proxy(this.getPositions,this));
return this;
},adjustNav:function(_3b,_3c){
_3b.$elem.find("."+_3b.config.currentClass).removeClass(_3b.config.currentClass);
_3c.addClass(_3b.config.currentClass);
},bindInterval:function(){
var _3d=this;
var _3e;
_3d.$win.on("scroll.onePageNav",function(){
_3d.didScroll=true;
});
_3d.t=setInterval(function(){
_3e=_3d.$doc.height();
if(_3d.didScroll){
_3d.didScroll=false;
_3d.scrollChange();
}
if(_3e!==_3d.docHeight){
_3d.docHeight=_3e;
_3d.getPositions();
}
},250);
},getHash:function(_3f){
return _3f.attr("href").split("#")[1];
},getPositions:function(){
var _40=this;
var _41;
var _42;
var _43;
_40.$nav.each(function(){
_41=_40.getHash($(this));
_43=$("#"+_41);
if(_43.length){
_42=_43.offset().top;
_40.sections[_41]=Math.round(_42);
}
});
},getSection:function(_44){
var _45=null;
var _46=Math.round(this.$win.height()*this.config.scrollThreshold);
for(var _47 in this.sections){
if((this.sections[_47]-_46)<_44){
_45=_47;
}
}
return _45;
},handleClick:function(e){
var _48=this;
var _49=$(e.currentTarget);
var _4a=_49.parent();
var _4b="#"+_48.getHash(_49);
if(!_4a.hasClass(_48.config.currentClass)){
if(_48.config.begin){
_48.config.begin();
}
_48.adjustNav(_48,_4a);
_48.unbindInterval();
_48.scrollTo(_4b,function(){
if(_48.config.changeHash){
_35.location.hash=_4b;
}
_48.bindInterval();
if(_48.config.end){
_48.config.end();
}
});
}
e.preventDefault();
},scrollChange:function(){
var _4c=this.$win.scrollTop();
var _4d=this.getSection(_4c);
var _4e;
if(_4d!==null){
_4e=this.$elem.find("a[href$=\"#"+_4d+"\"]").parent();
if(!_4e.hasClass(this.config.currentClass)){
this.adjustNav(this,_4e);
if(this.config.scrollChange){
this.config.scrollChange(_4e);
}
}
}
},scrollTo:function(_4f,_50){
var _51=$(_4f).offset().top;
$("html, body").animate({scrollTop:_51},this.config.scrollSpeed,this.config.easing,_50);
},unbindInterval:function(){
clearInterval(this.t);
this.$win.unbind("scroll.onePageNav");
}};
_38.defaults=_38.prototype.defaults;
$.fn.onePageNav=function(_52){
return this.each(function(){
new _38(this,_52).init();
});
};
})(jQuery,window,document);
window.matchMedia||(window.matchMedia=function(){
"use strict";
var _53=(window.styleMedia||window.media);
if(!_53){
var _54=document.createElement("style"),_55=document.getElementsByTagName("script")[0],_56=null;
_54.type="text/css";
_54.id="matchmediajs-test";
_55.parentNode.insertBefore(_54,_55);
_56=("getComputedStyle" in window)&&window.getComputedStyle(_54,null)||_54.currentStyle;
_53={matchMedium:function(_57){
var _58="@media "+_57+"{ #matchmediajs-test { width: 1px; } }";
if(_54.styleSheet){
_54.styleSheet.cssText=_58;
}else{
_54.textContent=_58;
}
return _56.width==="1px";
}};
}
return function(_59){
return {matches:_53.matchMedium(_59||"all"),media:_59||"all"};
};
}());
(function($){
"use strict";
$.ajaxChimp={responses:{"We have sent you a confirmation email":0,"Please enter a value":1,"An email address must contain a single @":2,"The domain portion of the email address is invalid (the portion after the @: )":3,"The username portion of the email address is invalid (the portion before the @: )":4,"This email address looks fake or invalid. Please enter a real email address":5},translations:{en:null},init:function(_5a,_5b){
$(_5a).ajaxChimp(_5b);
}};
$.fn.ajaxChimp=function(_5c){
$(this).each(function(i,_5d){
var _5e=$(_5d);
var _5f=_5e.find("input[type=email]");
var _60=_5e.find("label[for="+_5f.attr("id")+"]");
var _61=$.extend({url:_5e.attr("action"),language:"en"},_5c);
var _62=_61.url.replace("/post?","/post-json?").concat("&c=?");
_5e.attr("novalidate","true");
_5f.attr("name","EMAIL");
_5e.submit(function(){
function _63(_64){
if(_64.result==="success"){
_65="We have sent you a confirmation email";
_60.removeClass("error").addClass("valid");
_5f.removeClass("error").addClass("valid");
}else{
_5f.removeClass("valid").addClass("error");
_60.removeClass("valid").addClass("error");
var _66=-1;
var _65;
try{
var _67=_64.msg.split(" - ",2);
if(_67[1]===undefined){
_65=_64.msg;
}else{
var i=parseInt(_67[0],10);
if(i.toString()===_67[0]){
_66=_67[0];
_65=_67[1];
}else{
_66=-1;
_65=_64.msg;
}
}
}
catch(e){
_66=-1;
_65=_64.msg;
}
}
if(_61.language!=="en"&&$.ajaxChimp.responses[_65]&&$.ajaxChimp.translations&&$.ajaxChimp.translations[_61.language]&&$.ajaxChimp.translations[_61.language][$.ajaxChimp.responses[_65]]){
_65=$.ajaxChimp.translations[_61.language][$.ajaxChimp.responses[_65]];
}
_60.html(_65);
_60.show(2000);
if(_61.callback){
_61.callback(_64);
}
};
var _68={};
var _69=_5e.serializeArray();
$.each(_69,function(_6a,_6b){
_68[_6b.name]=_6b.value;
});
$.ajax({url:_62,data:_68,success:_63,dataType:"jsonp",error:function(_6c,_6d){
console.log("mailchimp ajax submit error: "+_6d);
}});
var _6e="Submitting...";
if(_61.language!=="en"&&$.ajaxChimp.translations&&$.ajaxChimp.translations[_61.language]&&$.ajaxChimp.translations[_61.language]["submit"]){
_6e=$.ajaxChimp.translations[_61.language]["submit"];
}
_60.html(_6e).show(2000);
return false;
});
});
return this;
};
})(jQuery);
(function($){
"use strict";
$.fn.fitVids=function(_6f){
var _70={customSelector:null,ignore:null,};
if(!document.getElementById("fit-vids-style")){
var _71=document.head||document.getElementsByTagName("head")[0];
var _72=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}";
var _73=document.createElement("div");
_73.innerHTML="<p>x</p><style id=\"fit-vids-style\">"+_72+"</style>";
_71.appendChild(_73.childNodes[1]);
}
if(_6f){
$.extend(_70,_6f);
}
return this.each(function(){
var _74=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];
if(_70.customSelector){
_74.push(_70.customSelector);
}
var _75=".fitvidsignore";
if(_70.ignore){
_75=_75+", "+_70.ignore;
}
var _76=$(this).find(_74.join(","));
_76=_76.not("object object");
_76=_76.not(_75);
_76.each(function(){
var _77=$(this);
if(_77.parents(_75).length>0){
return;
}
if(this.tagName.toLowerCase()==="embed"&&_77.parent("object").length||_77.parent(".fluid-width-video-wrapper").length){
return;
}
if((!_77.css("height")&&!_77.css("width"))&&(isNaN(_77.attr("height"))||isNaN(_77.attr("width")))){
_77.attr("height",9);
_77.attr("width",16);
}
var _78=(this.tagName.toLowerCase()==="object"||(_77.attr("height")&&!isNaN(parseInt(_77.attr("height"),10))))?parseInt(_77.attr("height"),10):_77.height(),_79=!isNaN(parseInt(_77.attr("width"),10))?parseInt(_77.attr("width"),10):_77.width(),_7a=_78/_79;
if(!_77.attr("id")){
var _7b="fitvid"+Math.floor(Math.random()*999999);
_77.attr("id",_7b);
}
_77.wrap("<div class=\"fluid-width-video-wrapper\"></div>").parent(".fluid-width-video-wrapper").css("padding-top",(_7a*100)+"%");
_77.removeAttr("height").removeAttr("width");
});
});
};
})(window.jQuery||window.Zepto);
jQuery(window).load(function(){
jQuery(".status").fadeOut();
jQuery(".preloader").delay(1000).fadeOut("slow");
});
$(".video-container").fitVids();
$(".mailchimp").ajaxChimp({callback:mailchimpCallback,url:"http://webdesign7.us6.list-manage.com/subscribe/post?u=9445a2e155b82208d73433060&amp;id=16dc80e353"});
function mailchimpCallback(_7c){
if(_7c.result==="success"){
$(".subscription-success").html("<i class=\"icon_check_alt2\"></i><br/>"+_7c.msg).fadeIn(1000);
$(".subscription-error").fadeOut(500);
}else{
if(_7c.result==="error"){
$(".subscription-error").html("<i class=\"icon_close_alt2\"></i><br/>"+_7c.msg).fadeIn(1000);
}
}
};
$(document).ready(function(){
$(".main-navigation").onePageNav({scrollThreshold:0.2,filter:":not(.external)",changeHash:true});
});
if(matchMedia("(max-width: 480px)").matches){
$(".main-navigation a").on("click",function(){
$(".navbar-toggle").click();
});
}
$(document).ready(function(){
mainNav();
});
$(window).scroll(function(){
mainNav();
});
if(matchMedia("(min-width: 992px), (max-width: 767px)").matches){
function mainNav(){
var _7d=(document.documentElement&&document.documentElement.scrollTop)||document.body.scrollTop;
if(_7d>40){
$(".sticky-navigation").stop().animate({"top":"0"});
}else{
$(".sticky-navigation").stop().animate({"top":"-60"});
}
};
}
if(matchMedia("(min-width: 768px) and (max-width: 991px)").matches){
function mainNav(){
var _7e=(document.documentElement&&document.documentElement.scrollTop)||document.body.scrollTop;
if(_7e>40){
$(".sticky-navigation").stop().animate({"top":"0"});
}else{
$(".sticky-navigation").stop().animate({"top":"-120"});
}
};
}
jQuery(function($){
$("#download-button").localScroll({duration:1000});
});
function alturaMaxima(){
var _7f=$(window).height();
$(".full-screen").css("min-height",_7f);
};
$(document).ready(function(){
alturaMaxima();
$(window).bind("resize",alturaMaxima);
});
var scrollAnimationTime=1200,scrollAnimation="easeInOutExpo";
$("a.scrollto").bind("click.smoothscroll",function(_80){
_80.preventDefault();
var _81=this.hash;
$("html, body").stop().animate({"scrollTop":$(_81).offset().top},scrollAnimationTime,scrollAnimation,function(){
window.location.hash=_81;
});
});
wow=new WOW({mobile:false});
wow.init();
$(document).ready(function(){
$("#feedbacks").owlCarousel({navigation:false,slideSpeed:800,paginationSpeed:400,autoPlay:5000,singleItem:true});
var _82=$("#screenshots");
_82.owlCarousel({items:4,itemsDesktop:[1000,4],itemsDesktopSmall:[900,2],itemsTablet:[600,1],itemsMobile:false});
});
$(document).ready(function(){
$("#screenshots a").nivoLightbox({effect:"fadeScale",});
});
$("#subscribe").submit(function(e){
e.preventDefault();
var _83=$("#subscriber-email").val();
var _84="email="+_83;
function _85(_86){
var _87=new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
return _87.test(_86);
};
if(_85(_83)){
$.ajax({type:"POST",url:"subscribe/subscribe.php",data:_84,success:function(){
$(".subscription-success").fadeIn(1000);
$(".subscription-error").fadeOut(500);
$(".hide-after").fadeOut(500);
}});
}else{
$(".subscription-error").fadeIn(1000);
}
return false;
});
$("#contact").submit(function(e){
e.preventDefault();
var _88=$("#name").val();
var _89=$("#email").val();
var _8a=$("#subject").val();
var _8b=$("#message").val();
var _8c="name="+_88+"&email="+_89+"&subject="+_8a+"&message="+_8b;
function _8d(_8e){
var _8f=new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
return _8f.test(_8e);
};
if(_8d(_89)&&(_8b.length>1)&&(_88.length>1)){
$.ajax({type:"POST",url:"sendmail.php",data:_8c,success:function(){
$(".success").fadeIn(1000);
$(".error").fadeOut(500);
}});
}else{
$(".error").fadeIn(1000);
$(".success").fadeOut(500);
}
return false;
});
$(".expand-form").simpleexpand({"defaultTarget":".expanded-contact-form"});
$(window).stellar({horizontalScrolling:false});
if(navigator.userAgent.match(/IEMobile\/10\.0/)){
var msViewportStyle=document.createElement("style");
msViewportStyle.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}"));
document.querySelector("head").appendChild(msViewportStyle);
}

