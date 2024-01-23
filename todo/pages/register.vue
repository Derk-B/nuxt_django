<script setup lang="ts">
import { useRegisterStore } from '~/stores/register';

const registerStore = useRegisterStore()
</script>

<template>
    <section class="register-section">
        <h1 class="bg-red">register page</h1>
        <form @submit.prevent="registerStore.submitForm">
            <label for="name">Username</label>
            <input v-model="registerStore.username" type="text" name="name" required/>
            <label for="password">Password</label>
            <input v-model="registerStore.password" type="password" name="password" required/>
            <p class="error">{{  registerStore.message }}</p>
            <span>
                <button type="submit">register</button>
                <NuxtLink to="/login" class="hover:underline">Login instead</NuxtLink>
            </span>
        </form>
    </section>
</template>

<style lang="sass">
.register-section h1
    margin-bottom: 15px
    font-size: xx-large

.register-section form
    display: flex
    flex-direction: column
    gap: 5px

.error 
    color: red
    margin-top: 5px

.register-section label
    margin-top: 5px

.register-section input
    padding: 4px
    max-width: 400px

.register-section button
    margin-top: 15px
    margin-right: 10px
    width: 50%
    max-width: 200px
    height: 30px
    border: solid 1px $primary
    background-color: white
    border-radius: 5px
    font-size: medium

.register-section button:hover
    background-color: $primary
    color: white
    transition-duration: 0.2s

</style>