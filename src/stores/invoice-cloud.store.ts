import { defineStore } from 'pinia';
import { InvoiceCloudDto } from '../dtos/invoice-cloud';
import { invoiceCloudService } from '../apis/invoice-cloud';
import { list2map } from '../utils/common';

export const useInvoiceCloudStore = defineStore({
    id: 'invoice-cloud',
    state: () => ({
      doing: [] as InvoiceCloudDto[],
      doingMap: {} as SMap<InvoiceCloudDto>,
      error: [] as InvoiceCloudDto[],
      errorMap: {} as SMap<InvoiceCloudDto>,
    }),
    actions: {
      async loadDoing() {
        this.doing = await invoiceCloudService.search({
          status: ['waiting', 'creating'],
        });
        this.doingMap = list2map(this.doing, '_id');
      },
      async loadError() {
        this.error = await invoiceCloudService.search({
          status: ['error'],
          notViewed: true
        });
        this.errorMap = list2map(this.error, '_id');
      },
      async removeError(ic: InvoiceCloudDto) {
        this.error = this.error.filter((c) => c._id != ic._id);
        this.errorMap = list2map(this.error, '_id');
        await invoiceCloudService.viewed({
          invoiceCloudId: ic._id,
        })
      },
    }
});