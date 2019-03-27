import React, { Component } from "react";
import { string, bool } from "prop-types";

import EditItem from "./TodoEditItem";
import ShowItem from "./TodoShowItem";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.toggleForm = this.toggleForm.bind(this);
    this.state = { isEditing: false, newValue: "" };
  }
  toggleForm() {
    this.state.isEditing
      ? this.setState({ isEditing: false })
      : this.setState({ isEditing: true });
  }

  render() {
    let itemClass = "item";
    if (this.props.completed) {
      itemClass += " item_is-completed";
    }
    return (
      <div className={itemClass}>
        {this.state.isEditing ? (
          <EditItem
            title={this.props.title}
            id={this.props.id}
            toggle={this.toggleForm}
            editItem={this.props.saveChanges}
          />
        ) : (
          <ShowItem
            title={this.props.title}
            id={this.props.id}
            completed={this.props.completed}
            toggle={this.toggleForm}
            delete={this.props.delete}
            complete={this.props.complete}
          />
        )}
      </div>
    );
  }
}

ShowItem.propTypes = {
  title: string.isRequired,
  completed: bool.isRequired,
  id: string.isRequired
};

export default TodoItem;
