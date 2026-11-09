<script lang="ts" setup>
const authStore = useAuthStore();
</script>

<template>
  <div class="hero container mx-auto mt-4 bg-base-300">
    <div class="hero-content min-h-96 text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">
          Travel Log
        </h1>
        <p class="py-6">
          Keep track of your travels and adventures with ease. Log your trips, share your experiences, and create lasting memories.
        </p>
        <AuthButton v-if="!authStore.user" />
        <NuxtLink v-else to="/dashboard" class="btn btn-primary">
          Start Logging
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
