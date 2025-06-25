<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <img
      v-for="foto in fotos"
      :key="foto"
      :src="foto"
      loading="lazy"
      class="rounded shadow-lg transform hover:scale-105 transition-transform duration-300"
      alt="galerijfoto"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ type: string }>();

const { data } = await useFetch<{ fotos: string[] }>(`/api/fotos?type=${props.type}`);
const fotos = data.value?.fotos || [];
</script>
