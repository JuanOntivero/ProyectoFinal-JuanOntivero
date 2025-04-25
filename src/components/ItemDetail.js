import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

function ItemDetail({ item }) {
  const { addToCart } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAdd = (quantity) => {
    addToCart(item, quantity);
    setAddedToCart(true);
  };

  return (
    <div className="item-detail">
      <h2>{item.name}</h2>
      <p>Precio: ${item.price}</p>
      <p>Categoría: {item.category}</p>
      <img src={item.image} alt={item.name} width="200" />

      {addedToCart ? (
        <p style={{ color: 'green' }}>Producto agregado al carrito ✅</p>
      ) : (
        <ItemCount stock={10} initial={1} onAdd={handleAdd} />
      )}
    </div>
  );
}

export default ItemDetail;
