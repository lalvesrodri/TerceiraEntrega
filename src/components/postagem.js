import React, { Component } from "react";

export default class legenda extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p>
          {this.props.name} {this.props.children}
        </p>
      </div>
    );
  }
}
