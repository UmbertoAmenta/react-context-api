import { createContext, useContext, useState } from "react";

const NewPostContext = createContext();

function NewPostProvider({ children }) {
  const [newPost, setNewPost] = useState(null);

  return (
    <NewPostContext.Provider value={{ newPost, setNewPost }}>
      {children}
    </NewPostContext.Provider>
  );
}

function useNewPostContext() {
  const context = useContext(NewPostContext);
  return context;
}

export { NewPostProvider, useNewPostContext };
