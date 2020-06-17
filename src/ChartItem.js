import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export const ChartItem = ({data}) => {
  console.log("chartitem", data)

  return (
    <AreaChart
      key={data.dataSet.length}
      width={500}
      height={300}
      data={data.dataSet.sort((a,b)  => a.name - b.name)}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
      <Area type="monotone" dataKey="Average" stroke="rebeccapurple" fill="#6547cc"/>
    </AreaChart>
  )

}
