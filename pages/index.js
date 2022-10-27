import React from 'react'

export default function Home() {
  return (
<>
  herobanner
  <div>
    <h1>Best Selling products</h1>
    <p>Speakers of many variations</p>
  </div>
  <div>
    {['p1','p2'].map((p)=>p)}
  </div>
</>
  )
}
