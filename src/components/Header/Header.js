import {Component} from "react";
import "./Header.css"

class Header extends Component {
  render() {
    const { aboutTask, descriptionTask } = this.props;
    return (
      <header className="App-header">
        <h1>{aboutTask}</h1>
        <p>{descriptionTask}</p>
      </header>
    );
  }
}

export default Header;