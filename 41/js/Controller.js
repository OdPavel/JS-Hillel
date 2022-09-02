import {addContactSelector, addContactModalTitle, watchContact, addCartItems, modalWindow} from "./config.js";

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

        document.querySelector(addCartItems)
            .addEventListener('click', this.correctCard);

        document.querySelector(addCartItems)
            .addEventListener('click', this.removeContactHandler);


    }

    searchId(e){
        return +e.target.closest('[data-card-id]').getAttribute('data-card-id')
    }

    watchInfo = (e) => {
        e.stopPropagation();
        if (!e.target.classList.contains('bi-eye')) return;
        const cardId = this.searchId(e);
        const getData = this.#model.getData();
        const objFromArr = getData.find(todoIndex => todoIndex.id === cardId);
        const showContactInfo = this.#view.createWatchingInfo(objFromArr);
        this.#view.modalHeader = watchContact;
        this.#view.modalBody = showContactInfo;

        this.#view.openModal()
        showContactInfo.addEventListener('click', this.closeInfo)

    }

    closeInfo = (e) => {
        e.stopPropagation();
        const {target} = e;
        if (!e.target.classList.contains('btn-close-info')) return;
        this.#view.closeModal();
        setTimeout(() => {
            this.#view.modalHeader = '';
            this.#view.clearModalBody();
        }, 150);
        target.removeEventListener('click', this.watchInfo)
    }

    correctCard = (e) => {
        e.stopPropagation();
        if (!e.target.classList.contains('bi-pen')) return;
        const cardId = this.searchId(e);
        const getData = this.#model.getData();
        const objFromArr = getData.find(todoIndex => todoIndex.id === cardId);

        const addContactForm = this.#view.createAddContactForm(objFromArr);
        this.#view.modalHeader = watchContact;

        this.#view.modalBody = addContactForm;
        this.#view.openModal();

        addContactForm.addEventListener('submit', this.#addContactFormHandler);

        // getData.push(objFromArr)


        // localStorage.setItem(addContactSelector, JSON.stringify(getData))


    }

    removeContactHandler = (e) => {
        e.stopPropagation();
        if (!e.target.classList.contains('bi-x')) return;
        const cardId = this.searchId(e);
        this.#model.removeContact(cardId);
        this.#view.removeCard(cardId)
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