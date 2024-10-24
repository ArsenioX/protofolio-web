'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      email: event.currentTarget.email.value,
      subject: event.currentTarget.subject.value,
      message: event.currentTarget.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/send';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSONdata,
      });
      const resData = await response.json();

      if (response.status === 200) {
        console.log('Message sent.');
        setEmailSubmitted(true);
      } else {
        console.error('Error sending message:', resData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section
      id='contact'
      className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative bg-gradient-to-r from-indigo-600 to-purple-500 rounded-lg shadow-lg p-10'>
      <div className='absolute h-full w-full inset-0 opacity-10'>
        {/* Wave effect background */}
        <svg
          viewBox='0 0 500 150'
          preserveAspectRatio='none'
          className='w-full h-full'>
          <path
            d='M0.00,49.98 C150.00,150.00 349.83,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z'
            fill='#FFF'
          />
        </svg>
      </div>

      <div className='z-10'>
        <h5 className='text-2xl font-bold text-white my-2 animate-bounce'>
          Let&apos;s Connect
        </h5>
        <p className='text-[#EDEDED] mb-4 max-w-md'>
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className='socials flex flex-row gap-4 my-4'>
          <Link href='https://github.com/ArsenioX'>
            <FaGithub
              className='text-white hover:scale-125 transition-transform duration-300'
              size={30}
            />
          </Link>
          <Link href='https://Instagram.com/nio_curry'>
            <FaInstagram
              className='text-white hover:scale-125 transition-transform duration-300'
              size={30}
            />
          </Link>
        </div>
      </div>

      <div className='z-10'>
        {emailSubmitted ? (
          <p className='text-green-500 text-lg mt-2'>
            Email sent successfully!
          </p>
        ) : (
          <form className='flex flex-col' onSubmit={handleSubmit}>
            <div className='mb-6'>
              <label
                htmlFor='email'
                className='text-white block mb-2 text-sm font-medium'>
                Your email
              </label>
              <input
                name='email'
                type='email'
                id='email'
                required
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3 transition focus:ring-2 focus:ring-indigo-600 focus:outline-none'
                placeholder='.....@google.com'
              />
            </div>

            <div className='mb-6'>
              <label
                htmlFor='subject'
                className='text-white block text-sm mb-2 font-medium'>
                Subject
              </label>
              <input
                name='subject'
                type='text'
                id='subject'
                required
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3 transition focus:ring-2 focus:ring-indigo-600 focus:outline-none'
                placeholder='Just saying hi'
              />
            </div>

            <div className='mb-6'>
              <label
                htmlFor='message'
                className='text-white block text-sm mb-2 font-medium'>
                Message
              </label>
              <textarea
                name='message'
                id='message'
                required
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3 h-28 transition focus:ring-2 focus:ring-indigo-600 focus:outline-none'
                placeholder="Let's talk about..."
              />
            </div>

            <button
              type='submit'
              className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white font-semibold py-2.5 px-5 rounded-lg shadow-md transition transform hover:scale-105'>
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
