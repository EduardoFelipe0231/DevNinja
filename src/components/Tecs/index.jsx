import { MoveUpRight} from 'lucide-react'

const Tecs = ( { tec}) => {
       
    return(
        <article className='bg-zinc-100 py-6 px-3 mt-4 rounded-sm text-zinc-800 flex flex-col gap-5 shadow-sm dark:bg-zinc-800/95 dark:text-zinc-100 group' title={tec.details} >
            <h2 className='text-2xl font-bold md:text-3xl lg:text-3xl group-hover:text-zinc-700 dark:group-hover:text-yellow-300'>{tec.title}</h2>
            <p className='font-light h-20 dark:group-hover:text-yellow-300 group-hover:text-zinc-700'>{tec.details}</p>
            
                <MoveUpRight  width={30} hanging={30} className='cursor-pointer hover:text-zinc-500  hover:rotate-45 transition-all mt-2' />
        </article>
    )
}

export default Tecs;