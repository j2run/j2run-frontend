<template>
  <div class="wrapper" v-if="state.isShow">
    <v-container>
      <div class="text-right">
        <v-btn icon="mdi-close" size="x-large" variant="plain" @click="onClose"></v-btn>
      </div>
      <div>
        This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media. To find out more about the cookies we use, see our Privacy Policy.
      </div>
      <div class="text-bottom">
        If you decline, your information won’t be tracked when you visit this website. A single cookie will be used in your browser to remember your preference not to be tracked.
      </div>
      <div class="text-right">
        <v-btn variant="tonal" class="button btn-accept" @click="onAccept">Accept</v-btn>
        <v-btn variant="outlined" class="button btn-decline" @click="onDecline">Decline</v-btn>
      </div>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  position: fixed;
  width: 100vw;
  background-color: white;
  box-shadow: 0 -1px 3px #eaf0f6;
  border-top: 1px solid #cbd6e2;
  bottom: 0;
  font-size: 13px;
  padding: 0 0 30px 0;
  z-index: 10;
}

.text-bottom {
  padding: 15px 60px;
  @media screen and (max-width: 600px) {
    padding: 10px 20px;
  }
}

.div-close {
  text-align: right;
}

.button {
  font-size: 16px;
  border-radius: 15px;
  padding: 5px 10px;
  transition: .5s;
  margin-left: 15px;
}

:deep(.btn-decline) {
  color: #47b2e4;
  border: 1px solid #47b2e4;

  .v-btn__underlay {
    background-color: transparent;
  }
  &:hover {
    color: #fff;
    background-color: #47b2e4;
  }
}

:deep(.btn-accept) {
  color: #fff;
  background: #47b2e4;

  .v-btn__underlay {
    background-color: transparent;
  }
  &:hover {
    color: #47b2e4;
    border: 1px solid #47b2e4;
    background-color: transparent;
  }
}
</style>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useCookies } from '@vueuse/integrations/useCookies';
import _ from 'lodash';

const cookies = useCookies(['hs_status']);
const hsStatus = cookies.get('hs_status');

const state = reactive({
  isShow: _.isNil(hsStatus),
})

const onClose = () => {
  state.isShow = false;
}

const onAccept = () => {
  cookies.set('hs_status', 1);
  state.isShow = false;
}

const onDecline = () => {
  cookies.set('hs_status', 0);
  state.isShow = false;
}
</script>