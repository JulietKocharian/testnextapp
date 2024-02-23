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

    static async sendEmail(email: string) {
        const url = '/code';
        const body = {email};
        const {data} = await publicAPI.post(url, body);
        return data;
    }

    static async sendCode(code: number, password: string, email: string) {
        const url = '/code';
        const body = {code, password, email};
        const {data} = await publicAPI.put(url, body);
        return data;
    }
}