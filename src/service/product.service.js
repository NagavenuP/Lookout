/**
 * @description Products service.
 */

import { ServerConnection } from "./index";
import store from "../store/index";
class Products extends ServerConnection {
   
    /**
    * @description get products from server
    * @returns {*} list of products
    */
    getProducts = () => {
        const state = store.getState();
        if (state?.items?.list?.length) {
            return new Promise((resolve) => {
                resolve({ data: state?.items?.list })
            })
        }
        return this.connection.get("/products");
    }
}

export const productsInstance = new Products();