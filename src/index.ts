import { registerPlugin } from '@capacitor/core';

import type { CapacitorOtaAssetsPlugin } from './definitions';

const CapacitorOtaAssets = registerPlugin<CapacitorOtaAssetsPlugin>('CapacitorOtaAssets', {
  web: () => import('./web').then(m => new m.CapacitorOtaAssetsWeb()),
});

export * from './definitions';
export { CapacitorOtaAssets };
