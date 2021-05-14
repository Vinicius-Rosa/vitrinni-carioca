import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext(null);

interface IUser {
  name: string | null;
  email: string | null;
  password: string | null;
}

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser>({ name: "", email: "", password: "" })

  const getToken = () => localStorage.getItem("@vitrinni_carioca_token-key");

  return <UserContext.Provider value={{ user, setUser, getToken }}>
    {children}
  </UserContext.Provider>;
}

export default UserProvider;

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  const { user, setUser, getToken } = context;
  return { user, setUser, getToken };
}