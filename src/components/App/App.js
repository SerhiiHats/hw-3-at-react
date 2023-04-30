import {Component} from "react";
import './App.css';
import Header from "../Header/Header";
import List from "../List/List";
import Counter from "../Counter/Counter";
import HelloWorld from "../HelloWorld/HelloWorld";

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
      </div>
    );
  }
}

export default App;
