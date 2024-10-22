import { useEffect, useState } from "react";
import menuData from "./menuData";
import { FaPhoneAlt } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";
import { FaEnvelope } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  // Submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const handleMenuItemClick = () => {
    setNavbarOpen(false); // Close navbar on menu item click
  };


  const handleDownload = () => {
    const fileUrl = "/Vortix-Enterprise-Brochure.pdf"; // Adjust the file path if necessary
    const NavLink = document.createElement('a');
    NavLink.to = fileUrl;
    NavLink.download = 'Brochure'; // The name of the file once downloaded
    NavLink.click();
  };
  return (<>
    <header
      className={`header left-0 top-0 z-40 flex w-full items-center ${sticky
        ? "dark:bg-gray-dark py-4 md:py-0 dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
        : "absolute bg-transparent py-4 md:py-0"
        }`}
    >
      <div className="container">
        {!sticky &&
          <div className={`hidden semi-topbar rounded-md px-3 mt-2 md:flex bg-[#0e508a] text-white justify-between items-center `}>
            <div className="flex gap-2 items-center">
              <div className="flex items-center gap-2"><span><FaPhoneAlt /></span><span>+91 95105 95121</span></div>
              <RxDividerVertical size={25} />
              <div className="flex items-center gap-2"><span><FaEnvelope /></span><span>info.vortixenterprise@gmail.com</span></div>
            </div>
            <div className="flex items-center py-2">
              <a
                to="/"
                aria-label="social-NavLink"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-6 text-white duration-300 hover:text-white dark:text-white-dark dark:hover:text-white"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                to="/"
                aria-label="social-NavLink"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-6 text-white duration-300 hover:text-white dark:text-white-dark dark:hover:text-white"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                to="/"
                aria-label="social-NavLink"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-6 text-white duration-300 hover:text-white dark:text-white-dark dark:hover:text-white"
              >
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  className="fill-current"
                >
                  <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
                </svg>
              </a>
              <a
                to="https://www.NavLinkedin.com/in/vortix-enterprise-016a26333/"
                aria-label="social-NavLink"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white duration-300 hover:text-white dark:text-white-dark dark:hover:text-white"
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  className="fill-current"
                >
                  <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                </svg>
              </a>
            </div>
          </div>
        }
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4 xl:mr-8">
            <NavLink
              to="/"
              className={`relative header-logo block w-full ${sticky ? " lg:py-2 " : "py-2"
                }`}
            >
              <img
                src="/images/logo/logo.png"
                alt="about-image"
                layout="fill"
                objectFit="contain"
                className="h-[55px] md:h-auto"
              />
            </NavLink>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? " top-[7px] rotate-45" : ""}`} />
                <span className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "opacity-0 " : ""}`} />
                <span className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? " top-[-8px] -rotate-45" : ""}`} />
              </button>
              <nav
                id="navbarCollapse"
                className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen
                  ? "invisible top-full opacity-100"
                  : "invisible top-[120%] opacity-0"
                  }`}
              >
                <ul className="block lg:flex lg:space-x-8">
                  {menuData.map((menuItem, index) => (
                    <li key={index} className="group relative">
                      {!menuItem.haveSubmenu ? (
                        <NavLink
                          to={menuItem.path}
                          onClick={handleMenuItemClick} // Close on click
                          className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white`}
                        >
                          {menuItem.title}
                        </NavLink>
                      ) : (
                        <>
                          <p
                            onClick={() => handleSubmenu(index)}
                            className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                          >
                            <NavLink to={menuItem.path}>
                              {menuItem.title}
                            </NavLink>
                            <span className="pl-2">
                              <svg width="25" height="24" viewBox="0 0 25 24">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </p>
                          <div
                            className={`submenu px-3 bg-gray-200 relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${openIndex === index ? "block" : "hidden"
                              }`}
                          >
                            {menuItem.submenu.map((submenuItem, subIndex) => (
                              <NavLink
                                to={submenuItem.path}
                                onClick={handleMenuItemClick} // Close on click
                                key={subIndex}
                                className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                              >
                                {submenuItem.title}
                              </NavLink>
                            ))}
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                  <li>
                    <NavLink
                      to="/Vortix-Enterprise-Brochure.pdf" // Path to the PDF file
                      download="Vortix-Enterprise-Brochure.pdf" // Specify file download name
                      target="_blank" // Optional: open in new tab if needed
                      rel="noopener noreferrer"
                      className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 
                       text-dark hover:text-primary dark:text-white/70 dark:hover:text-white`}
                    >
                      Brochure
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center justify-end pr-16 lg:pr-0">
              <NavLink
                to="/contact"
                className="cursor-pointer ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9"
              >
                Enquire Now
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
    <Sidebar isOpen={navbarOpen} setIsOpen={setNavbarOpen} />
  </>
  );
};

export default Header;
