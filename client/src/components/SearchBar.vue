<script setup>
import { ref } from 'vue';
import { store } from '../store';
import genres from '../data/genres';

const followingSizes = {
    '0-1000':[0,1000],
    '1000-5000':[1000,5000],
    '5000-10,000':[5000,10000],
    '10,000-50,000':[10000,50000],
    '50,000-100,000':[50000,100000]
}

const selectedGenre = ref(0);
const selectedFollowing = ref(followingSizes['0-1000']);

const handleSubmit = () => {
    const genreIndex = selectedGenre.value;
    const minFollowing = selectedFollowing.value[0];
    const maxFollowing = selectedFollowing.value[1];
    console.log(genreIndex, minFollowing, maxFollowing);

    store.submit();
}
</script>

<template>
  <div id="searchbar">

    <form @submit.prevent="handleSubmit">

        <label for="genre">Genre:</label>
        <select id="genre" v-model="selectedGenre">
            <option disabled value="">Please select a genre</option>
            <option v-for="(genre, index) in genres" :key="index" :value="index">{{ genre }}</option>
        </select>

        <label for="following">following:</label>
        <select id="following" v-model="selectedFollowing">
            <option disabled value="">Please select a following size</option>
            <option v-for="(following, key) in followingSizes" :key="key" :value="following">{{ key }}</option>
        </select>

        <button type="submit">Search</button>

    </form>
    
  </div>
</template>

<style scoped>
#searchbar{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
</style>
