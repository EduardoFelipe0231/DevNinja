import { MoveUpRight} from 'lucide-react'

const Tecs = ( { tec}) => {
    return(
        <article className='bg-zinc-100 py-6 px-3 mt-4 rounded-sm text-zinc-800 flex flex-col gap-5 shadow-2xl'>
            <h2 className='text-2xl font-bold md:text-3xl lg:text-3xl'>{tec.title}</h2>
            <p className='font-light'>{tec.details}</p>
            
            <MoveUpRight  width={30} hanging={30} className='cursor-pointer' />
        </article>
    )
}

export default Tecs;