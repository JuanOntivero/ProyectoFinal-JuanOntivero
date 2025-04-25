import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/">Todos</Link>
      <Link to="/category/remeras">Remeras</Link>
      <Link to="/category/pantalones">Pantalones</Link>
      <Link to="/category/zapatos">Zapatos</Link>
    </nav>
  );
}

export default NavBar;
