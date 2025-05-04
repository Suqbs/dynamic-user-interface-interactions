import "./styles.css";

const dropdownButton = document.querySelector("#dropdown-button");

dropdownButton.addEventListener("click", function () {
  const dropdownMenu = document.querySelector("#dropdown-menu");

  dropdownMenu.classList.toggle("visible");
});

const previousButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const images = document.querySelectorAll(".image");

previousButton.addEventListener("click", function () {
  const currentImage = Array.from(images).find((image) => {
    return image.classList.contains("visible");
  });
  if (!currentImage) return;

  if (currentImage === images[0]) {
    currentImage.classList.remove("visible");
    images[images.length - 1].classList.add("visible");
    return;
  } else {
    currentImage.classList.remove("visible");
    const previousImage = images[Array.from(images).indexOf(currentImage) - 1];
    previousImage.classList.add("visible");
  }
});

nextButton.addEventListener("click", function () {
  const currentImage = Array.from(images).find((image) => {
    return image.classList.contains("visible");
  });
  if (!currentImage) return;

  if (currentImage === images[images.length - 1]) {
    currentImage.classList.remove("visible");
    images[0].classList.add("visible");
    return;
  } else {
    currentImage.classList.remove("visible");
    const nextImage = images[Array.from(images).indexOf(currentImage) + 1];
    nextImage.classList.add("visible");
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

      currentImage.classList.remove("visible");
      const index = Array.from(dots).indexOf(dot);
      currentDot.classList.remove("active");
      dot.classList.add("active");
      images[index].classList.add("visible");
    });
});
