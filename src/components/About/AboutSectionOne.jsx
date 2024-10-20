import { NavLink } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium ">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-8 md:pt-10 lg:pt-14">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-14 lg:pb-14">
          <div className="-mx-2 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Supplier Of High Grade Activated Carbon"
                paragraph="Vortix Enterprise Pvt Ltd is a leading developer, and supplier of high-quality activated carbon used across various industries, including gas and air treatment, water purification, pharmaceuticals, food and beverage, chemicals, industrial catalysts, energy, and mining. Specializing in enterprise-level solutions, Vortix customizes activated carbon products to meet specific client requirements. With over the years of experience in product development, the company offers a wide range of products derived from diverse raw materials such as lignite, peat, bituminous coal, coconut, and wood."
                mb="44px"
              />
              <SectionTitle
                title=""
                paragraph="
                Vortix produces Powdered Activated Carbon (PAC), Granular Activated Carbon (GAC), and Extruded Activated Carbon (EAC), ensuring high performance across all industrial applications. Backed by a strong network of business partners, distributors, and service centers, Vortix caters to customers globally, focusing on delivering tailored solutions with an emphasis on quality, sustainability, and customer satisfaction."
                mb="44px"
              />

            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto max-w-[600px] lg:mr-0">
                <img
                  src="/images/about/about.jpg"
                  alt="about-image"
                  className="mx-auto object-cover w-full h-[600px] drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <img
                  src="/images/about/about.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden object-cover max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
          <SectionTitle
            title=""
            paragraph="
                Vortix Enterprise traces its values to a strong heritage of trust, responsibility, and innovation. Inspired by the pioneering spirit of early industrial giants, the company was founded to provide essential products for industrial use while maintaining a commitment to ethics and long-term partnerships. Through its ongoing collaboration with renowned industry leaders, Vortix has established a reputation for reliability, high standards, and a strong focus on sustainability in its business practices."
            mb="44px"
          />
          <div className="flex justify-center">
            <NavLink
              href="/contact"
              className="ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-orange px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9"
            >
              Enquire Now
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
