import { NavLink } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa"; // Importing icons
import { FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <footer className="relative z-10 bg-[#f6f6f6] pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
                            <div className="mb-12 max-w-[360px] lg:mb-16">
                                <NavLink to="/" className="mb-8 inline-block relative h-[50px] w-[200px]"> {/* Adjust height and width here */}
                                    <img
                                        src="/images/logo/logo.png"
                                        alt="Footer Logo"
                                        layout="fixed" // Use 'fixed' to set explicit width and height
                                        width={185} // Set desired width in pixels
                                        height={58} // Set desired height in pixels
                                        objectFit="contain" // or 'cover' based on your design needs
                                    />
                                </NavLink>

                                <p className="mb-9 text-base leading-relaxed text-black dark:text-black-dark">
                                    Global Leaders in High-Quality Activated Carbon Solution
                                </p>
                                <div className="flex items-center py-2">
                                    <NavLink
                                        to="https://wa.me/+919510595121"
                                        aria-label="social-NavLink"
                                        className="mr-2 cursor-pointer text-primary duration-300 hover:text-opacity-90 dark:text-white-dark dark:hover:text-white"
                                    >
                                        <FaSquareWhatsapp size={25} />
                                    </NavLink>
                                    <NavLink
                                        to="https://www.NavLinkedin.com/in/vortix-enterprise-016a26333/"
                                        aria-label="social-NavLink"
                                        className="text-primary cursor-pointer duration-300 hover:text-opacity-90 dark:text-white-dark dark:hover:text-white"
                                    >
                                        <FaLinkedin size={25}/>
                                    </NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
                            <div className="mb-12 lg:mb-16">
                                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                                    Useful Links
                                </h2>
                                <ul>
                                    <li>
                                        <NavLink
                                            to="/about"
                                            className="mb-4 inline-block text-base text-black duration-300 hover:text-primary dark:text-black-dark dark:hover:text-primary"
                                        >
                                            About
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/blog"
                                            className="mb-4 inline-block text-base text-black duration-300 hover:text-primary dark:text-black-dark dark:hover:text-primary"
                                        >
                                            Blog
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/products"
                                            className="mb-4 inline-block text-base text-black duration-300 hover:text-primary dark:text-black-dark dark:hover:text-primary"
                                        >
                                            Products
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
                            <div className="mb-12 lg:mb-16">
                                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                                    Terms
                                </h2>
                                <ul>
                                    <li>
                                        <NavLink
                                            to="/terms-of-service"
                                            className="mb-4 inline-block text-base text-black duration-300 hover:text-primary dark:text-black-dark dark:hover:text-primary"
                                        >
                                            TOS
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/privacy-policy"
                                            className="mb-4 inline-block text-base text-black duration-300 hover:text-primary dark:text-black-dark dark:hover:text-primary"
                                        >
                                            Privacy Policy
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
                            <div className="mb-12 lg:mb-16">
                                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                                    Contact
                                </h2>
                                <ul>
                                    <li className="w-fit">
                                        <NavLink
                                            to="/contact"
                                            className="ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9"
                                        >
                                            Enquire Now
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>*/}


                        <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
                            <div className="mb-12 lg:mb-16">
                                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                                    Contact
                                </h2>
                                <ul>
                                    <li className="flex items-center mb-4">
                                        <span> <FaPhoneAlt className="mr-2 text-primary" /> {/* Phone Icon */}</span>
                                        <span className="text-base font-medium text-black dark:text-white">
                                            +91 95105 95121
                                        </span>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        <span><FaEnvelope className="mr-2 text-primary" /> {/* Email Icon */}</span>
                                        <span className="text-base font-medium text-black dark:text-white">
                                            info.vortixenterprise@gmail.com
                                        </span>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        <span><FaMapMarkerAlt className="mr-2 text-primary" /> {/* Address Icon */}</span>
                                        <span className="text-base font-medium text-black dark:text-white">
                                            Shop No.119, 4th Floor, Gruham Icon, Opp.Leck Garden, Kosad, Surat, Gujarat-394107,India
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
                    <div className="py-8">
                        <p className="text-center text-base text-black dark:text-white">
                            <span className="text-sm sm:text-center text-dark">
                                © 2024{" "}
                                <span href="/" className="underline hover:underline">
                                    Vortix Enterprise
                                </span>
                                . All Rights Reserved.
                            </span>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
