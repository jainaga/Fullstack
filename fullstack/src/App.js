import React, { useState } from 'react';
import './App.css';

const Statistics = ({counts}) => {

    const porcentaje = () => {
    const votos = [...counts];
    let average = (votos[0] + (votos[2]*(-1))/(votos[0]+votos[1]+votos[2]));
    return average;
  }

  const positive = () => {
    let positivos = (counts[0]/(counts[0]+counts[1]+counts[2]));
    return positivos;
  }

  return (
    <div>
      <ul>average {porcentaje()}</ul>
      <ul>positive {positive()}%</ul>
    </div>
  );
};


function App() {
 
  const [counts, setCounts] = useState([0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);

  const handleFeedback = (pos) => {
    const newCounts = [...counts];
    newCounts[pos] += 1;
    setCounts(newCounts);
    setIsVisible(true);
  }
 

  return (
    <div className="App">
      <header className="App-header">
        <h1>give feedback</h1>
        <button onClick={() => handleFeedback(0)}>good</button>
        <button onClick={() => handleFeedback(1)}>neutral</button>
        <button onClick={() => handleFeedback(2)}>bad</button>
      </header>
      <body className="App-body">
        <h2>statistics</h2>
        {!isVisible && (<h3>No hay ingresos aún</h3>)}
        {isVisible && (
        <div className='estadistica' >
        <ul>good {counts[0]}</ul>
        <ul>neutral {counts[1]}</ul>
        <ul>bad {counts[2]}</ul>
        <ul>total {counts[0]+counts[1]+counts[2]}</ul>
        <Statistics counts={counts}></Statistics>
        </div>)}
      </body>
    </div>
  );
}

export default App;
