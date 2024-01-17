<template>
    <div class="header">
        <h1>Todo app</h1>
        <ul>
            <li><a href="github.com/derk-b/website">Github</a></li>
            <li><a href="www.derkblom.dev">Personal site</a></li>
        </ul>
    </div>
</template>

<style lang="sass">
.header 
    background-color: $primary
    color: white
    display: flex
    justify-content: space-between
    padding: 10px

ul
    list-style: none
    display: flex
    gap: 30px
    flex-direction: row
    margin: 0 15px

li
    margin: auto

a
    color: white
</style>