import React from 'react';

const CustomerDetail = ({customer}) => {
  if (customer === null) {
      return(
          <p>Customer not found...</p>
      )
  }
  return (
      <div  id="data-detail">
          <h1>Customer Details:</h1>
          <h2>In a Table:</h2>
          <table className="data-table"><tr>
          <td><h3>Name:</h3></td>
          <td>{customer.name}</td>
          </tr><tr>
          <td><strong>ID:</strong></td>
          <td>{customer.id}</td>
          </tr><tr>
          <td><strong>Phone:</strong></td>
          <td>{customer.phone}</td>
          </tr><tr>
          <td><strong>Email:</strong></td>
          <td>{customer.email}</td>
          </tr></table>
<div className="customer-detail">
<h2>In Paragraphs:</h2>
<h3>Name:</h3>
<p>{customer.name}</p>
<h3>ID:</h3>
<p>{customer.id}</p>
<h3>Phone:</h3>
<p>{customer.phone}</p>
<h3>Email:</h3>
<p>{customer.email}</p>
</div>
      </div>
  )
}
export default CustomerDetail;
