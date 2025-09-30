import { useState } from 'react';
import type { Items } from '../types';

type Props = {
  setItems: React.Dispatch<React.SetStateAction<Items[]>>;
};

const Form = ({ setItems }: Props) => {
  const [input, setInput] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newItem: Items = {
      id: Math.random() * 432,
      description: input,
      quantity: quantity,
      packed: false,
    };
    if (!input) return;
    setItems((preItems) => [...preItems, newItem]);
    setInput('');
    setQuantity(1);
  };

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your trip? </h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Add item...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
};
export default Form;
