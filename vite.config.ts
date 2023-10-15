import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import {devPlugin, getReplacer} from "./plugins/devPlugin";
import optimizer from "vite-plugin-optimizer";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), devPlugin(), optimizer(getReplacer())],
    server: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:9777',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },

        }
    }
})
