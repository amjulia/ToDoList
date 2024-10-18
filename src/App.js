// src/App.js
import React from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/ToDoList/ToDoList';


const App = () => {
  return (
    <div className='content center'>
      <h1>Список дел</h1>
      <AddTodo />
      <TodoList />
      
     
    </div>
  );
};

export default App;
