import React, { createContext, useContext, useState, useEffect } from 'react';
import cart from './cart-helper';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        setCartItems(cart.getCart());
    }, []);

    const updateCart = () => {
        setCartItems(cart.getCart());
    };

    return (
        <CartContext.Provider value={{ cartItems, updateCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);