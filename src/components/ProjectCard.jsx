function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <h2>{project.title}</h2>
            <h3>Tag:{project.category}</h3>
            <h6>By:{project.author}</h6>
            <p>{project.description}</p>
        </div>
    )
}

export default ProjectCard;