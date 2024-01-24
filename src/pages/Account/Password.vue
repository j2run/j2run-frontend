<template>
  <div class="ma-4">
    <div class="text-h6 my-5 mt-7 font-weight-bold">
      Đổi mật khẩu
    </div>
  </div>
  <v-sheet class="ma-4 pa-4">
    <v-row>
      <v-col cols="12" md="12">
        <v-card
          class="mb-12"
          color="surface-variant"
          variant="tonal"
        >
          <v-card-text class="text-medium-emphasis text-caption">
            Cảnh báo: Bạn chỉ có thể thay đổi mật khẩu mỗi 10 phút một lần. Nếu nhập sai mật khẩu quá 3 lần, tài khoản sẽ bị khoá.
          </v-card-text>
        </v-card>
        <div class="ma-6 text-body-1">
          <v-row class="justify-center">
            <v-col cols="12" sm="6">
              <v-text-field
                density="compact"
                placeholder="Mật khẩu cũ"
                prepend-inner-icon="mdi-lock-outline"
                variant="outlined"
                required
              ></v-text-field>
              <v-text-field
                density="compact"
                placeholder="Mật khẩu mới"
                prepend-inner-icon="mdi-lock-plus-outline"
                variant="outlined"
                required
              ></v-text-field>
              <v-text-field
                density="compact"
                placeholder="Nhập lại mật khẩu"
                prepend-inner-icon="mdi-lock-plus-outline"
                variant="outlined"
                required
              ></v-text-field>
              <v-btn
                block
                class="mb-8"
                color="blue"
                size="large"
                variant="tonal"
              >
                Thay đổi mật khẩu
              </v-btn>
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
</style>

<script setup lang="ts">
import { onMounted } from 'vue';
import { usePageStore } from '../../stores/app.store';

const appStore = usePageStore();

onMounted(() => {
  appStore.setBreadcrumbs([
    {
      title: 'Tài khoản',
      to: '/manage/account',
    },
    {
      title: 'Mật khẩu',
      to: '/manage/account/password',
    },
  ]);
})
</script>