(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[8],{26:function(e,t,a){"use strict";var n=a(1),i=a(0);t.a=function(e,t){var a=Object(i.useState)(0),r=Object(n.a)(a,2),o=r[0],l=r[1];return Object(i.useEffect)((function(){function a(){var a=document.getElementById(e),n=document.getElementById(t),i=a.getBoundingClientRect().top;if(Math.abs(i)<100){var r=n.getBoundingClientRect(),o=r.height,c=r.y,h=window.innerHeight,m=(o+c-h)/(2*h),s=1-Math.max(0,Math.min(1,m));l(s)}}a(),window.addEventListener("scroll",a),window.addEventListener("resize",a),setInterval(a,30)}),[]),o}},34:function(e,t,a){e.exports={animationWrapper:"AIOmokPage_animationWrapper__3GUUK",mainContentWrapper:"AIOmokPage_mainContentWrapper__2NTuI"}},44:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(0),r=a.n(i),o=a(26),l=a(34),c=a.n(l),h=new Image;function m(e,t,a){var n=e.width,i=e.height;t.strokeStyle="#000",t.lineWidth=Math.max(7,n/300),t.beginPath(),t.moveTo(0,i/2),t.lineTo(n*a,i/2),t.moveTo(n/2,0),t.lineTo(n/2,i*a),t.stroke(),t.fillStyle="#000",t.beginPath(),t.arc(n/2,i/2,n/30,0,2*Math.PI*a),t.fill(),t.strokeStyle="#ddd",t.beginPath(),t.arc(n/2,i/2,n/30,0,2*Math.PI*a),t.stroke()}h.src="/image/omok.jpg";t.default=function(){var e=Object(i.useState)(window.innerWidth),t=Object(n.a)(e,2),a=t[0],l=t[1],s=Object(i.useState)(window.innerHeight),d=Object(n.a)(s,2),g=d[0],p=d[1],u=Object(i.useState)("0"),f=Object(n.a)(u,2),b=f[0],w=f[1],k=Object(o.a)("ai-omok-animatin-section","ai-omok-wrapper");return Object(i.useEffect)((function(){var e=document.getElementById("ai-omok-animatin-section"),t=e.getContext("2d");if(k<.5){var a=e.width,n=e.height;t.fillStyle="#000",t.fillRect(0,0,a,n),t.fillStyle="rgba(240, 198, 143, ".concat(k/.5,")"),t.fillRect(0,0,a,n),m(e,t,Math.min(1,k/.5*2));var i=window,r=i.innerWidth,o=i.innerHeight;a===r&&n===o||(l(r),p(o),w("0"))}else{var c=e.width,s=e.height;t.fillStyle="#f0c68f",t.fillRect(0,0,c,s),m(e,t,1),t.globalAlpha=(k-.5)/.5,t.drawImage(h,0,0,c,s),t.globalAlpha=1;var d=Math.min(.9*window.innerWidth,500);c===d&&s===d||(l(d),p(d),w("1rem"))}}),[a,g,k]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:c.a.animationWrapper,id:"ai-omok-wrapper"},r.a.createElement("canvas",{id:"ai-omok-animatin-section",width:2*a,height:2*g,style:{width:a+"px",height:g+"px",top:b}})),r.a.createElement("div",{className:c.a.mainContentWrapper},r.a.createElement("h2",null,"AI Omok"),r.a.createElement("h3",null,"Play Omok With AI"),r.a.createElement("a",{href:"https://hsh-game.github.io/omok",target:"_blank",rel:"noopener noreferrer"},"Play")," / ",r.a.createElement("a",{href:"https://github.com/hsh-game/omok",target:"_blank",rel:"noopener noreferrer"},"Github")))}}}]);
//# sourceMappingURL=8.602af4e7.chunk.js.map