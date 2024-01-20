export const login = async (username, password) => {
    try {
        const res = await $fetch("http://localhost:8000/login/", {
            method: "POST",
            body: {
                "username": username,
                "password": password,
            }
        });
        return res
    } catch (e) {
        return e
    }
}

export const getTodos = async (token) => {
    try {
        const res = await $fetch("http://localhost:8000/todos/", {
            method: 'GET',
            headers: {
                "Authorization": "Token " + token,
            }
        })
        return res
    } catch (e) {
        return undefined
    }
}