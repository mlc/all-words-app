// this is all so bad but js-joda is so big

export type Month = readonly [number, number];

const startDate: Month = [2018, 8];

export const addMonth = ([y, m]: Month): Month =>
  m === 12 ? [y + 1, 1] : [y, m + 1];

export const subtractMonth = ([y, m]: Month): Month =>
  m === 1 ? [y - 1, 12] : [y, m - 1];

export const fmt = ([y, m]: Month): string => `${y}-${m >= 10 ? '' : '0'}${m}`;

const check = (elts: readonly number[]): elts is Month =>
  elts.length === 2 &&
  Number.isInteger(elts[0]) &&
  Number.isInteger(elts[1]) &&
  elts[1] >= 1 &&
  elts[1] <= 12;

export const isoToMonth = (iso: string): Month => {
  const result = iso.substring(0, 7).split('-').map(Number);
  if (check(result)) {
    return result;
  } else {
    throw new Error('bad iso');
  }
};

const lt = (a: Month, b: Month): boolean => {
  if (a[0] < b[0]) {
    return true;
  } else if (a[0] > b[0]) {
    return false;
  } else {
    return a[1] <= b[1];
  }
};

export const validMonths = (): string[] => {
  const end = isoToMonth(new Date().toISOString());
  const result: string[] = [];
  let now = startDate;
  do {
    result.unshift(fmt(now));
    now = addMonth(now);
  } while (lt(now, end));
  return result;
};
