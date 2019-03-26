import React, { Component } from "react";

import TodoAddItem from "./TodoAddItem";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          title: "Clean the house",
          completed: true,
          id: "123678345"
        },
        {
          title: "Walk the dog",
          completed: false,
          id: "678234567"
        },
        {
          title: "Wash the car",
          completed: false,
          id: "789345678"
        },
        {
          title: "Do laundry",
          completed: false,
          id: "6783478"
        }
      ]
    };
    this.add = this.add.bind(this);
    this.getRandom = this.getRandom.bind(this);
  }

  add(val) {
    this.setState(state => {
      const item = {
        title: val,
        completed: false,
        id: this.getRandom(1000, 100000000000000).toString()
      };
      return {
        list: [...state.list, item]
      };
    });
  }

  deleteItem(i) {
    this.list.splice(i, 1);
  }

  complete(item) {
    item.completed = !item.completed;
  }

  save(item, val) {
    item.title = val;
  }

  getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    return (
      <div className="todo-list">
        <h1>Todo App</h1>
        <h3>Currently 5 todo items in the list</h3>
        <TodoAddItem addNewItem={this.add} />
        {this.state.list.map(item => {
          return (
            <TodoItem
              title={item.title}
              completed={item.completed}
              key={item.id}
            />
          );
        })}
      </div>
    );
  }
}

export default TodoList;
