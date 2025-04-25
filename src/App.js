import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import CheckoutForm from './containers/CheckoutForm';
import Cart from './containers/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
<BrowserRouter>
  <Cart />
  <NavBar />
  <div className="main-layout">
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:categoryId" element={<ItemListContainer />} />
    </Routes>
  </div>
  <ToastContainer />
</BrowserRouter>

  );
}

export default App;
