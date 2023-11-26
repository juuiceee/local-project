type TMods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  additional: Array<string> = [],
  mods: TMods = {},
): string {
  const positiveMods = Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([cls]) => cls);

  const positiveAdditional = additional.filter((a) => Boolean(a));

  return [cls, ...positiveAdditional, ...positiveMods].join(' ');
}
