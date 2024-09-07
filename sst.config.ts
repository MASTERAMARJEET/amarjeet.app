/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "amarjeet-app",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        cloudflare: true,
      },
    };
  },
  async run() {
    const api = await import("./infra/api");
    const www = await import("./infra/www");

    return {
      api: api.myApi.url,
      www: www.outputs.www,
    };
  },
});
