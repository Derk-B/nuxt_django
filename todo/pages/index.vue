<script setup lang="ts">
import { useTodoStore } from '~/stores/todo';
import { logout } from "~/services/api";

const todoStore = useTodoStore()

todoStore.fetchTodos()
</script>

<template>
    <div>
        <div class="flex justify-between">
            <h1>Todo list</h1>
            <UButton @click="logout" class="hover:bg-primary hover:text-white text-primary border-solid border-2">Logout</UButton>
        </div>
        <ul>
            <li v-for="(todo, index) in todoStore.todos" :key="index" class="todo">
                <TodoComponent :todo="todo" :updateTodoCallback="todoStore.updateTodo" :deleteTodoCallback="todoStore.deleteTodo" :key="todo.id"/>
            </li>
            <p class="my-5" v-if="todoStore.todos.length == 0">No todos found. Create some below.</p>
            <TodoCreator :addTodoCallback="todoStore.addTodo"/>
        </ul>
    </div>
</template>

<style lang="sass">
.todo
    border: solid 1px $primary
    border-radius: 5px
    padding: 5px
    background-color: white
    margin: 10px 0
    box-shadow: 0px 5px 2px $primary
    display: block
    max-width: 500px

.todo h2
    margin: 5px
.todo p
    margin: 5px

.todo-status
    width: 50%
    min-width: 200px
    margin-left: auto
</style>