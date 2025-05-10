import { useState } from "react";
import { v4 as uuid } from "uuid";

const ProjectForm = ({ onAddProject }) => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('Full Stack');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProject = {id:uuid(), title, author, category, description };
        onAddProject(newProject);
        //reset
        setTitle('');
        setDescription('');
        setAuthor('');
        setCategory('Full Stack');
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Add New Project</button>
            <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            <div>
                {/* <lable>Tag:</lable> */}
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Full Stack">Full Stack</option>
                </select>
            </div>
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} rows={10} />
        </form>
    );
}

export default ProjectForm;
