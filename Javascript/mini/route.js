class Router {
    constructor() {
        this.routes = {};
    }

    post(path, handler) {
        this.routes[`POST ${path}`] = handler;
    }

    put(path, handler) {
        this.routes[`PUT ${path}`] = handler;
    }

    // handler = callback
    get(path, handler) {
        this.routes[`GET ${path}`] = handler;
    }

    // method POST, PUT,
    handle(method, path, req = {}){
        const handler = this.routes[`${method} ${path}`];

        if (!handler) {
            return { error: "Route not found" };
        }

        return handler(req, {});
    }
}

const router = new Router();

function get(req, res) {
    console.log("test")
}

function create(req, res){
    console.log(req.body)
}

router.get("/users", get)
router.post("/users", create)

console.log(router.routes)

router.handle("GET", "/users")
router.handle("POST", "/users", {
    body: {
        id: "003",
        type: "student",
        name: "New Student",
        email: "new@student.com"
    }
})