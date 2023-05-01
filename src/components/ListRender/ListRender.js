import {Component} from "react";
// import {v4 as uuidv4} from 'uuid';
import "./ListRender.css"

class ListRender extends Component {

  render() {
    const {items} = this.props;

    const elemLi = items.map((elem, index)=>{
      return <li style={{color:elem}} className={"item-color-" + index} key={index}>{elem}</li>
    })
    return (
      <div className={"ListRender"}>
        <ul>
          {elemLi}
        </ul>
      </div>
    );
  }
}

export default ListRender;