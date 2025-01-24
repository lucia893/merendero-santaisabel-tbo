document.addEventListener("DOMContentLoaded", function () {
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  var closeBtn = document.querySelector(".close");
  var galleryImgs = document.querySelectorAll(".gallery img");

  galleryImgs.forEach(function (img) {
    img.addEventListener("click", function () {
      lightbox.style.display = "block";
      lightboxImg.src = this.src;
    });
  });

  closeBtn.addEventListener("click", function () {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

  const btnQuieroAyudar = document.getElementById("btnQuieroAyudar");
  const formSection = document.getElementById("formSection");

  btnQuieroAyudar.addEventListener("click", function () {
    formSection.style.display =
      formSection.style.display === "none" || formSection.style.display === ""
        ? "block"
        : "none";
  });

  const images = [
    "./Media/voluntarios1.jpg",
    "./Media/voluntarios5.jpg",
    "./Media/voluntarios3.jpg",
    "./Media/voluntarios4.jpg",
    "./Media/voluntarios2.jpg",
    "./Media/voluntarios6.jpg",
    "./Media/voluntarios7.jpg",
    "./Media/voluntarios8.jpg",
    "./Media/voluntarios9.jpg",
    "./Media/voluntarios10.jpg",
    "./Media/voluntarios11.jpg",
    "./Media/voluntarios12.jpg",
    "./Media/voluntarios13.jpg",
    "./Media/voluntarios14.jpg",
    "./Media/voluntarios15.jpg",
  ];

  let currentIndex = 0;
  const imageContainer = document.querySelector(".image-container2");
  const prevButton = document.querySelector("#prev");
  const nextButton = document.querySelector("#next");

  function displayImages() {
    imageContainer.innerHTML = "";
    for (let i = 0; i < 5; i++) {
      const img = document.createElement("img");
      img.src = images[currentIndex + i];
      imageContainer.appendChild(img);
    }
  }

  displayImages();

  prevButton.addEventListener("click", () => {
    currentIndex -= 5;
    if (currentIndex < 0) {
      currentIndex = 0;
    }
    displayImages();
  });

  nextButton.addEventListener("click", () => {
    currentIndex += 5;
    if (currentIndex >= images.length) {
      currentIndex = images.length - 5;
    }
    displayImages();
  });
});
