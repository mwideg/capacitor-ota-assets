import { WebPlugin } from '@capacitor/core';

import type { CapacitorOtaAssetsPlugin } from './definitions';

export class CapacitorOtaAssetsWeb extends WebPlugin implements CapacitorOtaAssetsPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
