import { calculateFee, StdFee } from "@cosmjs/stargate";
import { coin } from "@cosmjs/amino";
import {
  DirectSecp256k1HdWallet,
  makeCosmoshubPath,
} from "@cosmjs/proto-signing";
import { useEffect } from "react";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";

export function StoreCode() {
  useEffect(() => {
    const init = async () => {
      const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
        "dilemma already city vintage club exotic stomach brand profit muffin truly art lion welcome park castle jungle offer genre emotion advice joy other begin",
      );
      const client = await SigningCosmWasmClient.connectWithSigner(
        "https://pisco-rpc.terra.dev",
        wallet,
      );
      console.log(wallet, client);
    };

    init();
  }, []);

  return null;
}
