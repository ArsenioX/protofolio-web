import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Badminton',
      description: 'Description for project one.',
      imgUrl: '/images/hobi-badminton.png',
    },
    {
      title: 'Futsal',
      description: 'Description for project two.',
      imgUrl: '/images/hobi-futsal.png',
    },
    {
      title: 'MiniSoccer',
      description: 'Description for project three.',
      imgUrl: '/images/hobi-minisoccer.png',
    },
  ];

  return (
    <section className='py-20' id='Hobi'>
      <h2 className='text-3xl font-bold text-primary text-center mb-8'>
        My Hobi
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {projects.map((project, index) => (
          <div key={index} className='p-6 rounded-lg bg-white'>
            {/* Tambahkan gambar project dengan animasi hover */}
            <img
              src={project.imgUrl}
              alt={project.title}
              className='w-full h-52 object-cover mb-4 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105'
            />
            <h3 className='text-xl font-semibold mb-4'>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
