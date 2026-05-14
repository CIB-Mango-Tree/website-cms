import * as migration_20260207_050403 from './20260207_050403';
import * as migration_20260514_032425 from './20260514_032425';
import * as migration_20260514_035041 from './20260514_035041';
import * as migration_20260514_040528 from './20260514_040528';
import * as migration_20260514_041700 from './20260514_041700';

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
    name: '20260514_035041',
  },
  {
    up: migration_20260514_040528.up,
    down: migration_20260514_040528.down,
    name: '20260514_040528',
  },
  {
    up: migration_20260514_041700.up,
    down: migration_20260514_041700.down,
    name: '20260514_041700'
  },
];
