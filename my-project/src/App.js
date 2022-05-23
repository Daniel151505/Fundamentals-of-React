import React from 'react';
import {TodoCounter} from './TodoCounter'
import {TodoSearch} from './TodoSearch'
import {TodoList} from './TodoList'
import {TodoItem} from './TodoItem'
import {CreateTodoButton} from './CreateTodoButton'


// import './App.css';

const all = [
  {text: 'cut onion', completed: false},
  {text: 'eat apple', completed: false},
  {text: 'drink water', completed: false}

]

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {all.map(all => (
          <TodoItem key={all.text} text={all.text} />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
