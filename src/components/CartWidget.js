import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


function CartWidget() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} />
      <Link to="/cart">
        🛒 {totalQuantity > 0 && <span>{totalQuantity}</span>}
      </Link>
    </div>
  );
}

export default CartWidget;
