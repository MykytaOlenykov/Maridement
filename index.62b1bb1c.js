const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu");t.addEventListener("click",(function(){t.setAttribute("aria-expanded",!0),e.classList.add("menu-container--is-open"),document.body.classList.add("body-lock")})),n.addEventListener("click",(function(){t.setAttribute("aria-expanded",!1),e.classList.remove("menu-container--is-open"),document.body.classList.remove("body-lock")})),window.matchMedia("(min-width: 1024px)").addEventListener("change",(n=>{n.matches&&(e.classList.remove("menu-container--is-open"),t.setAttribute("aria-expanded",!1),document.body.classList.remove("body-lock"))}));document.querySelectorAll(".js-btn-active").forEach((e=>e.addEventListener("click",(()=>{e.classList.add("button--active"),setTimeout((()=>{e.classList.remove("button--active")}),100)}))));const o=document.querySelector(".js-nav"),c=(document.querySelectorAll(".site-nav__link"),document.querySelector(".js-menu-container"));o.addEventListener("click",(e=>{e.preventDefault(),document.body.classList.remove("body-lock"),document.querySelector(e.target.getAttribute("href")).scrollIntoView({behavior:"smooth"}),c.classList.contains("menu-container--is-open")&&c.classList.remove("menu-container--is-open")}));document.querySelectorAll(".js-anchor-btn").forEach((e=>e.addEventListener("click",(e=>{e.preventDefault(),document.querySelector(e.target.getAttribute("href")).scrollIntoView({behavior:"smooth"})}))));
//# sourceMappingURL=index.62b1bb1c.js.map
