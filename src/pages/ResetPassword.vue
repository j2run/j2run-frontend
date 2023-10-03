<template>
  <div class="over-wrapper">
    <div class="wrapper">
      <effect-card />
      <v-card
        class="mx-auto mt-4 border pa-12 pb-8"
        max-width="420px"
        elevation="2"
        rounded="lg"
      >
        <v-row justify="center" class="color-hb">
          <v-col cols="12" class="text-center">
            <v-icon class="icon-login">mdi-lock-open-outline</v-icon>
          </v-col>
          <v-col cols="12" class="text-center text-h5 font-unbounded mb-8">
            Đổi mật khẩu
          </v-col>
        </v-row>
        <v-alert
          v-if="!!state.toastMessage"
          class="mb-3"
          :type="state.toastType"
          :text="state.toastMessage"
        ></v-alert>
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Mật khẩu
        </div>
        <v-text-field
          v-model="state.password"
          :error-messages="v$.password.$errors.map(e => e.$message as unknown as string)"
          :append-inner-icon="state.visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="state.visible ? 'text' : 'password'"
          density="compact"
          placeholder="Nhập mật khẩu"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          required
          @click:append-inner="state.visible = !state.visible"
          @input="v$.password.$touch"
          @blur="v$.password.$touch"
        ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Nhập lại mật khẩu
        </div>
        <v-text-field
          v-model="state.confirmPassword"
          :error-messages="v$.confirmPassword.$errors.map(e => e.$message as unknown as string)"
          :append-inner-icon="state.visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="state.visible ? 'text' : 'password'"
          density="compact"
          placeholder="Nhập lại mật khẩu"
          prepend-inner-icon="mdi-lock-outline"
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
          @click="onResetPassword"
        >
          Tiếp tục
        </v-btn>

        <v-card-text class="text-center">
          <v-btn
            variant="plain"
            class="text-blue"
            @click="onLogout"
          >
            <v-icon icon="mdi-logout" class="mr-1"></v-icon>Đăng xuất
          </v-btn>
        </v-card-text>
      </v-card>
      <footer-v2 />
    </div>
  </div>
</template>

<style scoped lang="scss">
.over-wrapper {
  overflow: hidden;
  min-height: 100vh;
}

.wrapper {
  position: relative;
  margin: auto;
  max-width: 420px;
  margin-top: 3rem;
  padding: 6px;
}

.icon-login {
  font-size: 45px;
}

.title {
  .el-form-item__content b {
    font-size: 20px;
  }

  margin-bottom: 10px;
}
.logo {
  width: 100px;
  margin-bottom: 30px;
}
</style>

<script setup lang="ts">
import { defineAsyncComponent, reactive, shallowRef } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { maxLength, minLength, required, sameAs } from '@vuelidate/validators'
import { computed } from 'vue';
import { useAuthStore } from '../stores/auth.store';
import { userService } from '../apis/user';
import { router } from '../router';

const EffectCard = shallowRef(defineAsyncComponent(() => import('../components/EffectCard.vue')));
const FooterV2 = shallowRef(defineAsyncComponent(() => import('../components/FooterV2.vue')));

const authStore = useAuthStore();

const initialState = {
  password: '',
  confirmPassword: '',
}

const state = reactive({
  ...initialState,
  isLoading: false,
  visible: false,
  resetDone: false,
  toastMessage: '',
  toastType: 'error' as "error" | "success" | "warning" | "info" | undefined,
});

const passwordCmp = computed(() => state.password);

const rules = {
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

const onResetPassword = async () => {
  if (v$.value.$invalid) {
    return;
  }
  state.isLoading = true;
  await userService.resetPassword(state.password)
    .finally(() => state.isLoading = false)
    .then(() => {
      return authStore.reloadInfo();
    })
    .then(() => {
      router.push('/manage');
    })
    .catch((e) => {
      state.toastMessage = e.response?.data?.message || 'Unknown';
      state.toastType = 'error';
    });
}

const onLogout = async () => {
  authStore.logout();
}
</script>