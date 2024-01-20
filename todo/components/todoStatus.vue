<script setup>
const states = ['TODO', 'IN PROGRESS', 'FINISHED']

const status = ref(states[0])
</script>

<template>
  <USelect v-model="status" :options="states" />
</template>