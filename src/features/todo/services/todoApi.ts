export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');
  if (!res.ok) {
    throw new Error('Failed to fetch todos');
  }
  return res.json() as Promise<Todo[]>;
}
