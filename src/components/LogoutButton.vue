<template>
  <v-tooltip text="Đăng xuất">
    <template v-slot:activator="p">
      <v-btn
        v-bind="{...p.props}"
        icon="mdi-logout"
        class="logout"
        @click="state.dialog = true"
      ></v-btn>
    </template>
  </v-tooltip>
  <logout-dialog
    :dialog="state.dialog"
    @on-close="onClose"
    @on-ok="onOk"
  ></logout-dialog>
</template>
<style scoped lang="scss">
.logout {
  margin: 0;
  padding: 0;
  color: #5c5c5c;
}
</style>

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