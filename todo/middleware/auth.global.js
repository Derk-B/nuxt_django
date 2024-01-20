export default defineNuxtRouteMiddleware(async (to, from) => {
    if (process.client) {
        const token = localStorage.getItem("refreshToken")
    
        console.log(token)
        console.log(process)

        if (to.path === "/login") {
            console.log("moving to login")
            return
        } else if(token == null) {
            return await navigateTo("/login")
        }
    }
})