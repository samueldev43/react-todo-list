import {List} from './style'

import {FaTrash} from 'react-icons/fa'
import axios from 'axios'

interface Data {
   data: {
    name: string,
    id: string
   } 
}

export function Lists(props: Data){

    function remove() {
        axios.delete(`http://localhost:3001/lists/${props.data.id}`)
    } 

    return(
        <>
            <List>
               <p>{props.data.name}</p>
               <FaTrash onClick={remove} className="icon" size={20}/>
            </List>
        </>
    )
}