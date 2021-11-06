import axios from "axios";


export class ServerConnection {
    connection;
    constructor() {
        this.createConnection()
    }

    createConnection = () => {
        this.connection = axios.create({
            baseURL: "http://localhost:9876",
            timeout: 60000
        })
    }
}