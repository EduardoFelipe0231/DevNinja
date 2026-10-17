import Header from './components/Header'
import Tecs from './components/Tecs'
import Footer from './components/Footer'
import {getTecs} from './data/tecs'

export default function App() {

  const tecs = getTecs();

  return (
      <div className='w-screen h-screen bg-zinc-200 overflow-y-auto flex flex-col'>
          <Header />
          <main className='flex-1 bg-zinc-300 flex '>
              <section className='container mx-auto py-5 flex flex-col px-3'>
                  <h1 className='text-lg font-bold lg:text-2xl'>Courses</h1>
                  <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:md:grid-cols-3'>
                    {/* componente */}
                  {tecs.map((tec) => (
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

