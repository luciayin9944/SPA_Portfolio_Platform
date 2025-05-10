function ProjectCard({ project }) {
    return (
        <>
            <h2>{project.title}</h2>
            <h4>Tag:{project.category}</h4>
            <h5>Author:{project.author}</h5>
            <p>{project.description}</p>
        
        </>
    )
}

export default ProjectCard;