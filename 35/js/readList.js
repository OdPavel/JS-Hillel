'use strict';

void function () {

    const formSelector = '#form';

    const readList = () => {
        const searchInputs = localStorage.getItem(formSelector);
        const body1 = document.querySelector('#someBody');
        if (searchInputs === null) {
            const h1 = document.createElement('h1');
            h1.innerHTML = 'Local Storage is EMPTY';
            body1.append(h1)
            return
        }

        const ul = document.createElement('ul');
        body1.append(ul);

        const data = JSON.parse(searchInputs);
        for (const item in data) {
            const li = document.createElement('li')
            li.textContent = `${item}  =  ${data[item]}`;
            ul.append(li)
        }
    }

    document.addEventListener('DOMContentLoaded', readList);
}()