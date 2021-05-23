import React from 'react';
import TodoListItem from './todo-list-item';
import TodoForm from './todo-form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todoListItems = this.props.todos.map((todo) => (
      <TodoListItem todo={todo} receiveTodo={this.props.receiveTodo} key={todo.id} />
    ));
    
    return (
      <div>
        <ul>
          {todoListItems}
        </ul>
        <TodoForm />
      </div>
    );
  }
}

export default TodoList;