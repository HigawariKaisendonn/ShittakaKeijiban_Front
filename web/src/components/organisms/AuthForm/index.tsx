'use client';

import React, { useState } from 'react';
import './AuthForm.css';

export const AuthForm: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
      <div className="form-container sign-up-container">
        <form>
          <h1>Create Account</h1>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form>
          <h1>Sign in</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login</p>
            <button className="ghost" onClick={() => setIsSignUp(false)}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your details to start your journey with us</p>
            <button className="ghost" onClick={() => setIsSignUp(true)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};