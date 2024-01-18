<script setup lang="ts">
    const siteData = useTodoStore()

    //await callOnce(siteData.fetch)
</script>


<script lang="ts" setup>

</script>

<template>
    <h2>Todo list</h2>
    <main>
        <ul v-for="(todo, index) in siteData.todos" :key="index">
            <li>
                <h3>{{ todo.title }}</h3>
                <p>{{ todo.description }}</p>
                <p>{{ todo.status }}</p>
            </li>
        </ul>
    </main>
</template>
