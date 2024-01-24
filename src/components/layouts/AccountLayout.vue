<template>
  <v-card :elevation="0" class="sticky-menu">
    <v-card-item class="py-1 lh-36">
      <v-btn
        class="me-2"
        prepend-icon="mdi-newspaper-plus"
        color="medium-emphasis"
        min-width="92"
        rounded
        variant="plain"
        to="/manage/account"
      >
        Hồ sơ
      </v-btn>
      <v-btn
        class="me-2"
        prepend-icon="mdi-form-textbox-password"
        color="medium-emphasis"
        min-width="92"
        rounded
        variant="plain"
        to="/manage/account/password"
      >
        Mật khẩu
      </v-btn>
    </v-card-item>
  </v-card>

  <router-view />
</template>

<script setup lang="ts">
</script>