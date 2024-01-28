import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { splitVendorChunkPlugin } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      splitVendorChunkPlugin(),
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            // const rg = /node_modules\/(?<name>([^\/]*))\/(?<nameChild>([^\/]*))\//.exec(id);
            // if (rg && rg.groups) {
            //   let name = rg.groups.name;
            //   if (name.startsWith('@')) {
            //     name += '-' + rg.groups.nameChild;
            //   }
            //   return 'vendor-' + name;
            // }
            if (id.includes('@vuelidate')) {
              return 'vendor-vuelidate';
            } else if (id.includes('@vueuse')) {
              return 'vendor-vueuse';
            } else if (id.includes('vuetify')) {
              return 'vendor-vuetify';
            } else if (id.includes('@novnc')) {
              return 'vendor-novnc';
            } else if (id.includes('@vue')) {
              return 'vendor-vue';
            }
          },
        },
      },
    },
    define: {
      BUILD_TIME: new Date().getTime()
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      }
    },
    esbuild: {
      pure: mode === 'production' ? ['console.log'] : [],
    },
  };
})
