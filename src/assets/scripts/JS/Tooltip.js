const buttons = document.querySelectorAll(".TestBtnJS");
const body = document.querySelector("body");
const window = globalThis;
console.log(window);

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
    if (e.key === "Escape") {
      removeTooltip();
    }
  });
});

const createTooltip = (button) => {
  const tooltipContent = button.dataset.tooltipJs;
  const rect = button.getBoundingClientRect();
  const distanceBottom = window.innerHeight - rect.bottom;

  let positioning = "top";
  if (distanceBottom <= 40) positioning = "bottom";

  const tooltip = `<div id="ButtonInfo" class="Tooltip Tooltip-${positioning}" role="tooltip">${tooltipContent}</div>`;
  button.insertAdjacentHTML("afterbegin", tooltip);
};

const removeTooltip = () => {
  const tooltips = document.querySelectorAll(".Tooltip");
  tooltips.forEach((tooltip) => {
    tooltip.remove();
  });
};

// Fancy -> dynamische vergebung des Tooltips über className

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
