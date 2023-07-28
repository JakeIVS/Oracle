import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import CharacterSheet from './components/CharacterSheet';
import Header from './components/Header';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import ErrorScreen from './components/ErrorScreen';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <div className="h-screen pt-16">
        <Routes>
          <Route path="/" element={<ErrorScreen />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
