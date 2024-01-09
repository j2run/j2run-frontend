<template>
  <v-dialog
    v-model="props.dialog"
    persistent
    width="auto"
  >
    <v-card>
      <v-card-title class="text-center font-weight-bold">
        Đăng xuất
      </v-card-title>
      <v-card-text class="pt-0 text-body-2">
        Bạn có muốn đăng xuất không?
      </v-card-text>
      <v-card-actions>
        <v-btn
          class="ml-5"
          color="green-darken-1"
          variant="text"
          @click="() => emits('onClose')"
        >
          Không
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          class="mr-5"
          color="red"
          variant="text"
          @click="() => emits('onOk')"
        >
          Có
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
const props = defineProps({
  dialog: {
    type: Boolean,
    required: true,
  },
});

const emits = defineEmits<{
  (e: 'onClose'): void,
  (e: 'onOk'): void,
}>();

</script>