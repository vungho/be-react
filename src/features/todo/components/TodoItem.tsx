import type React from 'react';
import type { Todo } from '../services/todoApi';
import { memo } from 'react';

interface Props {
  todo: Todo;
  onToggle(id: string): void;
}

export const TodoItem: React.FC<Props> = memo(({ todo, onToggle }) => {
  return (
    <li>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        aria-label={`Toggle ${todo.title}`}
      />
      <span>{todo.title}</span>
    </li>
  );
});
