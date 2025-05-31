import ProjectCard from "../../components/ProjectCard";

function projects() {
  const projects = [
    {
      title: "Responsive Landing Page",
      description: "A simple responsive landing page",
      technologies: ["HTML", "CSS"],
      link: "https://github.com/ryadbahi/Project-4-responsive-landig-page",
    },
    {
      title: "Movie app",
      description: "Simple movie app that fetches data from an API.",
      technologies: ["React.JS"],
      link: "https://github.com/ryadbahi/hooks-checkpoint",
    },
    {
      title: "User List App",
      description: "A simple user list app that fetches data from an API.",
      technologies: ["React.JS"],
      link: "https://github.com/ryadbahi/checkpoint-api-user-list",
    },
    {
      title: "Portfolio Website",
      description: "Lets not forget this one, my portfolio website.",
      technologies: ["Next.JS", "Tailwind CSS"],
      link: "https://github.com/ryadbahi/nextjs-checkpoint-portfolio",
    },
  ];

  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Projects</h1>

        <div className="flex flex-wrap justify-center -mx-3">
          {projects.map((project, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default projects;
