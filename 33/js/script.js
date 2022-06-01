'use strict';

(function () {

    const generateUl = function (array) {

        function generateList(array, elem) {

            for (let i = 0; i < array.length; i++) {
                let li = document.createElement('li');
                if (Array.isArray(array[i])) {
                    let innerUl = document.createElement('ul');
                    li.append(generateList(array[i], innerUl));
                } else {
                    li.innerHTML = array[i];
                }
                elem.append(li)
            }

            return elem;

        }

        return generateList(array, document.createElement('ul'))
    }


    let arrNumbers = [1, [1.1, 1.2, 1.3], 2, 3];
    let someValue = generateUl(arrNumbers);
    document.body.prepend(someValue);




})()