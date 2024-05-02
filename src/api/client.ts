import type { AppType } from "@/api/router";
import { hc } from "hono/client";

const isServerSide = typeof window === "undefined";
const apiEndpoint = isServerSide
  ? process.env.APP_URL + "/api"
  : window.location.origin + "/api";

export const client = hc<AppType>(apiEndpoint);
