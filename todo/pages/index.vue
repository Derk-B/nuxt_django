<script setup lang="ts">
import { useTodoStore } from '~/stores/todo';

const todoStore = useTodoStore()

todoStore.fetchTodos()
</script>

<template>
    <div>
        <h1>Index page</h1>
    </div>
</template>