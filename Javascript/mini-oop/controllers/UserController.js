export class UserController{
    constructor(service){
        this.userService = service;
    }

    index(req, res){
        return this.userService.getAllUser()
    }
}