'use strict';

function controller(view, model, payLoad) {
    const formSelector = payLoad.formSelector;
    const form = document.querySelector(formSelector);

    // model.init(formSelector);

    // const fetchFormData = (inputs) => {
    //     let data = inputs;
    //     if (inputs instanceof NodeList) {
    //         data = Array.from(inputs);
    //     }
    //     return data.reduce((acc, item) => {
    //         acc[item.name] = item.value
    //         return acc
    //     },{})
    // }

    const submitHandler = e => {
        e.defaultPrevented();
        console.log(123)
        // even.stopPropagation();
        // const inputs = even.target.querySelectorAll('input');
        // const data = model.setData(fetchFormData(inputs));
        // console.log(data)
    }

    form.addEventListener('submit', submitHandler);


}