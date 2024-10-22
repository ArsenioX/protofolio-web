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
        <li>Laraver</li>
        <li>TypeScript</li>
        <li>Phyton</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className='list-disc pl-4 text-gray-300'>
        <li>Sdn 05 Jakarta</li>
        <li>Smpn 282 Jakarta</li>
        <li>Smkn 21 Jakarta</li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className='list-disc pl-4 text-gray-300'>
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
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
        <Image
          src='/images/about-image.png'
          width={500}
          height={500}
          alt='About image'
          className='rounded-lg shadow-lg'
        />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-yellow-400 mb-4'>About Me</h2>
          <p className='text-base lg:text-lg text-gray-300'>
            Halo! Nama saya Ahmad Dhani, pelajar di SMKN 21 Jakarta jurusan
            Rekayasa Perangkat Lunak (RPL). Saya tertarik dalam dunia
            pengembangan perangkat lunak dan sedang mengembangkan keterampilan
            di berbagai teknologi seperti HTML, PHP, JavaScript, dan Laravel
            untuk membangun aplikasi web modern. Saya juga mulai mempelajari
            TypeScript dan Python, yang digunakan dalam pengembangan web hingga
            data science. Sebagai pemula, saya sangat bersemangat untuk terus
            belajar. Saya percaya bahwa menjadi developer membutuhkan dedikasi
            dan kerja keras, dan saya siap menghadapi setiap tantangan untuk
            terus berkembang.
          </p>
          <div className='flex flex-row justify-start mt-8 space-x-4'>
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}>
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}>
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}>
              Certifications
            </TabButton>
          </div>
          <div className='mt-8 p-4 bg-gray-800 rounded-lg shadow-md'>
            {activeTab ? activeTab.content : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
