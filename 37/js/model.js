'use strict';

function model() {
    return {
        dbName: null,
        currentID: null,
        setDBName(key) {
            if (!key.trim()) throw new Error('its not possible');
            this.dbName = key;
        },

        getData() {
            return JSON.parse(localStorage.getItem(this.dbName));
        },

        setDate(data) {
            let response = null;
            const todoData = structuredClone(data);
            const savedData = this.getData();
            const todoSave = savedData ? savedData : [];

            todoSave.push(todoData);
            todoData.id = this.currentID;

            try {
                localStorage.setItem(this.dbName, JSON.stringify(todoSave));
                response = {
                    success: true,
                    savedData: todoData
                }
                this.currentID += 1;
            } catch (error) {
                response = {
                    success: false,
                    errors: error
                }
            }
            return response;
        },

        removeTodoItem(id) {
            const data = this.getData();
            const updatedData = data.filter(todoItem => todoItem.id !== id);
            if (updatedData.length) {
                localStorage.setItem(this.dbName, JSON.stringify(updatedData))
            } else {
                localStorage.removeItem(this.dbName)
            }
        },

        statusTodoHandler(id) {
            const data = this.getData();
            if(!data.length) return;
            const index = data.findIndex(todoIndex => todoIndex.id === id);
            // const status = data.
            console.log(index)
        },

        init(dbKey) {
            this.setDBName(dbKey);
            const savedData = this.getData();
            this.currentID = savedData ? savedData[savedData.length - 1].id + 1 : 1;
        }

    }
}