import { useState } from 'react'
import data from './data'

function App() {

  const [fluidNum, setFluidNum] = useState(0)
  const [text, setText] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    if (fluidNum > 0 && fluidNum <= data.length) {
      let newData = [...data].slice(0, fluidNum)
      setText(newData)
    } else {
      setText('')
    }

    setFluidNum(0)
  }

  return (
    <div className="App">
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <form className="form" onSubmit={handleSubmit} >
        <span className="input-par">Paragraphs: </span>
        <input type="number" className="input-num" max={data.length} value={fluidNum} onChange={e => { setFluidNum(e.target.value) }} />
        <input type="submit" className="input-btn" value="GENERATE" />
      </form>

      {text !== '' &&
        <div className="texts">
          {text.map((t, idx) => {
            return (<p className="text" key={idx}>{t}</p>)
          })}
        </div>
      }

    </div>
  );
}

export default App;
