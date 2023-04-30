import {Component} from "react";
import "./HelloWorld.css"

class HelloWorld extends Component {
  state = {
    color: "blue"
  }

  setColor() {
    this.setState({
      color: this.getRandomColor()
    })
  }

  getRandomColor() {
    let rnd = () => Math.floor(Math.random() * 256);
    return `rgb(${rnd()}, ${rnd()}, ${rnd()})`;
  }

  render() {
    const {text} = this.props;
    return (
      <div className={"HelloWorld"}>
        <div onClick={() => this.setColor()} style={{color: this.state.color}}>{text} Click me to check my color!</div>
      </div>
    );
  }
}

export default HelloWorld;