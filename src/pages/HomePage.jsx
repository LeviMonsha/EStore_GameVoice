import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';
import ProductItem from '../components/ProductItem'; 

const HomePage = ({ selectedCategory, itemsPerRow, setItemsPerRow }) => {
    const { addToCart, removeFromCart } = useContext(CartContext);
    const products = useContext(ProductContext);

    const filteredProducts = selectedCategory 
        ? products.filter(product => product.categoryId === selectedCategory)
        : products;

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const currentProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    useEffect(() => {
        console.log("Current itemsPerRow:", itemsPerRow);
    }, [itemsPerRow]);

    const toggleItemsPerRow = () => {
        setItemsPerRow((prev) => (prev === 4 ? 2 : 4));
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-center flex-grow">Товары</h2>
                <button
                    onClick={toggleItemsPerRow}
                    className="ml-4 px-4 py-2 text-white bg-gray-800 rounded">
                    {itemsPerRow === 4 ? '|2|' : '|4|'}
                </button>
            </div>

            <div className={`mt-4 grid gap-4 ${itemsPerRow === 2 ? 'grid-cols-2' : 'grid-cols-1 md:grid-cols-3 lg:grid-cols-4'}`}>
                {currentProducts.map(product => (
                    <ProductItem 
                        key={product.name} 
                        product={product} 
                        addToCart={addToCart} 
                        removeFromCart={removeFromCart}/>
                ))}
            </div>

            <div className="flex justify-center mt-6">
                <div className="flex items-center">
                    <button onClick={() => setCurrentPage((currentPage - 1 + totalPages) % totalPages)} 
                    className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700">&#10094;</button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button 
                            key={index + 1} 
                            onClick={() => setCurrentPage(index + 1)} 
                            className={`mx-1 px-3 py-1 border rounded-md ${currentPage === index + 1 
                            ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'} transition duration-300`}>
                            {index + 1}
                        </button> 
                    ))}
                    <button onClick={() => setCurrentPage((currentPage + 1) % totalPages)} 
                    className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700">&#10095;</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
