import { useState } from 'react';
import type { Items } from '../types';

type Props = {
  onAddItem: (item: Items) => void;
};

const Form = ({ onAddItem }: Props) => {
  const [input, setInput] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [isInvalidInput, setIsInvalidInput] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newItem: Items = {
      id: Math.random() * 432,
      description: input,
      quantity: quantity,
      packed: false,
    };

    if (!input) {
      setIsInvalidInput(true);
      return;
    }
    if (/^\d+$/.test(input)) {
      setIsInvalidInput(true);
      setInput('');
      return;
    }
    onAddItem(newItem);
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
        style={isInvalidInput ? { border: '2px solid red' } : {}}
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
