import Marquee from "react-fast-marquee";
import TestimonialCard from "./TestimonialCard";
import { useEffect, useState } from "react";

const Testimonial = () => {
    const [dummyData, setDummyData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/review.json");
                const data = await response.json();
                console.log(data)
                setDummyData(data);
            } catch (error) {
            }
        };
        fetchData();
    }, []);

    return (
        <div className="py-10 bg-[#fff] features relative">
            <div className="" style={{ zIndex: "10" }}>
                <div className="text-center my-3">
                    <div className="text-[20px] md:text-[25px] lg:text-[35px] font-bold">
                        Testimonials
                    </div>
                </div>
                <div className="flex flex-col gap-[16px] sm:gap-[30px] pt-3">
                    <div className="flex">
                        <Marquee gradient={false} speed={70} pauseOnHover={true}>
                            {dummyData.length > 0 && dummyData.slice(0, 7).map((testimonial, index) => (
                                <TestimonialCard
                                    key={index}
                                    img={testimonial.img}
                                    name={testimonial.name}
                                    company={testimonial.company}
                                    country={testimonial.country}
                                    description={testimonial.review}
                                    rating={testimonial.rating}
                                />
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
