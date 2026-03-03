import Button from "@mui/material/Button";
import { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Rahul Sharma", role: "Customer" },
    { id: 2, name: "Ananya Gupta", role: "Product Owner" },
    { id: 3, name: "Admin Demo", role: "Admin" },
  ]);

  const removeUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">
            Users Management
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            View and manage platform users
          </p>
        </div>

        <Button
          variant="contained"
          className="!bg-blue-600 !px-6"
          onClick={() => alert("Add user later")}
        >
          + Add User
        </Button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-6">
        {users.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            No users available
          </div>
        ) : (
          <table className="w-full text-left">
            <thead className="border-b">
              <tr className="text-gray-600 text-sm">
                <th className="py-3">Name</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b text-sm">
                  <td className="py-4">{user.name}</td>
                  <td>{user.role}</td>

                  <td className="flex gap-2 py-3">
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => alert("Edit later")}
                    >
                      Edit
                    </Button>

                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => removeUser(user.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Users;