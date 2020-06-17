import React, { useState }  from 'react';
import { ChartItem } from './ChartItem'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: '1', Average: 3500
  },
  {
    name: '2', Average: 3000
  },
  {
    name: '3', Average: 2000
  },
  {
    name: '4', Average: 2780
  },
  {
    name: '5', Average: 1890
  },
  {
    name: '6', Average: 2390
  },
  {
    name: '7', Average: 3490
  },
];

console.log(data)

export const Chart = ({title}) => {

  const [dayCount, setDayCount] = useState(1)
  const [average, setAverage] = useState()
  const [chartData, setChartData] = useState({dataSet: []})

  const addToChart = (average, dayCount) => {
    const averageNumber = parseInt(average)
    const stringDayCount = JSON.stringify(dayCount)
    const dataArray = chartData.dataSet

    console.log(dataArray);
    dataArray.push({"name": stringDayCount, "Average": averageNumber})
    console.log("dataArray", dataArray)
    setChartData({dataSet: dataArray})
  }

  const increment = () => {
    if (dayCount === 7) {
      return
    }
    setDayCount(dayCount +1)
  }

  const decrement = () => {
    if (dayCount === 1) {
      return
    }
    setDayCount(dayCount -1)
  }
  
  return (
    <section className="chart-container">
      <h2>{title}</h2>
     
      < ChartItem data={chartData} />

      <div className="chart-data-manipulation">
        
        <button 
          className="increment-decrement-button"
          onClick={() => decrement()}>-1</button>

        <h3>{dayCount}</h3>
        <button 
          className="increment-decrement-button"
          onClick={() => increment()}>+1</button>

        <input
          type="number"
          step=".1"
          value={average}
          onChange={(event) => {setAverage(event.target.value)}}
        ></input>
        <button onClick={() => addToChart(average, dayCount)}>Add</button>
      </div>
    </section>
  );
  
}
