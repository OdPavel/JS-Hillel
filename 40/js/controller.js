export class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    start() {

        const form = document.getElementById('formAdd')
        form.addEventListener('submit', this.submitHandler)
    }

    submitHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();

    }
}
