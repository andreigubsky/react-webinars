
interface CountDisplayProps{

    value: number
}
export default function CountDisplay ({value}:CountDisplayProps){


   
    return (
        <>
            <h2>clicks:{value}</h2>
        </>
    )
}