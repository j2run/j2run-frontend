<template>
  <v-card elevation="0" class="momo">
    <v-card-title class="pay-title">
      <img :src="momoImage" class="pay-icon" />
      <span>Momo</span>
    </v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item
          v-for="(item, i) in details"
          :key="i"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <span class="font-weight-bold mr-2">{{ item.title }}:</span> {{ item.value }}
      </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<style scoped lang="scss">
.momo {
  min-height: 100%;
}

.pay-title {
  display: flex;
  align-items: center;
  font-family: Unbounded !important;
  gap: 10px;
  height: 90px;
}

.pay-icon {
  width: 50px;
}
</style>

<script setup lang="ts">
import { computed } from 'vue';
import momoImage from '../../assets/momo.png';
import { useAuthStore } from '../../stores/auth.store';
const authStore = useAuthStore();

const details =  computed(() => [
  {
    icon: 'mdi-credit-card-settings-outline',
    title: 'Số điện thoại',
    value: '0857350574',
  },
  {
    icon: 'mdi-text-account',
    title: 'Tên tài khoản',
    value: 'Nguyễn Gia Huy',
  },
  {
    icon: 'mdi-message-fast-outline',
    title: 'Nội dung chuyển khoản',
    value: 'j2run ' + authStore.user?._id || '-',
  },
]);
</script>