import { NavLink } from "react-router-dom";

const Hero = () => {
    return (
        <>
            <style jsx>{`
     #home {
      position: relative;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }
  
    .background-video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1; /* Make sure video stays behind content */
    }


.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5); /* White background with 50% opacity */
  z-index: 0; /* Ensure overlay is above video but below content */
}
      `}</style>

            <section
                id="home"
                className="relative z-10 overflow-hidden pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-100 filter blur-sm"
                    style={{
                        filter: 'blur(5px) brightness(1)', // Adjust blur and brightness
                    }}
                >
                    <source src="/bg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="container relative z-10">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto max-w-[800px] text-center">
                                <h1 data-aos="fade-up" className="mb-5 text-3xl mt-8 font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                                    Global Leaders in High-Quality Activated Carbon Solution
                                </h1>
                                <p data-aos="fade-up" data-aos-delay={100} className="mb-12 text-base !leading-relaxed text-dark  sm:text-lg md:text-xl">
                                    Providing premium activated carbon solutions for wastewater treatment, air purification, oil refineries, and more. Our unwavering commitment to quality and reliability ensures the best solutions for your industry, all backed by exceptional customer service.                </p>
                                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                                    <NavLink
                                        data-aos="fade-up"
                                        to="/Vortix-Enterprise-Brochure.pdf" // Path to the PDF file
                                        download="Vortix-Enterprise-Brochure.pdf" // Specify file download name
                                        target="_blank" // Optional: open in new tab if needed
                                        rel="noopener noreferrer" // Optional: security feature for external NavLinks
                                        className="inline-block rounded-sm bg-orange px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-opacity-90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                                    >
                                        View Brochure
                                    </NavLink>

                                    <NavLink
                                        data-aos="fade-up"
                                        to="/about"
                                        className="inline-block rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-opacity-90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                                    >
                                        Read More
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
