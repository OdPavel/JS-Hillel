'use strict';

(function () {

    const ulElement = document.getElementById('ulId');

    let arr = [];
    for (let bodyChild of ulElement.childNodes) {
        if (bodyChild instanceof HTMLElement) {
            // console.log(bodyChild.innerHTML)
            arr.push(bodyChild.innerHTML)
        }
    }
    // console.log(arr)

    let arrAttributesValue = [];
    let arrAttributesName = [];
    for (let elemAttribute of ulElement.attributes) {
        arrAttributesValue.push(elemAttribute.value);
        arrAttributesName.push(elemAttribute.name)

    }
    console.log(arrAttributesValue)
    console.log(arrAttributesName)

    const $elem = document.querySelectorAll('ul li:last-child');
    let a = Array.from($elem);

    a[a.length-1].innerHTML = 'Привет меня зовут ' + 'Паша'


    document.querySelector('ul li:first-child').setAttribute('data-my-name', 'Pavel')

    document.querySelector('ul').removeAttribute('data-dog-tail');
    

})()