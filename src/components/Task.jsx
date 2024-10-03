{/* Component lucide */}
import { ChevronRight } from "lucide-react";

// Component
// props = propriedades 
// props recebidas de <Task tasks={tarefas} onTaskClick={clicarTarefa}/>
function Task(props) {
    // console.log(props)
    return (
      <>
        <ul>
            {props.tasks.map((task) => (
                <li key={task.id}>
                  {/* Evento = Ação = Função */}
                  <button 
                    onClick={() => props.onTaskClick(task.id)}
                                              // text-left - align-itens    // rounded-md = border radius
                    className="bg-slate-400 text-left w-full text-white p-2 rounded-md">
                      {task.title}
                      {task.isCompleted ? "Complete" : "Incomplete"}
                    </button>
                                                                                  {/* Component lucide */}
                  <button className="bg-slate-400 p-2 rounded-md text-white"><ChevronRight/></button>
                </li>
            ))}
        </ul>
      </>
    )
      
  }
  
  export default Task; //Exportar component