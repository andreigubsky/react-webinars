import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import ClickCounter from "./ClickCounter";
import CountDisplay from "./CountDisplay";
import { useState } from "react";

import TagWidget from "./TagWidget";
import Dates from "./Dates";
import Values from "./Values";


export default function App () {
    const [clicks, setClick] = useState(0);
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setClick(clicks+1)
        console.log(clicks);
    };

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return <>    
                <button onClick={toggle}>
                    {isOpen ? "Hide" : "Show"}
                </button><br/>
                {isOpen &&
                <>
                <Values/>
                <ClickCounter onUpdate={handleClick} value={clicks}/>
                <ClickCounter onUpdate={handleClick} value={clicks}/>
                <CountDisplay value={clicks}/>
                <TagWidget />
                <Dates />
                <Header/>
                <Main />
                <Footer /> 
                </>}
                   
            </>
  }