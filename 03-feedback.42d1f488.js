var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,g=function(){return c.Date.now()};function m(e,t,n){var o,r,i,a,f,u,c=0,l=!1,m=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,f=setTimeout(j,t),l?y(e):a}function O(e){var n=e-u;return void 0===u||n>=t||n<0||m&&e-c>=i}function j(){var e=g();if(O(e))return h(e);f=setTimeout(j,function(e){var n=t-(e-u);return m?d(n,i-(e-c)):n}(e))}function h(e){return f=void 0,b&&o?y(e):(o=r=void 0,a)}function w(){var e=g(),n=O(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return S(u);if(m)return f=setTimeout(j,t),y(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=v(t)||0,p(n)&&(l=!!n.leading,i=(m="maxWait"in n)?s(v(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},w.flush=function(){return void 0===f?a:h(g())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=r.test(e);return f||i.test(e)?a(e.slice(2),f?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),m(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form");let y={};if(b.addEventListener("input",t((function(e){localStorage.getItem("feedback - form - state")&&(y=JSON.parse(localStorage.getItem("feedback - form - state")));y[e.target.name]=e.target.value,localStorage.setItem("feedback - form - state",JSON.stringify(y))}),500)),b.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback - form - state"))),localStorage.clear(),b.reset(),y={}})),localStorage.getItem("feedback - form - state")){const{email:e,message:t}=JSON.parse(localStorage.getItem("feedback - form - state"));e&&(b.email.value=e),t&&(b.message.value=t)}
//# sourceMappingURL=03-feedback.42d1f488.js.map