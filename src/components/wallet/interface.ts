export interface Keplr {
  getOfflineSigner: (chainId: string) => KeplrOfflineSigner;
  enable: (chainId: string) => Promise<void>;
}

export interface KeplrOfflineSigner {
  getAccounts: () => Promise<KeplrAccount[]>;
}

export interface KeplrAccount {
  address: string;
  algo: string;
  pubkey: Uint8Array;
}
