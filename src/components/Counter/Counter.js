import {Component} from "react";
import "./Counter.css";

class Counter extends Component {
  timeId = 0;

  state = {
    count: 0,
    arrayOfColor: ["red", "black", "green"],
    index: 1,
    visible: true,
    timeUpdate: 0
  }

  handlerCounter(operand = 1) {
    let index = (operand === -1) ? 0
      : (operand === this.state.count * -1) ? 1 : 2;

    this.setState((state) => ({
      index: index,
      count: state.count + operand,
      timeUpdate: new Date(),
    }));

    this.timeId = setTimeout(() => {
      this.setDefaultColor();
    }, 1500);
  }

  setDefaultColor() {
    if ((new Date() - this.state.timeUpdate) > 1000) {
      this.setState({
        index: 1
      });
    }
  }

  componentDidMount() {
    clearTimeout(this.timeId);
  }

  render() {
    return (
      <div className="Counter">
        <button onClick={() => this.handlerCounter()}>Incriment</button>
        <button onClick={() => this.handlerCounter(-1)}>Decrement</button>
        <button onClick={() => this.handlerCounter(this.state.count * -1)}>Reset</button>
        <span style={{color: this.state.arrayOfColor[this.state.index]}}>{this.state.count}</span>
      </div>
    );
  }
}

export default Counter;