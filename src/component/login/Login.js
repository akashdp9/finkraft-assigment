import React, { useState } from 'react';
import SpaceMissionsGrid from '../spacemissiongrid/SpaceMissionsGrid';

import { LoginPage, LoginSection, Divider, LoginButton, Input, BrandSection } from './Login.styled';
import Header from '../header/Header';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <Header name={username} />
          <SpaceMissionsGrid />
        </>
      ) : (
        <LoginPage>
          <BrandSection>
            <h1>SpaceVue</h1>
          </BrandSection>
          <Divider>

          </Divider>
          <LoginSection>
            <h2>Login</h2>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <LoginButton onClick={handleLogin}>Login</LoginButton>
          </LoginSection>
        </LoginPage>
      )}
    </div>
  );
}

export default Login;
