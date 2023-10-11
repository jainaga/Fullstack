import { useState } from 'react';
import React from 'react';

/* ejercicio de anecdotas 2*/

const anecdotas = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'papito me duele la cabeza cuando me rio'
]

function App(props) {
  
  const [selected, setSelected] = useState(0)
  
  const pedir_anecdota = () => {
      const random = Math.floor(Math.random() * 5)
      setSelected(random)    
  }

  const [votos, setVotos] = useState([0,0,0,0,0,0])
  const [mas_votado, setMas_votado] = useState(0)
  const votar = () => {
      const copia = [...votos]
      copia[selected] += 1
      setVotos(copia)

      for (let i = 0; i < copia.length; i++) {
          if (copia[i] > copia[mas_votado]) {
              setMas_votado(i)
              
          }
      }
  }

  return (
      <div>
          
          <div>
            <h1>Anecdota del dia</h1>
            <h4>{anecdotas[selected]}</h4>
            <p>Tiene {votos[selected]} votos</p> 
          </div>
          <button onClick={pedir_anecdota}>Dame una anecdota</button>
          <button onClick={votar}>Vota</button>
          <div>
            <h1>Anecdota con más votos</h1>
            <h4>{anecdotas[mas_votado]}</h4>
            <p>Tiene {votos[mas_votado]} votos</p> 
          </div>
      </div>
  );
}

export default App;
