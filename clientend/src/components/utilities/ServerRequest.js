import axios from "axios";


const ServerRequestProtected = (endpoint, method, payload) => {
    let token = "testtoken"
    // get token from redux 
    const authorizationTokenHeader = token
        ? {
            Authorization: `Bearer ${token}`,
        }
        : {}
    const axiosConfigation = {
        method,
        url: endpoint,
        data: payload,
        headers: {
            Accept: '*/*',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Access-Control-Max-Age': '6000',
            'Access-Control-Allow-Headers': '*',

            ...authorizationTokenHeader,
        },
    }

    return new Promise((resolve, reject) => {
        axios(axiosConfigation)
            .then((res) => {
                resolve(res.data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

const ServerRequestPublic = (endpoint, method, payload) => {

    // axios obj
    const axiosConfigation = {
        method,
        url: endpoint,
        data: payload,
        headers: {
            Accept: '*/*',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Access-Control-Max-Age': '6000',
            'Access-Control-Allow-Headers': '*',
        },
    }
    console.log(axiosConfigation);
    return new Promise((resolve, reject) => {
        axios(axiosConfigation)
            .then((res) => {
                resolve(res.data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}


export { ServerRequestProtected, ServerRequestPublic }