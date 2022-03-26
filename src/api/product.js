import axios from "axios";

const client = axios.create({
    baseURL: process.env.VUE_APP_ADDRESS,
    json: true
});
export default {
    async execute(method, resource, data, headers = {}) {
        return client({
            crossdomain: true,
            headers: headers,
            method,
            url: resource,
            data
        }).then(
            (response) => {
                return response.data
            },
            (error) => {
                if (process.env.VUE_APP_SHOW_API_ERRORS) {
                    console.log('Ошибка в запросе по пути ' + resource + ' | status: ' + error.request.status)
                }
            }
        )
    },


};