import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import db from 'firebase';

function App() {
  const [todos, setTodos] = useState(['abd','adc']);
  const [input, setInput] = useState('');


 useEffect(() => {

    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
 }, []);
  const addTodo = (event) => {
    event.preventDefault();
    console.log('working');
    setTodos([...todos, input]);
    setInput('');
  }


 return (
    <div className="App">

     <form>
     <FormControl>
       <InputLabel>Write a Todo</InputLabel>
       <Input value={input} onChange={event => setInput(event.target.value)}></Input>
     </FormControl>
     
     <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
      Add Todo
     </Button>
     </form>
     
     <ul>
       {todos.map(todo => (
         <Todo text={todo} />
       ))}
    
     </ul>
    </div>
  );
}

export default App;
