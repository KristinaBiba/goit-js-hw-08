var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,l=f||u||Function("return this")(),c=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return l.Date.now()};function g(e,t,n){var o,i,r,a,f,u,l=0,c=!1,g=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function T(e){return l=e,f=setTimeout(O,t),c?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||g&&e-l>=r}function O(){var e=d();if(j(e))return S(e);f=setTimeout(O,function(e){var n=t-(e-u);return g?m(n,r-(e-l)):n}(e))}function S(e){return f=void 0,b&&o?y(e):(o=i=void 0,a)}function h(){var e=d(),n=j(e);if(o=arguments,i=this,u=e,n){if(void 0===f)return T(u);if(g)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),a}return t=v(t)||0,p(n)&&(c=!!n.leading,r=(g="maxWait"in n)?s(v(n.maxWait)||0,t):r,b="trailing"in n?!!n.trailing:b),h.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=u=i=f=void 0},h.flush=function(){return void 0===f?a:S(d())},h}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=i.test(e);return f||r.test(e)?a(e.slice(2),f?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:o,maxWait:t,trailing:i})};const b=(y=".feedback-form",document.querySelector(y));var y;b.addEventListener("input",t((function(e){T.email=e.currentTarget.elements.email.value,T.massage=e.currentTarget.elements.massage.value,localStorage.setItem("feedback - form - state",JSON.stringify(T)),console.log(T)}),500));let T={email:"",massage:""};localStorage.getItem("feedback - form - state")&&(b.email.value=JSON.parse(localStorage.getItem("feedback - form - state")).email,console.log(JSON.parse(localStorage.getItem("feedback - form - state")).email),console.log(b.email));
//# sourceMappingURL=03-feedback.a70803ed.js.map