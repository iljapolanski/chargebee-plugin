import { WebPlugin } from '@capacitor/core';

import type { ChargebeePlugin } from './definitions';

export class ChargebeeWeb extends WebPlugin implements ChargebeePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
