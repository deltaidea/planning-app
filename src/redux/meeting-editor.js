const initialState = {
  description: '',
  participant: '',
  isValidParticipant: true
};

const MEETING_EDITOR_CHANGED = 'MEETING_EDITOR_CHANGED';

export function reducer(state, action) {
  if (state === undefined) return initialState;

  const payload = action.payload || {};

  if (action.type === MEETING_EDITOR_CHANGED) state = {...state, ...payload};

  return state;
}

export function changeMeetingEditor(values) {
  return {
    type: MEETING_EDITOR_CHANGED,
    payload: values
  };
}
