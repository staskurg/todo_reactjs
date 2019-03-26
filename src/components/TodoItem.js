import React from "react";
import { string, bool } from "prop-types";

const ShowItem = props => (
  <div className="item__show">
    <div className="btn_complete">
      <h3>{props.title}</h3>
    </div>
    <div className="btn__group">
      {!props.completed && (
        <button className="btn btn_edit">
          <i className="fas fa-edit" />
        </button>
      )}
      <button className="btn btn_delete">
        <i className="fas fa-trash-alt" />
      </button>
    </div>
  </div>
);

const EditItem = () => (
  <div className="item__edit">
    <form id="edit-form">
      <div className="edit-input">
        <input v-model="newValue" type="text" className="todo-input" />
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

const TodoItem = props => {
  let isEditing = false;
  let itemClass = "item";
  if (props.completed) {
    itemClass += " item_is-completed";
  }
  return (
    <div className={itemClass}>
      {isEditing ? (
        <EditItem />
      ) : (
        <ShowItem title={props.title} completed={props.completed} />
      )}
    </div>
  );
};

ShowItem.propTypes = {
  title: string.isRequired,
  completed: bool.isRequired
};

export default TodoItem;
