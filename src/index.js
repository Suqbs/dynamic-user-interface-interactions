import "./styles.css";

const dropdownButton = document.querySelector("#dropdown-button");

dropdownButton.addEventListener("click", function () {
  const dropdownMenu = document.querySelector("#dropdown-menu");

  dropdownMenu.classList.toggle("visible");
});

const timerFunction = (() => {
  const currentImage = Array.from(images).find((image) => {
    return image.classList.contains("visible");
  });
  if (!currentImage) return;

  const currentDot = Array.from(dots).find((dot) => {
    return dot.classList.contains("active");
  });
  if (!currentDot) return;

  if (currentImage === images[images.length - 1]) {
    currentImage.classList.remove("visible");
    images[0].classList.add("visible");
    currentDot.classList.remove("active");
    dots[0].classList.add("active");
    return;
  } else {
    currentImage.classList.remove("visible");
    const nextImage = images[Array.from(images).indexOf(currentImage) + 1];
    nextImage.classList.add("visible");
    currentDot.classList.remove("active");
    const nextDot = dots[Array.from(images).indexOf(nextImage)];
    nextDot.classList.add("active");
  }
});

let timer = setInterval(timerFunction, 5000);
const previousButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const images = document.querySelectorAll(".image");

previousButton.addEventListener("click", function () {
  const currentImage = Array.from(images).find((image) => {
    return image.classList.contains("visible");
  });
  if (!currentImage) return;

  const currentDot = Array.from(dots).find((dot) => {
    return dot.classList.contains("active");
  });
  if (!currentDot) return;

  clearInterval(timer);
  timer = setInterval(timerFunction, 5000);

  if (currentImage === images[0]) {
    currentImage.classList.remove("visible");
    images[images.length - 1].classList.add("visible");
    currentDot.classList.remove("active");
    dots[dots.length - 1].classList.add("active");
    return;
  } else {
    currentImage.classList.remove("visible");
    const previousImage = images[Array.from(images).indexOf(currentImage) - 1];
    previousImage.classList.add("visible");
    currentDot.classList.remove("active");
    const previousDot = dots[Array.from(images).indexOf(previousImage)];
    previousDot.classList.add("active");
  }
});

nextButton.addEventListener("click", function () {
  const currentImage = Array.from(images).find((image) => {
    return image.classList.contains("visible");
  });
  if (!currentImage) return;

  const currentDot = Array.from(dots).find((dot) => {
    return dot.classList.contains("active");
  });
  if (!currentDot) return;

  clearInterval(timer);
  timer = setInterval(timerFunction, 5000);

  if (currentImage === images[images.length - 1]) {
    currentImage.classList.remove("visible");
    images[0].classList.add("visible");
    currentDot.classList.remove("active");
    dots[0].classList.add("active");
    return;
  } else {
    currentImage.classList.remove("visible");
    const nextImage = images[Array.from(images).indexOf(currentImage) + 1];
    nextImage.classList.add("visible");
    currentDot.classList.remove("active");
    const nextDot = dots[Array.from(images).indexOf(nextImage)];
    nextDot.classList.add("active");
  }
});

const dots = document.querySelectorAll(".dot");

dots.forEach((dot) => {
  dot.addEventListener("click", function () {
    const currentImage = Array.from(images).find((image) => {
      return image.classList.contains("visible");
    });
    if (!currentImage) return;

    const currentDot = Array.from(dots).find((dot) => {
      return dot.classList.contains("active");
    });
    if (!currentDot) return;

    clearInterval(timer);
    timer = setInterval(timerFunction, 5000);

    currentImage.classList.remove("visible");
    const index = Array.from(dots).indexOf(dot);
    currentDot.classList.remove("active");
    dot.classList.add("active");
    images[index].classList.add("visible");
  });
});