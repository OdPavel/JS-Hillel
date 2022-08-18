'use strict';

export class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;

    }

    containerSelector = document.querySelector('#albumItems')

    async start() {

        const album = await this.model.start();
        this.view.init(this.containerSelector);
        this.view.renderTitleAlbum(this.containerSelector);
        album.forEach(item => this.view.renderAlbumItem(item));
        this.containerSelector.addEventListener('click', this.searchId.bind(this))
    }

    async searchId(e) {
        e.stopPropagation();
        if (!e.target.classList.contains('albumHeading')) return;
        const albumId = e.target.closest('[data-id]').getAttribute('data-id');

        const photos = await this.model.getPhoto(albumId);

        this.containerSelector.querySelectorAll('*').forEach(n => n.remove());

        this.view.renderTitlePhoto(this.containerSelector);

        photos.forEach(item => this.view.renderPhoto(item));

        this.view.createBtn(this.containerSelector);

        const btn = document.querySelector('.btn')

        btn.addEventListener('click', this.remove.bind(this))

    }

    async remove() {

        this.containerSelector.querySelectorAll('*').forEach(n => n.remove());
        await this.start()
    }

}



















