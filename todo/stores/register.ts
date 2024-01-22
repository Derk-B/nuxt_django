import { register } from "~/services/api"

export const useRegisterStore = defineStore("registerStore", {
    state: () => ({
        username: '',
        password: '',
        message: '',
    }),
    actions: {
        async submitForm() {
            console.log(this.username, this.password)
            const res: any = await register(this.username, this.password)

            console.log(res)
            if (res.token == undefined) {
                this.message = "Incorrect username or password"
            } else {
                localStorage.setItem("auth_token", res.token)
                navigateTo("/")
            }
        }
    }
})