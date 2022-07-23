import axios from 'axios'

class UserService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/users`
        })
    }

    getUser() {

        return this.api.get('/list')

    }

    getOneUser(user_id) {

        return this.api.get(`/${user_id}`)

    }

}

const usersService = new UserService()

export default usersService