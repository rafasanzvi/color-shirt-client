import axios from 'axios'

class ShirtService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/shirts`
        })
    }

    getShirts() {

        return this.api.get('/list')

    }
    getOneShirt(shirt_id) {

        return this.api.get(`/${shirt_id}`)

    }
    saveShirt(shirtData) {
        return this.api.post('/create', shirtData)
    }

    editShirt(shirt_id, shirtData) {
        return this.api.post(`/${shirt_id}`, shirtData) /* /: shirt_id / edit */
    }
}

const shirtsService = new ShirtService()

export default shirtsService