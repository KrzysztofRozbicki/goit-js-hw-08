function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="Expected a function",r=NaN,o="[object Symbol]",a=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=s||d||Function("return this")(),m=Object.prototype.toString,g=Math.max,p=Math.min,b=function(){return v.Date.now()};function y(e,t,n){var r,o,a,f,u,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function m(t){var n=r,i=o;return r=o=void 0,l=t,f=e.apply(i,n)}function y(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function w(){var e=b();if(y(e))return O(e);u=setTimeout(w,function(e){var n=t-(e-c);return d?p(n,a-(e-l)):n}(e))}function O(e){return u=void 0,v&&r?m(e):(r=o=void 0,f)}function T(){var e=b(),n=y(e);if(r=arguments,o=this,c=e,n){if(void 0===u)return function(e){return l=e,u=setTimeout(w,t),s?m(e):f}(c);if(d)return u=setTimeout(w,t),m(c)}return void 0===u&&(u=setTimeout(w,t)),f}return t=h(t)||0,j(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(h(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=o=u=void 0},T.flush=function(){return void 0===u?f:O(b())},T}function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&m.call(e)==o}(e))return r;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=u.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):f.test(e)?r:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return j(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};const w=document.querySelector(".feedback-form"),O=()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"));e?(w.email.value=e.email,w.message.value=e.message):w.reset()},T=e(t)((e=>{const t={email:"",message:""};t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500);O(),w.addEventListener("input",T),w.addEventListener("submit",(e=>{e.preventDefault(),localStorage.clear(),O()}));
//# sourceMappingURL=03-feedback.598678f8.js.map