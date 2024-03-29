import './App.css';
import { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();
  // const [input, setInput] = useState('');

  // const onChangeInput = (e) => {
  //   setInput(e.target.value);
  // };

  const addTodo = () => {
    console.log(todoNameRef);
    if (todoNameRef.current.value === '') return;
    // const newTodo = [
    //   ...todos,
    //   {
    //     id: Math.floor(Math.random() * 100),
    //     name: todoNameRef.current.value,
    //     completed: false,
    //   },
    // ];
    // setTodos(newTodo);
    setTodos((prev) => {
      const name = todoNameRef.current.value;
      return [
        ...prev,
        {
          id: uuidv4(),
          name: name,
          completed: false,
        },
      ];
    });
    // todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleTodoClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  // const deleteTodo = (id) => {
  //   const newTodo = [...todos];
  //   newTodo.splice(id, 1);
  //   setTodos(newTodo);
  // };
  return (
    <div>
      <input type='text' ref={todoNameRef} />
      <button onClick={addTodo}>タスクを追加</button>
      <button onClick={handleTodoClear}>完了しているタスクを削除</button>
      <div>残りタスク：{todos.filter((todo) => !todo.completed).length}</div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
