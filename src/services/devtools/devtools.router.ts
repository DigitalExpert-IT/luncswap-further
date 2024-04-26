import devtoolsService from "@/services/devtools/devtools.service";
import { zValidator } from "@hono/zod-validator";
import { zfd } from "zod-form-data";
import { Hono } from "hono";
import { z } from "zod";

const app = new Hono();
const devtoolsRouter = app
  /**
   * upload wasm file and returns codeId
   */
  .post(
    "/store-code",
    zValidator(
      "form",
      zfd.formData({
        mnemonic: zfd.text(),
        file: zfd.file(),
      }),
    ),
    async (c) => {
      const body = await c.req.parseBody();
      const f = body["file"] as File;
      const mnemonic = body["mnemonic"] as string;
      const res = await devtoolsService.uploadWasm(f, mnemonic);
      return c.json({ codeId: res.codeId });
    },
  )
  /**
   * instantiate wasm code
   */
  .post(
    "/instantiate",
    zValidator(
      "json",
      z.object({
        mnemonic: z.string(),
        codeId: z.number(),
        name: z.string(),
        instantiateMsg: z.record(z.unknown()),
      }),
    ),
    async (c) => {
      const { mnemonic, codeId, name, instantiateMsg } = await c.req.json();
      const res = await devtoolsService.instantiate(
        codeId,
        instantiateMsg,
        name,
        mnemonic,
      );
      return c.json({
        events: res.events,
        contractAddress: res.contractAddress,
        transactionHash: res.transactionHash,
      });
    },
  );

export default devtoolsRouter;
