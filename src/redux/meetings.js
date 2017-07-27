import uuid from 'uuid/v4';

const initialState = [
  { id: '0', date: '2016-09-22', description: 'Scheduling a meeting time shouldn\'t be hard', participantId: '4' },
  { id: '1', date: '2016-09-22', description: 'Democratic way to coordinate', participantId: '1' }
];

const MEETING_CREATED = 'MEETING_CREATED';
const MEETING_EDITED = 'MEETING_EDITED';
const MEETING_DELETED = 'MEETING_DELETED';

export function reducer(meetings, action) {
  if (meetings === undefined) return initialState;

  const payload = action.payload || {};

  if (action.type === MEETING_CREATED) meetings = [...meetings, payload];
  if (action.type === MEETING_EDITED) meetings = meetings.map(x => x.id === payload.id ? payload : x);
  if (action.type === MEETING_DELETED) meetings = meetings.filter(x => x.id !== payload.id);

  return meetings;
}

export function createMeeting(date, description, participantId) {
  return {
    type: MEETING_CREATED,
    payload: { id: uuid(), date, description, participantId }
  };
}

export function editMeeting(id, newDate, newDescription, newParticipantId) {
  return {
    type: MEETING_EDITED,
    payload: { id, date: newDate, description: newDescription, participantId: newParticipantId }
  };
}

export function deleteMeeting(id) {
  return {
    type: MEETING_DELETED,
    payload: { id }
  };
}
