import { useState } from 'react';
import './index.css';
import CharacterSheet from './components/CharacterSheet';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CharacterSheet />
    </>
  );
}

export default App;
