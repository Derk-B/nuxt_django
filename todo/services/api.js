
export const login = async (username, password) => {
    const runtimeConfig = useRuntimeConfig()
    try {
        const res = await $fetch(`${runtimeConfig.public.API_URL}/login/`, {
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
    const runtimeConfig = useRuntimeConfig()
    try {
        const token = localStorage.getItem("auth_token")
        await $fetch(`${runtimeConfig.public.API_URL}/logout/`, {
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
    const runtimeConfig = useRuntimeConfig()
    try {
        const res = await $fetch(`${runtimeConfig.public.API_URL}/signup/`, {
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
    const runtimeConfig = useRuntimeConfig()
    try {
        const res = await $fetch(`${runtimeConfig.public.API_URL}/todos/`, {
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
    const runtimeConfig = useRuntimeConfig()
    try {
        const res = await $fetch(`${runtimeConfig.public.API_URL}/update-todo/`, {
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
    const runtimeConfig = useRuntimeConfig()
    try {
        const res = await $fetch(`${runtimeConfig.public.API_URL}/delete-todo/`, {
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
    const runtimeConfig = useRuntimeConfig()
    try {
        const res = await $fetch(`${runtimeConfig.public.API_URL}/add-todo/`, {
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