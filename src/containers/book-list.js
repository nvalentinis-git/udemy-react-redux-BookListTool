import React, {Component} from 'react';

export default class BookLis extends Component {

  renderLis() {
    return this.props.books.map( (book) => {
        return (
          <li key={book.title} c
              lassName="list-group-item">
                {book.title}
          </li>
        );
    });
  }

  render() {
      return
        <ul className="list-group col-sm-4">
            {this.renderLis()}
        </ul>
      );
  }
}
