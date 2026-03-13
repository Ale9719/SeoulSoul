import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Funzione per aggiungere al carrello
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Controlliamo se il prodotto è già nel carrello
      const isItemInCart = prevItems.find((item) => item.id === product.id);
      if (isItemInCart) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Se è nuovo, lo aggiungiamo con quantità 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Funzione per rimuovere
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calcolo totale pezzi per il badge della Navbar
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);