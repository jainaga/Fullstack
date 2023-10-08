import React, { useState } from 'react';
import './App.css';

const Statistics = ({counts,estadistica,nombre_valor}) => {

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
      {estadistica === "good" && nombre_valor === "nombre" && <ul>{estadistica}</ul>}
      {estadistica === "good" && nombre_valor === "valor" && <ul>{counts[0]}</ul>}
      {estadistica === "neutral" && nombre_valor === "valor" && <ul>{counts[1]}</ul>}
      {estadistica === "bad" && nombre_valor === "valor" && <ul>{counts[2]}</ul>}
      {estadistica === "total" && nombre_valor === "valor" && <ul>{counts[0]+counts[1]+counts[2]}</ul>}
      {estadistica === "average" && nombre_valor === "valor" && <ul>{porcentaje()}</ul>}
      {estadistica === "positive" && nombre_valor === "valor" && <ul>{positive()}%</ul>}
      {estadistica === "positive" && nombre_valor === "nombre" && <ul>{estadistica}</ul>}
      {estadistica === "average" && nombre_valor === "nombre" && <ul>{estadistica}</ul>}
      {estadistica === "total" && nombre_valor === "nombre" && <ul>{estadistica}</ul>}
      {estadistica === "bad" && nombre_valor === "nombre" && <ul>{estadistica}</ul>}
      {estadistica === "neutral" && nombre_valor === "nombre" && <ul>{estadistica}</ul>}
    </div>
  );
};


const Button = ({counts, setCounts, setIsVisible, text}) => {
  const handleFeedback = (pos) => {
    const newCounts = [...counts];
    newCounts[pos] += 1;
    setCounts(newCounts);
    setIsVisible(true);
  }

  return (
    <div>
      {text === "good" && <button onClick={() => handleFeedback(0)}>{text}</button>}
      {text === "neutral" && <button onClick={() => handleFeedback(1)}>{text}</button>}      
      {text === "bad" && <button onClick={() => handleFeedback(2)}>{text}</button>}
    </div>
  );
};

function App() {

  const [counts, setCounts] = useState([0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);

  


  return (
    <div className="App">
      <header className="App-header">
        <h1>give feedback</h1>
        <Button counts={counts} setCounts={setCounts} setIsVisible={setIsVisible} text={"good"}></Button>
        <Button counts={counts} setCounts={setCounts} setIsVisible={setIsVisible} text={"neutral"}></Button>
        <Button counts={counts} setCounts={setCounts} setIsVisible={setIsVisible} text={"bad"}></Button>
      </header>
      <body className="App-body">
        <h2>statistics</h2>
        {!isVisible && (<h3>No hay ingresos aún</h3>)}
        {isVisible && (
        <div className='estadistica' >
        <table>
          <tr>
            <td><Statistics counts={counts} estadistica={"good"} nombre_valor={"nombre"}></Statistics></td>
            <td><Statistics counts={counts} estadistica={"good"} nombre_valor={"valor"}></Statistics></td>
          </tr>
          <tr>
            <td><Statistics counts={counts} estadistica={"neutral"} nombre_valor={"nombre"}></Statistics></td>
            <td><Statistics counts={counts} estadistica={"neutral"} nombre_valor={"valor"}></Statistics></td>
          </tr>
          <tr>
            <td><Statistics counts={counts} estadistica={"bad"} nombre_valor={"nombre"}></Statistics></td>
            <td><Statistics counts={counts} estadistica={"bad"} nombre_valor={"valor"}></Statistics></td>
          </tr>
          <tr>
            <td><Statistics counts={counts} estadistica={"total"} nombre_valor={"nombre"}></Statistics></td>
            <td><Statistics counts={counts} estadistica={"total"} nombre_valor={"valor"}></Statistics></td>
          </tr>
          <tr>
            <td><Statistics counts={counts} estadistica={"average"} nombre_valor={"nombre"}></Statistics></td>
            <td><Statistics counts={counts} estadistica={"average"} nombre_valor={"valor"}></Statistics></td>
          </tr>
          <tr>
            <td><Statistics counts={counts} estadistica={"positive"} nombre_valor={"nombre"}></Statistics></td>
            <td><Statistics counts={counts} estadistica={"positive"} nombre_valor={"valor"}></Statistics></td>
          </tr>
        </table>
        </div>)}
      </body>
    </div>
  );
}

export default App;
