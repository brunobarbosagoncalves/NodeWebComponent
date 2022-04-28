const GITHUB_CLEAN = 'GITHUB_CLEAN';
const GITHUB_USER_CLEAN = 'GITHUB_USER_CLEAN';
const GITHUB_USER_LIST_CLEAN = 'GITHUB_USER_LIST_CLEAN';
const GITHUB_USER_LIST_SET = 'GITHUB_USER_LIST_SET';
const GITHUB_USER_SET = 'GITHUB_USER_SET';
const GITHUB_USER_HISTORY_ADD = 'GITHUB_USER_HISTORY_ADD';
const GITHUB_USER_LIST_ADD = 'GITHUB_USER_LIST_ADD';

const initialState = {
  user: {},
  userlist: [
    {
      name: 'Bruno',
      age: 35,
    },
    {
      name: 'carlos',
      age: 34,
    },
    {
      name: 'Rodolfo',
      age: 36,
    },
  ],
  historic: [],
};
export default (state = initialState, action) => {
  console.log('ACTION GITHUB', action);
  switch (action.type) {
    case GITHUB_CLEAN:
      return initialState;

    case GITHUB_USER_CLEAN:
      return { ...state, user: {} };

    case GITHUB_USER_LIST_CLEAN:
      return { ...state, userlist: [] };

    case GITHUB_USER_LIST_SET:
      return { ...state, userlist: action.payload };

    case GITHUB_USER_SET:
      return { ...state, user: action.payload };

    case GITHUB_USER_HISTORY_ADD:
      return { ...state, historic: [action.payload, ...state.historic] };

    case GITHUB_USER_LIST_ADD:
      return { ...state, userlist: [...stats.userlist, payload.user] };

    default:
      return state;
  }
};
