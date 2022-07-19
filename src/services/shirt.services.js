import axios from 'axios'

class ShirtService {

    constructor() {
        this.api = axios.create({
            baseURL: `http://localhost:5005/api/shirts`
        })
    }

}