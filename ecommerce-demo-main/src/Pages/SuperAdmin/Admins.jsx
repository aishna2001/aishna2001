import Button from "@mui/material/Button";
import { useState } from "react";

const Admins = () => {
  const [admins, setAdmins] = useState([
    { id: 1, name: "Admin One", email: "admin1@test.com", status: "Active" },
    { id: 2, name: "Admin Two", email: "admin2@test.com", status: "Active" },
  ]);

  const removeAdmin = (id) => {
    setAdmins(admins.filter((a) => a.id !== id));
  };

  return (
    <>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">
            Manage Admins
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Create and manage platform administrators
          </p>
        </div>

        <Button
          variant="contained"
          className="!bg-blue-600 !px-6"
          onClick={() => alert("Create admin later")}
        >
          + Create Admin
        </Button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-6">
        <table className="w-full text-left">
          <thead className="border-b">
            <tr className="text-gray-600 text-sm">
              <th className="py-3">Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {admins.map((admin) => (
              <tr key={admin.id} className="border-b text-sm">
                <td className="py-4">{admin.name}</td>
                <td>{admin.email}</td>

                <td>
                  <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                    {admin.status}
                  </span>
                </td>

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
                    color="warning"
                    size="small"
                    onClick={() => alert("Disable later")}
                  >
                    Disable
                  </Button>

                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => removeAdmin(admin.id)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Admins;