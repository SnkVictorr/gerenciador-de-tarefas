"use client"

// O nome da pasta é o nome que vai estar na url

import { ChevronLeftIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

function TaskPage() {
    // Usando rotas
    const router = useRouter();

    // parametros de url
    const searchParams = useSearchParams();
    const title = searchParams.get("titulo");
    const description = searchParams.get("descricao");
    
    function onBackClick() {
        // vai pra pagina inicial
        router.push("/"); // router.push: navega para determinada pagina
    }

    return(
        <div className="h-screen w-screen bg-slate-500 p-6">
            {/* mx-auto - Centraliza a div no eixo x */}
            <div className="w-[500px] mx-auto space-y-4"> 
                <div className="flex justify-center relative mb-5">
                    <button className="absolute left-0 top-0 bottom-0 text-slate-100"
                    // onClick={()=> router.back()}    // Volta para tras
                    onClick={onBackClick}
                    >
                        <ChevronLeftIcon/>
                    </button>
                    <h1>Detalhes da Tarefa</h1>
                </div>

                <div className="bg-slate-200 p-4 rounded-md">
                    <h2 className="text-xl font-bold text-slate-600">{title}</h2>
                    <p className="text-slate-600">{description}</p>
                </div>
            </div>
        </div>
    );
};
export default TaskPage;