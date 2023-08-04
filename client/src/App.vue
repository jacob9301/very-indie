<script setup>
import SearchBar from './components/SearchBar.vue';
import SearchResults from './components/SearchResults.vue';
</script>

<template>
  <header>
    <div id="logo">
      <h1>UA</h1>
    </div>
    <SearchBar id="searchbar"/>
  </header>

  <main>
    <SearchResults />
  </main>
</template>

<style scoped>
header {
  padding: 10px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

main {
  margin-top: 10px;
  padding: 10px 10px;
}

header, main {
  background-color: var(--color-background-soft);
  border-radius: var(--border-radius);
}

#searchbar {
  flex: 1;
  display: flex;
  justify-content: center;
}

#logo {
  padding: 10px 40px;
}
</style>
