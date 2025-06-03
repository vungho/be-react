import { useState } from 'react';
import { TodoItem } from '../../components/todo-item/todo-item';
import { Todo } from '../../components/todo/todo';
import type { Task } from '../../types/todo/task.type';

export function TodoPage() {
  const [tasks, setTasks] = useState<Task[]>([
    { taskId: 't001', title: 'Task 1', completed: true },
    { taskId: 't002', title: 'Task 2', completed: false },
  ]);

  const toggleTask = ({ taskId }: Partial<Task>) => {
    const index = tasks.findIndex((t) => t.taskId === taskId);
    if (index >= 0) {
      tasks[index].completed = !tasks[index].completed;
      setTasks([...tasks]);
    }
  };

  return (
    <>
      <h1>This is todo</h1>
      <Todo>
        {tasks.map(({ taskId, title, completed }) => (
          <TodoItem
            taskId={taskId}
            key={taskId}
            title={title}
            completed={completed}
            onToggle={(task) => toggleTask(task)}
          ></TodoItem>
        ))}
      </Todo>
    </>
  );
}
