<script lang="ts" setup>
const authStore = useAuthStore();

onMounted(() => authStore.signOut());
</script>

<template>
  <div class="card container mx-auto mt-4 flex min-h-72 flex-col items-center justify-center gap-4 bg-base-300 text-center">
    <span class="loading loading-xl loading-spinner" />
  </div>
</template>
