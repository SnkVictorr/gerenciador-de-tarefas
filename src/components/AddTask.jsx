import { useState } from "react";

function AddTask(props) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <>
            <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
                <input type="text"
                    placeholder="Digite o título da tarefa"
                    className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                    value={title} // mostra o valor de title
                    onChange={(event) => setTitle(event.target.value)} //Este comando define uma função que será chamada sempre que o conteúdo do campo de entrada mudar. event.target.value obtém o novo valor do campo, e setTitle atualiza o estado title com esse novo valor.
                />
                <input type="text"
                    placeholder="Digite a descrição da tarefa"
                    className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />                                                                       
                                                                                        {/* font-medium = negrito medio */}
                <button 
                onClick={() => {
                    // .trim() = Remove os espaços iniciais e finais e os caracteres terminadores de linha de uma string.
                    if(!title.trim() || !description.trim()) {
                        return alert("Preencha o título e a descrição da tarefa!");
                    }
                    props.onAddTaskSubmit(title, description);
                    setTitle(""); //Limpar campo do input
                    setDescription("");
                }}
                className="bg-slate-500 text-white px-4 py-2 rounded-md font font-medium">Adicionar</button>
            </div>
        </>
    )
}

export default AddTask;