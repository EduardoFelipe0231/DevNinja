import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer';
import Home from "./pages/home";
import Details from "./pages/details";
import Error from './pages/error'

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/details/:id" element={<Details />}></Route>
                    <Route path="*" element={<Error />}></Route>
                </Routes>
            <Footer />
        </BrowserRouter>
    )
}