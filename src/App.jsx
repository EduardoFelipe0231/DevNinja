import Header from './components/Header'
import Tecs from './components/Tecs'
import Footer from './components/Footer'
import {getTecs} from './data/tecs'
import { Search } from 'lucide-react';
import { useState } from 'react';

export default function App() {

  const tecs = getTecs();

  const [input, setInput] = useState("");

  const handleChangeInput = (e) => {
    setInput(e.target.value)
  }

  
  return (
      <div className='w-screen h-screen bg-zinc-200 overflow-y-auto flex flex-col'>
          <Header />
          <main className='flex-1 bg-zinc-300 flex flex-col '>
              <section className='container mx-auto py-5 flex flex-col px-3 min-h-screen'>
                  <div className='flex flex-col items-center justify-between gap-6 '>
                    <h1 className='text-3xl font-bold lg:text-3xl flex-1'>Courses</h1>
                    {/* search */}
                    <div className='flex w-full items-center gap-3 rounded-sm bg-zinc-100 p-3 ring-zinc-700 text-zinc-700 '>
                      <Search width={15} />
                      <input 
                        type="text" 
                        placeholder='Search your course here..' 
                        className="flex-1 bg-transparent outline-none placeholder:text-zinc-500 text-sm" 
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
                      <Tecs tec={tec} key={tec.id} />
                    ))}                  
                  </div>
                  <div className='flex items-center justify-center'>
                    <button className='mt-6 bg-zinc-900 text-zinc-100 p-4 rounded-sm hover:bg-zinc-800 transition-all cursor-pointer text-sm'>See more</button>
                  </div>
              </section>
          </main>
          <Footer />
      </div>
  )
}

