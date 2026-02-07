import * as migration_20260207_050403 from './20260207_050403';

export const migrations = [
  {
    up: migration_20260207_050403.up,
    down: migration_20260207_050403.down,
    name: '20260207_050403'
  },
];
