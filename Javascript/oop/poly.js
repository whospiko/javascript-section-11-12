class Repository{
    findOne(){};
    findAll(){
        console.log("find all repositories");
    }
}

class MongoDbRepository extends Repository{
    findOne() {
        return "mongodb";
    }

    findAll() {
        console.log("find all repositories by mongodb");
    }
}

class PostgresRepository extends Repository{
    findOne() {
        return "postgres";
    }
    findAll(){
        console.log("find all repositories by postgres");
    }
}

const db1 = new MongoDbRepository();
db1.findAll();
db1.findOne();


