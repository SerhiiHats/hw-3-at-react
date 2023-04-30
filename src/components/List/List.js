import {Component} from "react";
import "./List.css"

class List extends Component{

  render() {
    const {items} = this.props;
    const set = new Set(items);
    const uniqueItems = [...set];

    const elemLi = uniqueItems.map((item, index)=>{
      return <li className={"item" + index} key={item.toString()}>{item}</li>
    })
    return (
      <div className={"List"}>
        <ul>
          {elemLi}
        </ul>
      </div>
    );
  }
}

export default List;