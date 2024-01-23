<script setup lang="ts">
import type { ITodo } from "~/types/todo/ITodo"
import type { TodoStatusEnum } from "~/types/todo/todoStatusEnum";

const props = defineProps<{
    todo: ITodo, 
    updateTodoCallback: Function,
    deleteTodoCallback: Function,
}>()

const updateTodo = async (newStatus: TodoStatusEnum) => {
    const newTodo = { ...props.todo, status: <TodoStatusEnum> newStatus }

    props.updateTodoCallback(newTodo);
}

const deleteTodo = () => {
    props.deleteTodoCallback(props.todo)
}
</script>

<template>
    <header>
        <h2>{{  todo.title }}</h2>
        <UButton 
            class="text-red-400 bg-white border-red-400 hover:bg-red-500 hover:text-white my-auto w-fit mx-2" 
            icon="i-heroicons-trash" @click="deleteTodo">
            Delete
        </UButton>
    </header>
    <p>{{ todo.description }}</p>
    <TodoStatus class="todo-status" :defaultStatus="todo.status" :updateTodoCallback="updateTodo"/>
</template>

<style lang="sass">
header
    display: flex
    justify-content: space-between
</style>
