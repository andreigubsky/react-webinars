import CatInfo from "./CatInfo"
import cats from "../cats.json"

export default function Main () {
    return <>
                <main>
                    {/* <CatInfo name={cats[0].name} age={cats[1].age} /> */}
                    {/* <CatInfo cat={cat[0]} /> */}

                    <ul>{cats.map(cat =><li key={cat.id}><CatInfo cat={cat}/></li>)}</ul>
                    
                </main>
                  
            </>
  }