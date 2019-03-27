import React, { Component } from "react";

class EditItem extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { newValue: "" };
  }

  handleChange(e) {
    this.setState({ newValue: e.target.value });
  }

  handleSubmit(e) {
    const newItem = {
      id: this.props.id,
      title: this.state.newValue
    };
    this.props.editItem(newItem);
    this.setState({ newValue: "" });
    e.preventDefault();
  }

  componentDidMount() {
    this.setState({ newValue: this.props.title });
  }

  render() {
    return (
      <div className="item__edit">
        <form id="edit-form" onSubmit={this.handleSubmit}>
          <div className="edit-input">
            <input
              type="text"
              className="todo-input"
              value={this.state.newValue}
              onChange={this.handleChange}
            />
          </div>
          <div className="btn__group">
            <button className="btn btn_save" type="submit">
              <i className="fas fa-check" />
            </button>
            <button className="btn btn_cancel" onClick={this.props.toggle}>
              <i className="fas fa-times" />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditItem;
