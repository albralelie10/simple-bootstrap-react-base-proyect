import React from 'react'
import { Outlet } from 'react-router-dom'
import { CanvasItems } from './barra_lateral/CanvasItems'
export const Layout = () => {
  return (
    <div>
        <div className='navbar navbar-expand-sm bg-light mb-3' >
            <div className='container'>
                <div className='navbar-brand'>
                    <img
                    className='d-block'
                    style={{width:"60px",height:"60px"}}
                    src="https://www.liveabout.com/thmb/qLANtswehHZmwDGyni7xUOsvrKE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/earthsymbol-56a047be5f9b58eba4afaf23.jpg"
                    />
                </div>
                <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#example">
                    <span className='navbar-toggler-icon'></span>   
                </button>
                <div className='navbar-collapse collapse w-100' id="example">
                        <div className='navbar-nav w-100'>
                            <div className='d-sm-block d-md-flex gap-3 me-auto'>
                            <div ><a className='nav-link' href="/">Home</a></div>
                            <div><a className='nav-link' href="/about">About</a></div>
                            <div><a className='nav-link' href="/contact">Contact</a></div>
                            <div className='nav-item dropdown'>
                                <a className='nav-link dropdown-toggle' data-bs-toggle="dropdown"></a>
                                <div className='dropdown-menu'>
                                    <a className='dropdown-item'>Item #1</a>
                                    <div className='dropdown-item'>Item #2</div>
                                    <div className='dropdown-item'>Item #3</div>
                                </div>
                            </div>
                            </div>
                            <div className='d-sm-block d-md-flex gap-3'>
                           <div> <a className='nav-link' href="/">Register</a></div>
                            <div className='vr  '></div>
                           <div> <a className='nav-link' href="/">Login</a></div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div className='container'>
            <div 
            className='btn btn-outline-info w-100 m-3'
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            >
                <h5>Open SideBard</h5>
            </div>
            <CanvasItems/>
            <Outlet/>
        </div>
    </div>
    )
}
