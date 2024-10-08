{/* Component lucide */}
import { ChevronRight, Trash } from "lucide-react";

// Component
// props = propriedades 
// props recebidas de <Task tasks={tarefas} onTaskClick={clicarTarefa}/>
function Task(props) {
// function Task({tasks, onTaskClick, onDeleteTaskClick}) {

    // console.log(props)
    return (
      <>
        {/* space = margin */}
        <ul className="space-y-4 p-6 bg-slate-200 rounded shadow">
            {props.tasks.map((task) => (
              // flex deixa os elementos um do lado do outro
                <li key={task.id} className="flex gap-2">
                  {/* Evento = Ação = Função */}
                  <button 
                  // onClick Recebe uma função
                    onClick={() => props.onTaskClick(task.id)}
                                              // text-left - align-itens    // rounded-md = border radius
                    className="bg-slate-400 text-left w-full text-white p-2 rounded-md">
                      {task.title}
                      {task.isCompleted ? " - Complete" : " - Incomplete"}
                    </button>
                                                                                  {/* Component lucide */}
                  <button className="bg-slate-400 p-2 rounded-md text-white"><ChevronRight/></button>
                  <button onClick={() => props.onDeleteTaskClick(task.id)} className="bg-slate-400 p-2 rounded-md text-white"><Trash/></button>
                </li>
            ))}
        </ul>
      </>
    )
      
  }
  
  export default Task; //Exportar component