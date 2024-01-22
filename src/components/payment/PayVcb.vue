<template>
  <v-card elevation="0">
    <v-card-title class="pay-title">
      <img :src="vcbImage" class="pay-icon" />
      <span>Vietcombank</span>
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
.pay-title {
  display: flex;
  align-items: center;
  font-family: Unbounded !important;
  gap: 10px;
}

.pay-icon {
  width: 70px;
}
</style>

<script setup lang="ts">
import { computed } from 'vue';
import vcbImage from '../../assets/vcb.png';
import { useAuthStore } from '../../stores/auth.store';
const authStore = useAuthStore();

const details =  computed(() => [
  {
    icon: 'mdi-credit-card-settings-outline',
    title: 'Số tài khoản',
    value: '-',
  },
  {
    icon: 'mdi-text-account',
    title: 'Tên chủ thẻ',
    value: '-',
  },
  {
    icon: 'mdi-office-building-marker-outline',
    title: 'Chi nhánh',
    value: '-',
  },
  {
    icon: 'mdi-message-fast-outline',
    title: 'Nội dung chuyển khoản',
    value: 'j2run ' + authStore.user?._id || '-',
  },
]);
</script>