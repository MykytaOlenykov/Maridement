const mobileMenu = document.querySelector(".js-menu-container");
const openMenuBtn = document.querySelector(".js-open-menu");
const closeMenuBtn = document.querySelector(".js-close-menu");
openMenuBtn.addEventListener("click", onOpenMenu);
closeMenuBtn.addEventListener("click", onCloseMenu);

function onOpenMenu() {
  openMenuBtn.setAttribute("aria-expanded", true);
  mobileMenu.classList.add("menu-container--is-open");
  bodyScrollLock.disableBodyScroll(document.body);
}

function onCloseMenu() {
  openMenuBtn.setAttribute("aria-expanded", false);
  mobileMenu.classList.remove("menu-container--is-open");
  bodyScrollLock.enableBodyScroll(document.body);
}

// window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
//   if (!e.matches) return;

//   mobileMenu.classList.remove("is-open");
//   openMenuBtn.setAttribute("aria-expanded", false);
//   bodyScrollLock.enableBodyScroll(document.body);
// });
