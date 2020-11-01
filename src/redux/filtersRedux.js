/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const CHANGE_FROM_DURATION = createActionName('CHANGE_FROM_DURATION');
export const CHANGE_TO_DURATION = createActionName('CHANGE_IO_DURATION');
export const CHANGE_TAGS = createActionName('CHANGE_TAGS');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const changeFromDuration = payload => ({ payload, type: CHANGE_FROM_DURATION });
export const changeToDuration = payload => ({ payload, type: CHANGE_TO_DURATION });
export const changeTags = payload =>({ payload, type: CHANGE_TAGS});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case CHANGE_FROM_DURATION:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          from: action.payload,
        },
      };
    case CHANGE_TO_DURATION:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          to: action.payload,
        },
      };
    case CHANGE_TAGS:
      return {
        ...statePart,
        tags: action.payload,
      };
    default:
      return statePart;
  }
}
