import { describe, expect, test, vi } from 'vitest';
import {detectWallet} from '../src/wallet-detector';
import { keplrFixtures } from '../src/fixtures/keplr';

const resetGlobal = () => {
    vi.stubGlobal('station', undefined);
    vi.stubGlobal('galaxyStation', undefined);
    vi.stubGlobal('keplr', undefined);
};

describe('Wallet Selector', () => {
    test('should detect station wallet', async () => {
        vi.stubGlobal('station', {
            keplr: keplrFixtures
        });
        const detectedWallets = detectWallet();
        expect(detectedWallets).toStrictEqual([{
            name: 'station',
            type: 'extension'
        }]);
    });

    test('should detect keplr', async () =>{
        resetGlobal();
        vi.stubGlobal('keplr', keplrFixtures);
        const detectedWallets = detectWallet();

        expect(detectedWallets).toStrictEqual([{
            name: 'keplr',
            type: 'extension'
        }]);
    });

    test('should detect galaxyStation', async () =>{
        resetGlobal();
        vi.stubGlobal('galaxyStation', {
            keplr:keplrFixtures
        });
        const detectedWallets = detectWallet();
    
        expect(detectedWallets).toStrictEqual([{
            name: 'galaxyStation',
            type: 'extension'
        }]);
    });

    test('should detect multiple', async () =>{
        resetGlobal();
        vi.stubGlobal('galaxyStation', {
            keplr: keplrFixtures
        });
        vi.stubGlobal('keplr', keplrFixtures);
        const detectedWallets = detectWallet();
    
        expect(detectedWallets).toStrictEqual([{
            name: 'galaxyStation',
            type: 'extension'
        }, {
            name: 'keplr',
            type: 'extension'
        }]);
    });
});