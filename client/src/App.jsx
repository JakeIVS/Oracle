import { useState } from 'react';
import './index.css';
import CharacterSheet from './components/CharacterSheet';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <div className="h-screen pt-16">
        <CharacterSheet />
      </div>
    </div>
  );
}

export default App;
