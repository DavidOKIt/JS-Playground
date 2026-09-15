// Klick nach draußen schließt das Menü

const manageNav = () => {
  const navButton = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  nav.classList.add("hideNav");

  navButton.addEventListener("click", () => {
    nav.classList.toggle("hideNav");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      nav.classList.add("hideNav");
    }
  });

  document.addEventListener("click", (event) => {
    // if (event.target !== nav && event.target !== navButton) {
    //   nav.classList.add("hideNav");
    // }
    // Sicherere Lösung:
    const clickedInsideNav = event.target.closest(".nav");
    const clickedToggleButton = event.target.closest(".nav-toggle");

    if (!clickedInsideNav && !clickedToggleButton) {
      nav.classList.add("hideNav");
    }
  });
};

manageNav();
