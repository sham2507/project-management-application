import No_Projects from "../../assets/no-projects.png"; 
import Button from "../Templates/Button.jsx";

export default function NoProjectSelected({onStartAddProject}){
    return(
        <div className="mt-24 text-center w-2/3">
            <img className="w-16 h-16 object-contain mx-auto" alt="An empty task list" src={No_Projects}/>
            <h2 className="text-xl font-bold text-stone-500 my-4">No Projects Selected</h2>
            <p className="text-stone-400 mb-4">Select a project or create new project</p>
            <p className="mt-8">
                <Button onClick={onStartAddProject}>Create New Project</Button>
            </p>
        </div>
    );
}