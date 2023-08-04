<script setup>

const props = defineProps({artist: Object});

</script>


<template>
    <div>
        <h2>{{ props.artist.name + ' (' + props.artist.followers.total + " followers)"}}</h2>
        <img :src="props.artist.images[0] ? props.artist.images[0].url : '../../unknown.png'" >
    </div>
</template>

<style scoped>
img {
    height: 200px;
    width: 200px;
}
</style>