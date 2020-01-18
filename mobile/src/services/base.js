import axios from "axios";
import { baseUrl } from "./base-url";

const api = axios.create({
    baseURL: baseUrl
})

export { api }
