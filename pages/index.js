import React from 'react'
import {HeroBanner, LayOut, Product, FooterBanner, NavBar, Footer} from '../components'
import {client} from '../lib/client'
export default function Home({products,bannerData}) {
  return (
<>
  <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
  {/* {console.log(bannerData)} */}
  <div className='products-heading'>
    <h1>Best Selling products</h1>
    <p>Speakers of many variations</p>
  </div>
 
  <div>
    {products?.map((p)=>p.name)}
  </div>
  <Footer/>
</>
  )
}
export const getServerSideProps=async()=>{
  const query='*[_type=="product"]';
  const products=await client.fetch(query);

  const bannerQuery='*[_type=="banner"]';
  const bannerData=await client.fetch(bannerQuery);

  return{
    props:{products,bannerData}
  }
}
