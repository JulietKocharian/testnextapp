import { publicAPI } from "..";

export class UserAPI {
    static async login(email: string, password: string) {
        const url = '/user/login';
        const body = { email, password };
        const {data} = await publicAPI.post(url, body);
        return data;
    }
}