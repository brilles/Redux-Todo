import React from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "../actions";

class TodoList extends React.Component {
  state = {
    todo: ""
  };

  handleChanges = e => {
    this.setState({ todo: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({ todo: "" });
  };

  toggleTodo = id => {
    this.props.toggleTodo(id);
  };

  render() {
    const pStyle = {
      textDecoration: "line-through"
    };
    return (
      <>
        <div className="list-wrapper">
          {this.props.todo.map(todo => (
            <p
              style={todo.completed ? pStyle : null}
              key={todo.id}
              onClick={() => this.toggleTodo(todo.id)}
            >
              {todo.task}
            </p>
          ))}
        </div>
        <input
          type="text"
          name="todo"
          value={this.state.todo}
          onChange={this.handleChanges}
          placeholder="Add a todo..."
        />
        <button onClick={this.addTodo}>Add todo</button>
      </>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todos
});

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo }
)(TodoList);
