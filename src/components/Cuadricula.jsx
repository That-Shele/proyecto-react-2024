import { useEffect, useState } from "react"
import axios from "axios";
import Cripto from "./Cripto";
import "./Cuadricula.css"

function Cuadricula() {
  const API_URL = import.meta.env.VITE_API_URL

  const [criptos, setCriptos] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}assets`)
    .then((data) => {
      setCriptos(data.data.data)
    })
    .catch(() => {
      console.error("La petición falló.")
    });
  }, []);

  if(!criptos) return <span>Cargando...</span>

  return (
    <div className="grid-container">
      <h1>Lista de Criptomonedas</h1>
      <div className="cripto-container">
        {criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
          <Cripto 
            key={id}
            id={id} 
            name={name} 
            priceUsd={priceUsd} 
            symbol={symbol} 
            changePercent24Hr={changePercent24Hr}/>
        ))}
      </div>
    </div>
  )
}

export default Cuadricula
