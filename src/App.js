import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { TodoForm, TodoList } from './Todo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 0, text: 'Learn', isComplete: false },
        { id: 1, text: 'Build an Awesome App', isComplete: false },
        { id: 2, text: 'Ship it!', isComplete: true },
      ],
      currentTodo: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({
      currentTodo: this.inputValue.value
    });
  }

  render() {
    const { todos, currentTodo } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Todo">
          <TodoForm 
            onChangeInput={this.handleInputChange}
            currentTodo={currentTodo}
            refInput={(input) => this.inputValue = input}
          />
          <TodoList todos={todos} />
        </div>
      </div>
    );
  }
}

export default App;
