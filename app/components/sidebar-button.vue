<script lang="ts" setup>
const props = defineProps<{
  label: string;
  icon: string;
  href: string;
  collapsed: boolean;
}>();

const route = useRoute();
</script>

<template>
  <div class="tooltip tooltip-right" :data-tip="collapsed ? undefined : props.label">
    <NuxtLink
      :to="props.href"
      :class="{ 'bg-base-200': route.path === props.href }"
      class="flex justify-start gap-2 px-5 py-3 hover:cursor-pointer hover:bg-base-300"
    >
      <Icon :name="props.icon" size="24" class="shrink-0" />

      <span class="min-w-0 truncate">
        {{ props.label }}
      </span>
    </NuxtLink>
  </div>
</template>
