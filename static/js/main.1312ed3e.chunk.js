(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{17:function(e,n,t){e.exports=t(28)},25:function(e,n,t){},26:function(e,n,t){},27:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),l=t.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=t(2),i=t.n(o),u=t(4),s=t(1),m=t(6),d=t(7),f=t.n(d),h=t(8);function g(){var e=Object(m.a)(["\n  width: 90vw;\n  height: 1rem;\n  max-width: 450px;\n  margin: 1rem auto;\n"]);return g=function(){return e},e}function p(){var e=Object(m.a)(["\n  width: ","%;\n  height: 100%;\n  transition: width 0.3s;\n  background-color: #abf200;\n  border-radius: 1rem;\n"]);return p=function(){return e},e}var v=new Image;v.src="/image/profile-image.jpg";var E=new Promise((function(e){v.onload=function(){e(v)}})),b=function(){return Object(a.useEffect)((function(){E.then((function(e){var n=document.getElementById("profile-image-canvas");n.getContext("2d").drawImage(e,0,0,n.width,n.height)}))}),[]),r.a.createElement("canvas",{width:500,height:500,id:"profile-image-canvas",className:f.a.profileImage})},w=h.a.div(p(),(function(e){return 100*e.size})),j=h.a.div(g()),O=function(e){var n=e.size;return r.a.createElement(j,null,r.a.createElement(w,{size:n}))},x=function(e){var n=e.message,t=void 0===n?"":n,c=e.loadingSize,l=Object(a.useState)(1),o=Object(s.a)(l,2),i=o[0],u=o[1];return Object(a.useEffect)((function(){window.addEventListener("scroll",(function(){var e=window,n=e.scrollY,t=e.innerHeight;u(Math.max(0,1-2*n/t))}))}),[]),r.a.createElement("div",{className:f.a.introducePage,style:{opacity:i}},r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement("h1",null,"Hwang Seung-hyun"),r.a.createElement("p",null,t),r.a.createElement(O,{size:c}),r.a.createElement("div",{className:"fb-like","data-href":"http://dev.hsh.kr","data-width":"","data-layout":"button_count","data-action":"like","data-size":"large","data-share":"false"})))},k=function(){var e=Object(a.useState)("Loading... Please wait."),n=Object(s.a)(e,2),c=n[0],l=n[1],o=Object(a.useState)(0),m=Object(s.a)(o,2),d=m[0],f=m[1],h=Object(a.useState)(r.a.createElement(r.a.Fragment,null)),g=Object(s.a)(h,2),p=g[0],v=g[1];return Object(a.useEffect)((function(){E.then(Object(u.a)(i.a.mark((function e(){var n,a,c,o,m,d,h,g,p,E,b,w,j;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=0,a=[t.e(9).then(t.bind(null,59)),t.e(5).then(t.bind(null,60)),t.e(3).then(t.bind(null,65)),t.e(8).then(t.bind(null,61)),t.e(7).then(t.bind(null,62)),t.e(4).then(t.bind(null,63)),t.e(6).then(t.bind(null,64))],l("Loading components... 0/".concat(a.length)),a.forEach((function(e){Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e;case 2:n++,l("Loading components... ".concat(n,"/").concat(a.length));case 4:case"end":return t.stop()}}),t)})))()})),e.next=6,Promise.all(a);case 6:return c=e.sent,o=Object(s.a)(c,7),m=o[0].default,d=o[1].default,h=o[2].default,g=o[3].default,p=o[4],E=p.default,b=p.frames,w=o[5].default,j=o[6].default,l("Loading images... ".concat(n=0,"/").concat(b.length)),e.next=21,Promise.all(b.map(function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.promise;case 2:n++,f(n/b.length),l("Loading images... ".concat(n,"/").concat(b.length));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 21:v(r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement(d,{title:"I am a Game Developer."}),r.a.createElement(h,null),r.a.createElement(g,null),r.a.createElement(d,{title:"I am a Web Developer."}),r.a.createElement(E,null),r.a.createElement(w,null),r.a.createElement("hr",null),r.a.createElement(j,null))),l("The loading is done! Scroll down for more information.");case 23:case"end":return e.stop()}}),e)}))))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{message:c,loadingSize:d}),p)},I=function(){return r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null))};t(25),t(26),t(27);l.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,n,t){e.exports={profileImage:"IntroducePage_profileImage__29Rak",introducePage:"IntroducePage_introducePage__2c8PG"}}},[[17,1,2]]]);
//# sourceMappingURL=main.1312ed3e.chunk.js.map