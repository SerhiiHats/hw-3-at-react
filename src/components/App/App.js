import {Component} from "react";
import './App.css';
import Header from "../Header/Header";
import List from "../List/List";
import Counter from "../Counter/Counter";
import HelloWorld from "../HelloWorld/HelloWorld";
import ListRender from "../ListRender/ListRender";
import ShowClickInnerButton from "../ShowClickInnerButton/ShowClickInnerButton";

class App extends Component {
  state = {
    aboutTask1: "React: Домашнє завдання 3. Завдання 2",
    aboutTask2: "React: Домашнє завдання 3. Завдання 3",
    aboutTask3: "React: Домашнє завдання 3. Завдання 4",
    aboutTask4: "React: Домашнє завдання 3. Завдання 5",
    aboutTask5: "React: Домашнє завдання 3. Завдання 6",
    descriptionTask1: "Створіть компонент, який зображатиме список імен. Імена не мають повторюватися.",
    descriptionTask2: "Створіть компонент, який виводитиме 2 кнопки та лічильник. Клацанням на кнопку «+» лічильник збільшується, а натисканням на кнопку «-» – зменшується.",
    descriptionTask3: "Створіть застосунок за допомогою Create React App і виведіть на сторінку текст «Hello world».",
    descriptionTask4: "Створіть сайт, на якому є 2 списки та кнопка. Після натискання на кнопку перший елемент зі списку 1 переходить на кінець списку 2.",
    descriptionTask5: "Створіть компонент, що буде рендерити div, всередині якого є кнопка. Клацанням на div виведіть у консоль «Div clicked», а натисканням на кнопку – «Button clicked». Коли ви натиснете кнопку, то побачите «Button clicked» і «Div clicked», а маєте побачити тільки повідомлення від кнопки. Розв'яжіть цю проблему.",
    arrayNames: ["Анатолій", "Анатолій", "Буревій", "Анатолій", "Вероніка", "Буревій", "Кристина", "Ольга", "Сергій", "Анатолій", "Вероніка", "Сергій"],
    arrayOfRainbow1: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
    arrayOfRainbow2: ["indigo"],
  }

  // handlerToDropList(flag= false){
  //   let newArrayOfRainbow1 = this.state.arrayOfRainbow1.slice(0);
  //   let newArrayOfRainbow2 = this.state.arrayOfRainbow2.slice(0);

  //   if(!flag){
  //     if(this.state.arrayOfRainbow1.length === 0){
  //       return
  //     }
  //     const item = newArrayOfRainbow1.shift();
  //     newArrayOfRainbow2.push(item);

  //   } else {
  //     if(this.state.arrayOfRainbow2.length === 0){
  //       return
  //     }
  //     const item = newArrayOfRainbow2.shift();
  //     newArrayOfRainbow1.push(item);
  //   }

  //   this.setState({
  //     arrayOfRainbow1: newArrayOfRainbow1,
  //     arrayOfRainbow2: newArrayOfRainbow2,
  //   });
  // }

  handlerToDropList(flag= false){
    const { arrayOfRainbow1, arrayOfRainbow2 } = this.state;

    if ((!flag && arrayOfRainbow1.length === 0) || (flag && arrayOfRainbow2.length === 0)) {
      return;
    }
  
    const item = flag ? arrayOfRainbow2.shift() : arrayOfRainbow1.shift();
    const newArrayOfRainbow1 = flag ? [...arrayOfRainbow1, item] : arrayOfRainbow1;
    const newArrayOfRainbow2 = flag ? arrayOfRainbow2 : [...arrayOfRainbow2, item];
  
    this.setState({
      arrayOfRainbow1: newArrayOfRainbow1,
      arrayOfRainbow2: newArrayOfRainbow2,
    });
  }

  render() {
    return (
      <div className="App">
        <Header aboutTask={this.state.aboutTask1} descriptionTask={this.state.descriptionTask1}/>
        <List items={this.state.arrayNames}/>
        <Header aboutTask={this.state.aboutTask2} descriptionTask={this.state.descriptionTask2}/>
        <Counter/>
        <Header aboutTask={this.state.aboutTask3} descriptionTask={this.state.descriptionTask3}/>
        <HelloWorld text={"Hello world!!!"}/>
        <Header aboutTask={this.state.aboutTask4} descriptionTask={this.state.descriptionTask4}/>
        <div className={"Wrap-lists"}>
          <ListRender items={this.state.arrayOfRainbow1}/>
          <div>
            <button onClick={()=>this.handlerToDropList()} className={"BtnDrop"}>Click to drop ⇒</button>
            <button onClick={()=>this.handlerToDropList(true)} className={"BtnDrop"}>⇐ Click to drop</button>
          </div>
          <ListRender items={this.state.arrayOfRainbow2}/>
        </div>
        <Header aboutTask={this.state.aboutTask5} descriptionTask={this.state.descriptionTask5}/>
        <ShowClickInnerButton/>
      </div>
    );
  }
}

export default App;
