import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex gap-5 items-center pl-4 pt-3 pb-3 rounded-md text-lg text-white text-md m-2";
  const normalLink =
    "flex gap-5 items-center pl-4 pt-3 pb-3 rounded-md text-lg text-slate-800 hover:bg-light-gray text-md m-2";

  return (
    <div className="ml-3 pb-9 h-screen overflow-auto ">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="flex items-center text-3xl font-bold gap-5 ml-3 mt-5 text-slate-700">
              <MdSpaceDashboard />
              <span>DashB</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() =>
                  setActiveMenu((previousActiveMenu) => !previousActiveMenu)
                }
                className="text-slate-700 hover:bg-light-gray rounded-full text-xl p-4 mt-5 block md:hidden">
                <GiCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-9">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-slate-600 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? "#1e293b" : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }>
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
