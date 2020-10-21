import * as axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '21f61001-8aa3-4320-b917-c2caefa6d06d'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then( response => {
                return response.data;
            })
    },

    unfollow(userId) {
        return axiosInstance.delete(`follow/${userId}`)
            .then( response => {
            return response.data
        })
    },

    follow(userId) {
        return axiosInstance.post(`follow/${userId}`)
            .then( response => {
                return response.data
            })
    }
}
