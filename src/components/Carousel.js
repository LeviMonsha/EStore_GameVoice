import React, { useState, useEffect } from 'react';

const Carousel = ({ product }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        `/img/img_product/${product.image}`,
        `/img/img_product/maxres.jpg`,
        product.presentation[0]
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [images.length]);

    const renderSlide = () => (
        images[currentIndex].includes('youtube.com') ? (
            <iframe
                className="w-auto h-64"
                src={images[currentIndex]}
                frameBorder="0"
                allowFullScreen
                title={`Video ${currentIndex + 1}`}
            />
        ) : (
            <img
                src={images[currentIndex]}
                alt={`Screenshot ${currentIndex + 1}`}
                className="w-auto h-64 object-cover"
            />
        )
    );

    return (
        <div className="relative w-full h-full">
            <div className="overflow-hidden">{renderSlide()}</div>
            <div className="absolute inset-0 flex items-center justify-between p-2">
                <button onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)} 
                className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700">&#10094;</button>
                <button onClick={() => setCurrentIndex((currentIndex + 1) % images.length)} 
                className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700">&#10095;</button>
            </div>
        </div>
    );
};

export default Carousel;