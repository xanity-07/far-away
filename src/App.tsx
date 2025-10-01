import { useState } from 'react';
import Form from './components/Form';
import Logo from './components/Logo';
import PackingList from './components/PackingList';
import Stats from './components/Stats';
import { initialItems } from './data/initialdata';
import type { Items } from './types';

function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItems = (item: Items) => {
    setItems((preItems) => [...preItems, item]);
  };

  return (
    <div className='app'>
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackingList items={items} setItems={setItems} />
      <Stats items={items} />
    </div>
  );
}

export default App;
