<script setup>
import { ref, watch, onMounted } from 'vue';
import { store } from '../store';
import getToken from '../api/getToken';
import getArtists from '../api/getArtists';
import ArtistPanel from './ArtistPanel.vue';

const g = ref(0);
const min = ref(0);
const max = ref(0);

const artists = ref({});

watch(store, async (newStore) => {
  if (newStore.toSubmit) {
    g.value = newStore.genreIndex;
    min.value = newStore.minFollowers;
    max.value = newStore.maxFollowers;

    const response = await getArtists(newStore.genreIndex, newStore.minFollowers, newStore.maxFollowers);

    artists.value = response.error ? {} : response;

    newStore.submitHandled();
  }
})

onMounted(() => {
  getToken();
})
</script>


<template>
  <div v-if="store.toSubmit">
    <p>test</p>
  </div>
  <div v-else>
    <div id="results-container" v-if="Object.keys(artists).length > 0">
      <div class="result" v-for="(artist, id) in artists" :key="id">
        <ArtistPanel :artist="artist"/>
      </div>
    </div>
    <h1 v-else>Nothing :P</h1>
  </div>
</template>

<style scoped>

.result {
  background-color: var(--color-background-light);
  border-radius: var(--border-radius);
  padding: 10px;
  margin: 10px;
}
</style>