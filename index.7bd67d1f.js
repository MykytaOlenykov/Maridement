!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};!function(){const e=document.querySelector(".js-header");window.scrollY>=1&&e.classList.add("page-header--active")}();const n=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu");o.addEventListener("click",(function(){o.setAttribute("aria-expanded",!0),n.classList.add("menu-container--is-open"),document.body.classList.add("body-lock")})),i.addEventListener("click",(function(){o.setAttribute("aria-expanded",!1),n.classList.remove("menu-container--is-open"),document.body.classList.remove("body-lock")})),window.matchMedia("(min-width: 1024px)").addEventListener("change",(e=>{e.matches&&(n.classList.remove("menu-container--is-open"),o.setAttribute("aria-expanded",!1),document.body.classList.remove("body-lock"))}));document.querySelectorAll(".js-btn-modal").forEach((e=>e.addEventListener("click",(()=>{e.classList.add("button--active"),setTimeout((()=>{e.classList.remove("button--active")}),100)}))));const r=document.querySelector(".js-nav"),c=(document.querySelectorAll(".site-nav__link"),document.querySelector(".js-menu-container"));r.addEventListener("click",(e=>{e.preventDefault(),document.body.classList.remove("body-lock"),document.querySelector(e.target.getAttribute("href")).scrollIntoView({behavior:"smooth"}),c.classList.contains("menu-container--is-open")&&c.classList.remove("menu-container--is-open")}));var a,s="Expected a function",u=NaN,l="[object Symbol]",d=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,v=/^0o[0-7]+$/i,y=parseInt,b="object"==typeof t&&t&&t.Object===Object&&t,p="object"==typeof self&&self&&self.Object===Object&&self,h=b||p||Function("return this")(),g=Object.prototype.toString,L=Math.max,j=Math.min,w=function(){return h.Date.now()};function S(e,t,n){var o,i,r,c,a,u,l=0,d=!1,f=!1,m=!0;if("function"!=typeof e)throw new TypeError(s);function v(t){var n=o,r=i;return o=i=void 0,l=t,c=e.apply(r,n)}function y(e){var n=e-u;return void 0===u||n>=t||n<0||f&&e-l>=r}function b(){var e=w();if(y(e))return p(e);a=setTimeout(b,function(e){var n=t-(e-u);return f?j(n,r-(e-l)):n}(e))}function p(e){return a=void 0,m&&o?v(e):(o=i=void 0,c)}function h(){var e=w(),n=y(e);if(o=arguments,i=this,u=e,n){if(void 0===a)return function(e){return l=e,a=setTimeout(b,t),d?v(e):c}(u);if(f)return a=setTimeout(b,t),v(u)}return void 0===a&&(a=setTimeout(b,t)),c}return t=E(t)||0,q(n)&&(d=!!n.leading,r=(f="maxWait"in n)?L(E(n.maxWait)||0,t):r,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=u=i=a=void 0},h.flush=function(){return void 0===a?c:p(w())},h}function q(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function E(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&g.call(e)==l}(e))return u;if(q(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=q(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=m.test(e);return n||v.test(e)?y(e.slice(2),n?2:8):f.test(e)?u:+e}a=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(s);return q(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),S(e,t,{leading:o,maxWait:t,trailing:i})};const T=document.querySelector(".js-header");document.addEventListener("scroll",e(a)((function(){window.scrollY>=1?T.classList.contains("page-header--active")||T.classList.add("page-header--active"):T.classList.remove("page-header--active")}),500));document.querySelectorAll(".js-anchor-btn").forEach((e=>e.addEventListener("click",(t=>{t.preventDefault(),e.classList.add("button--active"),setTimeout((()=>{e.classList.remove("button--active")}),100),document.querySelector(t.target.getAttribute("href")).scrollIntoView({behavior:"smooth"})}))))}();
//# sourceMappingURL=index.7bd67d1f.js.map
