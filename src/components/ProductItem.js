import React, { useState } from 'react';
import ProductModal from './ProductModal';
import { Link } from 'react-router-dom';

const ProductItem = ({ product, addToCart, removeFromCart }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const handleModalToggle = () => setModalOpen(prev => !prev);

    return (
        <div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 transition-transform transform hover:scale-105">
                <img 
                    src={`img/img_product/${product.image}`} 
                    className="w-full h-32 object-cover mb-4" 
                    alt={product.name}/>
                <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-700 mb-2">{product.desc}</p>
                <p className="text-xl font-bold text-gray-800 mb-4">Цена: {product.price}₽</p>
                <div>
                    <Link 
                        to={`/product/${product.id}`}
                        key={`/product/${product.name}`}
                        className="bg-blue-500 text-white text-sm py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                        Перейти на страницу товара
                    </Link>
                    <button 
                        className="bg-green-500 text-white text-sm py-2 px-4 rounded hover:bg-green-600 transition duration-300" 
                        onClick={() => addToCart(product)}>
                        Добавить в корзину
                    </button>
                    <button 
                        className="bg-red-500 text-white text-sm py-2 px-4 rounded hover:bg-red-600 transition duration-300" 
                        onClick={() => removeFromCart(product)}>
                        Убрать из корзины
                    </button>
                    <button 
                        className="bg-yellow-500 text-white text-sm py-2 px-4 rounded hover:bg-yellow-600 transition duration-300" 
                        onClick={handleModalToggle}>
                        Подробнее
                    </button>
                </div>
            </div>
            <ProductModal isOpen={isModalOpen} onClose={handleModalToggle} product={product} />
        </div>
    );
};

export default ProductItem;
