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
    // const www = await import("./infra/www");

    return {};
  },
});
