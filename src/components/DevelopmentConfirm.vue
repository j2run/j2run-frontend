<template>
  <v-dialog
    v-model="state.dialog"
    persistent
    max-width="750"
    width="auto"
  >
    <v-row class="container">
      <v-col class="left" v-if="display.smAndUp">
        <svg class="bg-stripes" data-name="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390.25 373.75">
          <defs></defs>
          <title>cbimage</title>
          <path style="fill: rgb(119, 97, 223); opacity: 0.323;" class="wave-path" d="M0,0H123.21S78.08,119.5,224.35,129.28c0,0,48-2,48.64,52.07,0,2.78.14,12.52.14,12.52-.46,10.93-4.46,41.88,2.63,70.54,15,60.8,93.83,100.38,114.25,109.27.31.14.34,0,0,0H0Z" transform="translate(0 0)"></path>
        </svg>
        <img :src="catImage" class="cat" />
      </v-col>
      <v-col>
        <div class="text-right">
          <v-btn icon="mdi-close" variant="plain" @click="onHide"></v-btn>
        </div>
        <div class="mt-2 mb-4">
          <h2>Chúc mừng năm mới 2024</h2>
        </div>
        <div>
          <v-list class="custom-list">
            <v-list-item
              v-for="(item, index) of notif"
              :key="index"
              :title="item"
              prepend-icon="mdi-candy-outline"
            ></v-list-item>
          </v-list>
        </div>
        <div class="mt-2 text-caption">
          <v-checkbox class="ma-0" :hide-details="true" :label="'Không hiện lại trong 6 giờ'" v-model="state.isConfirm">
          </v-checkbox>
          <br />
        </div>
        <div class="text-caption text-right">
          Version: {{ buildTime }}
        </div>
      </v-col>
    </v-row>
  </v-dialog>
</template>

<style scoped lang="scss">
.container {
  background-color: rgb(255, 255, 255);
  min-height: 320px;
  border-radius: 10px;
  overflow: hidden;

  .left {
    position: relative;
    .bg-stripes {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
    }

    .cat {
      position: absolute;
      bottom: 0;
      width: 400px;
      height: auto;
      pointer-events: none;
    }
  }
}


:deep(.custom-list) {
  background: transparent;

  .v-list-item-title {
    white-space: unset !important;
  }

  .v-list-item__prepend {
    > i {
      margin-inline-end: 20px;
    }
  }
}
</style>

<script setup lang="ts">
import moment from 'moment';
import { onMounted, ref } from 'vue';
import { reactive } from 'vue';
import { useDisplay } from 'vuetify';

import catImage from '../assets/cat.png';

const buildTime = moment(+BUILD_TIME).format('DD/MM/YYYY HH:mm:ss');

const notif = [
  'Số  lượng container J2ME đã đạt tối đa.',
  'Chúng tôi đang triễn khai cung cấp các container Android, để trải nghiệm alpha vui lòng liên hệ với chúng tôi.'
];

const state = reactive({
  dialog: false,
  isConfirm: false,
  isLoading: false,
});

const display = ref(useDisplay());

onMounted(() => {
  const timeDevConfirm = localStorage.getItem('timeDevConfirm');
  let isShowDialog = false;
  if (!timeDevConfirm) {
    isShowDialog = true;
  } else {
    const mt = moment(new Date(+timeDevConfirm)).add(6, 'hours');
    if (mt.isBefore(moment.now())) {
      isShowDialog = true;
    }
  }
  state.dialog = isShowDialog;
})

const onHide = () => {
  state.dialog = false;
  if (state.isConfirm) {
    localStorage.setItem('timeDevConfirm', new Date().getTime().toString());
  }
}

</script>