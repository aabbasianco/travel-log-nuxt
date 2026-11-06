<script setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(value) {
    return colorMode.value = value ? "dark" : "light";
  },
});
</script>

<template>
  <label class="swap mx-4 swap-rotate">
    <input v-model="isDark" type="checkbox">
    <Icon name="tabler:sun" size="24" class="swap-on" />
    <Icon name="tabler:moon-filled" size="24" class="swap-off" />
  </label>
</template>
