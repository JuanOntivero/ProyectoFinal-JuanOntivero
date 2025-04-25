Proyecto Final: Tienda Virtual en React
Descripción general

Esta aplicación simula una tienda de e-commerce utilizando React. Permite a los usuarios visualizar un catálogo de productos, filtrar por categorías, agregar productos al carrito, gestionar las cantidades y finalizar la compra, almacenando los datos en Firebase Firestore.


Tecnologías utilizadas

- React 18
- React Router DOM
- Context API
- Firebase Firestore
- React Toastify
- CSS personalizado
- FontAwesome para íconos


Funcionamiento general

- Los productos son cargados dinámicamente desde Firebase Firestore.
- Las imágenes se cargan desde URLs públicas (Dropbox u otras).
- Los usuarios pueden agregar productos al carrito desde la misma tarjeta.
- El carrito es visible permanentemente al costado derecho.
- Desde el carrito pueden eliminar productos, vaciar todo o confirmar la compra.
- Al confirmar la compra, se genera una orden en la colección 'orders' de Firestore y se muestra un número de orden único mediante un toast.
- Se utilizan renderizados condicionales para mejorar la experiencia: carga de productos, carrito vacío, producto sin stock.


Estructura de carpetas y archivos

src/
 ┣ components/
 ┃ ┣ Item.js → Tarjeta de producto individual.
 ┃ ┣ ItemList.js → Lista de productos.
 ┃ ┣ ItemCount.js → Contador de unidades para agregar al carrito.
 ┃ ┣ CartWidget.js → Ícono de carrito en la navegación.
 ┃ ┣ AdminLoader.js → (opcional) Cargar productos a Firestore rápidamente.
 ┣ containers/
 ┃ ┣ ItemListContainer.js → Contenedor principal para el listado de productos.
 ┃ ┣ ItemDetailContainer.js → Contenedor para mostrar detalles de producto (usado adaptado en tarjetas).
 ┃ ┣ Cart.js → Vista fija del carrito de compras.
 ┃ ┣ CheckoutForm.js → Formulario de finalización de compra (opcional según implementación).
 ┣ context/
 ┃ ┣ CartContext.js → Manejo global del estado del carrito de compras.
 ┣ firebase/
 ┃ ┣ config.js → Configuración de Firebase y conexión a Firestore.
 ┣ routes/
 ┃ ┣ NotFound.js → (opcional) Página para rutas inválidas.
 ┣ styles/
 ┃ ┣ styles.css → Estilos globales de la aplicación.
 ┣ App.js → Enrutamiento principal, contenedor de navegación, carrito y rutas.
 ┣ index.js → Archivo de entrada de React.


Detalle de componentes principales
NavBar.js
Componente de navegación principal que permite acceder a las distintas categorías de productos y visualizar el acceso al carrito.
ItemListContainer.js
Contenedor que carga y renderiza productos desde Firestore, pudiendo filtrar por categoría si corresponde.
Item.js
Tarjeta de producto que muestra imagen, nombre, precio y permite ver más detalles. Integra el ItemCount para agregar cantidades.
ItemCount.js
Contador que permite seleccionar la cantidad de unidades para agregar al carrito, respetando stock mínimo y máximo.
Cart.js
Contenedor lateral fijo que muestra los productos agregados al carrito, con opción a eliminar, vaciar o finalizar la compra.
CartContext.js
Contexto global que maneja la lógica del carrito, agregados, eliminaciones, limpieza del carrito y cálculo de totales.
CheckoutForm.js (opcional)
Formulario de finalización de compra para capturar datos del comprador. En esta implementación básica, se genera automáticamente una orden demo.
AdminLoader.js (opcional)
Componente auxiliar para carga rápida de múltiples productos en Firestore en modo desarrollo.
Notas importantes

- Firestore crea la colección 'orders' automáticamente al confirmar una compra.
- La generación de toasts de confirmación mejora la experiencia del usuario en cada acción relevante (agregar al carrito, finalizar compra).
- Se utilizaron buenas prácticas de separación de lógica y presentación en todos los componentes.
- Se respeta el modelo SPA (Single Page Application) sin recargas de navegador.


Autor

Juan Ontivero
Juanontivero1999@gmail.com
https://proyecto-final-juan-ontivero.vercel.app