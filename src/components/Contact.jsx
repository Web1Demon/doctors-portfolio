import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const EMAILJS_CONFIG = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  };

 const isGibberish = (value) => {
  const lowerValue = value.toLowerCase();

  // Too many repeated characters
  if (/([a-zA-Z])\1{3,}/.test(lowerValue)) return true;

  // Obvious keyboard smash patterns
  const junkPatterns = ['asdf', 'qwerty', 'zxcv', 'lkjh', 'hjkl', 'sdfgh', 'ghjkl'];
  if (junkPatterns.some(pattern => lowerValue.includes(pattern))) return true;

  // If it's long and has no vowels — probably junk
  if (value.length > 5 && !/[aeiou]/i.test(lowerValue)) return true;

  return false;
};

const validateField = (name, value) => {
  switch (name) {
    case 'name':
      if (!value.trim()) return 'Name is required';
      if (value.length < 2) return 'Name must be at least 2 characters';
      if (value.length > 50) return 'Name must be less than 50 characters';
      if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) return 'Name can only contain letters, spaces, hyphens, and apostrophes';
      if (isGibberish(value)) return 'Name seems invalid, please check your input';
      return '';
    case 'email':
      if (!value.trim()) return 'Email is required';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return 'Please enter a valid email address';
      if (value.length > 100) return 'Email must be less than 100 characters';
      return '';
    case 'message':
      if (!value.trim()) return 'Message is required';
      if (value.length < 10) return 'Message must be at least 10 characters';
      if (value.length > 1000) return 'Message must be less than 1000 characters';
      if (isGibberish(value)) return 'Your message seems a little odd, could you revise it?';
      return '';
    default:
      return '';
  }
};


  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    return newErrors;
  };

  const handleInputChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));

    if (submitStatus) setSubmitStatus(null);

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (name) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, formData[name]);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

const handleSubmit = async () => {
  const allTouched = Object.keys(formData).reduce((acc, key) => {
    acc[key] = true;
    return acc;
  }, {});
  setTouched(allTouched);

  const formErrors = validateForm();
  setErrors(formErrors);

  if (Object.keys(formErrors).length > 0) {
    setSubmitStatus('error');
    return;
  }

  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Dr. Jasmine'
    };

    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTouched({});
    setErrors({});
  } catch (error) {
    console.error('Failed to send email:', error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};


  const getInputBorderColor = (fieldName) => {
    if (!touched[fieldName]) return 'border-gray-500';
    if (errors[fieldName]) return 'border-red-500';
    return 'border-green-500';
  };

  const getDotColor = (fieldName) => {
    if (!touched[fieldName]) return 'bg-teal-400';
    if (errors[fieldName]) return 'bg-red-500';
    return 'bg-green-500';
  };

  return (
    <section className="p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl font-light tracking-wider mb-8 text-gray-700">Shoot Me a Message!</h2>

        <div className="space-y-6">
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              onBlur={() => handleBlur('name')}
              className={`w-full bg-transparent border-b py-3 px-0 text-gray-700 placeholder-gray-500 focus:border-teal-400 focus:outline-none transition-colors duration-300 ${getInputBorderColor('name')}`}
            />
            <div className="absolute right-0 top-3">
              <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${getDotColor('name')}`}></div>
            </div>
            {touched.name && errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              className={`w-full bg-transparent border-b py-3 px-0 text-gray-700 placeholder-gray-500 focus:border-teal-400 focus:outline-none transition-colors duration-300 ${getInputBorderColor('email')}`}
            />
            <div className="absolute right-0 top-3">
              <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${getDotColor('email')}`}></div>
            </div>
            {touched.email && errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              onBlur={() => handleBlur('message')}
              className={`w-full bg-transparent border-b py-3 px-0 text-gray-700 placeholder-gray-500 focus:border-teal-400 focus:outline-none resize-none transition-colors duration-300 ${getInputBorderColor('message')}`}
            />
            {touched.message && errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            <div className="text-gray-400 text-xs mt-1">{formData.message.length}/1000 characters</div>
          </div>

         

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded">✅ Message sent successfully!</div>
          )}
          {submitStatus === 'error' && (
            <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {Object.keys(errors).length > 0 ? 'Please fix the errors above before submitting.' : '❌ Failed to send message. Please try again later.'}
            </div>
          )}

          {/* Submit Button */}
          <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-2 py-4 px-8 tracking-wider font-light transition-all duration-300 cursor-pointer ${
                isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-amber-700 hover:bg-amber-600'
              } text-white`}
            >
            {isSubmitting && (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            )}
            {isSubmitting ? 'SHOOTING...' : 'SHOOT'}
          </button>


        </div>
      </div>
    </section>
  );
};
