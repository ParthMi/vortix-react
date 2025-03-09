import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import Flag from 'react-world-flags'

const GradientStarIcon = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20">
            <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#FFE61C", stopOpacity: 1 }} />
                    <stop
                        offset="100%"
                        style={{ stopColor: "#FFA929", stopOpacity: 1 }}
                    />
                </linearGradient>
            </defs>
            <FaStar className="text-[18px] sm:text-[20px]" fill="url(#gradient1)" />
        </svg>
    );
};

const HalfGradientStarIcon = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20">
            <defs>
                <linearGradient id="halfGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#FFE61C", stopOpacity: 1 }} />
                    <stop
                        offset="100%"
                        style={{ stopColor: "#FFA929", stopOpacity: 1 }}
                    />
                </linearGradient>
            </defs>
            <FaRegStarHalfStroke
                className="text-[18px] sm:text-[20px]"
                fill="url(#halfGradient)"
            />
        </svg>
    );
};

const TestimonialCard = ({
    img,
    name,
    company,
    className,
    description,
    rating,
    country
}) => {
    const renderStars = () => {
        const fullStars = Array.from({ length: Math.floor(rating) }, (_, index) => (
            <GradientStarIcon key={`full-${index}`} />
        ));

        const halfStar =
            rating % 1 !== 0 ? <HalfGradientStarIcon key="half" /> : null;

        const emptyStars = Array.from(
            { length: 5 - Math.ceil(rating) },
            (_, index) => (
                <CiStar key={`empty-${index}`} className="text-[18px] sm:text-[23px]" />
            )
        );

        return [...fullStars, halfStar, ...emptyStars];
    };

    return (
        <div
            className={`bg-white h-full max-w-[80vw] sm:max-w-[420px] mx-[8px] sm:mx-[15px] rounded-[15px] p-[16px] sm:p-[30px] border border-1 border-[#D3D4DD] h-full shadow-sm flex flex-col ${className}`}
        >
            <div className="flex gap-5 items-center mb-5">
                <div className="size-[40px] sm:size-[40px] rounded-full flex jusitify-center items-center flex-shrink-0 overflow-hidden">
                    {img ? <img src={img} alt="" className="w-full h-full object-cover" /> : <FaUserCircle size={45}/>}
                </div>
                <div className="flex flex-col gap-0.5">
                    <span className="text-[16px] sm:text-[22px] font-semibold">
                        {name}
                    </span>
                    <span className="text-[13px] flex items-center gap-1 sm:text-[16px] text-[#777777] font-semibold">
                        {company} 
                    </span>
                </div>
            </div>
            <div className="flex flex-col gap-0.5 mb-2.5">
                <span className="text-[12px] sm:text-[16px] text-[#777777] font-semibold  min-h-[63px] sm:min-h-[81px]">
                    {description}
                </span>
            </div>
            <div className="w-full flex justify-between items-center mt-auto">
                <div className="text-[20px] font-semibold">
                    <div className="flex items-center gap-0.5">{renderStars()}</div>
                </div>
                <div className="h-[30px] bg-[#f6f6f6]">
                <Flag code={ country } className="h-full  w-full object-cover"/>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
