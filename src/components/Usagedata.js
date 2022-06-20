import './usagedata.css'
import { Area,AreaChart, XAxis,YAxis, CartesianGrid, Tooltip,ResponsiveContainer,BarChart, Bar , LineChart, Line} from 'recharts';
import axios from "axios"
import React, { useState,useEffect } from "react"

export default function Usagedata() {
  const [monthlyChart,setmonthlyChart] = useState(null)
  const [dailyChart,setdailyChart] = useState(null)
  const [hourlyChart,sethourlyChart] = useState(null)

  const fetchMonthlyData = async () => {
    const account = window.location.search
    const results = await axios.get(`/.netlify/functions/getMonthData${account}`)
    console.log(results)
    setmonthlyChart(Object.values(results)[0])
  }

  const fetchDailyData = async () => {
    const account = window.location.search
    const results = await axios.get(`/.netlify/functions/getdaily${account}`)
    setdailyChart(Object.values(results)[0])
  }

  const fetchHourlyData = async () => {
    const account = window.location.search
    const results = await axios.get(`/.netlify/functions/getHourly${account}`)
    sethourlyChart(Object.values(results)[0])
  }

  useEffect(() => {
    fetchMonthlyData()
    fetchDailyData()
    fetchHourlyData()
  }, [])
  return (
    <div className="chart">
      <div className="chartBox">
        <h3 className="chartTitle">Hourly Usage</h3>
        <ResponsiveContainer width="100%" aspect={2/1}>
        <LineChart width={730} height={250} data={hourlyChart} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Line type="monotone" dataKey="datausage" stroke="#8884d8" />
        </LineChart>
        </ResponsiveContainer> 
      </div>
      <div className="chartBox">
        <h3 className="chartTitle">Daily Usage For Past 7 Days</h3>
        <ResponsiveContainer width="100%" aspect={2/1}>
        <BarChart width={730} height={250}  data={dailyChart} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Bar dataKey="datausage" fill="#8884d8" />
        </BarChart>
        </ResponsiveContainer> 
      </div>
      <div className="chartBox">
        <h3 className="chartTitle">Monthly Usage</h3>
        <ResponsiveContainer width="100%" aspect={2/1}>
        <AreaChart width={730} height={250}  data={monthlyChart} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="pink" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff4f00" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#ff4f00" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="month_name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="datausage" stroke="#8884d8" fillOpacity={1} fill="#8884d8" activeDot={{ r: 8 }} />
        </AreaChart>
        </ResponsiveContainer> 
      </div>
      </div>
  )
}
