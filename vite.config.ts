import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'), // 设置 `@` 指向 `src` 目录
        },
    },
    base: './', // 设置打包路径
    server: {
        port: 4000, // 设置服务器启动端口号
        open: true, // 设置服务器启动时是否自动打开浏览器
        hmr: true, // 启用热更新
        cors: true, // 允许跨域
        // 设置代理,根据我们项目实际情况配置
        // proxy: {
        //   '/api': {
        //     target: 'http://www.baidu.com:8080',
        //     changeOrigin: true,
        //     secure: false,
        //     rewrite: (path) => path.replace('./api/', '/')
        //   }
        // }
    },

});
