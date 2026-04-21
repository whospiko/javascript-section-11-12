import {User} from "../entities/User.js";

export class UserRepository{
    constructor(dbConnection){
        this.dbConnection = dbConnection;
    }

    findAll(){
        return this.dbConnection.select('users').map(user=>{
            return new User(
                user.id,
                user.name,
                user.password
            );
        });
    }
}