import Tecs from '../../components/Tecs';
import {getTecs} from '../../data/tecs';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Home = () => {
    const tecs = getTecs();

    const [input, setInput] = useState("");

    const handleChangeInput = (e) => {
        setInput(e.target.value)
    }

    const { id } = useParams();

    return(
        <div className='w-screen h-screen overflow-y-auto flex flex-col '>
                        
                <main className='flex-1 bg-gray-200 flex flex-col dark:bg-zinc-900'>
                    <section className='container mx-auto py-5 flex flex-col px-3 min-h-screen'>
                        <div className='flex flex-col items-center justify-between gap-6 '>
                            <h1 className='text-3xl font-bold lg:text-3xl flex-1 dark:text-zinc-100 text-zinc-800'>Courses</h1>
                            {/* search */}
                            <div className='flex w-full items-center gap-3 rounded-sm bg-zinc-100 p-3 ring-zinc-700 text-zinc-700 dark:bg-zinc-800/95 dark:text-zinc-100'>
                            <Search width={15} />
                            <input 
                                type="text" 
                                placeholder='Search your course here..' 
                                className="flex-1 bg-transparent outline-none placeholder:text-zinc-500 text-sm dark:placeholder:text-zinc-400"  
                                onChange={handleChangeInput}
                                value={input}  
                            />

                            </div>
                        </div>
                        
                        <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:md:grid-cols-3 mt-6'>
                            {/* componente */}
                            {/* Filtro e mapa dos objetos */}
                            
                                {tecs.filter((item) => {
                                    if (input === ""){
                                        return console.log            
                                    } else if (item.title.toLowerCase().includes(input.toLocaleLowerCase())) {
                                                return item
                                    }
                                })
                                .map((tec) => (
                                    <Link to={`/details/${tec.id}`} key={tec.id} >
                                        <Tecs tec={tec} />
                                    </Link>
                                ))}       
                                      
                        </div>
                        
                        
                    </section>
                </main> 

        </div>
    )
}

export default Home;