<script setup>
import SearchBar from './components/SearchBar.vue';
</script>

<template>
  <header>
    <h1>UA</h1>
    <SearchBar />
  </header>

  <main>
    <h1>Main</h1>
  </main>
</template>

<style scoped>
header {
  padding: 10px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

main {
  margin-top: 10px;
  padding: 10px 60px;
}

header, main {
  background-color: var(--color-background-soft);
  border-radius: var(--border-radius);
}
</style>
