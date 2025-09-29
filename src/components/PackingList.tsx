import type { Items } from '../types';

type Props = {
  items: Items[];
  setItems: React.Dispatch<React.SetStateAction<Items[]>>;
};

const PackingList = ({ items, setItems }: Props) => {
  const handleDelete = (id: number) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleCheckedItem = (id: number) => {
    const checkedItem = items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    console.log(id);
    setItems(checkedItem);
  };

  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            singleItem={item}
            handleDelete={handleDelete}
            handleCheckedItem={handleCheckedItem}
          />
        ))}
      </ul>
    </div>
  );
};
export default PackingList;

type ItemType = {
  singleItem: Items;
  handleDelete: (id: number) => void;
  handleCheckedItem: (id: number) => void;
};
const Item = ({ singleItem, handleDelete, handleCheckedItem }: ItemType) => {
  return (
    <li>
      <input
        type='checkbox'
        checked={singleItem.packed}
        onChange={() => handleCheckedItem(singleItem.id)}
      />
      <span style={singleItem.packed ? { textDecoration: 'line-through' } : {}}>
        {singleItem.quantity} {singleItem.description}
      </span>
      <button onClick={() => handleDelete(singleItem.id)}>❌</button>
    </li>
  );
};
