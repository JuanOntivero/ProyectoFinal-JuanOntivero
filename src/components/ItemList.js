import Item from './Item';

function ItemList({ items }) {
  return (
    <div className="item-list">
      {items.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemList;
