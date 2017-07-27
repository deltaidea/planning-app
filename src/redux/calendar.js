import moment from 'moment';

export const parseDate = date => moment(date, 'YYYY-MM-DD');
export const formatMoment = date => date.format('YYYY-MM-DD');
// The calendar panel needs to know today's date to highlight it with yellow.
// I decided the purity of storing it in Redux isn't worth the additional complexity of updating it.
export const getTodayDate = () => formatMoment(moment());

// There're no actions specific to the calendar. The source of truth is the current URL.
// However, we still have to store selected date separately to remember it after going
// to `/clients` and back.

const initialState = {
  // Select the date with sample meetings by default.
  selectedDate: '2016-09-22'
};

const URL_CHANGED = '@@router/LOCATION_CHANGE';

export function reducer(state, action) {
  if (state === undefined) return initialState;

  if (action.type !== URL_CHANGED) return state;

  const match = action.payload.pathname.match(/meetings\/(\d{4}-\d{2}-\d{2})/);
  if (!match) return state;

  const date = parseDate(match[1]);
  if (!date.isValid()) return state;

  return {
    selectedDate: formatMoment(date)
  };
}
