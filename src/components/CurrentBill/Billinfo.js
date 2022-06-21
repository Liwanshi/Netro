import "./Billinfo.css"
import axios from "axios"
import { useState,useEffect } from "react"
import React from 'react'

export default function Billinfo() {
  const [bill,setBill] = useState(null)
  const fetchMonthlyUsage = async () => {
    const account = window.location.search
    const ratingGroupObject = await axios.get(`/.netlify/functions/getAccountData${account}`)
    console.log(ratingGroupObject)
    const billGroup = Object.values(ratingGroupObject)[0]
    console.log(billGroup)
    const results = await axios.get(`/.netlify/functions/getBill?billGroup=${billGroup}`)
    setBill(Object.values(results)[0][0].charge)
  }
  useEffect(() => {
    fetchMonthlyUsage()
  }, [])


  return (
    <div className="bill">
      <div className="billItem">
        <span className="billTitle">Current Bill amount</span>
          <div className="billConsumtionContainer">
          <span className="billConsumption">${bill}</span>
         </div>
      </div>
    </div>
  )
}
