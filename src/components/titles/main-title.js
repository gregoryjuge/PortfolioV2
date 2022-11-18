import * as React from "react";

class MainTitle extends React.Component {
  render() {
    return (
      <div>
        <h1 className={`${this.props.styleName}`}>{this.props.content}</h1>
      </div>
    );
  }
}

export default MainTitle;
