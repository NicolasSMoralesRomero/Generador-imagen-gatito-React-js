import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [text, setText] = useState()
  const [submittedText, setSubmittedText] = useState('');
  const [createImage, setCreateImage] = useState()


  const labelText = (event) => {
   setText(event.target.value);
  };
  
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log("boton", text)
      setSubmittedText(text)
}
 
useEffect(() => {

    if (submittedText) {
      fetch(`https://cataas.com/cat/says/${submittedText}?json=true`)
        .then(res => res.json())
        .then(data => {
          setCreateImage(data);
          console.log(data)
        });
    }
  }, [submittedText]);


  // intentar hacer el fetch y que se use lo que tiene label text al momento de oprimir el botón
  return (
    <>
      <main>
        <h1>Generador de imagenes de gatito</h1>
        <form onSubmit={handleSubmit}>
          <input type='text' onChange={labelText} />
          <button>Crear imagen</button>
          {submittedText && <p>{submittedText}</p>} 
          {createImage && <img src={ `https://cataas.com/cat/says/${submittedText}`} alt={submittedText} />}
        </form>
      </main>
    </>
  )
}

export default App

