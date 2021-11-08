import { Component } from 'react';
// import { Component } from 'react';

export default class Button extends Component {
  render() {
    return (
      <button type="button" className="Button" onClick={this.props.loadMorer}>
        {this.props.text}
      </button>
    );
  }
}
