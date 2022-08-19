import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector(".gallery");
const listGallery = document.createElement("ul");
const listItem = galleryItems
  .map(
    (img) => `<a class="gallery__link" href="${img.preview}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>`
  )
  .join("");

galleryRef.innerHTML = listItem;
const imgRef = galleryRef.querySelectorAll(".gallery__image");

let instance = basicLightbox.create(`<img src="" width="800" heigth="600">`);

const onImageClick = function (event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
    
  instance.element().querySelector("img").src = event.target.dataset.source;
  instance.show();
};

galleryRef.addEventListener("click", onImageClick);

const closeWithEscape = function (event) {
    if (event.key === "Escape") {
      console.log(event.key);
    instance.close();
  }
};

window.addEventListener("keydown", closeWithEscape);
