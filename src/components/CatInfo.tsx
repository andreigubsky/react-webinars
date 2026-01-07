interface Cat{
    id: number;
    name: string;
    age: number;
    available: boolean;
}

interface CatInfoProps {
   cat:Cat;
   
}
import styles from "./CatInfo.module.css"
import clsx from 'clsx'

export default function CatInfo ({cat} :CatInfoProps) {
    const {name,age, available} = cat;

    const catsStyles = clsx(styles.card, available? styles.available:styles.taken)
    return <>
                <div className={styles.container}>
                    <img></img>
                    <p>Name: {name}</p>
                    <p>Age: {age}</p>
                </div>
                  
            </>
  }