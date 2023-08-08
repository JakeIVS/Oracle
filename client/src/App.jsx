import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import CharacterSheet from './components/CharacterSheet';
import Header from './components/Header';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import ErrorScreen from './components/ErrorScreen';
import UserDash from './components/UserDash';
import CharacterList from './components/CharacterList';
import NewCharacter from './components/NewCharacter';
import HomeScreen from './components/HomeScreen';
import SideBar from './components/SideBar';
import NewCampaign from './components/NewCampaign';
import CampaignList from './components/CampaignList';
import CampaignControlPanel from './components/CampaignControlPanel';

function App() {
  const [user, setUser] = useState(null);
  const [sideBar, setSideBar] = useState(false);

  useEffect(() => {
    fetch('/api/check_session')
      .then(r => {
        if (r.ok) {
          return r.json();
        }
      })
      .then(data => setUser(data));
  }, []);

  console.log(user);
  console.log(user?.id);
  return (
    <div>
      <Header
        user={user}
        setUser={setUser}
        sideBar={sideBar}
        setSideBar={setSideBar}
      />
      <SideBar user={user} setUser={setUser} sideBar={sideBar} />
      <div className="h-screen pt-16">
        <Routes>
          <Route
            path="/"
            element={
              !!user ? (
                <UserDash
                  id={user.id}
                  firstName={user.first_name}
                  lastName={user.last_name}
                />
              ) : (
                <HomeScreen />
              )
            }
          />
          <Route
            path="/login"
            element={<LoginForm user={user} setUser={setUser} />}
          />
          <Route
            path="/signup"
            element={<SignupForm user={user} setUser={setUser} />}
          />
          <Route
            path="/characters/new"
            element={!user ? <ErrorScreen /> : <NewCharacter id={user?.id} />}
          />
          <Route
            path="/characters"
            element={!user ? <ErrorScreen /> : <CharacterList user={user} />}
          />
          <Route
            path="/characters/:id"
            element={!user ? <ErrorScreen /> : <CharacterSheet />}
          />
          <Route
            path="/campaigns/new"
            element={!user ? <ErrorScreen /> : <NewCampaign />}
          />
          <Route
            path="/campaigns"
            element={!user ? <ErrorScreen /> : <CampaignList user={user} />}
          />
          <Route
            path="/campaigns/:id"
            element={!user ? <ErrorScreen /> : <CampaignControlPanel />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
