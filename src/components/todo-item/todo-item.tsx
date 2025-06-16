import { useState } from 'react';
import type { Task } from '../../types/todo/task.type';

export function TodoItem({ taskId, title, completed, onToggle }: Partial<Task>) {
  const [isCompleted, setIsCompleted] = useState<boolean>(!!completed);

  const comletedInputChange = () => {
    setIsCompleted(!isCompleted);
    if (onToggle) {
      onToggle({ taskId });
    }
  };

  return (
    <li className='flex items-center justify-between p-3 bg-white rounded-lg shadow'>
      <div className='flex items-center space-x-2'>
        <input
          type='checkbox'
          className='todo-checkbox h-5 w-5 text-blue-600'
          checked={isCompleted}
          onChange={() => comletedInputChange()}
        />
        <span className='todo-text'>{title}</span>
      </div>
      <div className='flex space-x-2'>
        <button className='edit-todo text-yellow-500 hover:text-yellow-600'>
          <i className='fas fa-edit'></i>
        </button>
        <button className='delete-todo text-red-500 hover:text-red-600'>
          <i className='fas fa-trash'></i>
        </button>
      </div>
    </li>
  );
}
