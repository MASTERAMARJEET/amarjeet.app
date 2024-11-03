export const webCmd = new sst.x.DevCommand("Web", {
  dev: {
    autostart: true,
    command: "bun run dev",
    directory: "./apps/web",
  },
});
export const apiCmd = new sst.x.DevCommand("API", {
  dev: {
    autostart: true,
    command: "bun run dev",
    directory: "./apps/api",
  },
});
