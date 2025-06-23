import { useCallback, useState } from 'react';
import { useTodos } from '../hooks/useTodos';
import { TodoItem } from './TodoItem';

export function TodoList() {
  const { data, loading, error } = useTodos();
  const [toggled, setToggled] = useState<Record<string, boolean>>({});

  const handleToggle = useCallback((id: string) => {
    setToggled((prev: Record<string, boolean>) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  if (loading) return <p>Loading</p>;
  if (error) return <p role='alert'>⛔ {error}</p>;

  return (
    <ul>
      {data.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={{ ...todo, completed: toggled[todo.id] ?? todo.completed }}
          onToggle={handleToggle}
        />
      ))}
    </ul>
  );
}
