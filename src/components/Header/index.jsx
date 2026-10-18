import { Menu, Moon, Sun, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {

    // Menu mobile - criar o state e depois a função
    const [isOpen, setIsOpen] = useState(false);
    const [mode, setMode] = useState(false) 

    const handleMenu = () => {
        setIsOpen(!isOpen);
        console.log("clicou")
    }

    
    useEffect(() => {
      const savedTheme = localStorage.getItem("theme");
      if(savedTheme === "dark"){
        document.documentElement.classList.toggle("dark");
        setMode(true)
      }
    }, [])

    const toogleTheme = () => {
      const newTheme = !mode;
      setMode(newTheme);
      document.documentElement.classList.toggle("dark", newTheme);
      localStorage.setItem("theme", newTheme ? "dark" : "light");
    };

    return(
        <header className="bg-zinc-100 shadow-sm w-full flex items-center px-5 border-2 border-l border-zinc-100 dark:bg-zinc-950 dark:border-none">
            <div className=" relative container mx-auto py-4 flex items-center justify-between">
                <div className="bg-orange-700 p-2 rounded-sm text-zinc-100">
                    <h2 className="font-bold text-sm">DevNinja</h2>
                </div>
                <nav className="text-zinc-900 dark:text-zinc-100">
                    <ul className="hidden items-center gap-5 lg:flex ">
                        <li className="">
                            <a href="#" className="hover:bg-zinc-100 hover:text-zinc-950 p-3 rounded-full transition-all">UI Design</a>
                        </li>
                        <li>
                            <a href="#" className="hover:bg-zinc-100 hover:text-zinc-950 p-3 rounded-full transition-all">Front-end</a>
                        </li>
                        <li>
                            <a href="#" className="hover:bg-zinc-100 hover:text-zinc-950 p-3 rounded-full transition-all">Back-end</a>
                        </li>                  
                    </ul>
                </nav>

                {/* Dark mode */}
                <div onClick={toogleTheme} className="transition-all cursor-pointer p-2 bg-zinc-900 rounded-full text-zinc-10 dark:bg-zinc-700">
                    {mode ? (<Sun className="text-yellow-300" />) : (<Moon />)}
                </div> 
                {/* Mobile menu */}
                <div className="flex lg:hidden">
                    {isOpen ? (
                        <X className="text-zinc-900 lg:hidden cursor-pointer dark:text-zinc-100" onClick={handleMenu} />
                    ):(
                        <Menu className="text-zinc-900 lg:hidden cursor-pointer dark:text-zinc-100" onClick={handleMenu} />
                    )}

                    <nav 
                        className={`text-zinc-950 bg-orange-700 fixed top-17 right-0 w-full h-full flex justify-center items-center rounded-sm ${isOpen ? "opacity-100" : "opacity-0 hidden" }`} style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
                        
                        <ul className="flex  flex-col items-center gap-5 text-lg text-zinc-100">
                            <li className="py-10 hover:bg-zinc-200 w-full text-center">
                                <a href="#" className="hover:text-zinc-950 p-6 rounded-full transition-all">UI Design</a>
                            </li>
                            <li  className="py-10 hover:bg-zinc-200 w-full text-center">
                                <a href="#" className="hover:text-zinc-950 p-6 rounded-full transition-all">Front-end</a>
                            </li>
                            <li  className="py-10 hover:bg-zinc-200 w-full text-center">
                                <a href="#" className="hover:text-zinc-950 p-6 rounded-full transition-all">Back-end</a>
                            </li>
                            <li  className="py-10 hover:bg-zinc-200 w-full text-center">
                                <a href="#" className="hover:text-zinc-950 p-6 rounded-full transition-all">Settings</a>
                            </li>                  
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;