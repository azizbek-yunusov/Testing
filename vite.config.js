import { defineConfig } from "vitest/config";

defineConfig({
  test: {
    environment: "node",
    globals: true,
    // globalSetup: [],
    // globalFiles: ['./fileurl'],
    // testTimeout: 5000
  }
})