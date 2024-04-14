import { useEffect, useState } from "react";
import Header from "./Header.tsx";

const Consult = () => {

    const [url, setUrl] = useState('https://pokeapi.co/api/v2/')

    const apisUrl = {
        pokemon :'https://pokeapi.co/api/v2/pokemon/ditto',
        dragonBall: 'https://dragonball-api.com/api/characters',
        rickMorty: 'https://rickandmortyapi.com/api/character'
    }
    
    useEffect(()=>{
        urlConsult();
    },[url])


    const urlConsult = async () =>{

        fetch(url)
        .then(res => res.json() )
        .then(res =>{
            console.log(res)
        })
    }

    const updateUrl = (newUrl:any) =>{
        setUrl(newUrl)
    }

   return(
        <div className="w-full h-screen bg-#FFF6F6">
            <Header dataUrl={apisUrl} updateUrl={updateUrl} />
            <div className="flex flex-col justify-center items-center gap-7">
                <div className="text-4xl p-9" >Consumo de APIs</div>
                <button className ="w-[150px] h-[50px] rounded-xl bg-[#FC819E] border-[2px] border-[#F7418F] hover:bg-[#940B92]" onClick={()=>updateUrl("https://pokeapi.co/api/v2/pokemon/ditto")}>Pokeapi</button>
                <button className ="w-[150px] h-[50px] rounded-xl bg-[#FC819E] border-[2px] border-[#F7418F] hover:bg-[#940B92]" onClick={()=>updateUrl("https://rickandmortyapi.com/api/character")}>Api Rick&Morty</button>
                <button className="w-[150px] h-[50px] rounded-xl bg-[#FC819E] border-[2px] border-[#F7418F] hover:bg-[#940B92]" onClick={()=>updateUrl("https://dragonball-api.com/api/characters")}> Dragonball Api</button>
            </div>
        </div>
   )
}
 
export default Consult;