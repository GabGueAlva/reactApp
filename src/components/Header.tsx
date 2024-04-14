
const Header = ({dataUrl, updateUrl}) => {
    const {pokemon,dragonBall,rickMorty}= dataUrl

    return (    
            <div className="w-full h-[70px] bg-#FFF6F6 flex gap-16 items-center justify-center">
                <button className= " w-32 h-[50px] bg-[#BC7FCD] rounded-xl border-[2px] border-[#86469C] hover:bg-[#940B92] " onClick={()=>updateUrl(pokemon)}>Pokemon Api</button>
                <button className= "w-32 h-[50px] bg-[#FB9AD1] rounded-xl border-[2px] border-[#BC7FCD] hover:bg-[#940B92]" onClick={()=> updateUrl(rickMorty)}>Rick&Morty Api</button>
                <button className= "w-32 h-[50px] bg-[#FFCDEA] rounded-xl border-[2px] border-[#FB9AD1] hover:bg-[#940B92]" onClick={()=> updateUrl(dragonBall)}>Dragon ball Api</button>
            </div> 
    );
}
 
export default Header;