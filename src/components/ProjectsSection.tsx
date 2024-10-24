import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Badminton',
      description: 'I really enjoy playing badminton.',
      imgUrl: '/images/hobi-badminton.png',
    },
    {
      title: 'Futsal',
      description: 'I often play futsal and extracurricular at school.',
      imgUrl: '/images/hobi-futsal.png',
    },
    {
      title: 'MiniSoccer',
      description: 'I play mini soccer every week because it s my hobby.',
      imgUrl: '/images/hobi-minisoccer.png',
    },
  ];

  return (
    <section className='py-20 bg-gray-900' id='Hobi'>
      <h2 className='text-4xl font-extrabold text-white text-center mb-12'>
        My Hobi
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='p-6 rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105'>
            {/* Gambar project dengan animasi hover */}
            <img
              src={project.imgUrl}
              alt={project.title}
              className='w-full h-52 object-cover mb-4 rounded-lg transition-transform duration-300 ease-in-out hover:scale-110'
            />
            <h3 className='text-2xl font-semibold text-gray-800 mb-2'>
              {project.title}
            </h3>
            <p className='text-gray-600'>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
