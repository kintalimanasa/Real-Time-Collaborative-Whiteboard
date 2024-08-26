// App.js
import React, { useState, useEffect } from 'react';
import Whiteboard from './Whiteboard';
import Toolbar from './Toolbar';
import AuthService from './services/auth.service';

function App() {
  const [sessionId, setSessionId] = useState('');
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authService = new AuthService();
    authService.login('username', 'password')
      .then((response) => {
        setIsLoggedIn(true);
        setSessionId(response.sessionId);
        setUsername(response.username);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <Whiteboard sessionId={sessionId} username={username} />
          <Toolbar sessionId={sessionId} username={username} />
        </div>
      ) : (
        <div>
          <h1>Please log in to use the whiteboard</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;