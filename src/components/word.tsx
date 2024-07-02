'use client'



import { useEffect, useState } from "react";
import { getWord } from "./getWord";
import React from "react";
export interface WordProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export const Word = React.forwardRef<HTMLButtonElement, WordProps>(() =>{
const [word, setWord] = useState<Promise<string | undefined> | string>("Carregando...")
  useEffect(() => setWord(getWord()), []);
    return(
        <h1 className="text-4xl font-black">{word}</h1>
    )
  })


