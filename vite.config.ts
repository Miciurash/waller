import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 5173,
    host: true,
    open: true,
    proxy: {
      "/ws": {
        target: "http://127.0.0.1:2567",
        ws: true,
      },
    },
  },
});
