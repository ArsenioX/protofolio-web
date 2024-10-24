import React from 'react';

const Footer = () => {
  return (
    <footer className='footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
      <div className='container p-12 flex justify-between items-center'>
        {/* Path ke gambar di public/images */}
        <img src='/images/Ahmad.png' alt='Logo Ahmad' className='w-16 h-auto' />
        <p className='text-slate-600'>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
