import Data from "../SubTypeData"; // Ensure correct path
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Example icon
import { useParams } from "react-router";
import Breadcrumb from "../../../components/common/Breadcrumb";

export default function SubTypes() {
    const params = useParams();
    const title = Array.isArray(params?.title) ? params.title[0] : params?.title; // Ensure 'title' is a string

    if (!title) {
        return <div>Title not provided in the URL</div>;
    }

    // Normalize title
    const productTitle = title.replace(/-/g, ' ').toLowerCase();

    // Find the product
    const product = Data.find(
        (item) => item.name.toLowerCase() === productTitle
    );
    console.log(product)
    // If no product is found, return "Not found"
    if (!product) {
        return <div>Product not found for title: {title}</div>;
    }

    // Product image URLs (replace with actual images from your data)
    const productImages = product.images || [
        "/img1.jpg", // replace with actual URLs
        "/img2.jpg",
        "/img3.jpg",
    ];
    const maxColumns = Math.max(
        ...Object.values(product.parameters)?.map(value => (Array.isArray(value) ? value.length : 1))
    );

    const maxColumnsacidWashed = product.acidWashed && Math.max(
        ...Object.values(product.acidWashed)?.map(value => (Array.isArray(value) ? value.length : 1))
    );

    // Render detailed product information
    return (
        <>
            <Breadcrumb
                pageName={product.name}
                mainPage="Our Products"
                description=""
                mainurl="/products"
            />
            <section id="about" className="pt-8 md:pt-10 lg:pt-14">
                <div className="container mx-auto p-4">
                    <div className="flex flex-col lg:flex-row">
                        {/* Left side - Image Carousel */}
                        <div className="lg:w-1/2 flex justify-center items-center">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={30}
                                navigation
                                pagination={{ clickable: true }}
                                className="mySwiper"
                                autoplay={{ // Configure autoplay options
                                    delay: 2000, // Delay between slides (in ms)
                                    disableOnInteraction: false, // Autoplay won't stop on user interaction
                                }}
                            >
                                {productImages?.map((img, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className="relative w-full aspect-[4/3]"> {/* Tailwind aspect-ratio utility */}
                                            <img
                                                src={img}
                                                alt={product.name}
                                                className="w-full h-full object-cover rounded-lg" // Use object-cover for similar behavior
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}

                            </Swiper>
                        </div>


                        {/* Right side - Product Information */}
                        <div className="lg:w-1/2 lg:pl-8 mt-3 md:mt-0">
                            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                            <p className="text-gray-600 mb-6">{product.description}</p>
                            <div className="mt-10">
                                <h2 className="text-2xl font-semibold mb-3">Applications</h2>
                                <div className="flex flex-wrap gap-2">
                                    {product.applications?.map((app, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-gray-200 text-gray-700 text-sm font-medium px-4 py-1 rounded-full"
                                        >
                                            {app}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div><div className='my-4'>
                        <hr></hr></div>
                    <div className='flex flex-wrap justify-evenly'>
                        <div className="mt-6 overflow-x-auto">
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md table-auto">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="py-3 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                                                Parameter
                                            </th>
                                            <th colSpan={maxColumns} className="py-3 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                                                Value
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.entries(product.parameters)?.map(([key, value], idx) => {
                                            const rowClass = `border-b border-gray-300 ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-200 transition-colors`;

                                            return (
                                                <tr key={idx} className={rowClass}>
                                                    <td className="py-3 px-4 text-gray-800 text-sm">{key}</td>
                                                    {Array.isArray(value) && (
                                                        value?.map((item, itemIdx) => (
                                                            <td key={itemIdx} className="py-3 px-4 text-gray-800 text-sm">
                                                                {item}
                                                            </td>
                                                        ))
                                                    )}
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>

                            </div>
                        </div>

                        {product.acidWashed && (
                            <div className="mt-6">
                                {/* Product acid-washed parameters */}
                                <div className="overflow-x-auto">
                                    <table className="min-w-auto w-auto bg-white border border-gray-300 rounded-lg shadow-md table-auto">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="py-3 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                                                    Parameter
                                                </th>
                                                <th colSpan={maxColumnsacidWashed} className="py-3 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                                                    Value
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Object.entries(product.acidWashed)?.map(([key, value], idx) => {
                                                const rowClass = `border-b border-gray-300 ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-200 transition-colors`;

                                                // Determine the number of columns to display
                                                const maxCols = 6;

                                                return (
                                                    <tr key={idx} className={rowClass}>
                                                        <td className="py-3 px-4 text-gray-800 text-sm">{key}</td>
                                                        {Array.isArray(value) ? (
                                                            // Map through the value array to create <td> elements
                                                            value?.map((item, itemIdx) => (
                                                                <td key={itemIdx} className="py-3 px-4 text-gray-800 text-sm">
                                                                    {item}
                                                                </td>
                                                            ))
                                                        ) : (
                                                            <td className="py-3 px-4 text-gray-800 text-sm">{value}</td>
                                                        )}
                                                        {/* Fill remaining cells if the array length is less than maxCols */}
                                                        {Array.isArray(value) && value.length < maxCols && (
                                                            Array.from({ length: maxCols - value.length })?.map((_, emptyIdx) => (
                                                                <td key={emptyIdx} className="py-3 px-4 text-gray-800 text-sm"></td>
                                                            ))
                                                        )}
                                                    </tr>
                                                );
                                            })}
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='my-4'>
                        <hr></hr></div>
                    <div className="mt-10">
                        <h2 className="text-2xl font-semibold mb-4">Advantages</h2>
                        <div className="space-y-2">
                            {product.advantages?.map((advantage, idx) => (
                                <div key={idx} className="flex items-start text-gray-800 text-md font-medium">
                                    <span><FaCheckCircle className="text-green-500 mr-2 mt-1" /></span>
                                    <p>{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
