import {addContactSelector} from "./config.js";

class Model {
    currentId = null;

    getData() {
        return JSON.parse(localStorage.getItem(addContactSelector))
    }

    setData(data) {
        let response = null;
        const todoData = structuredClone(data);
        const savedData = this.getData();
        // if(savedData.includes(data.id)){
        //     savedData.filter(todoItem => todoItem.id !== data.id);
        // }
        this.currentId = savedData ? savedData[savedData.length - 1].id + 1 : 1;

        const dataToSave = savedData ? savedData : [];

        dataToSave.push(todoData);
        todoData.id = this.currentId;

        try {
            localStorage.setItem(addContactSelector, JSON.stringify(dataToSave));
            response = {
                success: true,
                savedData: todoData
            }
            this.currentId += 1;
        } catch (error) {
            response = {
                success: false,
                errors: error
            }
        }
        return response;
    }

    removeContact(id) {
        const data = this.getData();
        const updatedData = data.filter(todoItem => todoItem.id !== id);
        if (updatedData.length) {
            localStorage.setItem(addContactSelector, JSON.stringify(updatedData))
        } else {
            localStorage.removeItem(addContactSelector)
        }
    }
}


export default Model