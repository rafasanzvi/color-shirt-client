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

}

const shirtsService = new ShirtService()

export default shirtsService