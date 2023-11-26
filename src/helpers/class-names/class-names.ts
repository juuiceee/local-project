type TMods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  additional: string[],
  mods: TMods,
): string {
  const positiveMods = Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([cls]) => cls);

  return [cls, ...additional, ...positiveMods].join(' ');
}
