import Button from "../Templates/Button.jsx";
import {useState,useRef} from "react";
import Model from "../ErrorMessage/Model.jsx";

function ProjectSideBar({onSelect,projects,onStartAddProject,selectedProjectId}){

    let dialog = useRef();

    function handleInfoClick(){
        dialog.current.open();
    }        
    return(        
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">            
            <Model ref={dialog} buttonCaption={"Okay"}>Hello folks, this is a project manangement app that can be used to monitor your works, but unfortunately this does not have any node js works and so you cannot able to save any data, once refreshed it will be lost. Node js works will be released soon.</Model>
            <h2 className="font-bold mb-8 md:text-xl text-stone-200">YOUR PROJECTS <span className="font-normal cursor-pointer text-red-500" onMouseOver={handleInfoClick}>&#9432;</span></h2>
            
            <div>
                <Button onClick = {onStartAddProject} >+ Add Project</Button>
            </div>
            <ul className="mt-7">
                {projects.map((item) => {

                    let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
                    if(item.id === selectedProjectId){
                        cssClasses += " bg-stone-800 test-stone-200";
                    }
                    else{
                        cssClasses += " text-stone-400 ";
                    }
                    return(
                        <li key={item.id}>
                            <button className={cssClasses} onClick ={() => {
                                onSelect(item.id)
                            }} >{item.title}</button>
                        </li>
                    );                    
                })}                                
            </ul>
        </aside>
        
    );
}


export default ProjectSideBar;