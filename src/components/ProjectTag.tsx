import React from 'react';

interface ProjectTagProps {
  name: string; // Define 'name' as a string
  onClick: (name: string) => void; // 'onClick' is a function that takes a string and returns void
  isSelected: boolean; // 'isSelected' is a boolean
}

const ProjectTag: React.FC<ProjectTagProps> = ({
  name,
  onClick,
  isSelected,
}) => {
  const buttonStyles = `rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${
    isSelected
      ? 'text-white border-primary-500'
      : 'text-[#ADB7BE] border-slate-600 hover:border-white'
  }`;

  return (
    <button className={buttonStyles} onClick={() => onClick(name)}>
      {name}
    </button>
  );
};

export default ProjectTag;
