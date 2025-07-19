import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    allowedHosts: [".ngrok-free.app"],
    host: "0.0.0.0",
    port: 5173,
  },
  plugins: [react(), tailwindcss()],
});
