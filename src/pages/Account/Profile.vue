<template>
  <div class="ma-4">
    <div class="text-h6 my-5 mt-7 font-weight-bold">
      Hồ sơ
    </div>
  </div>
  <v-sheet class="ma-4 pa-10">
    <v-row>
      <v-col cols="12" md="12">
        <v-card
          class="mb-12"
          color="surface-variant"
          variant="tonal"
        >
          <v-card-text class="text-medium-emphasis text-caption">
            Các thông tin dưới đây không thể tự chỉnh sửa. Để thực hiện bất kỳ sửa đổi nào, vui lòng liên hệ với đội ngũ hỗ trợ của chúng tôi qua Telegram @wawahuy hoặc gửi email đến support@j2run.com. Chân thành cảm ơn sự hiểu biết và hợp tác của bạn.
          </v-card-text>
        </v-card>
        <div class="wrapper-avatar">
          <img :src="avatarImage" class="avatar" />
          <v-btn icon="mdi-camera-outline" variant="flat" class="icon-camera"></v-btn>
        </div>
        <div class="ma-6 text-body-1">
          <v-row v-for="detail of details">
            <v-col xs="12" sm="6" class="text-right font-weight-bold">
              {{detail.name}}
            </v-col>
            <v-col>
              {{detail.value}}
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" md="12">
        
      </v-col>
    </v-row>
    
  </v-sheet>
</template>

<style scoped>
.wrapper-avatar {
  position: relative;
  text-align: center;
  
  .icon-camera {
    position: absolute;
    top: calc(50% + 35px);
    left: calc(50% + 35px);
    z-index: 99;
    color: #575757;
  }
}
.avatar {
  width: 160px;
  height: 160px;
}
</style>

<script setup lang="ts">
import { onMounted } from 'vue';
import { computed } from 'vue';
import moment from 'moment';

import { usePageStore } from '../../stores/app.store';
import { useAuthStore } from '../../stores/auth.store';
import avatarImage from '../../assets/avt.jpg';
import { isNil } from 'lodash';

const appStore = usePageStore();
const authStore = useAuthStore();

const details = computed(() => {
  const user = authStore.user;
  if (isNil(user)) {
    return [];
  }
  return [
    {
      name: 'Họ và tên',
      value: '-',
    },
    {
      name: 'Email',
      value: user.email,
    },
    {
      name: 'Gia nhập',
      value: moment().diff(user.createdAt, 'days') + ' ngày',
    },
  ]
})

onMounted(() => {
  appStore.setBreadcrumbs([
    {
      title: 'Tài khoản',
      to: '/manage/account',
    },
    {
      title: 'Hồ sơ',
      to: '/manage/account/profile',
    }
  ]);
})
</script>