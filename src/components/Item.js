import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import { toast } from 'react-toastify';


function Item({ product }) {
  const [showDetail, setShowDetail] = useState(false);
  const [added, setAdded] = useState(false);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const handleAdd = (quantity) => {
    addToCart(product, quantity);
    setAdded(true);
    toast.success('Producto agregado correctamente ✅');
  };
  
  // 🔄 Sincronizar con el carrito global
  useEffect(() => {
    const isInCart = cart.some((item) => item.id === product.id);
    setAdded(isInCart);
  }, [cart, product.id]);

  return (
    <div className="item">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
        style={{
          width: '100%',
          height: '180px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '10px'
        }}
      />

      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>

      <button onClick={() => setShowDetail(!showDetail)}>
        {showDetail ? 'Ocultar detalle' : 'Ver Detalle'}
      </button>

      {showDetail && (
        <div className="item-detail-inline">
          <p>Categoría: {product.category}</p>

          {!added ? (
            <ItemCount stock={10} initial={1} onAdd={handleAdd} />
          ) : (
            <>
              <p style={{ color: 'green' }}>Producto agregado ✅</p>
              <button
                onClick={() => removeFromCart(product.id)}
                style={{ marginTop: '10px' }}
              >
                Eliminar del carrito
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Item;
