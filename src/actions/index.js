
// Action Creator function
export function selectBook(book) {
  console.log("Book selected: " + book.title);

    // selectBook is an ActionCreator and needs to return an Action,
    // an Oject with a type property and a payload.

    return {
      type: 'BOOK_SELECD',
      payload: book
    };
}
