import "./Billitem.css";
import React  from 'react';
import axios from "axios"
import { useState,useEffect } from "react"

export default function Billitem() {
  const [accountno,setAccount] = useState(null)
  const fetchAccountNo = async () => {
    const account = window.location.search
    const results = await axios.get(`/.netlify/functions/getAccountData${account}`)
    console.log(results)
    setAccount(Object.values(results)[0][0].account)
  }
  useEffect(() => {
    fetchAccountNo()
  }, [])

  return (
    <div className="AccountItem">
        <h3>Account Details: </h3>
        <p className="billAccountTitle"> Account Number: <span className="billConsumption">{accountno}</span></p>
        <p>Your next payment is scheduled for Auto pay on 07/01/2022</p>
    </div>
  )
}