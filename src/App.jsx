import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./components/Nav";
import Owner from "./page/Owner";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const addUser = (newUser) => {
      setUsers([...users, { ...newUser, id: `n${users.length + 1}` }]);
    };
  });

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
