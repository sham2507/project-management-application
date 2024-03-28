import ProjectSideBar from "./components/ProjectsSideBar/ProjectSideBar.jsx";
import NewProject from "./components/NewProject/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectsSelected/NoProjectSelected.jsx";
import SelectedProject from "./components/InsideProject/SelectedProject.jsx";
import Model from "./components/ErrorMessage/Model.jsx"
import {useState,useRef} from "react";

function App() {

  let [projectsState , setProjectsState] = useState({    
    selectedProjectId : undefined,
    projects: [],
    tasks: []
  });


  function handleAddTask(text){
    setProjectsState((prevState) => {
      let taskId = Math.random();
      let newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId
      };
      return{
        ...prevState,
        tasks: [newTask,...prevState.tasks]
      };
    });    
    
  }

  function handleDeleteTask(id){
    setProjectsState((prevState)=>{
      return{
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id
        ),
      };
    });        
  }  
  

  function handleSelectProject(id){
    setProjectsState((cur) => {
      return {
        ...cur,
        selectedProjectId: id,        
      }
    });
  }

  function handleStartAddProject(){    
    setProjectsState((cur) => {
      return {
        ...cur,
        selectedProjectId: null,        
      }
    });
  }

  function handleCancelAddProject(){
    setProjectsState((prevState)=>{
      return{
        ...prevState,
        selectedProjectId: undefined
      }
    });
  }

  function handleAddProject(project){
    setProjectsState((prevState) => {
      let projectData = {
        ...project,
        id: Math.random()
      };
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects : [...prevState.projects , projectData ]
      };
    });
  }

  function handleDelete(){
    setProjectsState((prevState)=>{
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) =>{
          project.id !== prevState.selectedProjectId;
        })
      };
    });
  }

  
  let selectedProject = projectsState.projects.find(project=> project.id === projectsState.selectedProjectId);
  let content = <SelectedProject 
          tasks = {projectsState.tasks} 
          onAddTask={handleAddTask} 
          onDeleteTask={handleDeleteTask} 
          onDelete={handleDelete} 
          project={selectedProject} 
          selectedProjectId = {projectsState.selectedProjectId}         
        />;

  if(projectsState.selectedProjectId === null){
    content = <NewProject onCancel = {handleCancelAddProject} onAdd={handleAddProject}/>
  }else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (          
      <main className="h-screen my-8 flex gap-8">             
        <ProjectSideBar onSelect={handleSelectProject} projects={projectsState.projects} onStartAddProject={handleStartAddProject} selectedProjectId={projectsState.selectedProjectId}/>              
        
        {content}            
      </main>
  );
}

export default App;