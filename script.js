document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");

  burgerMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("show-menu");
  });

  // Skjul menuen ved klik uden for burger-menuen (valgfrit)
  window.addEventListener("click", (event) => {
    if (!burgerMenu.contains(event.target)) {
      mobileMenu.classList.remove("show-menu");
    }
  });
});
