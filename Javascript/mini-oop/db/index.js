export class DB {
    constructor() {
        this.data = {
            "users": [
                {id: 1, name: "u1", "password": "p123456789"},
                {id: 2, name: "u2", "password": "p123456789"},
                {id: 3, name: "u3", "password": "p123456789"},
            ],
            "posts": [
                {id: 1, title:"hello world!", content: "Hello world!", user_id: 1},
                {id: 2, title:"world!", content: "World!", user_id: 2}
            ]
        }
    }

    select(table){
        return this.data[table]
    }

    insert(table, data){
        let dataTable = this.data[table]
        dataTable.push(data)
    }
}