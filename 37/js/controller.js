'use strict';

function controller(view, model, payLoad) {
    const formSelector = payLoad.formSelector;
    const form = document.querySelector(formSelector);
    const todoContainerSelector = payLoad.todoContainerSelector;
    const todoContainer = document.querySelector(todoContainerSelector);
    model.init(formSelector);
    view.init(form, todoContainer);

    const fetchFormData = (inputs) => {
        let data = inputs;
        if (inputs instanceof NodeList) {
            data = Array.from(inputs);
        }
        return data.reduce((acc, item) => {
            acc[item.name] = item.value;
            return acc
        }, {});
    }

    const submitHandler = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const inputs = document.querySelectorAll('input, textarea');
        const data = model.setDate(fetchFormData(inputs));

        if (!data.success) throw new Error('Something went wrong while saving data');
        view.renderTodo(data.savedData);
        view.clearTodo();
    }

    const loadHandler = () => {
        const todoItems = model.getData();
        if (!todoItems) return;
        todoItems.forEach((item) => view.renderTodo(item));
    }

    const removeTodoHandler = (event) => {
        event.stopPropagation();
        if (!event.target.classList.contains('remove')) return;
        const todoId = +event.target.closest('[data-todo-id]').getAttribute('data-todo-id');
        model.removeTodoItem(todoId);
        // model.statusTodoHandler(todoId)
        view.removeTodoItem(todoId);
    }

    const statusTodoHandler = (e) => {
        e.stopPropagation();
        if (!e.target.classList.contains('options')) return;
        const todoStatus = e.target.value;
        const todoId = +e.target.closest('[data-todo-id]').getAttribute('data-todo-id');
        model.statusTodoHandler(todoStatus, todoId);

    }


    form.addEventListener('submit', submitHandler);
    window.addEventListener('DOMContentLoaded', loadHandler);
    todoContainer.addEventListener('click', removeTodoHandler);
    todoContainer.addEventListener('change', statusTodoHandler);

}