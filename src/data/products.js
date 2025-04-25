const products = [
  { id: '1', name: 'Remera Nike', category: 'remeras', price: 3500, image: '/assets/images/remera-nike.jpg' },
  { id: '2', name: 'Pantalón Adidas', category: 'pantalones', price: 4500, image: '/assets/images/pantalon-adidas.jpg' },
  { id: '3', name: 'Zapatos Puma', category: 'zapatos', price: 5500, image: '/assets/images/zapatos-puma.jpg' },
  { id: '4', name: 'Remera Puma', category: 'remeras', price: 3000, image: '/assets/images/remera-puma.jpg' },
  { id: '5', name: 'Pantalón Nike', category: 'pantalones', price: 5000, image: '/assets/images/pantalon-nike.jpg' },
  { id: '6', name: 'Zapatillas Adidas', category: 'zapatos', price: 6000, image: '/assets/images/zapatillas-adidas.jpg' },
  { id: '7', name: 'Campera Nike', category: 'remeras', price: 7000, image: '/assets/images/campera-nike.jpg' },
  { id: '8', name: 'Buzo Puma', category: 'remeras', price: 5500, image: '/assets/images/buzo-puma.jpg' },
  { id: '9', name: 'Short Adidas', category: 'pantalones', price: 2500, image: '/assets/images/short-adidas.jpg' },
  { id: '10', name: 'Botas Timberland', category: 'zapatos', price: 8000, image: '/assets/images/botas-timberland.jpg' },
  { id: '11', name: 'Pantalón Cargo', category: 'pantalones', price: 4800, image: '/assets/images/pantalon-cargo.jpg' },
  { id: '12', name: 'Zapatillas Converse', category: 'zapatos', price: 4500, image: '/assets/images/zapatillas-converse.jpg' },
  { id: '13', name: 'Camiseta Running', category: 'remeras', price: 3200, image: '/assets/images/camiseta-running.jpg' },
  { id: '14', name: 'Jeans Levi\'s', category: 'pantalones', price: 6000, image: '/assets/images/jeans-levis.jpg' },
  { id: '15', name: 'Zapatos Formales', category: 'zapatos', price: 9000, image: '/assets/images/zapatos-formales.jpg' },
  { id: '16', name: 'Camisa Elegante', category: 'remeras', price: 4000, image: '/assets/images/camisa-elegante.jpg' },
  { id: '17', name: 'Bermuda Verano', category: 'pantalones', price: 2800, image: '/assets/images/bermuda-verano.jpg' },
  { id: '18', name: 'Botines de Fútbol', category: 'zapatos', price: 7500, image: '/assets/images/botines-futbol.jpg' },
  { id: '19', name: 'Hoodie Nike', category: 'remeras', price: 6200, image: '/assets/images/hoodie-nike.jpg' },
  { id: '20', name: 'Jogging Puma', category: 'pantalones', price: 5300, image: '/assets/images/jogging-puma.jpg' },
];

export const getProducts = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryId) {
        resolve(products.filter(prod => prod.category === categoryId));
      } else {
        resolve(products);
      }
    }, 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === id));
    }, 500);
  });
};
