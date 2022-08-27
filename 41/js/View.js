import {addContactSelector, addCartItems} from "./config.js";

class View {
    #modal = null;
    #modalHeader = null;
    #modalBody = null;

    constructor() {
        const modalWindow = this.#createModal()
        this.#modal = new bootstrap.Modal(modalWindow, {
            backdrop: 'static'
        })

    }

    openModal() {
        this.#modal.show();
    }

    closeModal() {
        this.#modal.hide();
    }

    set modalHeader(value) {
        if (typeof value !== 'string') throw new Error('Modal header should be a string')
        this.#modalHeader.innerHTML = value;
    }

    createAddContactForm() {
        const form = document.createElement('form');
        form.innerHTML =
            `<div class="mb-3">
              <label for="contact-name" class="form-label">Contact Name</label>
              <input name="name" type="text" class="form-control" id="contact-name" placeholder="John Doe">
            </div>
            <div class="mb-3">
              <label for="phone-number" class="form-label">Phone number</label>
              <input name="phoneNumber" class="form-control" type="tel" id="phone-number" placeholder="012 345 67 89">
            </div>
            <div class="mb-3">
              <label for="position" class="form-label">Position</label>
              <input name="position" class="form-control" type="text" id="position" placeholder="Developer">
            </div>
            <div>
            <button class="btn btn-success" type="submit">Add contact</button>
            <button class="btn btn-danger" type="reset">Reset form</button>
</div>
`

        return form;
    }

    #createModal() {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.classList.add('fade');
        modal.id = 'modal';
        modal.innerHTML = `<div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header"></div>
                  <div class="modal-body"></div>        
                </div>     
            </div>`;
        this.#modalHeader = modal.querySelector('.modal-header');
        this.#modalBody = modal.querySelector('.modal-body');
        document.body.append(modal);
        return modal;
    }

    set modalBody(value) {
        if (!(value instanceof HTMLFormElement)) throw new Error('Modal Body should be a HTML Form')
        this.#modalBody.append(value);
    }

    clearModalBody () {
        this.#modalBody.innerHTML = '';
    }

    createCard(data){
        const card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('mb-2');
        card.setAttribute('data-card-id', data.id)
        card.innerHTML = `<div class="card-body d-flex justify-content-between align-items-center">
            <div class="contact-name">${data.name}</div>
            <div class="contact-controls">
              <button class="btn btn-warning btn-sm">
                <i class="bi bi-pen "></i>
              </button>
              <button class="btn btn-primary btn-sm" id="btnEye">
                <i class="bi bi-eye "></i>
              </button>
              <button class="btn btn-success btn-sm">
                <i class="bi bi-telephone"></i>
              </button>
            </div>
          </div>`
        return card
    }

    renderCard(data){
        const itemTemplate = this.createCard(data);
        const addCart = document.querySelector(addCartItems);
        addCart.append(itemTemplate)
    }

}

export default View