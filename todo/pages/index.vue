<script setup lang="ts">
import { useTodoStore } from '~/stores/todo';

const todoStore = useTodoStore()

todoStore.fetchTodos()
</script>

<template>
    <div>
        <h1>Todo list</h1>
        <ul>
            <li v-for="(todo, index) in todoStore.todos" :key="index" class="todo">
                <h2>{{  todo.title }}</h2>
                <p>{{ todo.description }}</p>
                <TodoStatus class="todo-status"/>
            </li>
        </ul>
    </div>
</template>

<style lang="sass">
.todo
    border: solid 1px $primary
    border-radius: 5px
    padding: 5px
    background-color: white
    margin: 10px
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