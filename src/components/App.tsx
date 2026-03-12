import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import ClickCounter from "./ClickCounter";
import CountDisplay from "./CountDisplay";
import { useEffect, useState } from "react";

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
import axios from "axios";
import Modal from "./Modal";


export default function App () {

    const myKey = import.meta.env.VITE_API_KEY;
    const [clicks, setClick] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const [articles, setArticles] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const [person, setPerson] = useState(null);
    const [count, setCount] = useState(1);
    const [time, setTime] = useState(new Date());

    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);
    
    useEffect(()=>{
        console.log(`Effect ran for: ${count}`);
        // axios
        //         .get(`https://swapi.info/api/people/${count}`)
        //     .then((response) => setPerson(response.data));

        // console.log('App rendred!');

        async function fetchData() {
            const response = await axios.get(`https://swapi.info/api/people/${count}`);
            setPerson(response.data)
        }
        fetchData();
        console.log('App rendred!');
        return () => {
            console.log(`Clean up for ${count}`);
          };
    },[count]);
    
   useEffect(()=>{
    const intervalId = setInterval(() => {
        setTime(new Date());
        console.log(`Interval - ${Date.now()}`);
        return () => {
            clearInterval(intervalId);
            console.log(`Clean up for ${count}`);
          };
      }, 1000);
   },[])
    
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
                <h1>Main content of the page</h1>
                <button onClick={openModal}>Open modal</button>
                {isModalOpen && (
                    <Modal onClose={closeModal}>
                    <h2>Custom Modal Content</h2>
                    <p>This is a reusable modal with dynamic content.</p>
                  </Modal>
                )}
                <h2>The count is {count}</h2>
                <button onClick={() => setCount(count + 1)}>Get next character</button>
                <p>TimerBox - {time.toLocaleTimeString()}</p>
                <pre>{JSON.stringify(person, null, 2)}</pre>
                

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