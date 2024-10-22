import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb';
import { NavLink } from 'react-router-dom';

const CoconutShellActivatedCarbon = () => {
  const subTypes = [
    {
      id: 1,
      title: "Coconut Shell Granular Activated Carbon",
      description: "Coconut shell granular activated carbon, made of high quality coconut shell, is a kind of broken carbon with irregular grain...",
      image: "/images/coconut/picture1.jpg",
      link: "/products/subtypes/Coconut-Shell-Granular-Activated-Carbon"
    },
    {
      id: 2,
      title: "Coconut Shell Powdered Activated Carbon",
      description: "This product made of natural high-quality coconut shell as raw material, using advanced equipment and scientific...",
      image: "/images/coconut/pic1.jpeg",
      link: "/products/subtypes/Coconut-Shell-Powdered-Activated-Carbon"
    }
  ];

  const images=[
    "/images/products/coconut/1.jpg",
    "/images/products/coconut/2.jpg",
    "/images/products/coconut/3.jpg",
    "/images/products/coconut/4.jpg",
    "/images/products/coconut/5.jpg",
    "/images/products/coconut/6.jpg",
    "/images/products/coconut/7.jpg",
    "/images/products/coconut/8.jpg",
  ]
  return (
    <div>
      <>
        <Breadcrumb
          pageName="Coconut Shell Activated Carbon"
          mainPage="Our Products"
          description=""
          mainurl="/products"
        />
       <section id="about" className="pt-8 md:pt-10 lg:pt-14">
  <div className="container mx-auto">
    <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-14 lg:pb-14">
      <div className="flex flex-wrap -mx-2 items-start">
        {/* Image Section */}
        <div className="w-full px-4 lg:w-1/2 mt-4 md:mt-0">
          <div className="relative mx-auto aspect-[25/24] max-w-[300px] ">
            <img
              src="/images/products/coconut/pic3.jpg"
              alt="Coconut Shell Activated Carbon Image"
              fill
              className="rounded-md object-cover drop-shadow-three dark:hidden"
            />
            <img
              src="/images/products/coconut/pic3.jpg"
              alt="Coconut Shell Activated Carbon Dark Mode Image"
              fill
              className="hidden dark:block rounded-md object-cover drop-shadow-none"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full px-4 lg:w-1/2">
          <div className="text-base leading-relaxed md:text-base space-y-4">
            <p>
              Coconut shell activated carbon, derived from coconut husk, is a vapor-activated material. Since it contains no chemical agents, it ensures that when applied on a medium, it does not contaminate or react with it. This eco-friendly product has a minimal carbon footprint and is highly effective at adsorbing impurities due to its microporous molecular structure.
            </p>
            <p>
              It is widely used for applications such as the purification of drinking water, air filtration, and industrial processes. Its high abrasion resistance and unique physical properties make it ideal for the recovery of gold and other precious metals. 
            </p>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="my-4 px-4">
          <p>
            Our Coconut Shell Activated Carbon is crucial for the purification and treatment of water, gas, air, gold extraction, and many other industrial applications. Known for its longevity and effectiveness, it is commonly used in air purification, wastewater treatment, and the recovery of volatile organic compounds (VOCs).
          </p>
          <p>
            Our product’s microporous structure ensures optimal adsorption of organic impurities, making it especially effective in applications where precision and purity are critical. With a commitment to sustainability, our production process emphasizes eco-friendliness, ensuring a minimal environmental impact while providing a highly efficient filtration solution.
          </p>
        </div>

        {/* Image Gallery Section */}
        <div className="mb-4 py-8 flex justify-center w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((img, index) => (
              <div key={index}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={img}
                  alt={`Coconut Activated Carbon Image ${index + 1}`}
                  width={250}
                  height={250}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
              <NavLink
                to="/contact"
                className="cursor-pointer ease-in-up shadow-btn hover:shadow-btn-hover rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9"
              >
                Enquire Now
              </NavLink>
            </div>
        {/* Product Types Cards Section */}
        <div className="w-full py-4 mt-8 flex flex-wrap gap-3 justify-center">
          {subTypes.map((t, i) => (
            <div key={i} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{t.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{t.description}</p>
                <NavLink to={t.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800  dark:bg-blue-600 dark:hover:bg-primary dark:focus:ring-blue-800">
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      </>


      {/* Sub-type:
      i.. 
      Coconut shell granular activated carbon, made of high quality coconut shell, is a kind of broken carbon with irregular grain, high strength, and can be regenerated after being saturated. Coconut shell activated carbon is black appearance, granular shape, with developed pores, good adsorption performance, high strength, economic durability and other advantages.

      Send us your requirements, we will provide the best solution for you!

      ii... Coconut Shell Powdered Acticated Carbon
      https://micbacindia.com/coconut-shell-powdered-activated-carbon

      Coconut Shell Powdered Activated Carbon
      This product made of natural high-quality coconut shell as raw material, using advanced equipment and scientific technology, is processed by burning coconut shell with zero oxygen supply and for acid washed - phosphoric acid mixing and stirring, rinsing and other processes, and form black powder.

      It has well-developed macroporous structure and high specific surface area. It has strong adsorption capacity and fast filtration speed. It has excellent decolorization and purification performance.

      Widely used in the decolorization and purification, deodorization and purification of raw material medicines, pharmaceutical intermediates, finished medicines, various types of injections and reagents. It is suitable for the manufacture of oral tablets, anti-intestinal bacteria drugs, food alkaline detoxification drugs.

      It is also used for decolorization and purification of sugar, beverages, alcoholics, edible oils and other food industries. It is also widely used in decolorization, refining and purification of organic solvents, water purification industry, drinking water purification and sewage treatment.

      Send us your requirements, we will provide the best solution for you! */}


    </div>
  )
}

export default CoconutShellActivatedCarbon
