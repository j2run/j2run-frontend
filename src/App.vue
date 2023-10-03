<template>
  <div>
    <PageLoading />
    <DevelopmentConfirm />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, shallowRef } from 'vue';
import { useAuthStore } from './stores/auth.store';
import { onMounted } from 'vue';


const DevelopmentConfirm = shallowRef(defineAsyncComponent(() => import('./components/DevelopmentConfirm.vue')));
const PageLoading = shallowRef(defineAsyncComponent(() => import('./components/PageLoading.vue')));
const authStore = useAuthStore();

onMounted(() => {
  if (authStore.user) {
    authStore.reloadInfo();
  }
})

</script>