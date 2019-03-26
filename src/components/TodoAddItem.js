import React, { Component } from "react";

class TodoAddItem extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { newItem: "" };
  }

  handleChange(e) {
    this.setState({ newItem: e.target.value });
  }

  handleSubmit(e) {
    this.props.addNewItem(this.state.newItem);
    this.setState({ newItem: "" });
    e.preventDefault();
  }

  render() {
    return (
      <div className="todo-add-item">
        <form id="add-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add Item"
            className="todo-input"
            name="todo"
            value={this.state.newItem}
            onChange={this.handleChange}
          />
          <button type="submit" value="Submit" className="btn btn-add-todo">
            <i className="fas fa-plus" /> Add
          </button>
        </form>
      </div>
    );
  }
}

export default TodoAddItem;
