import { publicAPI } from "..";

export class ProductsAPI {
    static async getProducts() {
        const {data} = await publicAPI.get('/product');
        return data;
    }
    static async getSingleProduct(id: string) {
        const {data} = await publicAPI.get(`/product/${+id}`);
        return data;
    }
}