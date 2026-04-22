class DBConnection {
    connect = false
    constructor() {
        if (DBConnection.instance) {
          return DBConnection.instance;
        }
        DBConnection.instance = this;
  }
}

const db = new DBConnection();
const db1 = DBConnection.instance
const db2 = new DBConnection();

console.log(db.connect)
console.log(db1.connect)
console.log(db2.connect)

db.connect = true;
console.log(db1.connect)
console.log(db2.connect)