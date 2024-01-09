<template>
  <v-list-item
    color="primary"
    prepend-icon="mdi-logout"
    title="Đăng xuất"
    @click="state.dialog = true"
  ></v-list-item>
  <logout-dialog
    :dialog="state.dialog"
    @on-close="onClose"
    @on-ok="onOk"
  ></logout-dialog>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useAuthStore } from '../stores/auth.store';
import LogoutDialog from './LogoutDialog.vue';

const authStore = useAuthStore();

const state = reactive({
  dialog: false
})

const onClose = () => {
  state.dialog = false;
}

const onOk = () => {
  state.dialog = false;
  authStore.logout();
}
</script>