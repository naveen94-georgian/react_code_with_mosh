import React, { Component } from "react";
class Like extends Component {
  state = {};
  render() {
    let classes = "fa fa-heart";
    if(!!this.props.liked) classes += "-o";
    return (
      <React.Fragment>
        <span
          onClick={() => this.props.onLikeToggle()}
          style={{ cursor: "pointer" }}
        >
          <i className={classes} aria-hidden="true"></i>
        </span>
      </React.Fragment>
    );
  }
}

export default Like;
