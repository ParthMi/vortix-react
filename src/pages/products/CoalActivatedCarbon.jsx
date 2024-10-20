import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb';
import { NavLink } from 'react-router-dom';

const CoalActivatedCarbon = () => {
  const subTypes = [
    {
      id: 1,
      title: "Coal Based Granular Activated Carbon",
      description: "The coal based granular activated carbon is widely used in food industry, medical treatment, mine, metallurgy, petrochemical...",
      image: "/docs/images/blog/image-1.jpg",
      link: "/products/subtypes/Coal-Based-Granular-Activated-Carbon"
    },
    {
      id: 2,
      title: "Coal Powdered Acticated Carbon",
      description: "The coal-based powder activated carbon is made of high quality anthracite coal as raw material, by special production process (first carbonization and activation, then grinding into powder) is refined....",
      image: "/docs/images/blog/image-1.jpg",
      link: "/products/subtypes/Coal-Powdered-Activated-Carbon"
    }
  ];

  const images = [
    "/images/products/coal/1.jpg",
    "/images/products/coal/2.jpg",
    "/images/products/coal/3.jpg",
    "/images/products/coal/4.jpg"
  ]

  return (
    <>
      <Breadcrumb
        pageName="Coal Activated Carbon"
        mainPage="Our Products"
        description=""
        mainurl="/products"
      />
      <section id="about" className="pt-8 md:pt-10 lg:pt-14">
        <div className="container mx-auto">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-14 lg:pb-14">
            <div className="-mx-2 flex flex-wrap items-start">
              {/* Text Section */}
              <div className="w-full px-4 lg:w-1/2">
                <div className="text-base leading-relaxed md:text-base space-y-4">
                  <p>
                    Coal Activated Carbon can be manufactured from different sources, which includes bituminous coal, anthracite and lignite. Of all these specified base materials, Activated Carbon produced from bituminous coal is an ideal choice due to its comparatively higher micro porosity and resistance to impact.                   </p>
                  <p>
                    Although Coal Activated Carbon has a lower Adsorption characteristics when compared to Coconut Shell Activated Carbon and Wood Based Activated Carbon, studies have proven that it has higher capacity at larger concentrations.
                  </p>
                </div>
              </div>

              {/* Image Section */}
              <div className="w-full px-4 lg:w-1/2 mt-4 md:mt-0">
                <div className="relative mx-auto aspect-[25/24] max-w-[280px]">
                  <img
                    src="/images/products/coal/g1.jpg"
                    alt="Coal Activated Carbon"
                    fill
                    className="rounded-md object-cover h-full drop-shadow-three dark:hidden lg:mr-0"
                  />
                  <img
                    src="/images/products/coal/g1.jpg"
                    alt="Coal Activated Carbon (dark mode)"
                    fill
                    className="hidden dark:block rounded-md object-cover drop-shadow-none lg:mr-0"
                  />
                </div>
              </div>

              {/* Additional Text */}
              <p className="w-full px-4 mt-4 lg:mt-6">
                Coal Activated Carbon is used in applications that require lower cost, high availability, and high concentrations. At Vortix, we deliver Coal-based Activated Carbon with low impurity levels and lesser ash content. It is mainly used in industrial gas purification, potable water treatment, pond water purification, and wastewater treatment.
              </p>

              {/* Image Gallery */}
              <div className="w-full py-8 flex justify-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {images.map((img, index) => (
                    <div key={index}>
                      <img
                        className="h-[250px] w-[250px] object-cover rounded-lg"
                        src={img}
                        alt={`Coconut image ${index + 1}`}
                        width={250}
                        height={250}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Types */}
              <div className="w-full py-4 mt-8 flex flex-wrap justify-center gap-4">
                {subTypes.map((t, i) => (
                  <div key={i} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{t.title}</h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{t.description}</p>
                      <NavLink to={t.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-blue-800  dark:bg-blue-600 dark:hover:bg-primary dark:focus:ring-blue-800">
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
  )
}

export default CoalActivatedCarbon
