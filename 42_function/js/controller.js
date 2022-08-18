'use strict';

async function controller(view, model) {
    const containerSelector = document.querySelector('#albumItems');

    const album = await model.start();

    view.init(album, containerSelector);

    album.forEach(item => view.renderAlbumItem(item));


    async function searchId (e) {
        e.stopPropagation();
        if (!e.target.classList.contains('albumHeading')) return;
        const albumId = e.target.closest('[data-id]').getAttribute('data-id');
        const photos = await model.getPhoto(albumId);

        containerSelector.querySelectorAll('*').forEach(n => n.remove());

        photos.forEach(item => view.renderPhoto(item));



    }


    containerSelector.addEventListener('click', searchId);

}



















