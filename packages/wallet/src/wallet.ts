import { WalletType } from './wallet-detector';

export type Denom = {
  native?: string;
  cw20?: string;
}

export class Wallet {
    public chainId: string | undefined;
    public connectionStatus: 'idle' | 'connecting' | 'connected' | 'disconnected' = 'idle';
    constructor(public walletType: WalletType) {}
    
    public async connect(chainId: string): Promise<void> {
        this.connectionStatus = 'connecting';
        await this.walletType.keplr.enable(chainId);
        this.chainId = chainId;
        this.connectionStatus = 'connected';
    }
    public async disconnect(): Promise<void> {
        await this.walletType.keplr.disable();
        this.connectionStatus = 'disconnected';
    }
    public async signTransaction(): Promise<void> {}
    public async getAddress(): Promise<WalletAddress> {
        if (this.connectionStatus !== 'connected' || !this.chainId) throw new Error('Please connect wallet first');

        const offlineSigner = this.walletType.keplr.getOfflineSigner(this.chainId);
        const accounts = await offlineSigner.getAccounts();
        const walletAddress = new WalletAddress(accounts[0].address);
        return walletAddress;
    }

    public async getBalance(denom: Denom): Promise<{denom: Denom; value: bigint}> {
        return {denom, value: 0n};
    }
}

export class WalletAddress {
    constructor(public address: string) {}
}