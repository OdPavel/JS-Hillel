'use strict';

function model() {
    return {
        dbName: null,
        setDbName(key){
            if(!key.trim()) throw new Error('Its not possible')
            this.dbName = key;
            // console.log(this.dbName)
        },

        // setData(data){
        //     localStorage.setItem(this.dbName, JSON.stringify(data));
        //     console.log(data)

        // },

        init(dbKey){
            this.setDbName(dbKey)
        }

    }
}