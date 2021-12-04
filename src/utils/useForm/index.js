
import { useState } from 'react';

export const useForm = (initialState) => {
  const [state, setState] = useState(initialState);
  return [state, (type, value) => {
    if (type === 'reset') {
      return setState(initialState);
    }
    return setState({ ...state, [type]: value });
  }];
};