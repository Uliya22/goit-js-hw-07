import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery')

const galleryMarkup = createGalleryItem(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryItemClick);

function createGalleryItem(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
         return `
        <li class="gallery__item">
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
        `
    }).join('');

}
 
function onGalleryItemClick(evt) {
    if (!evt.target.classList.contains('gallery__image')) {
    return;
    };
    evt.preventDefault();
    const imgGalleryOriginal = (evt.target.parentNode.href);
    console.log(imgGalleryOriginal);

     const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250 });
     lightbox.show();
}
