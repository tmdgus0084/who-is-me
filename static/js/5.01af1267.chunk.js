(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[5],{28:function(e,t,n){e.exports=n(40)()},30:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var o=window.document.createElement("script");return o.async=!0,o.src=e,o.id=t,n.appendChild(o),o},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var o=void 0;return function(){var r=this,i=arguments,a=function(){o=null,n||e.apply(r,i)},s=n&&!o;window.clearTimeout(o),o=setTimeout(a,t),s&&e.apply(r,i)}},t.isReactElement=a,t.shallowComparison=function(e,t){var n=new Set(Object.keys(e),Object.keys(t)),o=!0,r=!1,i=void 0;try{for(var s,u=n[Symbol.iterator]();!(o=(s=u.next()).done);o=!0){var c=s.value;if(e[c]!==t[c]&&!a(e[c]))return!0}}catch(l){r=!0,i=l}finally{try{!o&&u.return&&u.return()}finally{if(r)throw i}}return!1};var o,r=n(0),i=(o=r)&&o.__esModule?o:{default:o};function a(e){return!!i.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return i.default.isValidElement(e)}))}},37:function(e,t,n){e.exports={wrapper:"ContactPage_wrapper__2-tq6"}},38:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var o=n(39),r=n(42),i=n(43);t.CommentCount=o.CommentCount,t.CommentEmbed=r.CommentEmbed,t.DiscussionEmbed=i.DiscussionEmbed;var a={CommentCount:o.CommentCount,CommentEmbed:r.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};t.default=a},39:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=s(n(0)),i=s(n(28)),a=n(30);function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var l=(0,a.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1);(t.CommentCount=function(e){function t(){return u(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,a.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?l():(0,a.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,a.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return r.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}(r.default.Component)).propTypes={shortname:i.default.string.isRequired,config:i.default.shape({identifier:i.default.string,url:i.default.string,title:i.default.string}).isRequired}},40:function(e,t,n){"use strict";var o=n(41);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},41:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},42:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=a(n(0)),i=a(n(28));function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var c=t.CommentEmbed=function(e){function t(){return s(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return r.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}(r.default.Component);c.defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320},c.propTypes={commentId:i.default.string.isRequired,showMedia:i.default.bool,showParentComment:i.default.bool,width:i.default.number,height:i.default.number}},43:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=u(n(0)),a=u(n(28)),s=n(30);function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"];(t.DiscussionEmbed=function(e){function t(){return c(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){"undefined"!==typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,s.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,s.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){var t=this;this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,f.forEach((function(n){t.callbacks[n]=[e[n]]}))}}},{key:"render",value:function(){return i.default.createElement("div",o({},this.props,{id:"disqus_thread"}))}}]),t}(i.default.Component)).propTypes={shortname:a.default.string.isRequired,config:a.default.shape({identifier:a.default.string,url:a.default.string,title:a.default.string,preData:a.default.func,preInit:a.default.func,onInit:a.default.func,onReady:a.default.func,afterRender:a.default.func,preReset:a.default.func,onIdentify:a.default.func,beforeComment:a.default.func,onNewComment:a.default.func,onPaginate:a.default.func}).isRequired}},47:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(37),a=n.n(i),s=n(38);t.default=function(){return r.a.createElement("div",{className:a.a.wrapper},r.a.createElement("div",null,r.a.createElement("h2",null,"I can create whatever you want."),r.a.createElement("h2",null,"Contact me."),r.a.createElement("p",null,"GitHub: ",r.a.createElement("a",{href:"https://github.com/hsh2001",target:"_blank",rel:"noopener noreferrer"},"github.com/hsh2001"),r.a.createElement("br",null),"Instagram: ",r.a.createElement("a",{href:"https://www.instagram.com/dev_hsh",target:"_blank",rel:"noopener noreferrer"},"@dev_hsh"),r.a.createElement("br",null),"e-mail: ",r.a.createElement("a",{href:"mailto:tmdgus0084@naver.com"},"tmdgus0084@naver.com"),r.a.createElement("br",null),"Disqus:"),r.a.createElement(s.DiscussionEmbed,{shortname:"who-am-i-1",config:{url:"http://dev.hsh.kr",identifier:"1",title:"HSH developer"}})))}}}]);
//# sourceMappingURL=5.01af1267.chunk.js.map