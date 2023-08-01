<script setup>
import { ref, watch } from 'vue';
import { store } from '../store';

const g = ref(0);
const min = ref(0);
const max = ref(0);

watch(store, async (newStore, old) => {
    if (newStore.toSubmit) {
        g.value = newStore.genreIndex;
        min.value = newStore.minFollowers;
        max.value = newStore.maxFollowers;
        newStore.submitHandled();
    }
})
</script>


<template>
  <div>
    <h1>{{ g + ' ' + min + ' ' + max }}</h1>
  </div>
</template>

<style scoped>
</style>