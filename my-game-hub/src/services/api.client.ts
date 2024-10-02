import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key :'86e7992218a14a32b0640613f8ffa53c'
    }
})