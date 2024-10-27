import React ,{useState} from "react"
import App from './App'
export const RedContext=React.createContext()
export default function Red(){
    const [id_produit,setid_produit]=useState();
    return(<div>
        <RedContext.Provider value={{id_produit,setid_produit}}>
            <App/>
        </RedContext.Provider>

    </div> )
    }