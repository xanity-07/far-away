import { useState } from 'react';
import type { Items, SortingValues } from '../types';

type Props = {
  items: Items[];
  setItems: React.Dispatch<React.SetStateAction<Items[]>>;
};

const PackingList = ({ items, setItems }: Props) => {
  const [sortBy, setSortBy] = useState<SortingValues>('input');
  let sortedItems: Items[] = items;

  if (sortBy === 'input') sortedItems = items;

  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  const handleDelete = (id: number) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleCheckedItem = (id: number) => {
    const checkedItem = items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setItems(checkedItem);
  };

  const handleClearList = () => {
    const canDelete = confirm('Do you want to clear all items');
    if (canDelete) {
      setItems([]);
    }
  };
  const sortingOptions: SortingValues[] = ['input', 'description', 'packed'];

  const sortingLabels: Record<SortingValues, string> = {
    input: 'Sort by input order',
    description: 'Sort by description',
    packed: 'Sort by packed status',
  };
  return (
    <div className='list'>
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            singleItem={item}
            handleDelete={handleDelete}
            handleCheckedItem={handleCheckedItem}
          />
        ))}
      </ul>
      <div className='actions'>
        <select
          value={sortBy}
          onChange={(e) => {
            const value = e.target.value;
            if (sortingOptions.includes(value as SortingValues)) {
              setSortBy(value as SortingValues);
            }
          }}
        >
          {sortingOptions.map((sortingValue) => (
            <option value={sortingValue}>{sortingLabels[sortingValue]}</option>
          ))}
        </select>
        <button onClick={handleClearList}>Clear Items</button>
      </div>
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
