<template>
  <div class="bg-green dark:bg-red">
    <nav class="nav">
      <NuxtLink to="/">Todo app</NuxtLink>
      <ul>
        <a href="https://www.derkblom.dev">www.derkblom.dev</a>
        <a href="https://www.github.com/derk-b/nuxt_django">Source code on github</a>
      </ul>
    </nav>
    <div class="slot">
      <slot />
    </div>
  </div>
</template>

<style lang="sass">
.nav
  display: flex
  flex-direction: row
  justify-content: space-between
  background-color: $primary
  padding: 15px 30px

.nav a
  color: white
  font-weight: bold

.nav ul
  display: flex
  flex-direction: row
  justify-content: center
  gap: 15px

.slot
  padding: 30px

</style>