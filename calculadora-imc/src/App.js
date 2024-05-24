import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imc = peso / (alturaMetros * alturaMetros);
    setResultado(imc.toFixed(2));
  };

  const getClassificacao = () => {
    if (!resultado) return '';
    if (resultado < 18.5) return 'Abaixo do peso';
    if (resultado < 24.9) return 'Peso normal';
    if (resultado < 29.9) return 'Sobrepeso';
    if (resultado < 34.9) return 'Obesidade grau 1';
    if (resultado < 39.9) return 'Obesidade grau 2';
    return 'Obesidade grau 3';
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <form>
        <div>
          <label>Altura (cm):</label>
          <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
        </div>
        <div>
          <label>Peso (kg):</label>
          <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
        </div>
        <button type="button" onClick={calcularIMC}>Calcular</button>
      </form>
      {resultado && (
        <div>
          <h2>Resultado:</h2>
          <p>IMC: {resultado}</p>
          <p>Classificação: {getClassificacao()}</p>
        </div>
      )}
    </div>
  );
}

export default App;
