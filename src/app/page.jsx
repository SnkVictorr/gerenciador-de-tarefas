"use client" // Coloco somente em páginas para usuários

import AddTask from "@/components/AddTask";
import Task from "@/components/Task";
import { useState, useEffect } from "react";
import Image from "next/image";
import { v4 } from "uuid";
import tiroAlvo from "@/app/assets/images/tiroalvo.jpg"

// Components deve iniciar com letra maiuscula
function Home() {
  

  // tasks armazena o estado atual do useState e  setTasks é uma função que atualiza o valor
  const [tarefas, setTasks] = useState([]); // parse converte JSON para um objeto. localStorage.getItem() - retorna o valor associado a chave dentro do parenteses

  useEffect(() => {
    // verifica o tipo. Verifica se está do lado do cliente
    if(typeof window !== "undefined") { //Se janela não for undefined
      const storedTasks = JSON.parse(localStorage.getItem("tarefas"));
      setTasks(storedTasks)

    }
  },[])



  // Salvar tarefas
  //  O useEffect é um hook que executa a função passada sempre que a variável tarefas muda.
  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas)); // localStorage.setItem() -Adiciona o valor no armazenamento local
  }, [tarefas]);

  function clicarTarefa(taskId) {
    const newTasks = tarefas.map((task) => {
      // If resumido (a função terminará se a função retornar)
      if (task.id === taskId) {
        //IF Preciso ATUALIZAR ESSA TAREFA 
        return { ...task, isCompleted: !task.isCompleted }
      };
      //Não precisa atualizar essa tarefa
      return task; // Else
    })
    setTasks(newTasks);
  }

  function deletarTarefaPorClick(taskId) {
    const newTasks = tarefas.filter(task => task.id !== taskId);
    //function task() {task.id}
    setTasks(newTasks);
  }

  function adicionarTarefa(titulo, descricao) {
    const newTask = {
      // id: tarefas.length + 1,
      id: v4(), // UUID Gera aleatório, dificil de duplicar
      title: titulo,
      description: descricao,
      isCompleted: false,
    }

    // setTasks readiciona as tarefas e a newTask
    setTasks([...tarefas, newTask])

  }

  return (
    // div vazia
    <>
      {/* w-... e h-... mudam a largura e altura respectivamente. p define o padding */}
      <div className="w-screen h-screen flex justify-center items-center p-6 relative">
        {/* Deixa a imagem de fundo */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src={tiroAlvo}
            layout="fill" // cria o espaço
            objectFit="cover" // usa o espaço
            quality={100}

          />
        </div>
        <div className="w-[500px] space-y-4 relative z-10">
          <h1 className="text-3xl text-green-500 font-bold text-center">Feira dos dias das crianças</h1>
          {/* Usando o component e definindo o valor da propriedade*/}
          {/* <Task props={"Olá mundo"}/> */}

          {/* Propriedades serão usadas com props.xxx(ex: props.tasks) em outros components */}
          {/* Componenets */}
          <Task tasks={tarefas} onTaskClick={clicarTarefa} onDeleteTaskClick={deletarTarefaPorClick} />
          <AddTask onAddTaskSubmit={adicionarTarefa} /> {/* Envia o parametro(adicionarTarefa) para o componente AddTask. Lá o nome do parametro será onAddTaskSubmit */}

        </div>

        {/* flex deixa a imagem no lado */}
        {/* <div className="flex item-center">
          <Image
            src={tiroAlvo}
            width={500}
            height={400}

          />
          </div> */}

      </div>


    </>
  )

}

export default Home;