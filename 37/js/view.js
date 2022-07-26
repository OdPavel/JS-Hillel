'use strict';

function view() {
    function createForm(data) {
        const wrapperElement = document.createElement('div');
        wrapperElement.classList.add('col-4');
        wrapperElement.setAttribute('data-todo-id', data.id);
        wrapperElement.setAttribute('data-status', data.status)
        console.log(data)
        wrapperElement.innerHTML =
            ` <div class="taskWrapper">
                  <div class="taskHeading">${data.title}</div>
                  <div class="taskDescription mb-3">${data.description}</div>
                  <select class="todo__options options">
                      <option value="active" ${data.status === 'active' ? 'selected' : ''}>активные</option>
                      <option value="completed" ${data.status === 'completed' ? 'selected' : ''}>завершеные</option>
                      <option value="deleted" ${data.status === 'deleted' ? 'selected' : ''}>удаленные</option>
                  </select>
                  <button class="btn btn-danger remove">Remove</button>
              </div>
        `
        return wrapperElement
    }

    return {
        form: null,
        todosContainer: null,
        renderTodo(data) {
            const itemTemplate = createForm(data);
            this.todosContainer.append(itemTemplate);
        },

        removeTodoItem(id) {
            document.querySelector(`[data-todo-id = "${id}"]`).remove();
        },

        clearTodo() {
            this.form.reset();
        },

        init(formElement, todoContainer) {
            this.form = formElement;
            this.todosContainer = todoContainer;
        }
    }
}