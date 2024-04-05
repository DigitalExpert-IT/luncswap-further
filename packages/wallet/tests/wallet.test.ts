import { describe, expect, test, vi } from 'vitest';
import { keplrFixtures } from '../src/fixtures/keplr';
import { Wallet, WalletAddress } from '../src/wallet';
import { detectWallet } from '../src/wallet-detector';

describe('Wallet Connection', () => {
    test('should be able to connect wallet', async () => {  
        vi.stubGlobal('keplr', keplrFixtures);
        const [station] = detectWallet();  
        const wallet = new Wallet(station);
        expect(wallet.connectionStatus).toEqual('idle');
        await wallet.connect('pisco-1');
        expect(wallet.connectionStatus).toEqual('connected');

        const connectedAddress = await wallet.getAddress();
        expect(connectedAddress instanceof WalletAddress).toBeTruthy();

        expect(connectedAddress.address).toEqual('address1');

        await wallet.disconnect();
        expect(wallet.connectionStatus).toEqual('disconnected');
    });
});