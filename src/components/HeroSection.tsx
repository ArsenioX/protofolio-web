'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className='flag lg:py-24 py-12 bg-dark'>
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-12 gap-8 justify-center'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className='col-span-8 place-self-center text-center sm:text-left sm:col-span-7'>
          <h1 className='text-white mb-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
              Hello, I&apos;m{' '}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Dhani ',
                1500,
                'Student Smkn 21',
                1500,
                'Web Devoloper',
                1500,
                'From Tegal',
                1500,
              ]}
              wrapper='span'
              speed={60}
              repeat={Infinity}
            />
          </h1>
          <p className='text-gray-300 text-base sm:text-lg mb-8 lg:text-xl max-w-lg'>
            I have experience in crafting high-quality digital solutions and
            creating beautiful user experiences. Let&apos;s create something
            amazing!
          </p>
          <div className='flex flex-col sm:flex-row items-center gap-4'>
            {/* Tombol interaktif jika perlu ditambahkan */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className='col-span-4 place-self-center sm:col-span-5 mt-8 sm:mt-0'>
          <div className='rounded-full bg-gray-800 w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out justify-center'>
            <Image
              src={'/images/dhan.png'} // Pastikan path file gambar sesuai
              alt='Dhani - Hero Image'
              className='absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover'
              width={300}
              height={300}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
