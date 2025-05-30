import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  link,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden m-4 transform transition duration-500 hover:scale-105 flex flex-col h-full">
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-indigo-800 mb-4">{title}</h3>
        <p className="text-gray-700 flex-grow">{description}</p>
        <div className="mt-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={link}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
