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
        async authenticateUser(formdata: any) {
            const { data, pending }: any = await fetch("http://localhost:8000/login", {
                method: "post",
                headers: { "Content-Type": "x-www-form-urlencoded" },
                body: formdata
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
        },
    }
})