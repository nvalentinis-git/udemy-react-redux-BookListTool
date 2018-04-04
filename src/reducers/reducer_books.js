
// This is a reducer function
// This will provide the value of an application state
export default function(state, action) {

  console.log("Reducer Books, action received:" + action.type);

  return [
      { title: 'Book 1', pages: 23 },
      { title: 'Book 2', pages: 54 },
      { title: 'Book 3', pages: 87 },
      { title: 'Book 4', pages: 13 }
  ];
}
