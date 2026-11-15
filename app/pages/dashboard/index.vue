<script lang="ts" setup>
const isSidebarOpen = ref(true);

onMounted(() => {
  isSidebarOpen.value = localStorage.getItem("isSidebarOpen") === "true";
});

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
  localStorage.setItem("isSidebarOpen", isSidebarOpen.value.toString());
}
</script>

<template>
  <div class="flex flex-1">
    <div class="bg-base-100 transition-all duration-300" :class="{ 'w-64': isSidebarOpen, 'w-16': !isSidebarOpen }">
      <div class="flex justify-end px-4 py-2 hover:cursor-pointer hover:bg-base-200" @click="toggleSidebar">
        <Icon v-if="isSidebarOpen" name="tabler:chevron-left" size="32" />
        <Icon v-else name="tabler:chevron-right" size="32" />
      </div>
      <div class="flex flex-col">
        <SidebarButton :collapsed="isSidebarOpen" label="Locations" icon="tabler:map" href="/dashboard" />
        <SidebarButton :collapsed="isSidebarOpen" label="Add Locations" icon="tabler:circle-plus-filled" href="/dashboard/add" />
        <div class="divider m-0" />
        <SidebarButton :collapsed="isSidebarOpen" label="Sign Out" icon="tabler:logout-2" href="/sign-out" />
      </div>
    </div>
    <div class="flex-1" />
  </div>
</template>
