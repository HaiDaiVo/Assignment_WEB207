import React, { useState } from "react";

function Test() {
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);

  const handleToggleForm = () => {
    setLoginFormVisible(!isLoginFormVisible);
  };

  return (
    <div>
      <h1>{isLoginFormVisible ? "Đăng Nhập" : "Đăng Ký"}</h1>
      {isLoginFormVisible ? <LoginForm onToggleForm={handleToggleForm} /> : <RegisterForm onToggleForm={handleToggleForm} />}
    </div>
  );
}

function LoginForm({ onToggleForm }) {
  return (
    <div>
      <h2>Form Đăng Nhập</h2>
      {/* Các trường nhập liệu cho form đăng nhập */}
      <button onClick={onToggleForm}>Đăng Ký</button>
    </div>
  );
}

function RegisterForm({ onToggleForm }) {
  return (
    <div>
      <h2>Form Đăng Ký</h2>
      {/* Các trường nhập liệu cho form đăng ký */}
      <button onClick={onToggleForm}>Đăng Nhập</button>
    </div>
  );
}



export default Test;