import { defineConfig } from "vitest/config";

defineConfig({
  test: {
    environment: "node",
    globals: true,
    // globalSetup: [],
    // globalFiles: ['./src/setupFiles.ts', '...'] | "./src/...../",
    // testTimeout: 5000
  }
})