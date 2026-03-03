import { FaUsers, FaBoxOpen, FaClipboardList } from "react-icons/fa";
import Button from "@mui/material/Button";

const AdminDashboard = () => {
  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">
            Admin Dashboard
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Platform management overview
          </p>
        </div>

        <Button
          variant="contained"
          className="!bg-blue-600 !px-6"
        >
          Manage Users
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

        {/* Users */}
        <div className="bg-white rounded-xl shadow-sm p-6 border">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
              <FaUsers size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Users</p>
              <h2 className="text-2xl font-semibold text-gray-800">320</h2>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="bg-white rounded-xl shadow-sm p-6 border">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-green-100 text-green-600">
              <FaBoxOpen size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Products</p>
              <h2 className="text-2xl font-semibold text-gray-800">87</h2>
            </div>
          </div>
        </div>

        {/* Orders */}
        <div className="bg-white rounded-xl shadow-sm p-6 border">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-yellow-100 text-yellow-600">
              <FaClipboardList size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Orders</p>
              <h2 className="text-2xl font-semibold text-gray-800">210</h2>
            </div>
          </div>
        </div>

      </div>

      {/* Activity Section */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Admin Activity
        </h3>

        <div className="text-sm text-gray-500 border border-dashed rounded-lg p-6 text-center">
          Manage users, products, and platform activities from here.
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;