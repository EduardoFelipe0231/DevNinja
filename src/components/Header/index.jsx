import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {

    // Menu mobile - criar o state e depois a função
    const [isOpen, setIsOpen] = useState(false)

    const handleMenu = () => {
        setIsOpen(!isOpen);
        console.log("clicou")
    }

    return(
        <header className="bg-zinc-900 shadow w-full flex items-center px-5 ">
            <div className=" relative container mx-auto py-4 flex items-center justify-between">
                <div className="bg-yellow-300 p-2 rounded-sm">
                    <h2 className="font-semibold text-sm">DevNinja</h2>
                </div>
                <nav className="text-zinc-100">
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

                {/* Mobile menu */}
                <div className="flex lg:hidden">
                    {isOpen ? (
                        <X className="text-zinc-100 lg:hidden cursor-pointer" onClick={handleMenu} />
                    ):(
                        <Menu className="text-zinc-100 lg:hidden cursor-pointer" onClick={handleMenu} />
                    )}

                    <nav 
                        className={`text-zinc-950 bg-yellow-300/95 fixed top-17 right-0 w-full h-full flex justify-center items-center rounded-sm ${isOpen ? "opacity-100" : "opacity-0 hidden" }`} style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
                        
                        <ul className="flex  flex-col items-center gap-5 text-lg">
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