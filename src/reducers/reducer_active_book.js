
// state is NOT Application State, only the state for this reducer.
// state only applies to this Reducer
export default function(state = null, action) {

  console.log("Reducer Active Book, action received:" + action.type);

  switch (action.type) {
    case 'BOOK_SELECD':
      return action.payload;
      break;
  }

  return state;
}
