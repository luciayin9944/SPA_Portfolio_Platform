import React, { useState } from 'react'
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';
import Filter from './components/Filter';
import projectsData from './data/projectsData.json';
import './App.css'

function App() {
  const [projects, setProjects] = useState(projectsData);
  const [filter, setFilter] = useState('All');

  const onAddProject = (newProject) => {
    setProjects([newProject, ...projects]);
  };

  const onCategoryFilter = (e) => {
    setFilter(e.target.value)
  }

  //ternary expression
  const filteredProjects = filter==='All' 
          ? projects 
          : projects.filter((project)=> project.category===filter);


  return (
    <>
      <h1>Project List</h1>
      <ProjectForm onAddProject={onAddProject} />
      <Filter onCategoryFilter={onCategoryFilter} />
      {/* <ProjectList projects={projects}/> */}
      <ProjectList projects={filteredProjects} />
    </>
  );
}

export default App;
