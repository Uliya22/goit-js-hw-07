import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery')
// console.log(galleryItems);
const galleryMarkup = createGalleryItem(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', onGalleryItemClick);

// console.log(createGalleryItem(galleryItems));

function createGalleryItem(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
         return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `
    }).join('');

}

function onGalleryItemClick(evt) {
    if (!evt.target.classList.contains('gallery__image')) {
    return;
    };
    evt.preventDefault();
    console.log(evt.target.dataset.source);

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
`)

instance.show()

document.addEventListener("keydown", evt => {   
    instance.close();
  });
}

    
