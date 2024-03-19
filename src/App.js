import { useState } from 'react'
import './app.css'

export default function App() {

  let [peso, setPeso] = useState('')
  let [altura, setAltura] = useState('')
  let [mensagem, setmensagem] = useState('')

  function calcularIMC() {
    const alt = altura / 100
    const imc = peso / (alt * alt)
    if (imc < 18.6) {
      setmensagem("Voce esta abaixo do peso! Seu imc: " + imc.toFixed(2))
    } else if (imc >= 18.6 && imc <= 24.9) {
      setmensagem("Voce esta no peso ideal! Seu imc: " + imc.toFixed(2))
    } else if (imc >= 24.9 && imc <= 34.9) {
      setmensagem("Voce esta levemente acima do peso! Seu imc: " + imc.toFixed(2))
    } else if (imc > 34.9) {
      setmensagem("Cuidado! Obesidade Seu imc: " + imc.toFixed(2))
    }
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>
      <div className="area-input">
        <input
          type="text"
          placeholder="Peso em (kg)   Ex:80"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <input
          type="text"
          placeholder="Altura em (cm)   Ex:170"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <button onClick={calcularIMC}>Calcular</button>
      </div>
      <h2>{mensagem}</h2>
    </div>
  )
}
