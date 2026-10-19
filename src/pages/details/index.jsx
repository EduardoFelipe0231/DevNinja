import { useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTecs, getPersonById } from "../../data/tecs";

const Details = () => {

    const {id} = useParams()
    
    let navigate = useNavigate();
    
    const handleBack = () => {
        navigate('/')
    }
    
    const [details, setDetails] = useState("")

     
    useEffect(() => {
        const foundPerson = getPersonById(id);        
        
        if (!foundPerson) {
            navigate("/")
            return;
        }

        setDetails(foundPerson)

        return () => {
            console.log("SAIU DO DETALHE...")
        }
    }, [id]);
    
    return(
        <div className="w-full h-screen bg-zinc-300 dark:bg-zinc-700">           
            <section className="container mx-auto py-5 px-3 ">
                <div className={`w-full h-80 rounded-lg  overflow-hidden flex items-center justify-center bg-zinc-900 dark:bg-zinc-600/50`}>
                    <h2 className="text-4xl font-semibold leading-1 text-zinc-100 md:text-5xl lg:text-6xl">{details.title}</h2>
                </div>
                <div className="w-full flex flex-col mt-5 gap-3 text-zinc-900 dark:text-zinc-100">
                    <h1 className="font-bold text-lg">{details.title}</h1>
                    <p className="text-base md:text-lg">{details.details}</p>
                </div>
                <div className="flex items-center justify-center">
                    <button className="bg-zinc-900 mt-10 p-2 text-zinc-100 rounded-sm hover:bg-zinc-800 cursor-pointer dark:bg-zinc-800" onClick={handleBack}>Voltar</button>
                </div>
            </section>
        </div>
    )
}

export default Details;