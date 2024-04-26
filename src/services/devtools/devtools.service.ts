import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { GasPrice } from "@cosmjs/stargate";

class DevtoolsService {
  async uploadWasm(f: File, mnemonic: string) {
    const [wallet, client] = await this.acquireConn(mnemonic);
    const accounts = await wallet.getAccounts();
    const result = await client.upload(
      accounts[0].address,
      new Uint8Array(await f.arrayBuffer()),
      "auto",
      undefined,
    );
    return result;
  }

  private async acquireConn(mnemonic: string) {
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
      prefix: "terra",
    });
    const client = await SigningCosmWasmClient.connectWithSigner(
      "https://pisco-rpc.terra.dev",
      wallet,
      {
        gasPrice: GasPrice.fromString("0.25uluna"),
      },
    );
    return [wallet, client] as const;
  }
}

export default new DevtoolsService();
