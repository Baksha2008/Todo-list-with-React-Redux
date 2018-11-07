import React, { Component } from 'react';
import { connect } from 'react-redux'
import { onAddTodo } from './store/action/onAddTodo'
import { onDeleteTodo } from './store/action/onDeleteTodo'
import './App.css';

class App extends Component {

  addTodo = (e) => {
    if (e.key === 'Enter') {
      this.props.onAddTodo(this.todoInput.value)
      this.todoInput.value = '';
      this.todoInput.focus()
    }
  }
  deleteTodo = (e) => {
    console.log()
    this.props.onDeleteTodo(e.target.id)
  }
  render() {
    console.log(this.props.todo)
    return (
      <div className='app'>
        <h1>To do list</h1>
        <p>To delete a task click it</p>
        <div className='add'>
          <input onKeyPress={this.addTodo} type='text' className='input' ref={(input) => { this.todoInput = input }} placeholder='Enter you task'></input>
        </div>
        <ul>
          {this.props.todo.map((elem, i) => {
            return <li key={i} onClick={this.deleteTodo} id={i}>{elem}</li>
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return (state => ({
    todo: state.todo
  }))
}
const mapDispatchToProps = {
  onAddTodo,
  onDeleteTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
