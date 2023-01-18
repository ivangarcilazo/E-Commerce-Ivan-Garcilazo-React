import store from "./store"
import reducer from "./reducer"
import { useReducer } from "react"
import Context from "../Context/Context"

export default function Provider(props){
    const {children}=props
    
    const[myCart, dispatch]=useReducer(reducer, store)

    const valueToMove={myCart, dispatch}

   return <Context.Provider value={valueToMove}>{children}</Context.Provider>
}