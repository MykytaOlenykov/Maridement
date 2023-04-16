const btnsEl = document.querySelectorAll(".button");

btnsEl.forEach((btn) =>
  btn.addEventListener("click", () => {
    btn.classList.add("button--active");

    setTimeout(() => {
      btn.classList.remove("button--active");
    }, 250);
  })
);
