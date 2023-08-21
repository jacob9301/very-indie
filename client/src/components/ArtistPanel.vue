<script setup>
import { ref, onMounted } from 'vue';
import getPreview from '../api/getPreview';

const props = defineProps({artist: Object});

const preview = ref({});

onMounted(async () => {
    if (props.artist.id) {
        preview.value = await getPreview(props.artist.id);
    }
})

</script>


<template>
    <div class="panel">
        <img :src="props.artist.images[0] ? props.artist.images[0].url : '../../unknown.png'" >
        <div class="info">
            <div class="name">
                <h2>{{ props.artist.name }}</h2>
                <h2>{{ '(' + props.artist.followers.total + " followers)" }}</h2>
            </div>
            <button class="link"><a :href="props.artist.external_urls.spotify" target="_blank">open in spotify</a></button>
            <p>{{ preview.name }}</p>
            <audio controls v-if="preview.preview_url" :key="preview.preview_url" :src="preview.preview_url" type="audio/mpeg"></audio>
            <h2 v-else>Preview Unavailable</h2>
        </div>
    </div>
</template>

<style scoped>
a {
    text-decoration: none;
    color: var(--color-text);
}

.link {
    background-color: #1DB954;
}

h2 {
    margin: 0 3px;
}
.name {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.panel {
    display: flex;
    align-items: center;
}

.info {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    text-align: center;
    flex-direction: column;
}

audio {
    border-radius: var(--border-radius);
}

img {
    height: 400px;
    width: 400px;
    border-radius: var(--border-radius);
}

@media only screen and (max-width: 800px) {
    .panel {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        height: 200px;
        width: 200px;
    }
}
</style>