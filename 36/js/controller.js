'use strict';

function controller(view, model, payload) {
    const formSelector = payload.formSelector;
    const form = document.querySelector(formSelector);
    const todoContainerSelector = payload.todosContainerSelector;
    const todosContainer = document.querySelector(todoContainerSelector);

    model.init(formSelector);
    view.init(form, todosContainer);

    const fetchFormData = (inputs) => {
        let data = inputs;
        if (inputs instanceof NodeList) {
            data = Array.from(inputs);
        }
        return data.reduce((acc, item) => {
            acc[item.name] = item.value
            return acc
        }, {});
    };

    const submitHandler = e => {
        e.preventDefault();
        e.stopPropagation();
        const inputs = form.querySelectorAll('input, textarea');
        const data = model.setData(fetchFormData(inputs));

        if (!data.success) throw new Error('Something went wrong while saving data');

        view.renderTodoItem(data.savedData);

        view.todoClean();
    };

    const loadHandler = () => {
        const todoItem = model.getData();
        if (!todoItem) return;
        todoItem.forEach(item => view.renderTodoItem(item))
    };

    const removeTodoHandler = (e) => {
        e.stopPropagation();
        if (!e.target.classList.contains('remove')) return;
        const todoId = +e.target.closest('[data-todo-id]').getAttribute('data-todo-id');
        model.removeTodoHandler(todoId);
        view.removeTodoItem(todoId);
    }

    form.addEventListener('submit', submitHandler);
    window.addEventListener('DOMContentLoaded', loadHandler);
    todosContainer.addEventListener('click', removeTodoHandler);
}






















