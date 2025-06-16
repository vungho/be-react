import { useState } from 'react';
import type { Task } from '../../types/todo/task.type';
import { TodoItem } from '../todo-item/todo-item';

export function Todo() {
  const [todoText, setTodoText] = useState<string>('');
  const [todoItems, setTodoItems] = useState<Task[]>([]);

  const addTodoItem = () => {
    setTodoItems([
      ...todoItems,
      { taskId: Date.now().toString(), title: todoText, completed: false },
    ]);
    setTodoText('');
  };

  const onHandleTodoitemChange = (e) => {
    const value = e?.target?.value;
    console.log(value);
    if (value) {
      setTodoText(value);
    }
  };

  const onhandleKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && todoText) {
      addTodoItem();
    }
  };

  return (
    <>
      <h2 className='text-2xl font-bold mb-4'>Todo List</h2>
      <div className='mb-6'>
        <div className='flex items-center space-x-2'>
          <input
            id='todo-input'
            type='text'
            placeholder='Add a new todo...'
            className='flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={todoText}
            onChange={(e) => onHandleTodoitemChange(e)}
            onKeyDown={(e) => onhandleKeydown(e)}
          />
          <button
            id='add-todo'
            className='bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 focus:outline-none'
          >
            <i className='fas fa-plus'></i>
          </button>
        </div>
      </div>
      <ul id='todo-list' className='space-y-2'>
        {todoItems.map((todoItem: Task) => (
          <TodoItem {...todoItem} />
        ))}
      </ul>
    </>
  );
}
