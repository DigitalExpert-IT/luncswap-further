/* eslint-disable no-var */
declare global {
  var station: {
    keplr: typeof keplrFixtures;
  } | undefined;
  var galaxyStation:{
    keplr: typeof keplrFixtures;
  } | undefined;
  var keplr: typeof keplrFixtures | undefined;
}
import {get} from 'lodash';
import {keplrFixtures} from './fixtures/keplr';

const SUPPORTED_WALLETS = {station: 'station.keplr', galaxyStation: 'galaxyStation.keplr', keplr: 'keplr'};

export type WalletType = {
  name: 'station' | 'galaxyStation' | 'keplr';
  type: 'extension';
  keplr: typeof keplrFixtures
};

export const detectWallet = (): WalletType[] => {
    const result: WalletType[] = [];
    Object.keys(SUPPORTED_WALLETS).forEach((name) => {
        const keplr = get(globalThis, SUPPORTED_WALLETS[name as 'station'], {} as typeof keplrFixtures);
        const {version, mode} = keplr;
        if (typeof version === 'string' && mode === 'extension') {
            result.push({name: name as 'station', type: 'extension', keplr});
        }
    });
    return result;
};