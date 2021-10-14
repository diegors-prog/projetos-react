import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateAccount from '../components/Account/Create-account/CreateAccount';
import LoginForm from '../components/Account/Login-form/LoginForm';
import LoginPasswordLost from '../components/Account/Login-password-lost/LoginPasswordLost';
import LoginPasswordReset from '../components/Account/Login-password-reset/LoginPasswordReset';

function Login() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create" element={<CreateAccount />} />
        <Route path="lost" element={<LoginPasswordLost />} />
        <Route path="reset" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
}

export default Login;
