<script setup>
import { ref, watch, onMounted } from 'vue';
import { store } from '../store';
import getToken from '../api/getToken';
import getArtists from '../api/getArtists';

const g = ref(0);
const min = ref(0);
const max = ref(0);

watch(store, async (newStore, old) => {
  if (newStore.toSubmit) {
    g.value = newStore.genreIndex;
    min.value = newStore.minFollowers;
    max.value = newStore.maxFollowers;

    const response = await getArtists(newStore.genreIndex, newStore.minFollowers, newStore.maxFollowers);
    console.log(response.error ? 'SearchResults.vue: ' + response.error : response);

    newStore.submitHandled();
  }
})

onMounted(() => {
  getToken();
})
</script>


<template>
  <div>
    <h1>{{ g + ' ' + min + ' ' + max }}</h1>
  </div>
</template>

<style scoped>
</style>