export function TodoItem({ taskId, title, completed, onToggle }) {
  return (
    <>
      <p>{title}</p>
      <p onClick={() => onToggle({ taskId })}>Completed: {completed ? 'Yup' : 'Nope'}</p>
    </>
  );
}
