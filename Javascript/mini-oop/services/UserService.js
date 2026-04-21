export class UserService{
    constructor(userRepo){
        this.userRepo = userRepo;
    }

    getAllUser(){
        return this.userRepo.findAll();
    }
}