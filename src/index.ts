import { registerPlugin } from '@capacitor/core';

import type { ChargebeePlugin } from './definitions';

const Chargebee = registerPlugin<ChargebeePlugin>('Chargebee', {
  web: () => import('./web').then(m => new m.ChargebeeWeb()),
});

export * from './definitions';
export { Chargebee };
