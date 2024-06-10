import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./components/Nav";
import Owner from "./page/Owner";
import Welcome from "./components/Welcome";
import Admin from "./components/Admin";
import User from "./components/User";

function App() {
  const [users, setUsers] = useState([]);

  console.log(users);

  const addUser = (newUser) => {
    setUsers([...users, { ...newUser, id: `n${users.length + 1}` }]);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="w-screen h-screen bg-gray-300">
          <Nav />
          <div className="flex flex-col items-center ">
            <h1 className="font-bold text-4xl mt-10 mb-3">
              Generation Thailand
            </h1>
            <Welcome />
          </div>
        </div>
      ),
    },
    {
      path: "/admin",
      element: (
        <div className="w-screen h-screen bg-gray-300">
          <Nav />
          <div className="flex flex-col items-center ">
            <h1 className="font-bold text-4xl mt-10 mb-3">
              Generation Thailand
            </h1>
            <Admin users={users} addUser={addUser} setUsers={setUsers} />
          </div>
        </div>
      ),
    },
    {
      path: "/user",
      element: (
        <div className="w-screen h-screen bg-gray-300">
          <Nav />
          <div className="flex flex-col items-center ">
            <h1 className="font-bold text-4xl mt-10 mb-3">
              Generation Thailand
            </h1>
            <User />
          </div>
        </div>
      ),
    },
    {
      path: "/owner",
      element: (
        <div className="w-screen h-screen bg-gray-300">
          <Nav />
          <Owner />
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
