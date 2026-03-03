import { FaUserShield, FaUsersCog, FaServer } from "react-icons/fa";
import Button from "@mui/material/Button";

const SuperAdminDashboard = () => {
  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">
            Super Admin Dashboard
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Complete platform control overview
          </p>
        </div>

        <Button
          variant="contained"
          className="!bg-blue-600 !px-6"
        >
          Create Admin
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

        {/* Admins */}
        <div className="bg-white rounded-xl shadow-sm p-6 border">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-purple-100 text-purple-600">
              <FaUserShield size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Admins</p>
              <h2 className="text-2xl font-semibold text-gray-800">5</h2>
            </div>
          </div>
        </div>

        {/* Users */}
        <div className="bg-white rounded-xl shadow-sm p-6 border">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
              <FaUsersCog size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Platform Users</p>
              <h2 className="text-2xl font-semibold text-gray-800">320</h2>
            </div>
          </div>
        </div>

        {/* System */}
        <div className="bg-white rounded-xl shadow-sm p-6 border">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-green-100 text-green-600">
              <FaServer size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">System Status</p>
              <h2 className="text-2xl font-semibold text-green-600">
                Healthy
              </h2>
            </div>
          </div>
        </div>

      </div>

      {/* Control Section */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          System Controls
        </h3>

        <div className="text-sm text-gray-500 border border-dashed rounded-lg p-6 text-center">
          Super admin can manage admins and overall platform settings here.
        </div>
      </div>
    </>
  );
};

export default SuperAdminDashboard;