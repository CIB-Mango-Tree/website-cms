import * as migration_20260207_050403 from './20260207_050403';
import * as migration_20260514_032425 from './20260514_032425';
import * as migration_20260514_035041 from './20260514_035041';

export const migrations = [
  {
    up: migration_20260207_050403.up,
    down: migration_20260207_050403.down,
    name: '20260207_050403',
  },
  {
    up: migration_20260514_032425.up,
    down: migration_20260514_032425.down,
    name: '20260514_032425',
  },
  {
    up: migration_20260514_035041.up,
    down: migration_20260514_035041.down,
    name: '20260514_035041'
  },
];
