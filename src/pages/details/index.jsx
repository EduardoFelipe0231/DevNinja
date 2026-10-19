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
            navigate("/error")
            return;
        }

        setDetails(foundPerson)

        return () => {
            console.log("SAIU DO DETALHE...")
        }
    }, [id]);
    
    return(
        <>
            <h1>Detalhes - {id}</h1>
            <button onClick={handleBack}>Voltar</button>
            <h1>{details.title}</h1>
            <h2>{details.details}</h2>

        </>
    )
}

export default Details;