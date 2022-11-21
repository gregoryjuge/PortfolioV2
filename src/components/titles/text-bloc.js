import * as React from "react";
import "./text-bloc.css";

class TextBloc extends React.Component {
  render() {
    return (
      <div>
        <p className="text-bloc">
          {this.props.content} _____Agence de création numérique Bordelaise.
          <br />
          Nous vous accompagnons sur tous vos besoins liés aux technologies
          numériques (site web, données, référencement)_____
        </p>
      </div>
    );
  }
}

export default TextBloc;
