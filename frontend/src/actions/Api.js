import axios from "axios";

class Api {

    BASE_URL = 'http://localhost:8000';

    async get(url) {
        const response = await axios.get(`${this.BASE_URL}${url}`);
        return response.data;
    }

    // async post

    // async delete
}

export default Api;