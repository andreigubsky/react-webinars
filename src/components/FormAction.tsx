export default function FormAction(){
    const handleSubmit = (formData: FormData)=>{
        console.log("Form submitted", formData.get("username") as string);
    };

    return (
        <div>
        <h1>FormActions</h1>
        <form action={handleSubmit}>
            <input type="text" name="username" defaultValue="Mark"/>
            <button type="submit">Submit</button>
        </form>
        </div>
        
    )
}