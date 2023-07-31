<script setup>
import SearchBar from './components/SearchBar.vue';
</script>

<template>
  <header>
    <SearchBar />
  </header>

  <main>
    <h1>Main</h1>
  </main>
</template>

<style scoped>
header {
  height: 80px;
  padding: 10px 40px;
}

main {
  margin-top: 10px;
  padding: 10px 60px;
}

header, main {
  background-color: var(--color-background-soft);
  border-radius: 8px;
}
</style>
