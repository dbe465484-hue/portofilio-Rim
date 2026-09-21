import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { portfolioChatDevApi } from "./vite.chat-api.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), portfolioChatDevApi()],
});
