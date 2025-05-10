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
    <div className="container">
      <div className='main-layout'>
        <div className="main-content">
          <h1>Project List</h1>
          <Filter onCategoryFilter={onCategoryFilter} />
        {/* <ProjectList projects={projects}/> */}
          <ProjectList projects={filteredProjects} />
        </div>
        {/* left side bar */}
        <div className="form-section">
          <ProjectForm onAddProject={onAddProject} />
        </div>
      </div>
    </div>
  );
}

export default App;
