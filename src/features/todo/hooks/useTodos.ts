import { useEffect, useReducer } from 'react';
import { fetchTodos, type Todo } from '../services/todoApi';

type State = {
  data: Todo[];
  loading: boolean;
  error?: string;
};

type Action = { type: 'loaded'; payload: Todo[] } | { type: 'error'; payload: string };

const initital: State = {
  data: [],
  loading: false,
  error: undefined,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'loaded':
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case 'error':
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export function useTodos(): State {
  const [state, dispatch] = useReducer(reducer, initital);

  useEffect(() => {
    fetchTodos()
      .then((todos) => dispatch({ type: 'loaded', payload: todos }))
      .catch((error) => dispatch({ type: 'error', payload: error.message }));
  }, []);

  return state;
}
