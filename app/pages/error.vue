<script lang="ts" setup>
const route = useRoute();
const error = route.query.error || "An unknown error occured.";
</script>

<template>
  <div class="card container mx-auto mt-4 flex min-h-72 flex-col items-center justify-center gap-4 bg-base-300 text-center">
    <div role="alert" class="alert min-w-1/2 alert-error">
      <span>Oh sh*t. Here we go again... ({{ error }})</span>
    </div>
    <NuxtLink class="btn btn-primary" to="./">
      Home
      <Icon name="tabler:arrow-left" size="24" />
    </NuxtLink>
  </div>
</template>
