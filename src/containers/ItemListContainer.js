import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import ItemList from '../components/ItemList';

function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const productsRef = collection(db, 'products');

    const q = categoryId
      ? query(productsRef, where('category', '==', categoryId))
      : productsRef;

    getDocs(q)
      .then((resp) => {
        const productosFirebase = resp.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setItems(productosFirebase);
      })
      .finally(() => setLoading(false));

  }, [categoryId]);

  return (
    <div>
      <h2>{categoryId ? `Categoría: ${categoryId}` : 'Todos los Productos'}</h2>
      {loading
  ? <div className="loader">🌀 Cargando productos...</div>
  : <ItemList items={items} />}    </div>
  );
}

export default ItemListContainer;
