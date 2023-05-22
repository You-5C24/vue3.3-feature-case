import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      script: {
        propsDestructure: true, // defineProps的解构不丢失响应式的配置
        defineModel: true,
      },
    }),
  ],
});
