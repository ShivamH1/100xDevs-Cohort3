import React, { useState, useEffect } from 'react';

const EnhancedSignUpForm = () => {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('Weak');
  const [showPassword, setShowPassword] = useState(false);
  const [showRequirements, setShowRequirements] = useState(false);

  const requirements = [
    { text: 'Upper & lower case letters', regex: /(?=.*[a-z])(?=.*[A-Z])/ },
    { text: 'A symbol (#$&)', regex: /[!@#$%^&*(),.?":{}|<>]/ },
    { text: 'A longer password', regex: /.{12,}/ },
    { text: 'A number', regex: /\d/ }
  ];

  useEffect(() => {
    if (password) {
      setShowRequirements(true);
      let strength = 'Weak';
      let score = requirements.filter(req => req.regex.test(password)).length;
      if (score === 2) strength = 'Fair';
      else if (score === 3) strength = 'Good';
      else if (score === 4) strength = 'Strong';
      setPasswordStrength(strength);
    } else {
      setShowRequirements(false);
    }
  }, [password]);

  const getStrengthColor = () => {
    switch (passwordStrength) {
      case 'Weak': return '#ff4d4f';
      case 'Fair': return '#faad14';
      case 'Good': return '#1890ff';
      case 'Strong': return '#52c41a';
      default: return '#d9d9d9';
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-96 p-8 bg-white rounded-lg shadow-md relative">
        <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            id="email"
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email-confirm" className="block text-sm font-medium text-gray-700 mb-1">Type your email again</label>
          <input
            id="email-confirm"
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Confirm your email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
          />
        </div>
        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                  <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                </svg>
              )}
            </button>
          </div>
          <div 
            className="h-1 mt-2 rounded-full transition-all duration-300 ease-in-out" 
            style={{
              width: `${(requirements.filter(req => req.regex.test(password)).length / requirements.length) * 100}%`,
              backgroundColor: getStrengthColor()
            }}
          ></div>
        </div>
        <div className="mb-6">
          <label htmlFor="password-confirm" className="block text-sm font-medium text-gray-700 mb-1">Type your password again</label>
          <input
            id="password-confirm"
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button 
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Sign Up
        </button>

        {showRequirements && (
          <div className="absolute left-[-280px] top-1/2 transform -translate-y-1/2 w-64 p-4 bg-white rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2" style={{ color: getStrengthColor(), borderBottom: `2px solid ${getStrengthColor()}` }}>
              {passwordStrength} Password
            </h3>
            <p className="text-sm mb-2">It's better to have:</p>
            <ul className="list-none pl-0 space-y-1">
              {requirements.map((req, index) => (
                <li key={index} className={`flex items-center text-sm ${req.regex.test(password) ? 'line-through text-gray-400' : ''}`}>
                  <span className={`mr-2 ${req.regex.test(password) ? 'text-green-500' : 'text-gray-300'}`}>
                    {req.regex.test(password) ? '✓' : '•'}
                  </span>
                  {req.text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedSignUpForm;