export class Router {
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