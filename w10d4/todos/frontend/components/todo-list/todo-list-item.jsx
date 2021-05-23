import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <li>{this.props.todo.title}</li>
    );
  }
}

export default TodoListItem;