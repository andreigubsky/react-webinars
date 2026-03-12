import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import ClickCounter from "./ClickCounter";
import CountDisplay from "./CountDisplay";
import { useState } from "react";

import TagWidget from "./TagWidget";
import Dates from "./Dates";
import Values from "./Values";
import Form from "./Form";
import FormAction from "./FormAction";
import OrderForm from "./OrderForm";
import SearchForm from "./SearchForm";

import ArticleList from "./ArticleList";
import type { Article } from "../types/article";
import { fetchArticles } from "../services/articleService";
import HtmlFor from "./HtmlFor";


export default function App () {

    const myKey = import.meta.env.VITE_API_KEY;
    const [clicks, setClick] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const [articles, setArticles] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleClick = () => {
        setClick(clicks+1)
        console.log(clicks);
    };

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const handleOrder = (data:string)=>{
        console.log("Order:", data)
    };


    const handleSearch = async (topic:string)=>{
        
        try{
            setIsLoading(true);
            setIsError(false);
            const data = await fetchArticles(topic)
            setArticles(data)
        } catch {
            setIsError(true);
        }
        finally{
            setIsLoading(false);
        }
        
       
        
    }
    return <>    
                <button onClick={toggle}>
                    {isOpen ? "Hide" : "Show"}
                </button><br/>
                {isOpen &&
                <>
                <HtmlFor />
                <SearchForm onSubmit={handleSearch} />
                {isLoading && <p>Loading data, please wait...</p>}
                {isError && <p>Whoops, something went wrong!</p>}
                {articles.length > 0 && <ArticleList items={articles}/>}
                <OrderForm onSubmit={handleOrder}/>
                <FormAction />
                <Form/>
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