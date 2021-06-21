import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <form>
        <label>Title
          <input type="text" />
        </label>
        <br />
        <label>Body
          <input type="text" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default TodoForm;
