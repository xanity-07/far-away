import { useState } from 'react';
import Form from './components/Form';
import Logo from './components/Logo';
import PackingList from './components/PackingList';
import Stats from './components/Stats';
import { initialItems } from './data/initialdata';

function App() {
  const [items, setItems] = useState(initialItems);
  return (
    <div className='app'>
      <Logo />
      <Form setItems={setItems} />
      <PackingList items={items} setItems={setItems} />
      <Stats />
    </div>
  );
}

export default App;
