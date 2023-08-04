<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({artist: Object});

const preview = ref([]);

onMounted(async () => {
  //preview.value = getPreview(props.artist.id);
})

</script>


<template>
    <div class="panel">
        <img :src="props.artist.images[0] ? props.artist.images[0].url : '../../unknown.png'" >
        <div class="info">
            <h2>{{ props.artist.name + ' (' + props.artist.followers.total + " followers)"}}</h2>
            <audio controls v-if="preview.length > 0">
                <source :src="preview[0]" type="audio/mpeg">
            </audio>
            <h2 v-else>Preview Unavailable</h2>
        </div>
    </div>
</template>

<style scoped>

.panel {
    display: flex;
    align-items: center;
}

.info {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    text-align: center;
    flex-direction: column;
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