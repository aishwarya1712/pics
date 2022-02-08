import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID nQFGWSugBopM6xiXJB4qZpDM7067GVT-nAmN4k2wfWM"
    }
})