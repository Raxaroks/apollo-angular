
export function isStringEmpty(target?: string | null): boolean {
  if (!target || target.trim().length === 0 || target === '0' || target === '-') return true;
  return false;
}
