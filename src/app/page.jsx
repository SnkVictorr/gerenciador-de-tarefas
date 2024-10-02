"use client" // Coloco somente em páginas para usuários

import Task from "@/components/Task";
import { useState } from "react";

// Components deve iniciar com letra maiuscula
function Home() {

  const [tasks, setTasks] = useState([
    // tasks
    {
      id:1,
      title: "Estudar Programação",
      description: "Estudar Programação para se tornar um milhonário",
      isCompleted: false,
    },
    {
      id:2,
      title: "Estudar Programação",
      description: "Estudar Inglês para se tornar um milhonário",
      isCompleted: false,
    },
    {
      id:3,
      title: "Estudar Programação",
      description: "Estudar Matemática para se tornar um milhonário",
      isCompleted: false,
    }
  ])



  return (
    // div vazia
    <>
    {/* w-... e h-... mudam a largura e altura respectivamente. p define o padding */}
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
          {/* Usando o component e definindo o valor da propriedade*/}
        <Task props={"Olá mundo"}/>
      </div>

      </div>
    </>
  )
    
}

export default Home;