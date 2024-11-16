import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FaPlus, FaMinus } from 'react-icons/fa';

const CartPage = () => {
    const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext);

    const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-6">Корзина</h2>
            {cart.length === 0 ? (
                <p className="text-center text-lg">Корзина пуста</p>
            ) : (
                <>
                    <ul className="space-y-4">
                        {cart.map((item, index) => (
                            <li key={index} className="flex justify-between items-center bg-gray-100 p-4 rounded shadow">
                                <Link
                                    to={`/product/${item.id}`}>
                                    <img 
                                    src={`img/img_product/${item.image}`} 
                                    className="h-12 inline mx-4 object-cover mb-4" 
                                    alt={item.name}/>
                                    <span className="text-lg">{item.name} - {item.price}₽</span>
                                </Link>
                                <div className="flex items-center space-x-4">
                                    <button 
                                        className="p-2 bg-gray-800 text-white rounded-full"
                                        onClick={() => removeFromCart(item)}>
                                        <FaMinus />
                                    </button>
                                    <span className="text-lg font-semibold">{item.quantity}</span>
                                    <button 
                                        className="p-2 bg-gray-800 text-white rounded-full"
                                        onClick={() => addToCart(item)}>
                                        <FaPlus />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button 
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 ml-4" 
                        onClick={clearCart}>
                        Очистить корзину
                    </button>
                    <button 
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ml-4" 
                        onClick={clearCart}>
                        Сделать заказ
                    </button>
                    <h3 className="text-xl font-bold mt-6">Итого: {totalPrice}₽</h3>
                </>
            )}
        </div>
    );
};

export default CartPage;
