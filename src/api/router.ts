import { Hono } from "hono";
import { logger } from "hono/logger";
import devtoolsRouter from "@/services/devtools/devtools.router";

const app = new Hono();
app.use(logger());

const routes = app.route("/api/devtools", devtoolsRouter);

export type AppType = typeof routes;
export default app;
