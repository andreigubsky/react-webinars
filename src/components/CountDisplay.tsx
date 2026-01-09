
interface CountDisplayProps{
    onUpdate: ()=>void;
    value: number
}
export default function CountDisplay ():ClickCounterProps{


   
    return (
        <>
            <h2>clicks:{value}</h2>
        </>
    )
}