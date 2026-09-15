// cookies setzen

// const cookieBtn = document.querySelector(".cookieBtn");
// cookieBtn.addEventListener("click", () => {
//   document.cookie = "username=John Doe";
//   document.cookie = "age=31";
//   document.cookie = "size:185";
// });

// cookies entfernen

// const cookieDeleteBtn = document.querySelector(".cookieDeleteBtn");
// cookieDeleteBtn.addEventListener("click", () => {
//   document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
// });

// console.log(document.cookie);

// Cookie-Overlay Aufgabe

const modals = document.querySelectorAll(".Modal");
modals.forEach((modal) => {
  const acceptBtn = modal.querySelector(".Modal_Button");
  const checkbox = modal.querySelector(".Modal_Input");

  const loadModal = () => {
    window.addEventListener("load", () => {
      modal.classList.add("Modal-hidden");
      acceptLogic();
      reopenModal();
    });
  };

  const acceptLogic = () => {
    acceptBtn.setAttribute("disabled", "");

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        acceptBtn.removeAttribute("disabled");
      } else {
        acceptBtn.setAttribute("disabled", "");
      }
    });

    acceptBtn.addEventListener("click", () => {
      document.cookie = "test=cookies gesetzt";
      modal.classList.toggle("Modal-hidden");
    });
  };

  const reopenModal = () => {
    const cookieLink = document.querySelector(".cookieSettingsLink");
    cookieLink.addEventListener("click", () => {
      modal.classList.toggle("Modal-hidden");
    });
  };
  loadModal();
});
