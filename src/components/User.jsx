import React from "react";
import NavTwo from "./NavTwo";

function User({ users }) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="font-bold text-4xl mb-3">Home - User Sector</h3>
      <div className="flex flex-col items-center">
        <NavTwo />
        <table className="w-auto mt-4">
          <thead className="border-2 border-white">
            <tr>
              <th className="w-[200px]">Name</th>
              <th className="w-[200px]">Last Name</th>
              <th className="w-[200px]">Position</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-3 border-2">{user.name}</td>
                <td className="px-3 border-2">{user.lastName}</td>
                <td className="px-3 border-2">{user.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
