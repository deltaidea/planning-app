import { reducer as clientsReducer } from './clients';
import { reducer as meetingsReducer } from './meetings';

export const reducers = {
  clients: clientsReducer,
  meetings: meetingsReducer
};
