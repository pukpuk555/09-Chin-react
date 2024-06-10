import React, { useState } from "react";
import NavTwo from "./NavTwo";

function Admin({ users, addUser, setUsers }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      lastName,
      position,
    };
    addUser(newUser);
    setName("");
    setLastName("");
    setPosition("");
  };

  const deleteUser = (id) => {
    const updatedUser = users.filter((user) => user.id !== id);
    setUsers(updatedUser);
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="font-bold text-4xl mb-3">Home - Admin Sector</h3>
      <div className="flex flex-col items-center">
        <NavTwo />
        <form onSubmit={handleSubmit} className="flex gap-3 mt-6">
          <div>
            <label htmlFor="name" className="font-semibold">
              Name:
            </label>
            <input
              name="name"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-black rounded-xl"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="font-semibold">
              Last Name:
            </label>
            <input
              name="LastName"
              id="LastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border-2 border-black rounded-xl"
            />
          </div>
          <div>
            <label htmlFor="position" className="font-semibold">
              Position:
            </label>
            <input
              name="position"
              id="position"
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="border-2 border-black rounded-xl"
            />
          </div>
          <button
            type="submit"
            className="font-bold border-2 px-3 border-black rounded-xl hover:bg-gray-400"
          >
            Add user
          </button>
        </form>
      </div>
      <table className="w-auto mt-4">
        <thead className="border-2 border-white">
          <tr>
            <th className="w-[200px]">Name</th>
            <th className="w-[200px]">Last Name</th>
            <th className="w-[200px]">Position</th>
            <th className="w-[150px]">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-3 border-2">{user.name}</td>
              <td className="px-3 border-2">{user.lastName}</td>
              <td className="px-3 border-2">{user.position}</td>
              <td className="px-3 border-2 flex justify-center">
                <button
                  onClick={() => deleteUser(user.id)}
                  className="my-1 px-2 text-white rounded-lg bg-red-500 hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
