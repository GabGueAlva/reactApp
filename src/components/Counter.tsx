import { useState } from "react";
import { CgAdd } from "react-icons/cg";
import { GrSubtractCircle } from "react-icons/gr";
import { MdOutlineRestartAlt } from "react-icons/md";

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const addCounter = () => {
        setCounter(counter+1)
    }
    const restCounter = () =>{
        setCounter(counter-1)
    }
    const refreshCounter = () =>{
        setCounter(0)
    }
    return ( 
        <div className="w-full h-screen flex justify-center items-center bg-[#FFF6F6]">
            <div className="p-[80px] flex flex-col justify-center items-center gap-10 rounded-md border-[7px] border-[#392467]"> 
                <div className="p-[20px] text-5xl font-bold text-[#86469C] rounded-md border-[4px] border-[#392467] ">Contador</div>
                <div className="p-[5px] text-5xl font-bold text-[#86469C]">{counter}</div>
                <button className= "w-[100px] h-[50px] bg-[#BC7FCD] rounded-md border-[2px] border-[#86469C]  hover:bg-[#940B92] " onClick={addCounter}> <CgAdd className="text-white text-4xl"/> </button>
                <button className= "w-[100px] h-[50px] bg-[#FB9AD1] rounded-md border-[2px] border-[#BC7FCD] hover:bg-[#940B92] "onClick={restCounter}> <GrSubtractCircle className="text-white text-4xl" /></button>
                <button className= "w-[100px] h-[50px] bg-[#FFCDEA] rounded-md border-[2px] border-[#FB9AD1]  hover:bg-[#940B92] "onClick={refreshCounter}> <MdOutlineRestartAlt className="text-white text-4xl"/> </button>
            </div>
        </div> 
        );
}
 
export default Counter;