import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/slices/user.slice';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login({ username }));
    navigate('/');
  };

  return (
    <div>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='button' onClick={handleLogin}>
        로그인
      </button>
    </div>
  );
}

export default LoginPage;
