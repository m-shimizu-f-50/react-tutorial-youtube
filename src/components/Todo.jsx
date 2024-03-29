import React from 'react';

const Todo = ({ todo, toggleTodo }) => {
  const handleClickTodo = () => {
    toggleTodo(todo.id);
  };
  return (
    <>
      <label>
        {todo.name}
        <input
          type='checkbox'
          checked={todo.checked}
          onChange={handleClickTodo}
        />
      </label>
    </>
  );
};

export default Todo;
