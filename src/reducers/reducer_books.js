
// This is a reducer function
// This will provide the value of an application state
export default function(state, action) {

  console.log("Reducer Books, action received:" + action.type);

  return [
      { title: 'Book 1'},
      { title: 'Book 2'},
      { title: 'Book 3'},
      { title: 'Book 4'}
  ];
}
