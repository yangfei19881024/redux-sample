import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <h1 onClick={this.props.onClick}>buttons</h1>
    )
  }
}

export default Button;
