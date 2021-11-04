import { fly } from "@/utils/request";

export function signUp({ userName, passWord }) {
    return fly.post('/', {
        userName,
        passWord
    })
}