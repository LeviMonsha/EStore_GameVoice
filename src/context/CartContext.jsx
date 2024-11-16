import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedItems = localStorage.getItem('cart');
        return savedItems ? JSON.parse(savedItems) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id 
                        ? { ...item, quantity: item.quantity + 1 } 
                        : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productToRemove) => {
        setCart(prevCart => prevCart.reduce((accumulator, item) => {
            if (item.id === productToRemove.id) {
                if (item.quantity > 1) {
                    accumulator.push({ ...item, quantity: item.quantity - 1 });
                }
            } else {
                accumulator.push(item);
            }
            return accumulator;
        }, []));
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};