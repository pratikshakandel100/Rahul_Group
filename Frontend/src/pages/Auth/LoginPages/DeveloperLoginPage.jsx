import React, { useState } from 'react';
import { Code, Lock, Mail, Eye, EyeOff } from 'lucide-react'; // Added Eye and EyeOff icons
import LoginNavbar from '../../../Components/LoginComponents/LoginNavbar';
import { useNavigate } from 'react-router-dom';


const DeveloperLoginPage = () => {
          const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle Developer login logic here
    console.log('Developer login attempt:', formData);
    // For demonstration purposes:
    if (formData.email === 'dev@example.com' && formData.password === 'devpass') {
      alert('Developer Login successful! (This is a demo)');
      // In a real app, you would redirect the developer to their dashboard/console
    } else {
      alert('Invalid developer credentials.');
    }
  };

  return (
    <> <LoginNavbar/>
    <div className="min-h-screen pt-12 bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Code className="h-12 w-12 text-orange-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Developer Login</h1>
          <p className="text-gray-600">Welcome, Developer! Please sign in to your account</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Developer Email address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
              required
            />
          </div>
          
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type={showPassword ? 'text' : 'password'} // Toggle type based on state
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
              required
            />
            {/* Password visibility toggle button */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me-developer"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me-developer" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a onClick={() => navigate('/forgotpassword')} className="text-orange-500 hover:text-orange-600 font-medium">
                Forgot your password?
              </a>
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Sign In
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Switch to{' '}
            <a onClick={() => navigate('/login')} className="text-orange-500 hover:text-orange-600 font-semibold">
              User Login
            </a>
          </p>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            Other login options:
          </p>
          <div className="flex justify-center space-x-4 mt-2">
           
            <button onClick={() => navigate('/adminlogin')} className="text-green-600 hover:text-green-700 text-sm font-medium">
              Admin Login
            </button>
          </div>
        </div>
      </div>
    </div> 
    </>
  );
};

export default DeveloperLoginPage;