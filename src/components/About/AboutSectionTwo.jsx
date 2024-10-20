import SectionTitle from "../common/SectionTitle";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { IoDiamond } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

const SingleBrand = ({ brand }) => {

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-center px-3 py-[15px]">
        <span
          className="relative opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
        >
          <img src={brand} alt={brand} className="h-[150px] w-[150px] block object-contain" />
        </span>
      </div>
    </div>
  );
};
const AboutSectionTwo = () => {

  const brands = [
    "/images/certificate/icci.jpeg",
    "/images/certificate/ice.jpg",
    "/images/certificate/iso.jpeg",
    "/images/certificate/rcmc.png",
    "/images/certificate/udyam.jpeg"
  ]

  return (<>
    <section className="py-8 md:py-12 lg:py-14">
      <SectionTitle
        title="Our Mission & Values"
        paragraph=""
        center
      />
      <div className="container">
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {/* Mission Section */}
          <div
            className="border-b-[10px] border-orange pb-8"
            data-aos="fade-up"
            data-aos-delay="100" // Delayed by 100ms
          >
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <BsFillRocketTakeoffFill className="text-orange text-[35px] md:text-[80px]" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Our Mission</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Delivering the highest quality, custom made activated carbon solutions for diverse industrial applications.
            </p>
          </div>

          {/* Vision Section */}
          <div
            className="border-b-[10px] border-orange pb-8"
            data-aos="fade-up"
            data-aos-delay="200" // Delayed by 200ms
          >
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <RiLightbulbFlashFill className="text-orange text-[35px] md:text-[80px]" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Our Vision</h3>
            <p className="text-gray-500 dark:text-gray-400">
              To become a globally leading developer and supplier of activated carbon, exceeding customer expectations through innovation and a commitment to sustainability.
            </p>
          </div>

          {/* Value Section */}
          <div
            className="border-b-[10px] border-orange pb-8"
            data-aos="fade-up"
            data-aos-delay="300" // Delayed by 300ms
          >
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <IoDiamond className="text-orange text-[35px] md:text-[80px]" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Our Value</h3>
            <p className="text-gray-500 dark:text-gray-400">
              We prioritize understanding and fulfilling unique customer needs and we are committed to delivering superior activated carbon solutions.
            </p>
          </div>
        </div>
      </div>

    </section>
    <hr></hr>
    <section className="py-8 md:py-12 lg:py-14">
      <SectionTitle
        title="Certificates"
        paragraph=""
        center
      />
      <div className="container grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-5">
        {brands.map((b) => {
          return <SingleBrand key={1} brand={b} />
        })}
      </div>
    </section>
  </>
  );
};

export default AboutSectionTwo;
