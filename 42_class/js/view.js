'use strict';

export class View {

    createAlbum = (data) => {
        const wrapperElement = document.createElement('div');
        wrapperElement.classList.add('col-3');
        wrapperElement.setAttribute('data-id', data.id);
        wrapperElement.innerHTML =
            `<div class="albumWrapper">
                <div class="albumHeading border mb-3 p-3">${data.title}</div>
            </div>
            `
        return wrapperElement

    }
    createPhoto = (data) => {
        const wrapperElement = document.createElement('div');
        wrapperElement.classList.add('col-3');
        wrapperElement.innerHTML =
            `<div class="photoWrapper">
                <div class="albumHeading border mb-3 p-3">${data.title}</div>
                <img src='${data.url}' alt="picture from server" class="img mb-3 w-100">
            </div>
            `
        return wrapperElement
    }

    createBtn = (container) => {
        const buttonBack = document.createElement('div');
        buttonBack.classList.add('col-12');
        buttonBack.innerHTML = `<button class="btn btn-danger text-uppercase d-block my-4 mx-auto px-5">back</button>`
        container.append(buttonBack)
    }

    renderTitleAlbum = (container) => {
        const title = document.createElement('div');
        title.innerHTML = `<h1 class="text-center mt-5 mb-5 text-uppercase text-info">albums</h1>`
        container.append(title)
    }
    renderTitlePhoto = (container) => {
        const title = document.createElement('div');
        title.innerHTML = `<h1 class="text-center mt-5 mb-5 text-uppercase text-info">Photos</h1>`
        container.append(title)
    }

    albumContainer = null

    renderAlbumItem(data) {
        const itemTemplate = this.createAlbum(data);
        this.albumContainer.append(itemTemplate);
    }

    renderPhoto(data) {

        const itemTemplate = this.createPhoto(data);
        this.albumContainer.append(itemTemplate);
    }

    init(container) {
        this.albumContainer = container;
    }

}


