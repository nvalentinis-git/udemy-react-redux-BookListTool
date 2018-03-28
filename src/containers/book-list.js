import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookLis extends Component {

  renderLis() {
    return this.props.books.map( (book) => {
        return (
          <li key={book.title}
              lassName="list-group-item">
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

// - This function will map the 'app state' from Redux
//    into the 'props' on the React component
// - This function will be called by the 'connect' function from Redux
// - This function will return an object that will be
//    available as 'props', this.props.books
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

// The Container is exported, not the plain React Component
// connect receive a function where the map is done
// When the state change the component will automatically re-rendered
export default connect(mapStateToProps) (BookLis);
