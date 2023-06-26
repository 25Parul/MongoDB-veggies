import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/veggies": {
        target: "http://localhost:4004",
        changeOrigin: true,
      },
      "/create_veggie": {
        target: "http://localhost:4004",
        changeOrigin: true,
      },
    },
  },
});
