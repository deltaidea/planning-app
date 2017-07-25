import { reducer as calendarReducer } from './calendar';
import { reducer as clientsReducer } from './clients';
import { reducer as meetingsReducer } from './meetings';

export const reducers = {
  calendar: calendarReducer,
  clients: clientsReducer,
  meetings: meetingsReducer
};
