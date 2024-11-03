/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "amarjeet-app",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "cloudflare",
      providers: {
        cloudflare: true,
        aws: true,
      },
    };
  },
  async run() {
    new sst.x.DevCommand("Web", {
      dev: {
        autostart: true,
        command: "bun run dev",
        directory: "./apps/web",
      },
    });
    new sst.x.DevCommand("API", {
      dev: {
        autostart: true,
        command: "bun run dev",
        directory: "./apps/api",
      },
    });
  },
});
