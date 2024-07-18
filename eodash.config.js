import { defineConfig } from "@eodash/eodash/config";

export default defineConfig({
    lib: true,
    entryPoint: "./.eodash/main.js",
    publicDir: './.eodash/public',
    widgets:"./.eodash/widgets"
})