import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoForm, TodoList } from './Todo';
import { addTodo, generateId } from './lib/todoHelpers';

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

  handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: generateId(), 
      text: this.state.currentTodo, 
      isComplete: false
    };
    this.setState({
      todos: addTodo(this.state.todos, newTodo),
      currentTodo: '',
      errorMessage: ''
    });
  }

  handleEmptySubmit = (e) => {
    e.preventDefault();
    this.setState({
      errorMessage: 'Please supply a todo name'
    });
  }

  render() {
    const { todos, currentTodo, errorMessage } = this.state;

    const submitHandler = currentTodo ? this.handleSubmit : this.handleEmptySubmit;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Todo">
          { errorMessage && <span className="error">{errorMessage}</span> }
          <TodoForm 
            onChangeInput={this.handleInputChange}
            currentTodo={currentTodo}
            refInput={(input) => this.inputValue = input}
            handleSubmit={submitHandler}
          />
          <TodoList todos={todos} />
        </div>
      </div>
    );
  }
}

export default App;
