import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import {db} from '../firebase/config';
// import { db } from '../firebase/config';



function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState('');

  const [buyer, setBuyer] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      buyer,
      items: cart,
      total: totalPrice,
      date: new Date()
    };

    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    const docRef = await addDoc(ordersCollection, order);
    setOrderId(docRef.id);
    clearCart();
  };

  if (orderId) {
    return <h2>Gracias por tu compra 🎉 Tu número de orden es: {orderId}</h2>;
  }

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2>Finalizar compra</h2>
      <input type="text" name="name" placeholder="Nombre" required onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
      <input type="tel" name="phone" placeholder="Teléfono" required onChange={handleChange} />
      <button type="submit">Confirmar orden</button>
    </form>
  );
}

export default CheckoutForm;
