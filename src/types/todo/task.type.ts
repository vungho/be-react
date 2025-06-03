export type Task = {
  taskId: string;
  title: string;
  completed: boolean;

  onToggle?: (task: Partial<Task>) => void;
};
