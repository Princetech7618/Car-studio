// components/ForgotPassword.jsx
'use client';

import { useState } from 'react';
import { FaLock, FaEnvelope } from 'react-icons/fa';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simple email validation
    if (!email || !email.includes('@')) {
      showMessage('Please enter a valid email address.', 'error');
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    showMessage('Sending reset link...', 'success');

    setTimeout(() => {
      showMessage(`Password reset link has been sent to ${email}`, 'success');
      setEmail('');
      setIsSubmitting(false);
    }, 1500);
  };

  const showMessage = (text, type) => {
    setMessage(text);
    setMessageType(type);
    
    // Hide message after 5 seconds
    setTimeout(() => {
      setMessage('');
      setMessageType('');
    }, 5000);
  };

  return (
    <div className="min-h-screen  text-white flex justify-center items-center p-5 mt-10">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden animate-fade-in">
        <div className="bg-blue-300 p-6 sm:p-8 text-center relative overflow-hidden">
          <div className="text-blue-400 text-5xl sm:text-6xl mb-4 animate-pulse">
            <FaLock />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 relative z-10">
            Reset Your Password
          </h1>
          <p className="text-white text-sm sm:text-base relative z-10">
            Enter your email to receive a password reset link
          </p>
        </div>
        
        <div className="p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block font-medium text-sm text-black">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-blue-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-10 pr-4 py-3 bg-whiten text-black border-0 rounded-lg   focus:bg-white/15 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300"
                  required
                />
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-semibold uppercase tracking-wider hover:bg-blue-600 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#1a2a6c] transition-all duration-300 disabled:opacity-50 disabled:transform-none"
            >
              {isSubmitting ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>
          
          {message && (
            <div 
              className={`mt-5 p-4 rounded-lg text-center animate-slide-in ${
                messageType === 'success' 
                  ? 'bg-green-500/20 border border-green-500' 
                  : 'bg-red-500/20 border border-red-500'
              }`}
            >
              {message}
            </div>
          )}
        </div>
        
        <div className="border-t border-white/10 p-5 text-center">
          <p className="text-black text-sm">
            Remember your password?{' '}
            <a href="/Signup" className="text-blue-400 hover:text-blue-300 underline transition-colors">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}