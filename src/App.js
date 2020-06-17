import React, { useState } from 'react'
import { Chart } from './Chart'

function App() {

  const [charts, setCharts] = useState()

  return (
    <div className="App">

      < Chart title="Week 1"/>

      {/* <button>Create new chart</button> */}

     
    </div>
  );
}

export default App;
