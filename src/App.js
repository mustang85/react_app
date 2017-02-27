import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoForm, TodoList, Footer } from './components/Todo';
import {
  addTodo, generateId, findById,
  toggleTodo, updateTodo, removeTodo,
  filterTodos } from './lib/todoHelpers';
import {pipe, partial} from './lib/utils';
import {loadTodos, createTodo, saveTodo} from './lib/todoService';


class App extends Component {
  state = {
    todos: [],
    currentTodo: ''
  }

  static contextTypes = {
    route: PropTypes.string
  }

  handleRemove = (id, evt) => {
    evt.preventDefault();
    const updatedTodos = removeTodo(this.state.todos, id);
    this.setState({todos: updatedTodos})
  }

  handleInputChange = (e) => {
    this.setState({
      currentTodo: this.inputValue.value
    });
  }

  handleToggle = (id) => {
    const getToggleTodo = pipe(findById, toggleTodo);
    const updated = getToggleTodo(id, this.state.todos)
    const getUpdateTodos = partial(updateTodo, this.state.todos);
    const updatedTodos = getUpdateTodos(updated);
    this.setState({todos: updatedTodos})
    saveTodo(updated)
      .then(() => this.showTempMessage('Todo Updated'))
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
    createTodo(newTodo)
      .then(() => this.showTempMessage('Todo added'));
  }

  showTempMessage = (msg) => {
    this.setState({message: msg});
    setTimeout(() => this.setState({message: ''}), 2500)
  }

  handleEmptySubmit = (e) => {
    e.preventDefault();
    this.setState({
      errorMessage: 'Please supply a todo name'
    });
  }

  componentDidMount() {
    loadTodos()
      .then(todos => this.setState({todos}))

  }

  render() {
    const { todos, currentTodo, errorMessage, message } = this.state;

    const submitHandler = currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    const displayTodos = filterTodos(todos, this.context.route)

    console.log('displayTodos', displayTodos);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Todo">
          { errorMessage && <span className="error">{errorMessage}</span> }
          { message && <span className="success">{message}</span> }
          <TodoForm
            onChangeInput={this.handleInputChange}
            currentTodo={currentTodo}
            refInput={(input) => this.inputValue = input}
            handleSubmit={submitHandler}
          />
          <TodoList handleToggle={this.handleToggle}
            todos={displayTodos}
            handleRemove={this.handleRemove} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
