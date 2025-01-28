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
});
