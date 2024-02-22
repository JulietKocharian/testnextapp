import { publicAPI } from "..";

export class ProductsAPI {
    static async getProducts() {
        const {data} = await publicAPI.get('/entries');
        return data;
    }
}