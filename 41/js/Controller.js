import {addContactSelector, addContactModalTitle, watchContact, addCartItems} from "./config.js";

class Controller {
    #model = null;
    #view = null;

    constructor(Model, View) {
        this.model = Model;
        this.view = View;
    }


    init() {
        this.#handelContactAddBtn();
    }

    #handelContactAddBtn() {
        document.querySelector(addContactSelector)
            .addEventListener('click', this.#contactAddBtnHandler);
        window.addEventListener('DOMContentLoaded', this.#loadHandler.bind(this));

    }

    #contactAddBtnHandler = (e) => {
        e.stopPropagation();
        const addContactForm = this.#view.createAddContactForm();
        addContactForm.addEventListener('submit', this.#addContactFormHandler);

        this.#view.modalHeader = addContactModalTitle;
        this.#view.modalBody = addContactForm;

        this.#view.openModal()
    }

    #addContactFormHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const {target} = e;

        const inputs = target.querySelectorAll('input');
        const data = Array.from(inputs)
            .reduce((acc, input) => {
                acc[input.name] = input.value
                return acc
            }, {});

        const dataSaved = this.#model.setData(data);
        this.#view.renderCard(dataSaved.savedData);


        this.#view.closeModal();
        setTimeout(() => {
            this.#view.modalHeader = '';
            this.#view.clearModalBody();
        }, 150);

        target.removeEventListener('submit', this.#addContactFormHandler)

    }

    #loadHandler() {
        const todoItems = this.#model.getData();
        if (!todoItems) return;
        todoItems.forEach((item) => this.#view.renderCard(item));

        document.querySelector(addCartItems)
            .addEventListener('click', this.watchInfo);

    }

    watchInfo = (e) => {
        e.stopPropagation();
        if (!e.target.classList.contains('bi-eye')) return;

        const cardId = +e.target.closest('[data-card-id]').getAttribute('data-card-id');
        const getData = this.#model.getData();
        const objFromArr = getData.find(todoIndex => todoIndex.id === cardId);

        const addContactForm = this.#view.createAddContactForm();
        this.#view.modalHeader = watchContact;

        getData.forEach((input) => {
            this.#view.createAddContactForm[input.value] = input.name
        });

        this.#view.modalBody = addContactForm;
        this.#view.openModal()


    }

    set model(ModelClass) {
        if (this.#model) throw new Error('Model is already been declared');
        if (!ModelClass) throw new Error('Model is invalid');
        this.#model = new ModelClass()
    }

    set view(ViewClass) {
        if (this.#view) throw new Error('View is already been declared');
        if (!ViewClass) throw new Error('View is invalid')
        this.#view = new ViewClass()
    }

}


export default Controller