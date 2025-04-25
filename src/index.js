import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/styles.css';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './context/CartContext'; // 👈 Importá el provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider> {/* 👈 Envolvés tu app acá */}
      <App />
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
