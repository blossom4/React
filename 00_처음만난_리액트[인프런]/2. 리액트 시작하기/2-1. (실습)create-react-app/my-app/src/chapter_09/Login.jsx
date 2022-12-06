import React, { useState } from "react";

function Login(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoginStatus = () => {
    setIsLoggedIn(isLoggedIn => !isLoggedIn)
  }

  return (
    <>
      <h3>현재상태: <span style={isLoggedIn ? {color:'RGBA(25,135,84)'} : {color:'RGBA(220,53,69)'}}>{isLoggedIn ? '로그인' : '로그아웃'}</span> </h3>
      <button onClick={handleLoginStatus}>{isLoggedIn ? '로그아웃' : '로그인'}</button>
    </>
  )
}

export default Login;