import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiDashboard3Fill } from "react-icons/ri";
import {
  AiOutlineUser,
  AiFillMessage,
  AiOutlineShoppingCart,
  AiFillSetting,
} from "react-icons/ai";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { FiFolder } from "react-icons/fi";

const AdminLayout = () => {
  const menus = [
    { name: "Dashboard", link: "dashboard", icon: RiDashboard3Fill },
    { name: "User", link: "user", icon: AiOutlineUser },
    { name: "Message", link: "message", icon: AiFillMessage },
    {
      name: "Analytics",
      link: "analytics",
      icon: TbBrandGoogleAnalytics,
      margin: true,
    },
    { name: "order", link: "filemanager", icon: FiFolder },
    { name: "Cart", link: "cart", icon: AiOutlineShoppingCart,  },
    { name: "Setting", link: "setting", icon: AiFillSetting },
  ];

  const [open, setOpen] = useState(true);

  return (
    <section className="flex">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-[300px]" : "w-[100px]"
        } duration-500 text-gray-200 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={25}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <NavLink
              to={menu?.link}
              key={i}
              className={`
               group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                }absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0
                 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-15 group-hover:duration-300`}
              >
                {menu?.name}
              </h2>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="w-auto flex-grow">
        <Outlet />
      </div>
    </section>
  );
};

export default AdminLayout;
