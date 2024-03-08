import { publicAPI } from "@/src/API/index";

export class UserAPI {
    static async signIn(email: string, password: string) {
        try{
            const url = '/user/login';
            const body = { email, password };
            const { data } = await publicAPI.post(url, body);
            return data;
        }catch(e) {
            return e
        }
    }

    static async signUp(email: string, password: string) {
        try{
            const url = '/user/registration';
            const body = { email, password };
            const { data } = await publicAPI.post(url, body);
            return data;
        } catch(e) {
            return e
        }
    }

    static async sendEmail(email: string) {
        try {
            const url = '/code';
            const body = { email };
            const { data } = await publicAPI.post(url, body);
            return data;
        } catch(e) { return e}
    }

    static async sendCode(code: number, password: string, email: string) {
        try {
            const url = '/code';
            const body = { code, password, email };
            const { data } = await publicAPI.put(url, body);
            return data;
        } catch(e) {
            return e
        }
    }

    static async getUserInfo(token: string) {
        try {
            const url = '/user/profile';
            const headers = { Authorization: `Bearer ${token}` };
            const { data } = await publicAPI.get(url, { headers })
            return data
        } catch(e) {
            return e;
        }
    }
}