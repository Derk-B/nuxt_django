import { addTodo, deleteTodo, getTodos, updateTodo } from "~/services/api"
import type { ITodo } from "~/types/todo/ITodo"
import { reloadNuxtApp } from "nuxt/app";


interface TodoStoreState {
    authenticated: boolean,
    todos: ITodo[]
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
        },
        async updateTodo(todo: ITodo) {
            // This check removes the error: 'localStorage not defined'
            if (!process.client) {
                return
            }
            const token = localStorage.getItem("auth_token")
            const res: any = await updateTodo(todo, token)

            if (res == undefined) {
                navigateTo("/login")
            }
        },
        async deleteTodo(todo: ITodo) {
            // This check removes the error: 'localStorage not defined'
            if (!process.client) {
                return
            }
            const token = localStorage.getItem("auth_token")
            const res: any = await deleteTodo(todo, token)

            if (res == undefined) {
                navigateTo("/login")
            } else {
                this.fetchTodos()
            }
        },
        async addTodo(todo: ITodo) {
            // This check removes the error: 'localStorage not defined'
            if (!process.client) {
                return
            }
            const token = localStorage.getItem("auth_token")
            const res: any = await addTodo(todo, token)

            if (res == undefined) {
                navigateTo("/login")
            } else {
                this.fetchTodos()
            }
        }
    }
})