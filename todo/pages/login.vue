<script setup lang="ts">
import { useLoginStore } from '~/stores/login';

const loginStore = useLoginStore()
</script>

<template>
    <section class="login-section">
        <h1>Login page</h1>
        <form @submit.prevent="loginStore.submitForm">
            <label for="name">Username</label>
            <input v-model="loginStore.username" type="text" name="name" required/>
            <label for="password">Password</label>
            <input v-model="loginStore.password" type="password" name="password" required/>
            <p class="error">{{  loginStore.message }}</p>
            <span>
                <button type="submit">Login</button>
                <NuxtLink to="/register">Register instead</NuxtLink>
            </span>
        </form>
    </section>
</template>

<style lang="sass">
.login-section h1
    margin-bottom: 15px
    font-size: xx-large

.login-section form
    display: flex
    flex-direction: column
    gap: 5px

.error 
    color: red
    margin-top: 5px

label
    margin-top: 5px

input
    padding: 4px
    max-width: 400px

button
    margin-top: 15px
    margin-right: 10px
    width: 50%
    max-width: 200px
    height: 30px
    border: solid 1px $primary
    background-color: white
    border-radius: 5px
    font-size: medium

button:hover
    background-color: $primary
    color: white
    transition-duration: 0.2s

</style>