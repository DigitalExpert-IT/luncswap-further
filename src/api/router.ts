import devtoolsService from "@/services/devtools/devtools.service";
import { Hono } from "hono";
import { logger } from "hono/logger";

const app = new Hono();
app.use(logger());

const routes = app.post("/api/devtools/store-code", async (c) => {
  const body = await c.req.parseBody();
  const f = body["file"];
  const mnemonic = body["mnemonic"];

  if (f instanceof File === false) {
    return c.json({ status: "ERROR", message: "invalid file" }, 400);
  }
  if (typeof mnemonic !== "string") {
    return c.json({ status: "ERROR", message: "invalid mnemonic" }, 400);
  }

  const res = await devtoolsService.uploadWasm(f, mnemonic);
  return c.json({ codeId: res.codeId });
});

export type AppType = typeof routes;
export default app;
