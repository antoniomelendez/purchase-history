import React, { useEffect, useState } from 'react'
import PurchaseHistoryTable from './PurchaseHistoryTable'
import './PurchaseHistory.css';

const PurchaseHistory = () => {
  const [purchaseHistory, setPurchaseHistory] = useState([])
  useEffect(() => {
    fetch("https://idme-interview.herokuapp.com/")
    .then(response => response.json())
    .then(data => setPurchaseHistory(data))
    .catch(error => console.error(error))
  }) 

  return (
    <main>
      <header>Purchases</header>
      {<PurchaseHistoryTable purchaseHistory={purchaseHistory} />}
    </main>
  )
}

export default PurchaseHistory