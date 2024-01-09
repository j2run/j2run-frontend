<template>
  <router-view />
  <div class="ma-10">
    Oops!
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { usePageStore } from '../../stores/app.store';


const appStore = usePageStore();

onMounted(() => {
  appStore.setBreadcrumbs([
    {
      title: 'Tài khoản',
      to: '/manage/account',
    }
  ]);
});
</script>