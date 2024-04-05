import { Button } from "@/components/ui/button";
import { useEffect } from "react";

declare global {
  interface Window {
    station: {
      keplr: {
        getOfflineSigner: (chainId: string) => any;
        enable: (chainId: string) => Promise<void>;
      };
    };
  }
}

export function WalletConnection() {
  useEffect(() => {
    const init = async () => {
      await window.station.keplr.enable("pisco-1");
      const offlineSigner = window.station.keplr.getOfflineSigner("pisco-1");
      const accounts = await offlineSigner.getAccounts();
      console.log(accounts);
      // const client = Tendermint34Client.connect("https://pisco-api.terra.dev");
      // const accounts = await offlineSigner.getAccounts();
      // const wallet = await SigningCosmWasmClient.connectWithSigner(
      //   "https://pisco-lcd.terra.dev",
      //   offlineSigner,
      // );

      // console.log(wallet);
    };
    init();
  }, []);

  return <Button>Connect Wallet</Button>;
}
