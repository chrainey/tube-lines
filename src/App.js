import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const [ lines, setLines ] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios('https://api.tfl.gov.uk/line/mode/tube/status')
      setLines(data)
    }
    getData()
  })
  return (
    <section className='row'>
      { lines.map(line => {
        const { name, id } = line
        return (
          <div key={id} className={name}>
            <h2>{name}</h2>
            <h3>{line.lineStatuses[0].statusSeverityDescription}</h3>
          </div>
        )
      })}
    </section>
  )
}

export default App