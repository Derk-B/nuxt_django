import { getTodos } from "~/services/api"

interface Todo {
    title: string,
    description: string
    id: number,
    status: string,
}

interface TodoStoreState {
    authenticated: boolean,
    todos: Todo[]
}

export const useTodoStore = defineStore("todoStore", {
    state: (): TodoStoreState => ({
        authenticated: false,
        todos: []
    }),
    actions: {
        async fetchTodos() {
            const token = localStorage.getItem("auth_token")
            console.log(token);
            const res: any = await getTodos(token)
            console.log(res)

            if (res != undefined) {
                navigateTo("/login")
            }
        }
    }
})