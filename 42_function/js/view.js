'use strict';

function view() {
    const createAlbum = (data) => {
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
    const createPhoto = (data) => {
        const wrapperElement = document.createElement('div');
        wrapperElement.classList.add('col-3');
        wrapperElement.innerHTML =
            `<div class="photoWrapper">
                <div class="albumHeading border mb-3 p-3">${data.title}</div>
                <img src='${data.url}' alt="picture from server" class="img mb-3">
            </div>
            `
        return wrapperElement

    }

    return {
        album: null,
        albumContainer: null,

        renderAlbumItem(data) {
            const itemTemplate = createAlbum(data);
            this.albumContainer.append(itemTemplate);
        },

        renderPhoto(data){
            const itemTemplate = createPhoto(data);
            this.albumContainer.append(itemTemplate);
    },

        init(element, container) {
            this.album = element;
            this.albumContainer = container;
        }
    }
}

