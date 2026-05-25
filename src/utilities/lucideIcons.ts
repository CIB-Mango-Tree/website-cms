import iconNodes from 'lucide-static/icon-nodes.json' with { type: 'json' };

export type LucideIconOption = { name: string; value: string };

export const toLabel = (kebab: string): string =>
  kebab.split('-').map((w) => w && w[0].toUpperCase() + w.slice(1)).join(' ');

export const kebabToPascal = (kebab: string): string =>
  kebab.replace(/(^|-)([a-z0-9])/g, (_, __, c: string) => c.toUpperCase());

export const lucideIconOptions: Array<LucideIconOption> = Object.keys(iconNodes)
  .sort()
  .map((value: string): LucideIconOption => ({
    name: toLabel(value),
    value: kebabToPascal(value)
  }));
