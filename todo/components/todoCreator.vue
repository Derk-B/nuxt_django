<script setup lang="ts">
const title = ref('')
const description = ref('')

const props = defineProps<{
    addTodoCallback: Function
}>()

const addTodo = () => {
    const data = { title: title.value, description: description.value }
    props.addTodoCallback(data)
}
</script>

<template>
    <h2 class="mt-8">Create new todo</h2>
    <form class="mt-4 flex flex-col gap-2 max-w-[400px]">
        <UInput v-model="title" placeholder="Todo title"/>
        <UInput v-model="description" placeholder="Todo description"/>
        <UButton v-if="title.length > 0" @click="addTodo" class="border-solid border-[2px] border-primary text-primary hover:bg-primary hover:text-white font-bold">Save</UButton>
        <UButton v-if="title.length == 0" class="border-solid border-[2px] border-gray-400 text-gray-400 font-bold">Save</UButton>
    </form>
</template>