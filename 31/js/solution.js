'use strict';

(function () {
    const bodyChilds =document.body.childNodes;

    const ul = bodyChilds[1];
    // console.log(ul);
    const arrUl = Array.from(ul.childNodes);
    // console.log(arrUl);

    let sum = 0;
    let arrNew = [];
    for (let x of arrUl) {

        if (x instanceof HTMLElement) {
            console.log(x.innerHTML);
            sum += 1;
            arrNew.push(x.innerHTML)
        }
    }

    console.log(`Общее количество элементов ${sum}`);
    console.log(arrNew);

})();

