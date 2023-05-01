import {Component} from "react";
import "./ShowClickInnerButton.css";

class ShowClickInnerButton extends Component {

  render() {
    return (
      <div className={"ShowClickInnerButton"}>
        <p>Div Cliccked</p>
        <button>Button clicked</button>
      </div>
    );
  }
}

export default ShowClickInnerButton;