import Axios from 'axios';

const api = Axios.create({
    baseURL: '/api/',
});

const chatAPI = {

    sendMessage: (username, text) => {
        let msg = {
            sender: username,
            content: text
        }

        return api.post(`send`, msg);
    }
}

export default chatAPI;
