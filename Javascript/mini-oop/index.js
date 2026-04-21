import {Router} from "./routes/Router.js"
import {UserService} from "./services/UserService.js";
import {UserRepository} from "./repositories/UserRepository.js";
import {UserController} from "./controllers/UserController.js";
import {DB} from './db/index.js'

const db = new DB()
const userRepo = new UserRepository(db)
const userService = new UserService(userRepo)
const userController = new UserController(userService)

const router = new Router();

// define route
router.get("/users",(req, res) => userController.index(req, res));

// simulate route
console.log(
    router.handle("GET", "/users")
)

