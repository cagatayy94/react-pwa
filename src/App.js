import './App.css';
import Loader from './layouts/Loader';
import Authenticated from './layouts/Authenticated';
import Unauthenticated from './layouts/Unauthenticated';
import React, {useState} from 'react'
import { useHistory } from 'react-router'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history = useHistory()

  function handleSignOut(){
    setIsAuthenticated(false)
    history.push('/')
  }

  function handleSignIn(){
    setIsAuthenticated(true)
  }

  return (
    <div className="App">
      <Loader/>
      {isAuthenticated?<Authenticated signOut={handleSignOut} bisey="1"/>:<Unauthenticated signIn={handleSignIn}/>}
    </div>
  );
}

export default App;
