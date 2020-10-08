import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: "https://gateway.marvel.com:443/v1/public"
});

export default clienteAxios;

// api key -> f2b9a3277c025b953471c3448f8c8905