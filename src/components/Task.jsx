{/* Component lucide */ }
import { Target, Trash } from "lucide-react";
// import Link from "next/link";
import { useRouter } from "next/navigation";

// Component
// props = propriedades 
// props recebidas de <Task tasks={tarefas} onTaskClick={clicarTarefa}/>
function Task(props) {
  // function Task({tasks, onTaskClick, onDeleteTaskClick}) {

  const router = useRouter();

  function onSeeDetailsClick(task) {
    // https://developer.mozilla.org/pt-BR/docs/Web/API/URLSearchParams
    const query = new URLSearchParams(task); // A interface URLSearchParams define métodos utilitários para trabalhar com os parâmetros de uma URL.
    query.set("titulo", task.title); // Define o valor associado a um determinado parâmetro de pesquisa para o valor fornecido. Se houver vários valores, os demais serão excluídos.
    query.set("descricao", task.description);

    router.push(`/TaskPage?${query.toString()}`) // navega para determinada pagina
  }

  // console.log(props)
  return (
    <>
      {/* space = margin */}
      <ul className="space-y-4 p-6 bg-slate-200 bg-opacity-40 rounded shadow">
        {props.tasks.map((task) => (
          // flex deixa os elementos um do lado do outro
          <li key={task.id} className="flex gap-2">
            {/* Evento = Ação = Função */}
            <button
              // onClick Recebe uma função
              onClick={() => props.onTaskClick(task.id)}
              // text-left - align-itens    // rounded-md = border radius
              className="bg-green-500 text-left w-full text-white p-2 rounded-md">
              {task.title}

            </button>
            {/* <Link href="/TaskPage"> */}
              <button className="bg-green-500 p-2 rounded-md text-white"
              onClick={()=>onSeeDetailsClick(task)}
              >
                {/* Component lucide */}
                <Target />
              </button>
            {/* </Link> */}
            <button onClick={() => props.onDeleteTaskClick(task.id)} className="bg-green-500 p-2 rounded-md text-white"><Trash /></button>
          </li>
        ))}
      </ul>
    </>
  )

}

export default Task; //Exportar component