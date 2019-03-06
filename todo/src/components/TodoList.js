import React from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../actions";

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

  deleteTodo = (id, completed) => {
    this.props.deleteTodo(id, completed);
  };

  render() {
    const pStyle = {
      textDecoration: "line-through"
    };
    return (
      <>
        <form>
          <input
            type="text"
            name="todo"
            value={this.state.todo}
            onChange={this.handleChanges}
            placeholder="Add a todo..."
          />
          <button onClick={this.addTodo}>Add todo</button>
        </form>

        <div className="list-wrapper">
          {this.props.todo.map(todo => (
            <p
              style={todo.completed ? pStyle : null}
              key={todo.id}
              onClick={() => this.toggleTodo(todo.id)}
            >
              {todo.task}{" "}
              <span onClick={() => this.deleteTodo(todo.id, todo.completed)}>
                x
              </span>
            </p>
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todos
});

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo, deleteTodo }
)(TodoList);
