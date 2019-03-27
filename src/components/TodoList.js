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
    this.save = this.save.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.complete = this.complete.bind(this);
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

  deleteItem(id) {
    this.setState(state => {
      const index = state.list.findIndex(item => {
        return item.id === id;
      });
      state.list.splice(index, 1);
      return {
        list: state.list
      };
    });
  }

  complete(id) {
    this.setState(state => {
      const newList = state.list.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      });
      return {
        list: newList
      };
    });
  }

  save(val) {
    this.setState(state => {
      const newList = state.list.map(item => {
        if (item.id === val.id) {
          item.title = val.title;
        }
        return item;
      });
      return {
        list: newList
      };
    });
  }

  getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    const Counter = () =>
      this.state.list.length > 0 && (
        <h3>
          Currently {this.state.list.length} todo{" "}
          {this.state.list.length === 1 ? "item" : "items"} in the list
        </h3>
      );

    const Tasks = () => (
      <div className="item-group">
        {this.state.list.map(item => {
          return (
            <TodoItem
              title={item.title}
              completed={item.completed}
              id={item.id}
              key={item.id}
              saveChanges={this.save}
              delete={this.deleteItem}
              complete={this.complete}
            />
          );
        })}
      </div>
    );
    return (
      <div className="todo-list">
        <h1>Todo App</h1>
        <Counter />
        <TodoAddItem addNewItem={this.add} />
        <Tasks />
      </div>
    );
  }
}

export default TodoList;
