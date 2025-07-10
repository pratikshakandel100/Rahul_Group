import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react'; // Using Mail and Lock for visual context
import { useNavigate } from 'react-router-dom';
import LoginNavbar from '../../Components/LoginComponents/LoginNavbar';


const ForgotPasswordPage = () => {
      const navigate = useNavigate();
  
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic here
    // In a real application, you would send a reset password link to the provided email
    console.log('Forgot password request for:', email);
    alert(`Password reset link sent to ${email} (This is a demo). Please check your inbox.`);
    // Optionally, clear the email field or redirect
    setEmail(''); 
  };

  return (

    <>
    <LoginNavbar/>

    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            {/* Icon for Forgot Password */}
            <Lock className="h-12 w-12 text-orange-500" /> 
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Forgot Password?</h1>
          <p className="text-gray-600">
            Enter your email address below and we'll send you a link to reset your password.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Your Email address"
              value={email}
              onChange={handleEmailChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Send Reset Link
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Remember your password?{' '}
            <a onClick={() => navigate('/login')} className="text-orange-500 hover:text-orange-600 font-semibold">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div> </>
  );
};

export default ForgotPasswordPage;