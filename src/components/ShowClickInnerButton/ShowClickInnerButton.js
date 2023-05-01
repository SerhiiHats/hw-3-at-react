import {Component} from "react";
import "./ShowClickInnerButton.css";

class ShowClickInnerButton extends Component {

  handlerDiv(e){
    console.log("Div clicked");
    e.stopPropagation();
  }

  handlerButton(e){
    console.log("Button clicked");
    e.stopPropagation();
  }

  render() {
    return (
      <div onClick={(e)=>this.handlerDiv(e)} className={"ShowClickInnerButton"}>
        <p>Click this div</p>
        <button onClick={(e)=>this.handlerButton(e)}>Click this button</button>
      </div>
    );
  }
}

export default ShowClickInnerButton;