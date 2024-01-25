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
              <v-alert
                v-if="!!state.toastMessage"
                class="mb-3"
                :type="state.toastType"
                :text="state.toastMessage"
              ></v-alert>
              <v-text-field
                v-model="state.oldPassword"
                :error-messages="v$.oldPassword.$errors.map(e => e.$message as unknown as string)"
                type="password"
                density="compact"
                placeholder="Nhập lại mật khẩu"
                prepend-inner-icon="mdi-lock-outline"
                variant="outlined"
                required
                @click:append-inner="state.visible = !state.visible"
                @input="v$.oldPassword.$touch"
                @blur="v$.oldPassword.$touch"
              ></v-text-field>
              <v-text-field
                v-model="state.password"
                :error-messages="v$.password.$errors.map(e => e.$message as unknown as string)"
                :append-inner-icon="state.visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="state.visible ? 'text' : 'password'"
                density="compact"
                placeholder="Nhập mật khẩu mới"
                prepend-inner-icon="mdi-lock-plus-outline"
                variant="outlined"
                required
                @click:append-inner="state.visible = !state.visible"
                @input="v$.password.$touch"
                @blur="v$.password.$touch"
              ></v-text-field>
              <v-text-field
                v-model="state.confirmPassword"
                :error-messages="v$.confirmPassword.$errors.map(e => e.$message as unknown as string)"
                :append-inner-icon="state.visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="state.visible ? 'text' : 'password'"
                density="compact"
                placeholder="Nhập lại mật khẩu mới"
                prepend-inner-icon="mdi-lock-plus-outline"
                variant="outlined"
                required
                @click:append-inner="state.visible = !state.visible"
                @input="v$.confirmPassword.$touch"
                @blur="v$.confirmPassword.$touch"
              ></v-text-field>
              <v-btn
                block
                class="mb-8"
                color="blue"
                size="large"
                variant="tonal"
                :loading="state.isLoading"
                @click="onChangePassword"
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
import { computed, onMounted, reactive } from 'vue';
import { usePageStore } from '../../stores/app.store';
import { maxLength, minLength, required, sameAs } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';
import { userService } from '../../apis/user';

const appStore = usePageStore();

const initialState = {
  oldPassword: '',
  password: '',
  confirmPassword: '',
}

const state = reactive({
  ...initialState,
  isLoading: false,
  visible: false,
  toastMessage: '',
  toastType: 'error' as "error" | "success" | "warning" | "info" | undefined,
});

const passwordCmp = computed(() => state.password);

const rules = {
  oldPassword: {
    required,
    minLength: minLength(6),
    maxLength: maxLength(32),
  },
  password: {
    required,
    minLength: minLength(6),
    maxLength: maxLength(32),
  },
  confirmPassword: {
    required, sameAsPassword: sameAs(passwordCmp) 
  },
};

const v$ = useVuelidate(rules, state);

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

const clearChangePassword = () => {
  state.oldPassword = '';
  state.password = '';
  state.confirmPassword = '';
  v$.value.$reset();
}

const onChangePassword = async () => {
  if (v$.value.$invalid) {
    return;
  }
  if (state.password === state.oldPassword) {
    state.toastMessage = 'Mật khẩu cũ và mới trùng lập.';
    state.toastType = 'error';
    return;
  }
  state.isLoading = true;
  await userService.changePassword({
    oldPassword: state.oldPassword,
    newPassword: state.password,
  })
    .finally(() => state.isLoading = false)
    .then(() => {
      state.toastMessage = 'Thay đổi mật khẩu thành công.';
      state.toastType = 'success';
      clearChangePassword();
    })
    .catch((e) => {
      state.toastMessage = e.response?.data?.message || 'Unknown';
      state.toastType = 'error';
    });
}
</script>