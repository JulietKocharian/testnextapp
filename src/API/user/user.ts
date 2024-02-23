import { publicAPI } from "..";

export class UserAPI {
    static async signIn(email: string, password: string) {
        const url = '/user/login';
        const body = { email, password };
        const {data} = await publicAPI.post(url, body);
        return data;
    }

    static async signUp(email: string, password: string) {
        const url = '/user/registration';
        const body = {email, password};
        const {data} = await publicAPI.post(url, body);
        return data;
    }
}