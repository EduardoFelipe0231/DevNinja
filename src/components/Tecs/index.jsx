import { MoveUpRight} from 'lucide-react'
import { Link, useParams } from 'react-router-dom';

const Tecs = ( { tec}) => {

    const { id } = useParams();
    
    return(
        <article className='bg-zinc-100 py-6 px-3 mt-4 rounded-sm text-zinc-800 flex flex-col gap-5 shadow-sm dark:bg-zinc-800/95 dark:text-zinc-100'>
            <h2 className='text-2xl font-bold md:text-3xl lg:text-3xl'>{tec.title}</h2>
            <p className='font-light'>{tec.details}</p>
            
            <Link to={`/details/${tec.id}`}>
                <MoveUpRight  width={30} hanging={30} className='cursor-pointer hover:text-yellow-300 transition-all' />
            </Link>
        </article>
    )
}

export default Tecs;