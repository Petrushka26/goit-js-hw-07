import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const imageCards = document.querySelector(".gallery");
const imageMarkup = createImageGallery(galleryItems);

imageCards.insertAdjacentHTML("beforeend", imageMarkup);
imageCards.addEventListener("click", onImageCardCLick);

function createImageGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
    <img class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"/>
    </a>
    </div>`;
    })
    .join("");
}
// console.log(createImageGallery(galleryItems));

function onImageCardCLick(evt) {
  evt.preventDefault();

  const isImageOpen = evt.target.classList.contains("gallery__image");

  if (!isImageOpen) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  window.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close(() => {
        window.removeEventListener("keydown", closeEsc);
      });
    }
    console.log(evt);
  });
}
