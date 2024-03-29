import Todo from './Todo';
import React from 'react';

const TodoList = ({ todos, toggleTodo }) => {
  return todos.map((todo) => (
    <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />
  ));
};

export default TodoList;
