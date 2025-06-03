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
    <div className='d-block'>
      <div className='h-2 w-full flex hover:cursor-pointer'>
        <div className='h-2 w-2 p-2' onClick={() => onToggle && onToggle({ taskId })}>
          <input type='checkbox' checked={isCompleted} onChange={() => comletedInputChange()} />
        </div>
        <div className='flex-auto h-2 p-2 pl-4'>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}
