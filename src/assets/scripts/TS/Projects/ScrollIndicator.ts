const indicator = document.querySelectorAll(".container") as NodeListOf<HTMLDivElement>;

const calculateScrollProgress = () => {
  window.addEventListener("scroll", () => {
    let scrollableHeight: number = document.documentElement.scrollHeight - window.innerHeight;
    let current = window.scrollY;

    let currentPercent = (current / scrollableHeight) * 100;

    updateScrollIndicator(currentPercent);
  });
};

const updateScrollIndicator = (value: number) => {
  indicator.forEach((container) => {
    const bar = container.querySelector(".progressBar") as HTMLDivElement;
    bar.style.width = `${value}%`;
  });
};

calculateScrollProgress();
