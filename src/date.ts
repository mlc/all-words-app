import { ZoneId, ZonedDateTime, DateTimeFormatter } from '@js-joda/core';

const ymFormat = DateTimeFormatter.ofPattern('yyyy-MM');
const startDate = ZonedDateTime.parse('2018-08-13T00:00Z');

export const validMonths = (): string[] => {
  const end = ymFormat.format(ZonedDateTime.now(ZoneId.UTC));
  const result: string[] = [];
  let now = startDate;
  do {
    result.unshift(ymFormat.format(now));
    now = now.plusMonths(1);
  } while (result[0] <= end);
  return result;
};
