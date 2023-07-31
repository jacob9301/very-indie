<script setup>
import { store } from '../store';

const toggle = () => {
    if (store.toSubmit) {
        store.submitHandled();
    } else {
        store.submit();
    }
}
</script>

<template>
  <div id="searchbar">
    <h1>UA {{ store.toSubmit }}</h1>
    
    <button @click="toggle">Toggle</button>
  </div>
</template>

<style scoped>
#searchbar{
    display: flex;
    justify-content: center;
}
</style>
