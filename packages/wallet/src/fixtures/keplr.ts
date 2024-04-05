export const offlineSigner = {
    getAccounts: async () => {
        return [{
            address: 'address1',
            algo: 'secp256k1',
            pubkey: Uint8Array.from([])
        }];
    }
};

export const keplrFixtures = {
    version: '0.0.0',
    mode: 'extension',
    enable: async (chainId: string): Promise<void> => {
        console.log('connect to', chainId);
    },
    disable: async () => {},
    getOfflineSigner: (chainId: string) => {
        console.log('offline signer', chainId);
        return offlineSigner;
    }
};