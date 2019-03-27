import React, { Component } from "react";

class ShowItem extends Component {
  constructor(props) {
    super(props);
    this.complete = this.complete.bind(this);
    this.delete = this.delete.bind(this);
    this.state = { newValue: "" };
  }

  complete(e) {
    const id = this.props.id;
    this.props.complete(id);
    e.preventDefault();
  }

  delete(e) {
    const id = this.props.id;
    this.props.delete(id);
    e.preventDefault();
  }

  render() {
    return (
      <div className="item__show">
        <div className="btn_complete" onClick={this.complete}>
          <h3>{this.props.title}</h3>
        </div>
        <div className="btn__group">
          {!this.props.completed && (
            <button className="btn btn_edit" onClick={this.props.toggle}>
              <i className="fas fa-edit" />
            </button>
          )}
          <button className="btn btn_delete" onClick={this.delete}>
            <i className="fas fa-trash-alt" />
          </button>
        </div>
      </div>
    );
  }
}

export default ShowItem;
