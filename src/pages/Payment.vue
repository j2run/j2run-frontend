<template>
  <div class="ma-4">
    <div class="text-h6 my-5 mt-7 font-weight-bold">
      Thanh toán
    </div>
  </div>
  <v-sheet class="ma-4 pa-4">
    <div class="ma-4 text-body-2">
      Thanh toán của bạn sẽ được xử lý ngay từ 5 phút đến 24 giờ. Hãy yên tâm và tiếp tục trải nghiệm mua sắm tuyệt vời trên trang web của chúng tôi. Chúng tôi đánh giá sự kiên nhẫn của bạn! 
    </div>
  </v-sheet>
  <v-row class="ma-1">
    <v-col>
      <PayMomo />
    </v-col>
    <v-col>
      <PayVcb />
    </v-col>
  </v-row>

  <div class="ma-4">
    <div class="text-h6 my-5 mt-7 font-weight-bold">
      Lịch sử giao dịch
    </div>
  </div>
  <v-sheet class="ma-4 pa-4">
    <div class="text-center text-overline ma-4">Chưa có hóa đơn nào được khởi tạo</div>
  </v-sheet>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { usePageStore } from '../stores/app.store';
import { shallowRef } from 'vue';
import { defineAsyncComponent } from 'vue';

const PayMomo = shallowRef(defineAsyncComponent(() => import('../components/payment/PayMomo.vue')));
const PayVcb = shallowRef(defineAsyncComponent(() => import('../components/payment/PayVcb.vue')));

const appStore = usePageStore();

onMounted(() => {
  appStore.setBreadcrumbs([
    {
      title: 'Thanh toán',
      to: '/manage/payment',
    }
  ]);
})
</script>