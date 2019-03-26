import React, { Component } from "react";
import { string, bool } from "prop-types";

const ShowItem = props => (
  <div className="item__show">
    <div className="btn_complete">
      <h3>{props.title}</h3>
    </div>
    <div className="btn__group">
      {!props.completed && (
        <button className="btn btn_edit" onClick={props.toggle}>
          <i className="fas fa-edit" />
        </button>
      )}
      <button className="btn btn_delete">
        <i className="fas fa-trash-alt" />
      </button>
    </div>
  </div>
);

const EditItem = props => (
  <div className="item__edit">
    <form id="edit-form">
      <div className="edit-input">
        <input value={props.title} type="text" className="todo-input" />
      </div>
      <div className="btn__group">
        <button className="btn btn_save" type="submit">
          <i className="fas fa-check" />
        </button>
        <button className="btn btn_cancel">
          <i className="fas fa-times" />
        </button>
      </div>
    </form>
  </div>
);

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.toggleForm = this.toggleForm.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { isEditing: false, newValue: "" };
  }
  toggleForm() {
    if (!this.state.isEditing) {
      // this.setState({ newValue: this.props.title });
      this.setState({ isEditing: true });
    } else this.setState({ isEditing: false });
  }

  render() {
    let itemClass = "item";
    if (this.props.completed) {
      itemClass += " item_is-completed";
    }
    return (
      <div className={itemClass}>
        {this.state.isEditing ? (
          <EditItem title={this.props.title} />
        ) : (
          <ShowItem
            title={this.props.title}
            completed={this.props.completed}
            toggle={this.toggleForm}
          />
        )}
      </div>
    );
  }
}

ShowItem.propTypes = {
  title: string.isRequired,
  completed: bool.isRequired
};

export default TodoItem;
