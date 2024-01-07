export type TMods = Record<string, boolean | string | undefined>;

export function classNames(
  style: string,
  additional: Array<string | undefined> = [],
  mods: TMods = {},
): string {
  const positiveMods = Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([cls]) => cls);

  const positiveAdditional = additional.filter((a) => Boolean(a));

  return [style, ...positiveAdditional, ...positiveMods].join(' ');
}
