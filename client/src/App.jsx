import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import CharacterSheet from './components/CharacterSheet';
import Header from './components/Header';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import ErrorScreen from './components/ErrorScreen';
import UserDash from './components/UserDash';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <Header />
      <div className="h-screen pt-16">
        <Routes>
          <Route path="/" element={<UserDash user={user} />} />
          <Route
            path="/login"
            element={<LoginForm user={user} setUser={setUser} />}
          />
          <Route
            path="/signup"
            element={<SignupForm user={user} setUser={setUser} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
