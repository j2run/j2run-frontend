<template>
  <div class="footer">
    <v-container>
      <v-row>
        <v-col md="3" class="pt-5">
          <Logo :show-hoamai="false" :show-domain="false" :size="40" />
        </v-col>
        <v-col>
          <v-list class="footer-list-custom">
            <v-list-item>
              <template v-slot:prepend>
                <v-icon>mdi-phone</v-icon>
              </template>
              <v-list-item-title v-text="'Phone: (+84) 857350574'"></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon>mdi-email</v-icon>
              </template>
              <v-list-item-title v-text="'Email: support@j2run.com'"></v-list-item-title>
            </v-list-item>
            <v-list-item class="mt-5">
              <v-btn icon="mdi-facebook" variant="outlined"></v-btn>
              <v-btn class="ml-4" icon="mdi-youtube" variant="outlined"></v-btn>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col>
          <v-list class="footer-list-custom">
            <v-list-item :to="'/privacy-policy'">
              <v-list-item-title v-text="'Chính sách và bảo mật'"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div class="footer-copyright">
    <v-container>
      <v-row justify="space-around">
        <v-col cols="12" :md="6">
          Bản quyền © 2023 J2Run. Bảo lưu mọi quyền.
        </v-col>
        <v-col cols="12" :md="6" class="text-caption text-right">
          version: {{ buildTime }}
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  // margin-top: 160px;
  margin-top: 100px;
  padding: 16px 0;
  color: #fff;
  background-color: var(--header-background);
  position: relative;

  // &::after {
  //   content: '';
  //   display: block;
  //   position: absolute;
  //   background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDBweCIgdmlld0JveD0iMCAwIDEyODAgMTQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0wIDUxLjc2YzM2LjIxLTIuMjUgNzcuNTctMy41OCAxMjYuNDItMy41OCAzMjAgMCAzMjAgNTcgNjQwIDU3IDI3MS4xNSAwIDMxMi41OC00MC45MSA1MTMuNTgtNTMuNFYwSDB6IiBmaWxsLW9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTAgMjQuMzFjNDMuNDYtNS42OSA5NC41Ni05LjI1IDE1OC40Mi05LjI1IDMyMCAwIDMyMCA4OS4yNCA2NDAgODkuMjQgMjU2LjEzIDAgMzA3LjI4LTU3LjE2IDQ4MS41OC04MFYwSDB6IiBmaWxsLW9wYWNpdHk9Ii41Ii8+PHBhdGggZD0iTTAgMHYzLjRDMjguMiAxLjYgNTkuNC41OSA5NC40Mi41OWMzMjAgMCAzMjAgODQuMyA2NDAgODQuMyAyODUgMCAzMTYuMTctNjYuODUgNTQ1LjU4LTgxLjQ5VjB6Ii8+PC9nPjwvc3ZnPg==');
  //   background-color: var(--header-background);
  //   mix-blend-mode: multiply;
  //   width: 100vw;
  //   height: 80px;
  //   top: -80px;
  // }
}

.footer-copyright {
  background-color: #172742;
  color: #fff;
}

.footer-list-custom {
  background-color: transparent;
  color: #fff;
}
</style>

<script setup lang="ts">
import moment from 'moment';
import { shallowRef, defineAsyncComponent } from 'vue';
const Logo = shallowRef(defineAsyncComponent(() => import('./Logo.vue')));


const buildTime = moment(+BUILD_TIME).format('DD/MM/YYYY HH:mm:ss');
</script>