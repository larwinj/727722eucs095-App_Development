export const login = (email, name) => ({
    type: 'LOGIN',
    payload: {email, name}
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });