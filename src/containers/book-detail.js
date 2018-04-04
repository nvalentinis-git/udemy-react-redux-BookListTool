import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

  render() {

    if (!this.props.activeBookProp) {
      return <div>Select a book to get stated.</div>
    }

    return (
      <div>
          <h3>Details for:</h3>
          <div>Title: {this.props.activeBookProp.title} </div>
          <div>Pages: {this.props.activeBookProp.pages} </div>
      </div>
    );

  }

}

// This maps the "App state" into the "Component props"
function mapStateToProps(state) {
  return { activeBookProp: state.activeBook };
}

// Export the Container (A connected React component with the App State)
export default connect(mapStateToProps) (BookDetail);
