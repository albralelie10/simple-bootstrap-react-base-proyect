import React from 'react'
import { SideItem } from './SideItem'
export const CanvasItems = () => {
  const sideItems=[]
  for(let i=0;i<6;i++){
      sideItems.push(<SideItem/>)
  }
  return (
    <div className='offcanvas offcanvas-start' id="offcanvasExample"
    style={{width:"500px"}}
    >
        <div className='offcanvas-header'>
          
          <h5>Lorem, ipsum dolor.</h5>
         
          <button className='btn btn-close'
          data-bs-dismiss="offcanvas"
          ></button>
        </div>
      <div className='offcanvas-body'> 
          <div className='vstack gap-3'>
              {sideItems.map(item=>(<>{item}</>))}
          </div>
      </div>
    </div>
  )
}
