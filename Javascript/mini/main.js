class User {
    constructor(name, email) {
        if (new.target === User) {
            throw new Error("Cannot instantiate abstract class");
        }

        this.name = name;
        this.email = email;
    }

    getProfile() {
        throw new Error("Must implement getProfile()");
    }
}

class Student extends User {
    #courses = [];

    constructor(name, email, id) {
        super(name, email);
        this.id = id;
    }

    enroll(course) {
        this.#courses.push(course);
    }

    getProfile() {
        return {
            id: this.id,
            role: "student",
            name: this.name,
            email: this.email,
            courses: this.#courses
        };
    }
}

class Lecturer extends User {
    constructor(name, email, id) {
        super(name, email);
        this.id = id;
    }

    getProfile() {
        return {
            id: this.id,
            role: "lecturer",
            name: this.name,
            email: this.email
        };
    }
}

class UserFactory {
    static registry = {};

    static register(type, classRef) {
        this.registry[type] = classRef;
    }

    static create(row) {
        const ClassRef = this.registry[row.type];

        if (!ClassRef) {
            throw new Error(`Unsupported user type: ${row.type}`);
        }

        return new ClassRef(row.name, row.email, row.id);
    }
}

UserFactory.register("student", Student);
UserFactory.register("lecturer", Lecturer);

console.log(UserFactory.registry)

class Database {
    constructor() {
        this.connected = false;

        this.data = {
            users: [
                { id: "001", type: "student", name: "Piko", email: "piko@mail.com" },
                { id: "002", type: "lecturer", name: "Dr. Smith", email: "smith@mail.com" }
            ]
        };
    }

    connect() {
        console.log("Connecting to database...");
        this.connected = true;
        console.log("Database connected ✅\n");
    }

    getTable(table) {
        if (!this.connected) {
            throw new Error("DB not connected");
        }

        return this.data[table];
    }
    insert(table, row) {
        if (!this.connected) {
            throw new Error("DB not connected");
        }

        this.data[table].push(row);
        return row;
    }
}

class UserRepository {
    constructor(db) {
        this.db = db;
    }

    findAll() {
        const rows = this.db.getTable("users");
        console.log(rows);
        return rows.map(row => UserFactory.create(row));
    }

    findById(id) {
        const rows = this.db.getTable("users");
        const row = rows.find(r => r.id === id);

        return row ? UserFactory.create(row) : null;
    }

    create(data) {
        const row = {
            id: data.id,
            type: data.type,
            name: data.name,
            email: data.email
        };

        this.db.insert("users", row);

        return UserFactory.create(row);
    }
}

class UserController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    index(req, res) {
        const users = this.userRepository.findAll();
        return users.map(user => user.getProfile()); // polymorphism
    }

    show(req, res) {
        const user = this.userRepository.findById(req.params.id);

        if (!user) {
            return { error: "User not found" };
        }

        return user.getProfile();
    }

    create(req, res) {
        const { id, type, name, email } = req.body;

        if (!id || !type || !name || !email) {
            return { error: "Invalid input" };
        }

        try {
            const user = this.userRepository.create({
                id,
                type,
                name,
                email
            });

            return {
                message: "User created",
                data: user.getProfile()
            };

        } catch (e) {
            return { error: e.message };
        }
    }
}

class Router {
    constructor() {
        this.routes = {};
    }

    post(path, handler) {
        this.routes[`POST ${path}`] = handler;
    }

    get(path, handler) {
        this.routes[`GET ${path}`] = handler;
    }

    handle(method, path, req = {}) {
        const handler = this.routes[`${method} ${path}`];

        if (!handler) {
            return { error: "Route not found" };
        }

        return handler(req, {});
    }
}

// ===============================
// 🚀 SERVER BOOTSTRAP
// ===============================

// Init DB
const db = new Database();
db.connect();

// Init Repository
const userRepository = new UserRepository(db);

// Init Controller
const userController = new UserController(userRepository);

// Init Router
const router = new Router();

// Register routes
router.get("/users", (req, res) => userController.index(req, res));
router.get("/users/show", (req, res) => userController.show(req, res));
router.post("/users/create", (req, res) => userController.create(req, res));

// ===============================
// 📡 SIMULATE API REQUESTS
// ===============================

console.log("GET /users");
console.log(router.handle("GET", "/users"));

console.log("\nGET /users/show?id=001");
console.log(
    router.handle("GET", "/users/show", {
        params: { id: "001" }
    })
);

console.log("\nGET /users/show?id=002");
console.log(
    router.handle("GET", "/users/show", {
        params: { id: "002" }
    })
);

console.log("\nPOST /users/create");
console.log(
    router.handle("POST", "/users/create", {
        body: {
            id: "003",
            type: "student",
            name: "New Student",
            email: "new@student.com"
        }
    })
);

console.log("GET /users");
console.log(router.handle("GET", "/users"));


console.log("------------------------------------")
console.log(db.data)

