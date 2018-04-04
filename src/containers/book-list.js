import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookLis extends Component {

  renderLis() {
    return this.props.books.map( (book) => {
        return (
          <li key={book.title}
              onClick={() => this.props.selectBook(book)}
              className="list-group-item">
              {book.title}
          </li>
        );
    });
  }

  render() {
      return (
        <ul className="list-group col-sm-4">
            {this.renderLis()}
        </ul>
      );
  }
}

// - This function will map the 'App State' from Redux
//    into the 'props' on the React component
// - This function will be called by the 'connect' function from Redux
// - This function will return an object that will be
//    available as 'props', this.props.books
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

// - This function ensure that the Actions are passed through
//    all the reducers on the application.
// - This function will return an object that will be
//    available as 'props', this.props.selectBook
//    the object returned will be the one passed on the
//    function bindActionCreator()
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// The Container is exported, not the plain React Component
// connect() receive as first parameter a function to map the App State
//  into the props.
// conncet() receive as second parameter a function to map the Actions
//  you whant to flush on all the Reducers
// When the state change the component will automatically re-rendered
export default connect(mapStateToProps, mapDispatchToProps) (BookLis);
