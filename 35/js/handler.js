'use strict';


(function () {


    const formSelector = '#form';
    const form = document.querySelector(formSelector);


        const submitHandler = (event) => {
            event.preventDefault();
            const inputs = event.target.querySelectorAll('input, textarea, select');

            const data = {};
            for (const item of inputs) {
                data[item.name] = item.value;
            }

            const dataString = JSON.stringify(data);
            localStorage.setItem(formSelector, dataString)
        }
        form.addEventListener('submit', submitHandler);





})()
