import { login } from "~/services/api"

export const useLoginStore = defineStore("loginStore", {
    state: () => ({
        username: '',
        password: '',
        message: '',
    }),
    actions: {
        async submitForm() {
            console.log(this.username, this.password)
            const res: any = await login(this.username, this.password)

            if (res.token == undefined) {
                this.message = "Incorrect username or password"
            } else {
                localStorage.setItem("auth_token", res.token)
                navigateTo("/")
            }
        }
    }
})