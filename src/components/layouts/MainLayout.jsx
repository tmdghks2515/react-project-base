import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/slices/user.slice';

function MainLayout() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <header>
        <span>홈</span>
        {user ? (
          <>
            <span>{user.username}</span>
            <button type='button' onClick={handleLogout}>
              로그아웃
            </button>
          </>
        ) : (
          <Link to='/login'>로그인</Link>
        )}
      </header>

      <Outlet />
    </>
  );
}

export default MainLayout;
