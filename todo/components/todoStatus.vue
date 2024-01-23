<script setup lang="ts">
import { TodoStatusEnum } from "~/types/todo/todoStatusEnum"

const states = [
  {
    name: 'TODO',
    value: TodoStatusEnum.Todo,
  },
  {
    name: 'IN PROGRESS',
    value: TodoStatusEnum.InProgress,
  },
  {
    name: 'FINISHED',
    value: TodoStatusEnum.Finished,
  }
]


const props = defineProps<{
  defaultStatus: TodoStatusEnum,
  updateTodoCallback: Function
}>()

const status = ref(props.defaultStatus)
</script>

<template>
  <USelect v-model="status" :options="states" option-attribute="name" @change="update"/>
</template>

<script lang="ts">
export default {
  methods: {
    update(e: any) {
      this.updateTodoCallback(e.target.value);
    }
  }
}
</script>