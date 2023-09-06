import React from 'react'
import { CartItems } from '../components/CartItems'
export const Home = () => {
  const  cards=[]
  for(let i=0;i<8;i++){
    cards.push(<CartItems/>)
  }
  return (
    <div className='row row-cols-sm-1 row-cols-md-2 row-cols-lg-3'>
      {cards.map((card,index)=><div className='col'
       key={index}>{card}</div>)}
    </div>
  )
}

//https://img2.freepng.es/20180407/lcw/kisspng-asterix-the-gaul-obelix-dogmatix-cartoon-character-5ac8ae8472c913.0252783615231013164702.jpg
