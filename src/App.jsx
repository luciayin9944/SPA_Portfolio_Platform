import React, { useState } from 'react'
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';
import projectsData from './data/projectsData.json';
import './App.css'

function App() {
  const [projects, setProjects] = useState(projectsData);

  const onAddProject = (newProject) => {
    setProjects([newProject, ...projects]);
  };

  return (
    <>
      <h1>Project List</h1>
      <ProjectForm onAddProject={onAddProject} />
      <ProjectList projects={projects}/>
    </>
  );
}

export default App;
