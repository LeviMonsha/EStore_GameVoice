import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Carousel from './Carousel';

const ProductModal = ({ isOpen, onClose, product }) => {
    const { addToCart, removeFromCart } = useContext(CartContext);

    if (!isOpen) return null;

    const handleClickOutside = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={onClose}>
            <div className="bg-white w-50% max-w-lg p-6 rounded-lg shadow-lg overflow-y-auto" onClick={handleClickOutside}>
                <span className="text-gray-600 cursor-pointer text-2xl ml-auto" onClick={onClose}>&times;</span>
                <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
                <Carousel product={product} alt={product.name} className="w-full h-64 mb-4 rounded-md"/>
                <p className="text-xl font-bold text-gray-800 mb-4">Цена: {product.price}₽</p>
                <p className="text-lg text-gray-700 mb-4">{product.desc}</p>
                <div className="flex justify-between mt-auto">
                    <button 
                        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
                        onClick={() => addToCart(product)}>
                        Добавить в корзину
                    </button>
                    <button 
                        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
                        onClick={() => removeFromCart(product)}>
                        Удалить из корзины
                    </button>
                    <Link 
                        to={`/product/${product.id}`}
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                        Страница товара
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
