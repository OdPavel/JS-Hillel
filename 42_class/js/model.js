'use strict';

export class Model {

    async start() {
        const API_URL = 'https://jsonplaceholder.typicode.com/albums';
        const response = await fetch(API_URL);

        return await response.json()
    }

    async getPhoto(id) {
        const API_URL_PHOTO = `https://jsonplaceholder.typicode.com/photos` + `?albumId=${id}`;
        const response = await fetch(API_URL_PHOTO);

        return await response.json()
    }

}


















