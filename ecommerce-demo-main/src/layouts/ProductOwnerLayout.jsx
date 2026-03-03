import { Link, Outlet, useLocation } from "react-router-dom";
import {
  FiGrid,
  FiBox,
  FiPlusSquare,
  FiShoppingCart,
  FiLogOut,
} from "react-icons/fi";

const ProductOwnerLayout = () => {
  const location = useLocation();
  const active = (path) => location.pathname.startsWith(path);

  return (
    <div className="min-h-screen flex bg-[#f3f4f6]">

      {/* SIDEBAR */}
      <aside className="w-[260px] bg-white border-r relative">
        <div className="h-16 px-6 flex items-center border-b">
          <h1 className="text-xl font-semibold">Seller Panel</h1>
        </div>

        <nav className="px-4 py-4 text-sm space-y-1">

          <Link
            to="/product-owner"
            className={`flex items-center gap-3 px-3 py-2 rounded ${
              active("/product-owner") && !active("/product-owner/products")
                ? "bg-blue-50 text-blue-600"
                : "hover:bg-gray-100"
            }`}
          >
            <FiGrid /> Dashboard
          </Link>

          <Link
            to="/product-owner/products/add"
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100"
          >
            <FiPlusSquare /> Add Product
          </Link>

          <div className="flex items-center gap-3 px-3 py-2 text-gray-400">
            <FiBox /> Products
          </div>

          <div className="flex items-center gap-3 px-3 py-2 text-gray-400">
            <FiShoppingCart /> Orders
          </div>
        </nav>

        <div className="absolute bottom-0 w-full border-t px-4 py-4">
          <div className="flex items-center gap-3 text-sm cursor-pointer">
            <FiLogOut /> Logout
          </div>
        </div>
      </aside>

      {/* CONTENT */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default ProductOwnerLayout;
