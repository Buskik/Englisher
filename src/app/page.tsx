'use client'


import { Word } from "@/components/word";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CircleCheck } from "lucide-react";
import { SetStateAction, useState } from "react";






export default function Home() {
  
  const [answer, setAnswer] = useState("");
  const [visible, setVis] = useState(false);
  

  function handleAnswer(e: { target: { value: SetStateAction<string>; }; }) {
    setAnswer(e.target.value)
  } 

  return (
    <main className="flex items-center justify-center justify-items-center
     h-screen w-screen bg-gradient-to-r
      from-red-800 via-yellow-600 to-yellow-500">
      <div className="flex flex-col gap-10 items-center justify-center
       bg-stone-900 w-3/5 h-3/5 rounded-lg">

        <p className="font-light">A palavra aleatória é:</p>
        
        <Word/>
        {!visible && (<div className="flex justify-center items-center gap-10 flex-col">
        <Input value={answer} onChange={handleAnswer} id="answer" className=" ease-in-out w-fit" placeholder="Digite o significado" />
        <Button onClick={async() => {
          setVis(true)
        }} className="gap-x-1" variant="outline" >
          <CircleCheck/>
          Mostrar resposta
        </Button>
        </div>)}
        

        {visible &&(<h2>Sua resposta: {answer}</h2>)}
      </div>
    </main>
  );
}
