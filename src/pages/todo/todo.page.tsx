import { useState } from 'react';
import { TodoItem } from '../../components/todo-item/todo-item';
import { Todo } from '../../components/todo/todo';

type Task = {
  taskId: string;
  title: string;
  completed: boolean;
};

export function TodoPage() {
  const [tasks, setTasks] = useState([
    { taskId: 't001', title: 'Task 1', completed: true },
    { taskId: 't002', title: 'Task 2', completed: false },
  ]);

  const toggleTask = ({ taskId }) => {
    const index = tasks.findIndex((t) => t.taskId === taskId);
    console.log('Toggle the task', taskId);
    console.log(index);
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
            onToggle={toggleTask}
          ></TodoItem>
        ))}
      </Todo>
    </>
  );
}
