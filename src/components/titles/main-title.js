import * as React from "react";

class MainTitle extends React.Component {
  render() {
    return (
      <div>
        <h1 className={`${this.props.styleName}`}>
          {this.props.content} Enchanté ! On s'appel Greg Et Simon et on arrive
          bientôt. On vous acommpagnera sur tous vos besoin liés aux
          technologies numeriques (site web, données, référencement)
        </h1>
      </div>
    );
  }
}

export default MainTitle;
