import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    token,
    setToken,
    navigate,
    setCartItems,
  } = useContext(StoreContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to={"/"}>
        <h1 className="text-2xl">HIKE N FALL</h1>
      </Link>

      <ul className="hidden sm:flex gap-5 text-gray-700">
        {["HOME", "COLLECTIONS", "ABOUT", "CONTACT"].map((item) => (
          <NavLink
            key={item}
            to={`/${item.toLowerCase()}`}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${isActive ? "text-black" : ""}`
            }
          >
            {({ isActive }) => (
              <>
                <p>{item}</p>

                <hr
                  className={`w-2/4 border-none h-[1.5px] transition-all bg-gray-700 ${
                    isActive ? "block" : "hidden"
                  }`}
                />
              </>
            )}
          </NavLink>
        ))}
      </ul>

      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt="searchIcon"
          className="w-5 cursor-pointer"
          title="search"
          onClick={() => setShowSearch(true)}
        />

        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            src={assets.profile_icon}
            alt="profileIcon"
            className="w-5 cursor-pointer"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          />
          {isDropdownOpen && token && (
            <div
              className="absolute -right-14 w-36 bg-slate-100 text-gray-500 rounded shadow-lg flex flex-col gap-2 py-3 z-100"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <p className="cursor-pointer hover:text-black px-4">My Profile</p>
              <p
                onClick={() => navigate("/orders")}
                className="cursor-pointer hover:text-black px-4"
              >
                Orders
              </p>
              <p
                onClick={logout}
                className="cursor-pointer hover:text-black px-4"
              >
                Logout
              </p>
            </div>
          )}
        </div>

        <Link to="/cart" className="relative">
          <img
            className="w-5 cursor-pointer"
            src={assets.cart_icon}
            alt="cartIcon"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        <img
          className="w-8 h-8 cursor-pointer sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          src={assets.menu_icon}
          alt="menu"
        />
      </div>

      {/*Mobile menu Sidebar */}

      <div
        className={`absolute top-0 right-0 h-screen bg-gray-100 overflow-hidden transition-all z-100 ${
          isMenuOpen ? "w-3/4" : "w-0"
        } `}
      >
        <div className="flex flex-col gap-10 p-5 h-full">
          <div className="flex">
            <img
              onClick={() => setIsMenuOpen(false)}
              src={assets.cross_icon}
              alt="close"
            />
          </div>
          {["HOME", "COLLECTIONS", "ABOUT", "CONTACT"].map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `flex flex-col justify-start gap-1 text-gray-700 hover:text-black p-2 ${
                  isActive ? "bg-black text-white" : ""
                } `
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
