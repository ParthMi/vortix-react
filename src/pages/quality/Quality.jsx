import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'

const Quality = () => {
    return (
        <>
            <Breadcrumb
                pageName="Quality"
                mainPage=""
                description=""
            />
            <section id="about" className="pt-8 md:pt-10 lg:pt-14">
                <div className="container mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                            Quality & System
                        </h1>
                        <p className="text-lg text-gray-600">
                            At every step in our operation, quality is what we endeavor for. We ensure that each stage is quality-checked, so our customers receive the best products.
                        </p>
                    </div>

                    {/* Quality Description */}
                    <div className="grid lg:grid-cols-2 gap-10 mb-16 w-full">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quality Control at Every Stage</h2>
                            <p className="text-gray-600">
                                Quality checks are performed at each step of the product process. We have prepared our own Quality Plan to test material right from raw materials to finished products. During the manufacturing process, samples are collected at various stages and tested for quality in the attached laboratory by trained personnel.
                            </p>
                            <p className="text-gray-600 mt-4">
                                Each batch of the final product is sampled statistically and tested. Major ongoing investments in quality control and grading the carbon have made the industry one of the best-equipped carbon exporters in the country.
                            </p>
                        </div>
                        <div className="relative h-50 w-full flex justify-center">
                            <img
                                src="/images/quality-control.jpg" // Change this to the relevant image
                                alt="Quality Control Image"
                                className="absolute inset-0 w-auto h-full object-cover rounded-lg"
                            />
                        </div>

                    </div>

                    {/* Quality Pillars Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Quality Policy</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                                <h3 className="text-xl font-semibold text-primary mb-3">Customer Satisfaction</h3>
                                <p className="text-gray-600">
                                    Total commitment to delivering high-quality products that exceed customer expectations.
                                </p>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                                <h3 className="text-xl font-semibold text-primary mb-3">Environmental Protection</h3>
                                <p className="text-gray-600">
                                    We prioritize sustainable practices and ensure the protection and advancement of the environment.
                                </p>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                                <h3 className="text-xl font-semibold text-primary mb-3">Market Leadership</h3>
                                <p className="text-gray-600">
                                    Continuously striving for innovation and excellence to lead the market with high-quality products.
                                </p>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                                <h3 className="text-xl font-semibold text-primary mb-3">Quality Excellence</h3>
                                <p className="text-gray-600">
                                    We strive for excellence in all aspects of quality, from manufacturing to service.
                                </p>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                                <h3 className="text-xl font-semibold text-primary mb-3">Sustainable Development</h3>
                                <p className="text-gray-600">
                                    Our commitment to sustainable growth benefits all stakeholders, ensuring long-term success.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Closing Statement */}
                    <div className="text-center">
                        <p className="text-lg text-gray-600">
                            Our commitment to quality is unflinching, and we continuously strive to improve and innovate in every aspect of our business.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Quality
