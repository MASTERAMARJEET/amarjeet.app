import { domain } from "./dns";

export const www = new sst.cloudflare.StaticSite("Site", {
  domain: "www." + domain,
  path: "./packages/www",
});

export const outputs = {
  www: www.url,
};
