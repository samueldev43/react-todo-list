import {Container} from './styles'
import {Lists} from './components/List'
import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';

interface Data {
  name: string,
  id: string
}

export function App() {
  const [val, setVal] = useState('')
  const [lists, setNewLists] = useState<Array<Data>>([])

  function addNewList(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if(val) {
      axios.post('http://localhost:3001/lists', {name: val})
      setVal('')
    }
  }

  useEffect(() => {
    axios.get('http://localhost:3001/lists').then(response => setNewLists(response.data))
  }, [lists])

  return (
   <>
    <Container>
      <h1>Todo List</h1>
      <form onSubmit={addNewList}>
        <input type="text" 
        placeholder="Type your list name"
        value={val}
        onChange={e => setVal(e.target.value)}
        />
        <button>Add</button>
      </form>
    </Container>

    <ul>
      {lists.map(list => {
        return <Lists key={list.id} data={list}/>
      })}
    </ul>
   </>
  );
}
