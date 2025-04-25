import { useState } from 'react';

function ItemCount({ stock, initial = 1, onAdd }) {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="item-count">
      <div>
        <button onClick={decrement}>-</button>
        <span style={{ margin: '0 10px' }}>{quantity}</span>
        <button onClick={increment}>+</button>
      </div>
      <button
        onClick={() => onAdd(quantity)}
        disabled={stock === 0}
        style={{ marginTop: '10px' }}
      >
        Agregar al carrito
      </button>
      {stock === 0 && <p style={{ color: 'red' }}>Producto sin stock</p>}
    </div>
  );
}

export default ItemCount;
