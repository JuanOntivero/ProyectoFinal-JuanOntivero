import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

function Cart() {
  const { cart, removeFromCart, clearCart, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  const handleBuy = async () => {
    if (cart.length === 0) {
      toast.error("El carrito está vacío 🚫");
      return;
    }

    const order = {
      buyer: {
        name: "Cliente Demo",
        email: "cliente@email.com",
        phone: "123456789"
      },
      items: cart,
      total: totalPrice,
      date: new Date()
    };

    try {
      const ordersRef = collection(db, 'orders');
      const docRef = await addDoc(ordersRef, order);
      toast.success(`🎉 Gracias por tu compra 🎉 Número de orden: ${docRef.id}`);
      clearCart();
      navigate('/');
    } catch (error) {
      console.error(error);
      toast.error("Error al generar la orden ❌");
    }
  };

  return (
    <aside className="cart-panel">
      <h3>🛒 Carrito</h3>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <p>{item.name} x{item.quantity}</p>
              <p>Subtotal: ${item.quantity * item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
          ))}
          <h4>Total: ${totalPrice}</h4>
          <button onClick={clearCart}>Vaciar carrito</button>
          <button onClick={handleBuy} style={{ marginTop: '10px' }}>
            Comprar
          </button>
        </>
      )}
    </aside>
  );
}

export default Cart;
