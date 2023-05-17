import axios from "axios";

export default class UsuarioService {
    url = "http://localhost:8082/usuario"

    getAll(){
        return axios.get(this.url);
    }

    save(user) {
        return axios.post(this.url + "/save", user)
    }
}