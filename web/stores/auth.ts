import { defineStore } from "pinia";

interface IUser {
    username: string;
    password: string;
}

export const useAuthStore = defineStore("auth", {
    state: () => ({
        authenticated: false,
        loading: false
    }),
    actions: {
        async authenticateUser({ username, password }: IUser) {
            const { data, pending }: any = await useFetch("localhost:8000/login", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: {
                    username,
                    password
                }
            })

            this.loading = pending

            if (data.token) {
                const token = useCookie('token')
                token.value = data?.token
                this.authenticated = true
            }
        },
        logout() {
            const token = useCookie("token")
            this.authenticated = false;
            token.value = null
        }
    }
})