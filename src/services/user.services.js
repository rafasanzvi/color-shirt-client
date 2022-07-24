import axios from 'axios'

class UsersService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/users`
        })
    }

    getUsers() {

        return this.api.get('/list')

    }

    getOneUser(user_id) {

        return this.api.get(`/${user_id}`)

    }

}

const usersService = new UsersService()

export default usersService