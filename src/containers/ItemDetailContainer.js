import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import ItemDetail from '../components/ItemDetail';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const docRef = doc(db, 'products', itemId);

    getDoc(docRef)
      .then((resp) => {
        setItem({ id: resp.id, ...resp.data() });
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  return (
    <div>
      {loading ? <p>Cargando detalle...</p> : item ? <ItemDetail item={item} /> : <p>Producto no encontrado</p>}
    </div>
  );
}

export default ItemDetailContainer;
