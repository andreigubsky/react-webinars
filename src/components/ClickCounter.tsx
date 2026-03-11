import { useState } from "react";

interface ClickCounterProps{
    onUpdate: ()=>void;
    value: number
}
export default function ClickCounter ({onUpdate, value}:ClickCounterProps){
   
    return (
        <>
        <button onClick={onUpdate}>Onclick Counter</button>
        <p>clicks:{value}</p>
        </>
    )
        
    
}