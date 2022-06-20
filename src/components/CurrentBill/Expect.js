import "./expect.css"
import {XAxis,YAxis, CartesianGrid, Tooltip,ResponsiveContainer,BarChart, Bar} from 'recharts';
import axios from "axios"
import React, { useState,useEffect } from "react"


export default function Expect() {
  const [monthlyChart,setmonthlyChart] = useState(null)
  const fetchMonthlyData = async () => {
      const account = window.location.search
      const results = await axios.get(`/.netlify/functions/getMonthData${account}`)
      console.log(results)
      setmonthlyChart(Object.values(results)[0])
  }
  useEffect(() => {
    fetchMonthlyData()
  }, [])

  return (
    <div className="expect">
     <span className="expectTitle">What to Expect based on past trend</span>
      <h3 className="chartTitle">Trend</h3>
        <ResponsiveContainer width="50%" aspect={2/1} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <BarChart width={730} height={250}  data={monthlyChart}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month_name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Bar dataKey="datausage" fill="#8884d8" />
        </BarChart>
        </ResponsiveContainer> 
    </div>
  )
}
