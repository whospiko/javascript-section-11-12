import {DB} from "./index.js";
const mockDb = new DB()

const testGetUsers = () => {
    const data = mockDb.select('users')
    console.log(data)
}

const testCreateUser = () => {
    const payload = {
        id: 4,
        name: 'John Doe',
        password: '123456',
    }
    mockDb.insert('users', payload)
}

testGetUsers()
testCreateUser()
testGetUsers()