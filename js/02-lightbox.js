import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const listItem = galleryItems
  .map(
    (img) => `<li>
  <a class="gallery__item" href="${img.original}">
    <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
  </a>
</li>
`
  )
  .join("");

galleryRef.innerHTML = listItem;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
