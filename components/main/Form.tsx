"use client";

import { slideInFromLeft } from '@/utils/motion';
import { motion } from 'framer-motion';
import React, { useState, ChangeEvent, FormEvent } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email) {
      newErrors.email = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message) {
      newErrors.message = 'Please enter your message.';
    }

    setErrors(newErrors);

    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert('Message sent successfully');
          setFormData({ name: '', email: '', message: '' });
        } else {
          alert('Failed to send message');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to send message');
      }
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center py-10 relative z-50"
      id="contact"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        Contact Me
      </h1>
      <h5 className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'>
        Want to work together?
      </h5>
      <p className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'>Make your ideas come to life</p>
      <form className="w-full max-w-lg flex flex-col gap-6 px-10 pb-20" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="text-gray-200 mb-2" htmlFor="name">Name</label>
          <input
            className={`px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-[#0300145e] text-gray-200`}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name}</span>}
        </div>
        <div className="flex flex-col">
          <label className="text-gray-200 mb-2" htmlFor="email">Email</label>
          <input
            className={`px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-[#0300145e] text-gray-200`}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
        </div>
        <div className="flex flex-col">
          <label className="text-gray-200 mb-2" htmlFor="message">Message</label>
          <textarea
            className={`px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-[#0300145e] text-gray-200`}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message}</span>}
        </div>
        <button
          type="submit"
          className="px-10 py-2 mt-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] font-semibold hover:opacity-90 self-center"
        >
          Send It!
        </button>
      </form>
    </div>
  );
};

export default Form;
