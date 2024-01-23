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

export const logout = async () => {
    try {
        const token = localStorage.getItem("auth_token")
        await $fetch("http://localhost:8000/logout/", {
            method: "POST",
            headers: {
                "Authorization": "Token " + token,
            }
        });

        navigateTo("/login")
    } catch (e) {
        return e
    }
}

export const register = async (username, password) => {
    try {
        const res = await $fetch("http://localhost:8000/signup/", {
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

export const updateTodo = async (todo, token) => {
    try {
        const res = await $fetch("http://localhost:8000/update-todo/", {
            method: "POST",
            headers: {
                "Authorization": "Token " + token,
            },
            body: todo,
        })
        return res
    } catch (e) {
        return undefined
    }
}

export const deleteTodo = async (todo, token) => {
    try {
        const res = await $fetch("http://localhost:8000/delete-todo/", {
            method: "POST",
            headers: {
                "Authorization": "Token " + token,
            },
            body: todo,
        })
        return res
    } catch (e) {
        return undefined
    }
}

export const addTodo = async (todo, token) => {
    try {
        const res = await $fetch("http://localhost:8000/add-todo/", {
            method: "POST",
            headers: {
                "Authorization": "Token " + token,
            },
            body: todo,
        })
        return res
    } catch (e) {
        return undefined
    }
}