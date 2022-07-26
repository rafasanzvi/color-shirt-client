import axios from 'axios'

class UsersService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/users`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getUsers() {
        return this.api.get('/list')
    }

    getOneUser(user_id) {
        return this.api.get(`/${user_id}`)
    }

    editUser(user_id, userData) {
        return this.api.put(`/editUser/${user_id}`, userData)
    }

    deleteUser(user_id) {
        return this.api.delete(`/${user_id}/delete`)
    }

    addToFavorites(shirt_id) {
        return this.api.put(`/addFav/${shirt_id}`)
    }

    removeToFavorites(shirt_id) {
        return this.api.put(`/removeFav/${shirt_id}`)
    }

    getUserShirtFavs() {
        return this.api.get('/getUserFavs')
    }

    addToSubscribed() {
        return this.api.put('/addSubscription')
    }

    removeToSubscribed() {
        return this.api.put('/removeSubscription')
    }

}

const usersService = new UsersService()

export default usersService