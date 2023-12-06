import React from 'react';
import { Outlet } from 'react-router-dom';

function LoginLayout() {
  return (
    <div>
      <header>로그인</header>
      <Outlet />
    </div>
  );
}

export default LoginLayout;
