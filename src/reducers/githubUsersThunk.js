//REDUCER

const githubUsersThunkReducer = (state = {
  users: []
}, action) => {
  switch (action.type) {
    case "GET_GIT_USERS":
      state = {
        ...state,
        users: action.payload.users
      }
      break;
  }
  return state
}

export default githubUsersThunkReducer
