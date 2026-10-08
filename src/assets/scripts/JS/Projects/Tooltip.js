const buttons = document.querySelectorAll(".TestBtnJS");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    createTooltip(button);
  });

  button.addEventListener("focus", () => {
    createTooltip(button);
  });

  button.addEventListener("mouseleave", () => {
    removeTooltip();
  });

  button.addEventListener("blur", () => {
    removeTooltip();
  });

  button.addEventListener("keydown", (e) => {
    console.log(e);

    if (e.key === "Escape") {
      removeTooltip();
    }
  });
});

const createTooltip = (button) => {
  const tooltipContent = button.dataset.tooltipJs;
  console.log(tooltipContent);

  const tooltip = `<div id="ButtonInfo" class="Tooltip" role="tooltip">${tooltipContent}</div>`;
  button.insertAdjacentHTML("afterbegin", tooltip);
};

const removeTooltip = () => {
  const tooltips = document.querySelectorAll(".Tooltip");
  tooltips.forEach((tooltip) => {
    tooltip.remove();
  });
};

// Fancy

const dynamicTooltip = (className) => {
  const elements = document.querySelectorAll(`.${className}`);

  const createTooltip = (element) => {
    const tooltipContent = element.dataset.tooltip;
    const tooltip = `<div class="DynamicTooltip" role="tooltip">${tooltipContent}</div>`;
    element.insertAdjacentHTML("afterbegin", tooltip);
  };

  const deleteTooltip = () => {
    const tooltips = document.querySelectorAll(".DynamicTooltip");
    tooltips.forEach((tooltip) => {
      tooltip.remove();
    });
  };

  elements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      createTooltip(element);
    });

    element.addEventListener("focus", () => {
      createTooltip(element);
    });

    element.addEventListener("mouseleave", () => {
      deleteTooltip();
    });

    element.addEventListener("blur", () => {
      deleteTooltip();
    });

    element.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        deleteTooltip();
      }
    });
  });
};

dynamicTooltip("TestModal");

// Selection ist aktuell immer über die Klasse, über das Attribut selbst und dann tooltip ausgeben würde ich auch hinbekommen

// API Test

const testButton = document.querySelector(".TestButton");
testButton.togglePopover;
