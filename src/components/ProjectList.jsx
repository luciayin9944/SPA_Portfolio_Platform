import ProjectCard from './ProjectCard';

function ProjectList({ projects }) {
    return (
        <>
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />               
            ))}
        </>
    );
}

export default ProjectList;