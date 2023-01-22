import { createContext } from 'react';

export const AuthContext = createContext({
  isAuth: false,
  setAuth: () => {}
});

export default AuthContext;