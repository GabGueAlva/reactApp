import { useForm, SubmitHandler } from "react-hook-form"
type Inputs = {
    user: string
    password: string
}

const Form = () => {
    const {
        register,
        handleSubmit,
        } = useForm<Inputs>()

        const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <div className="w-full h-screen flex justify-center items-center bg-[#FFF6F6]">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="p-[80px] flex flex-col justify-center items-center gap-10 rounded-md border-[7px] border-[#392467]">
                    <div className="text-2xl">Ingrese usuario</div>
                    <input {...register("user") } placeholder="Ingrese usuario" className="text-2xl"></input>
                    <div className="text-2xl">Ingrese contraseña</div>
                    <input  {...register("password")} placeholder="Ingrese contraseña" className="text-2xl"></input>
                    <button className= "w-[200px] h-[50px] bg-[#BC7FCD] rounded-md border-[2px] border-[#86469C] flex justify-center items-center hover:bg-[#940B92] ">Ingresar</button>
                </div>
            </form>
        </div>
    )
}
 
export default Form;
