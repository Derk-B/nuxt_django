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
            // This check removes the error: 'localStorage not defined'
            if (!process.client) {
                return
            }
            const token = localStorage.getItem("auth_token")
            const res: any = await getTodos(token)

            if (res == undefined) {
                navigateTo("/login")
            } else {
                this.todos = res
            }
        }
    }
})