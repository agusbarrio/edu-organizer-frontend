import moment from 'moment';

const DATE_ONLY = /^\d{4}-\d{2}-\d{2}$/;

/**
 * DATEONLY / calendar-day semantics: avoids UTC vs local shifts when the API
 * returns ISO midnight or the grid treats values as instants.
 */
export function formatCalendarDateValue(raw, outputFormat = 'DD-MM-YYYY') {
  if (raw == null || raw === '') return '';
  const s = typeof raw === 'string' ? raw.trim() : '';
  if (DATE_ONLY.test(s)) {
    return moment(s, 'YYYY-MM-DD', true).format(outputFormat);
  }
  if (moment.isMoment(raw)) {
    return raw.format(outputFormat);
  }
  const u = moment.utc(raw);
  if (!u.isValid()) return '';
  return u.format(outputFormat);
}

/** Local wall date for MUI DateField / forms (edit class session). */
export function parseCalendarDateForForm(raw) {
  if (!raw) return moment().startOf('day');
  if (moment.isMoment(raw)) return raw.clone().startOf('day');
  const s = typeof raw === 'string' ? raw.trim() : '';
  if (DATE_ONLY.test(s)) {
    return moment(s, 'YYYY-MM-DD', true);
  }
  const u = moment.utc(raw);
  if (!u.isValid()) return moment().startOf('day');
  return moment({ year: u.year(), month: u.month(), date: u.date() });
}

export function calendarMoment(raw) {
  return parseCalendarDateForForm(raw);
}

/** Send YYYY-MM-DD so the server stores the calendar day the user picked. */
export function serializeDateOnlyForApi(input) {
  if (input == null) return moment().format('YYYY-MM-DD');
  if (moment.isMoment(input)) return input.format('YYYY-MM-DD');
  const m = moment(input);
  if (!m.isValid()) return moment().format('YYYY-MM-DD');
  return m.format('YYYY-MM-DD');
}

/** Optional DATEONLY for API (null when cleared / empty). */
export function serializeOptionalDateOnlyForApi(input) {
  if (input == null || input === '') return null;
  if (moment.isMoment(input)) {
    if (!input.isValid()) return null;
    return input.format('YYYY-MM-DD');
  }
  const m = moment(input);
  if (!m.isValid()) return null;
  return m.format('YYYY-MM-DD');
}

export function parseOptionalCalendarDateForForm(raw) {
  if (raw == null || raw === '') return null;
  return parseCalendarDateForForm(raw);
}
