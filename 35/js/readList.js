'use strict';

void function () {

    const formSelector = '#form';
    const form = document.querySelector(formSelector);
    const readList = () => {
        let body1 = document.querySelector('#someBody');
        if (localStorage.getItem(formSelector) === null) {
            const h1 = document.createElement('h1');
            h1.innerHTML = 'Local Storage Empty';
            body1.append(h1)
            return
        }

        let ul = document.createElement('ul');
        body1.append(ul);

        const data = JSON.parse(localStorage.getItem(formSelector));
        for (const item in data) {
            const li = document.createElement('li')
            li.textContent = `${item}  =  ${data[item]}`;
            ul.append(li)
        }
    }

    document.addEventListener('DOMContentLoaded', readList);
}()