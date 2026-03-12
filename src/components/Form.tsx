import { useState } from "react";


export default function Form(){
    const [users, setUsers] = useState<string []>([]);

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const username = formData.get("username") as string;
        setUsers(prev => [...prev, username]);
        

    console.log(username);
    form.reset();
    }
    return (
        <>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" />
            <button type="submit">Submit</button>
        </form>
        <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
        </>
    );
}