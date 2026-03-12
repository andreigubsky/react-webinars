interface SearchFormProps{
    onSubmit: (topic: string) => void;
}

export default function SearchForm({onSubmit}:SearchFormProps){
    const handleSubmit = (formData:FormData)=>{
        const topic = formData.get("topic") as string;

        if(topic ===""){
            alert("please")
            return;
        }
        onSubmit(topic);
    }
    return(
        <div>
            <h1>SearchForm</h1>
            <form action={handleSubmit}>
                <input type="text" name="topic" />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}