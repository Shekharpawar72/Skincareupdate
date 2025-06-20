import { FaShoppingBag, FaHeart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4  bg-[#EFF5E1]">
      <h1 className="  font-bold text-gray-800">SKINCARE</h1>

      <ul className="flex space-x-8 text-gray-800 font-medium">
        <li className="cursor-pointer hover:text-gray-600">All Products</li>
        <li className="cursor-pointer hover:text-gray-600">Serum</li>
        <li className="cursor-pointer hover:text-gray-600">Sunscreen</li>
        <li className="cursor-pointer hover:text-gray-600">Bundle</li>
      </ul>

      <div className="flex items-center space-x-4">
        <div className="relative flex items-center">
          <FaShoppingBag className="text-gray-700 text-lg" />
          <span className="ml-1  text-xs px-2 py-0.5 rounded">Cart (1)</span>
        </div>
        <FaHeart className="text-gray-700 text-lg cursor-pointer" />
        <FaUser className="text-gray-700 text-lg cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
