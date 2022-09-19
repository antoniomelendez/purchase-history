import React from 'react'
import ellipsis from '../assets/ellipsis-v.png'


const dateFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
const dateFormatter = new Intl.DateTimeFormat('en-US', dateFormatOptions)
const currencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})

const PurchaseHistoryTable = ({ purchaseHistory }) => {
  const tableData = (
    purchaseHistory.map((data) => {
      return (
        <tr key={data.id}>
          <td className='edge-td'></td>
          <td className='name'>{data.name}</td>
          <td><img className='img-location' alt={`location-${data.id}`} src={data.location} /></td>
          <td className='date'>{dateFormatter.format(new Date(data.purchaseDate))}</td>
          <td><div className={`category ${data.category}`}>{data.category}</div></td>
          <td className='description'>{data.description}</td>
          <td className='price'>{currencyFormatter.format(data.price)}</td>
          <td className='edge-td'><img alt='ellipsis' src={ellipsis} /></td>
        </tr>
      )
    })
  )
  return (
    <table>
      <thead>
        <tr>
          <th className='blank-header'></th>
          <th>Name</th>
          <th>Location</th>
          <th>Purchase Date</th>
          <th>Category</th>
          <th>Description</th>
          <th>Price</th>
          <th className='blank-header'></th>
        </tr>
      </thead>
      <tbody>
        {tableData}
      </tbody>
    </table>
  )
}

export default PurchaseHistoryTable