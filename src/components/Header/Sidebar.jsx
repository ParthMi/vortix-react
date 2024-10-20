import React, { useState } from 'react';
import { FaTimes, FaPlus, FaMinus } from 'react-icons/fa';
import menuData from './menuData'; // Adjust the import path as per your project structure
import { NavLink } from 'react-router-dom';

const Sidebar= ({ isOpen, setIsOpen }) => {
  // State to track which submenu is open
  const [openSubmenus, setOpenSubmenus] = useState({});
  // State to track the active menu item
  const [activeItem, setActiveItem] = useState(null);

  // Toggle sidebar open/close
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Toggle the display of submenus
  const toggleSubmenu = (id) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Close the sidebar when a menu or submenu item is clicked
  const closeSidebar = () => {
    setIsOpen(false);
  };

  // Set the active item
  const handleItemClick = (path) => {
    setActiveItem(path);
    closeSidebar(); // Close sidebar when an item is clicked
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white text-black p-5 w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-64'
          } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between items-center mb-10">
          <img
            src="/images/logo/logo.png"
            alt="logo-image"
            width={100} // Adjust the width as needed
            height={40} // Adjust the height as needed
            className="object-contain" // Ensures the image maintains aspect ratio
          />
          <button onClick={toggleSidebar} className="text-xl focus:outline-none">
            <FaTimes />
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav>
          <ul>
            {menuData.map((menu) => (
              <li key={menu.id} className="mb-4">
                {!menu.haveSubmenu ? (
                  <NavLink to={menu.path} >
                    <p
                      className={`block p-2 rounded hover:bg-gray-100 transition duration-300 cursor-pointer ${activeItem === menu.path ? 'bg-gray-100' : ''
                        }`}
                      onClick={() => handleItemClick(menu.path)} // Set active item on click
                    >
                      {menu.title}
                    </p>
                  </NavLink>
                ) : (
                  <div className="submenu">
                    <div className="flex justify-between items-center">
                      <p
                        className={`block p-2 rounded hover:bg-gray-100 transition duration-300 cursor-pointer ${activeItem === menu.path ? 'bg-gray-100' : ''
                          }`}
                        onClick={() => toggleSubmenu(menu.id)}
                      >
                        {menu.title}
                      </p>
                      <button onClick={() => toggleSubmenu(menu.id)}>
                        {openSubmenus[menu.id] ? <FaMinus /> : <FaPlus />}
                      </button>
                    </div>
                    {openSubmenus[menu.id] && (
                      <ul className="pl-4">
                        {menu.submenu &&
                          menu.submenu.map((submenuItem) => (
                            <li key={submenuItem.id} className="mb-2">
                              <NavLink to={submenuItem.path} >
                                <p
                                  className={`block p-2 rounded hover:bg-gray-100 transition duration-300 cursor-pointer ${activeItem === submenuItem.path ? 'bg-gray-100' : ''
                                    }`}
                                  onClick={() => handleItemClick(submenuItem.path)} // Set active item on click
                                >
                                  {submenuItem.title}
                                </p>
                              </NavLink>
                            </li>
                          ))}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Overlay (closes the sidebar when clicked outside) */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
