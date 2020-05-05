import axios from 'axios'

const apiClient = axios.create({
    baseURL: `https://api.jsonbin.io/b/5eb1a040a47fdd6af15e084b/18`,
    withCredentials: false, // This is the default
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
}
)

export default {
    getData() {
        return apiClient.get('/')
    }
}
