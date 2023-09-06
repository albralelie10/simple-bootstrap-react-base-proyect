import React from 'react'

export const SideItem = () => {
  return (
    <div className='hstack gap-3'>
        <div>
            <img
            style={{height:"70px",width:"120px",objectFit:"cover"}}
            />
        </div>
        <div>
            <span className=''>
Lorem ipsum dolor sit amet.            </span>
        </div>
        <div>
            <span><b>Total:</b></span>
            <span>$123.868686</span>
        </div>
    </div>
  )
}
