function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <h2>{project.title}</h2>
            <h4>Tag:{project.category}</h4>
            <h6>By:{project.author}</h6>
            <p>{project.description}</p>
        </div>
    )
}

export default ProjectCard;