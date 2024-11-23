import React, { useState } from 'react';

const CreateAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
  };

  const isPasswordValid = 
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password) &&
    /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-2">Create Your Account</h1>
      <p className="text-sm text-gray-600 mb-6">
        Don't worry, we won't spam you or sell your information.
      </p>
      
      <div className="mb-4 relative">
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={handleEmailChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {isEmailValid && (
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500">
            ✓
          </span>
        )}
      </div>
      
      <div className="mb-4">
        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="text-xs text-gray-600 mb-4">
        Password must be at least <span className={password.length >= 8 ? "text-green-500" : ""}>8 characters</span> and contain{' '}
        <span className={/\d/.test(password) ? "text-green-500" : ""}>1 number</span>,{' '}
        <span className={/[A-Z]/.test(password) ? "text-green-500" : ""}>1 uppercase letter</span>,{' '}
        <span className={/[a-z]/.test(password) ? "text-green-500" : ""}>1 lowercase letter</span> and{' '}
        <span className={/[!@#$%^&*(),.?":{}|<>]/.test(password) ? "text-green-500" : ""}>1 symbol</span>.
      </div>
      
      <button
        className={`w-full p-2 rounded text-white ${
          isEmailValid && isPasswordValid
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-gray-300 cursor-not-allowed"
        }`}
        disabled={!isEmailValid || !isPasswordValid}
      >
        Create Account
      </button>
    </div>
  );
};

export default CreateAccount;