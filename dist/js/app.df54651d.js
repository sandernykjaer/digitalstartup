(function(e){function t(t){for(var r,o,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-04a4bd12":"04c0c93c"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-04a4bd12":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-04a4bd12":"ca43f78a"}[e]+".css",a=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],p.parentNode.removeChild(p),n(i)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"239a":function(e,t,n){"use strict";var r=n("5df3"),o=n.n(r);o.a},"2ddf":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("59ca"),o=n.n(r),a=(n("e71f"),o.a.initializeApp({apiKey:"AIzaSyBbl05BTitreRDnLSQcJ32A1qYhW9p5qkw",authDomain:"digitalstartup-aeab7.firebaseapp.com",databaseURL:"https://digitalstartup-aeab7.firebaseio.com",projectId:"digitalstartup-aeab7",storageBucket:"digitalstartup-aeab7.appspot.com",messagingSenderId:"579571601428",appId:"1:579571601428:web:8360bd396febf630de5701",measurementId:"G-WDYHKH3PKV"}).firestore()),i=a.collection("posts")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/create"}},[e._v("Create")])],1),n("router-view")],1)},a=[],i=(n("034f"),n("2877")),c={},s=Object(i["a"])(c,o,a,!1,null,null,null),u=s.exports,l=n("9483");Object(l["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var d=n("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("post-list")],1)},f=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid-container"},e._l(e.posts,(function(t){return n("article",{key:t.id},[n("img",{attrs:{src:t.image,alt:"Post Image"}}),n("h3",[e._v(e._s(t.title))]),n("p",[e._v(e._s(t.description))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"post.title"}],attrs:{type:"text",placeholder:"Title",required:""},domProps:{value:t.title},on:{input:function(n){n.target.composing||e.$set(t,"title",n.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"post.description"}],attrs:{type:"text",placeholder:"Description",required:""},domProps:{value:t.description},on:{input:function(n){n.target.composing||e.$set(t,"description",n.target.value)}}}),n("button",{staticClass:"update",attrs:{type:"button"},on:{click:function(n){return e.updatePost(t)}}},[e._v("Update")]),n("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(n){return e.deletePost(t)}}},[e._v("Delete")])])})),0)},v=[],g=(n("a4d3"),n("e01a"),n("2ddf")),h={data:function(){return{posts:[]}},firestore:{posts:g["a"]},methods:{deletePost:function(e){g["a"].doc(e.id).delete()},updatePost:function(e){g["a"].doc(e.id).update({title:e.title}),g["a"].doc(e.id).update({description:e.description}),alert("Post updated")}}},b=h,y=(n("239a"),Object(i["a"])(b,m,v,!1,null,null,null)),w=y.exports,_={name:"Home",components:{PostList:w}},k=_,P=(n("cccb"),Object(i["a"])(k,p,f,!1,null,null,null)),j=P.exports;r["a"].use(d["a"]);var O=[{path:"/",name:"Home",component:j},{path:"/create",name:"Create",component:function(){return n.e("chunk-04a4bd12").then(n.bind(null,"d879"))}}],x=new d["a"]({mode:"history",base:"/",routes:O}),C=x,E=n("0ff2");r["a"].use(E["a"]),r["a"].config.productionTip=!1,new r["a"]({router:C,render:function(e){return e(u)}}).$mount("#app")},"5ced":function(e,t,n){},"5df3":function(e,t,n){},"85ec":function(e,t,n){},cccb:function(e,t,n){"use strict";var r=n("5ced"),o=n.n(r);o.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.df54651d.js.map