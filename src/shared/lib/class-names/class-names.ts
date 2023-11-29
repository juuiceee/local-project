type TMods = Record<string, boolean | string>;

export function classNames(
  style: string,
  additional: Array<string> = [],
  mods: TMods = {},
): string {
  const positiveMods = Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([cls]) => cls);

  const positiveAdditional = additional.filter((a) => Boolean(a));

  return [style, ...positiveAdditional, ...positiveMods].join(' ');
}
