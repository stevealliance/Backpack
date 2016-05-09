import React from 'react';

export default class Label extends React.Component {
  render() {
    return (
      <label><h2>
        {this.props.children}
      </h2></label>
    );
  }
}
