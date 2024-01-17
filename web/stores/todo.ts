export const useTodoStore = defineStore('todoStore', {
    state: () => ({
        name: '',
        todos: [],
    }),
    actions: {
        async fetch() {
            try {
                const data = await $fetch("http://127.0.0.1:8000/todos/")

                this.name = data.name
                this.todos = data.todos
            } catch (error) {
                console.error("Error while fetching sitedata")
                console.error(error)
            }          
        }
    }
})