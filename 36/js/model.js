'use strict';

function model() {
    return {
        dbName: null,
        currentId: null,

        setDBName(key) {
            if (!key.trim()) throw new Error('its not possible');
            this.dbName = key;
        },

        getData() {
            return JSON.parse(localStorage.getItem(this.dbName));
        },

        setData(data) {
            let response = null;
            const todoData = structuredClone(data);
            const saveData = this.getData();
            const todoSave = saveData ? saveData : [];

            todoSave.push(todoData);
            todoData.id = this.currentId;
            try {
                localStorage.setItem(this.dbName, JSON.stringify(todoSave));
                response = {success: true, savedData: todoData}
                this.currentId += 1;
            } catch (error) {
                response = {success: false, errors: error}
            }
            return response;
        },

        removeTodoHandler(id) {
            const data = this.getData();
            const updateData = data.filter(todoItem => todoItem.id !== id);
            if (updateData.length) {
                localStorage.setItem(this.dbName, JSON.stringify(updateData));
            } else {
                localStorage.removeItem(this.dbName);
            }

        },

        init(dpKey) {
            this.setDBName(dpKey);
            const saveData = this.getData();
            this.currentId = saveData ? saveData[saveData.length - 1].id + 1 : 1;
        }
    }
}



















