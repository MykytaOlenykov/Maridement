function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};!function(){const e=document.querySelector(".js-header");window.scrollY>=1&&e.classList.add("page-header--active")}();const n=document.querySelector(".js-menu-container"),i=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu");i.addEventListener("click",(function(){i.setAttribute("aria-expanded",!0),n.classList.add("menu-container--is-open"),document.body.classList.add("body-lock")})),o.addEventListener("click",(function(){i.setAttribute("aria-expanded",!1),n.classList.remove("menu-container--is-open"),document.body.classList.remove("body-lock")})),window.matchMedia("(min-width: 1024px)").addEventListener("change",(e=>{e.matches&&(n.classList.remove("menu-container--is-open"),i.setAttribute("aria-expanded",!1),document.body.classList.remove("body-lock"))}));document.querySelectorAll(".js-btn-active").forEach((e=>e.addEventListener("click",(()=>{e.classList.add("button--active"),setTimeout((()=>{e.classList.remove("button--active")}),100)}))));const r=document.querySelector(".js-nav"),c=document.querySelector(".js-menu-container");r.addEventListener("click",(e=>{const t=e.target;t.classList.contains("js-link")&&(t.classList.add("site-nav__link--active"),setTimeout((()=>{t.classList.remove("site-nav__link--active")}),100),document.body.classList.remove("body-lock"),c.classList.contains("menu-container--is-open")&&c.classList.remove("menu-container--is-open"))}));var a,s="Expected a function",u=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,m=/^0o[0-7]+$/i,p=parseInt,y="object"==typeof t&&t&&t.Object===Object&&t,b="object"==typeof self&&self&&self.Object===Object&&self,L=y||b||Function("return this")(),g=Object.prototype.toString,h=Math.max,j=Math.min,w=function(){return L.Date.now()};function k(e,t,n){var i,o,r,c,a,u,d=0,l=!1,f=!1,v=!0;if("function"!=typeof e)throw new TypeError(s);function m(t){var n=i,r=o;return i=o=void 0,d=t,c=e.apply(r,n)}function p(e){var n=e-u;return void 0===u||n>=t||n<0||f&&e-d>=r}function y(){var e=w();if(p(e))return b(e);a=setTimeout(y,function(e){var n=t-(e-u);return f?j(n,r-(e-d)):n}(e))}function b(e){return a=void 0,v&&i?m(e):(i=o=void 0,c)}function L(){var e=w(),n=p(e);if(i=arguments,o=this,u=e,n){if(void 0===a)return function(e){return d=e,a=setTimeout(y,t),l?m(e):c}(u);if(f)return a=setTimeout(y,t),m(u)}return void 0===a&&(a=setTimeout(y,t)),c}return t=x(t)||0,T(n)&&(l=!!n.leading,r=(f="maxWait"in n)?h(x(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),L.cancel=function(){void 0!==a&&clearTimeout(a),d=0,i=u=o=a=void 0},L.flush=function(){return void 0===a?c:b(w())},L}function T(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function x(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&g.call(e)==d}(e))return u;if(T(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=T(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=v.test(e);return n||m.test(e)?p(e.slice(2),n?2:8):f.test(e)?u:+e}a=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(s);return T(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),k(e,t,{leading:i,maxWait:t,trailing:o})};const E=document.querySelector(".js-header");document.addEventListener("scroll",e(a)((function(){window.scrollY>=1?E.classList.contains("page-header--active")||E.classList.add("page-header--active"):E.classList.remove("page-header--active")}),500));
//# sourceMappingURL=index.475124b5.js.map
