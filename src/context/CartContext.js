import { createContext, useState } from 'react';

// 1. Crear el contexto
export const CartContext = createContext();

// 2. Crear el provider que envuelve la app
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto al carrito
  const addToCart = (item, quantity) => {
    const existingItem = cart.find(prod => prod.id === item.id);

    if (existingItem) {
      const updatedCart = cart.map(prod =>
        prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // Eliminar producto
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Vaciar carrito
  const clearCart = () => {
    setCart([]);
  };

  // Cantidad total de unidades
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Precio total
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart,
      totalQuantity,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};
