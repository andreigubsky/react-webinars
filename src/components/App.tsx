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
    const [clicks, setClick] = useState(()=>{
        const savedClicks = window.localStorage.getItem("saved-clicks");

            // Якщо там щось є, повертаємо це 
        // значення як початкове значення стану
        if (savedClicks !== null && savedClicks !== "undefined") {
            return JSON.parse(savedClicks);
        }

            // У протилежному випадку повертаємо 
            // яке-небудь значення за замовчуванням
        return 0;
    });
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
    
    useEffect(() => {
        console.log("You can see me only once!");
    }, []);
    useEffect(() => {
        console.log("Clicks updated:", clicks);
    }, [clicks]);
    useEffect(() => {
        console.log("First or second updated:", clicks + count);
      }, [clicks, count]);

    useEffect(() => {
        document.title = `You clicked ${clicks} times`;
      });


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
        
      }, 1000);
      return () => {
        clearInterval(intervalId);
        console.log(`Clean up for ${count}`);
      };
   },[])
    
        const handleClick = () => {
            setClick(clicks + 1)
            console.log(clicks);
            
            
    };

    useEffect(()=>{
       window.localStorage.setItem('saved-clicks',JSON.stringify(clicks))   
       },[clicks]);

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
                <ClickCounter onUpdate={handleClick} value={clicks}/>
                <CountDisplay value={clicks}/>
                <button onClick={() => setClick(0)}>Reset</button>
                
                <TagWidget />
                <Dates />
                <Header/>
                <Main />
                <Footer /> 
                </>}
                   
            </>
  }