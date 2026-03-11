import { useState } from "react";
interface User {
    id: number;
    name: string;
    secondname: string;
}

export default function User(){
    const [counter, setCounter] = useState<number>(0);
    const [flag, setFlag] = useState(true);
    const [user, setUser] = useState<User[]>([]);
    const [items, setItems] = useState<User|null>(null);
    
    return(
        <>
            <p>First name</p>
            <p>Second name</p>
        </>
    )
}