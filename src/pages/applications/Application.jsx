import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import applicationData from '../../components/Applications/appdata';
import Breadcrumb from '../../components/common/Breadcrumb';
import SingleTestimonial from '../../components/Applications/SingleTestimonial';

const Application = () => {
    return (
        <div>
            <Breadcrumb
                pageName="Applications"
                mainPage=""
                description=""
            />
            <div className="container mt-2">
                <section className="relative z-10 py-2 md:py-4 lg:py-8">
                    <div className="flex justify-center w-full">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-4">
                            {applicationData?.map((application, index) => (
                                <div
                                    key={application.id}
                                    data-aos="fade-up" // Add your desired AOS animation
                                    data-aos-delay={`${index * 100}`} // Optional: stagger the animations
                                >
                                    <SingleTestimonial application={application} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
        </div >
    )
}

export default Application
