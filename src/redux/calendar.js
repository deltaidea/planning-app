import moment from 'moment';

export const parseDate = date => moment(date, 'YYYY-MM-DD');
export const formatMoment = date => date.format('YYYY-MM-DD');

const initialState = {
  todayDate: formatMoment(moment()),
  selectedDate: '2016-09-22'
};

const URL_CHANGED = '@@router/LOCATION_CHANGE';

export function reducer(state, action) {
  if (state === undefined) return initialState;

  const payload = action.payload || {};

  if (action.type === URL_CHANGED) {
    const date = parseDate(payload.pathname.split('/').pop());
    if (date.isValid()) {
      state = { ...state, selectedDate: formatMoment(date) };
    }
  }

  return state;
}
