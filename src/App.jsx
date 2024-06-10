import { useState } from "react";

const [users, setUsers] = useState([]);

function App() {
  const addUser = (newUser) => {
    setUsers([...users, { ...newUser, id: `n${users.length + 1}` }]);
  };

  return <h1>hello world</h1>;
}

export default App;
