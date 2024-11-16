import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';
import Carousel from '../components/Carousel';

const ProductPage = () => {
    const products = useContext(ProductContext);
    const { addToCart, removeFromCart } = useContext(CartContext);
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) return <div className="text-center text-red-500">Товар не найден</div>;

    const recommendedProducts = products.filter(p => p.categoryId === product.categoryId && p.id !== product.id);

    return (
        <div className="container mx-auto p-6">
            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1">
                    <Carousel product={product} />
                </div>

                <div className="flex flex-col p-6 bg-gray-100">
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                    <p className="text-gray-600 mt-2">Краткое описание игры, ее особенности и интересные факты.</p>
                    <p className="text-lg text-gray-700 mb-4">{product.desc}</p>
                    <p className="text-xl font-bold text-gray-800 mb-4">Цена: {product.price}₽</p>
                    <div className="flex space-x-2">
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
                    </div>

                    <div className="mt-6">
                        <h2 className="text-lg font-semibold text-gray-800">Системные требования</h2>
                        <ul className="list-disc list-inside text-gray-700 mt-2">
                            <li>ОС: Windows 7</li>
                            <li>Процессор: Intel Core i3</li>
                            <li>Оперативная память: 4 GB RAM</li>
                            <li>Графика: NVIDIA GeForce GTX 660</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='rounded-lg shadow-lg mt-8 bg-white'>
                <div className="p-4 border-b border-gray-300">
                    <h2 className="text-2xl font-bold mb-4">Отзывы</h2>
                    <div className="mt-4">
                        <p className="text-gray-700">Отличная игра! - Пользователь 1</p>
                        <p className="text-gray-700">Мне очень понравилось! - Пользователь 2</p>
                    </div>
                </div>

                {recommendedProducts.length > 0 && (
                    <div className="mt-8 p-4">
                        <h2 className="text-xl font-bold mb-4">Вам также могут понравиться</h2>
                        <div className="flex overflow-x-auto space-x-4 pb-4">
                            {recommendedProducts.map(product => (
                                <div key={product.id} className="flex flex-col border rounded-lg 
                                bg-gray-200 p-2 w-[150px] transition-transform transform hover:scale-105">
                                    <img 
                                        src={`/img/img_product/${product.image}`} 
                                        alt={product.name} 
                                        className="w-full h-[150px] object-cover mb-2 rounded"
                                    />
                                    <h3 className="text-sm font-semibold">{product.name}</h3>
                                    <p className="text-gray-700 text-sm">{product.price}₽</p>
                                    <Link 
                                        to={`/product/${product.id}`}
                                        className="bg-blue-500 text-center text-white text-xs py-1 px-2 rounded mt-1 
                                        hover:bg-blue-600 transition duration-300">
                                        Перейти на страницу товара
                                    </Link>
                                    <button 
                                        className="bg-green-500 text-center text-white text-xs py-1 px-2 rounded mt-1 
                                        hover:bg-green-600 transition duration-300"
                                        onClick={() => addToCart(product)}>
                                        Добавить в корзину
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductPage;
