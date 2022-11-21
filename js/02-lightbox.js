import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const imageCards = document.querySelector(".gallery");
const imageMarkup = createImageGallery(galleryItems);

function createImageGallery(items) {
  return items
    .map(({ original, preview, description }) => {
      return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

imageCards.insertAdjacentHTML("beforeend", imageMarkup);

let gallery = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
