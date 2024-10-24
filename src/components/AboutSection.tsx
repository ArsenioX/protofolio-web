'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className='list-disc pl-4 text-gray-300'>
        <li>HTML</li>
        <li>PHP</li>
        <li>JavaScript</li>
        <li>Laravel</li>
        <li>TypeScript</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className='list-disc pl-4 text-gray-300'>
        <li>SDN 05 Jakarta</li>
        <li>SMPN 282 Jakarta</li>
        <li>SMKN 21 Jakarta</li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className='list-disc pl-4 text-gray-300'>
        <li>BootCamp Unisia certificate</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [, startTransition] = useTransition();
  const [tab, setTab] = useState('skills');

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const activeTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <section className='text-white' id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        {/* Gambar dengan efek hover zoom */}
        <div className='relative overflow-hidden rounded-lg shadow-lg'>
          <Image
            src='/images/about-image.png'
            width={500}
            height={500}
            alt='About image'
            className='transform transition-transform duration-500 hover:scale-110'
          />
        </div>

        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          {/* Heading dengan warna kuning cerah */}
          <h2 className='text-4xl font-bold text-yellow-400 mb-4'>About Me</h2>
          <p className='text-base lg:text-lg text-gray-300'>
            Hello! My name is Ahmad Dhani, a student at SMKN 21 Jakarta majoring
            in Software Engineering (RPL). I am passionate about software
            development and currently enhancing my skills in various
            technologies such as HTML, PHP, JavaScript, and Laravel to build
            modern web applications. I’ve also started learning TypeScript and
            Python, which are used in web development and data science. As a
            beginner, I am very excited to keep learning. I believe that
            becoming a developer requires dedication and hard work, and I am
            ready to face every challenge to grow and improve.
          </p>

          {/* Tab Navigation */}
          <div className='flex flex-row justify-start mt-8 space-x-4'>
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}>
                {tabData.title}
              </TabButton>
            ))}
          </div>

          {/* Content Section dengan border dan shadow halus */}
          <div className='mt-8 p-6 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-400'>
            {activeTab ? activeTab.content : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
