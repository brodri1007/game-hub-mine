import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key :'78933dfec9ff4528a0f83e373f5469ad'
    }
})