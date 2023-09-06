import React from 'react'

export const CartItems = () => {
  return (
<div className='card text-center'>
    <div className='card-header'>
            <div className='card-img'>
                <div className='carousel slide'
                id="carouselExample"
                >
                    <div className='carousel-inner'>
                        <div className='carousel-item active'>
                            <div className='d-flex justify-content-center align-items-center text-danger'
                            style={{height:"400px"}}
                            >
                            <div className='spinner-border' 
                            style={{width:"3rem",height:"3rem"}}
                            >
                                <span className='visualy-hidden'></span>
                            </div>
                            </div>
                        </div>
                        <div className='carousel-item active'>
                            <img
                            src="https://www.cartonionline.com/immagini/asterix/asterix.jpg"
                            className='d-block'
                            style={{objectFit:"cover",width:"100%",height:"400px"}}
                            />
                        </div>
                        <div className='carousel-item active'>
                            <img
                            src="https://1.bp.blogspot.com/-jOGYcDNNbhM/UdVHDS9sKRI/AAAAAAAAAIs/QVtuSoOvL_8/s1600/0Mlju.jpg"
                            className='d-block'
                            style={{objectFit:"cover",width:"100%",height:"400px"}}
                            />
                        </div>
                        <div className='carousel-control-prev'
                        data-bs-target="#carouselExample"
                        data-bs-slide="slide"
                        >
                            <span className='carousel-control-prev-icon'>
                            </span>
                        </div>
                        <div className='carousel-control-next'
                        data-bs-target="#carouselExample"
                        data-bs-slide="slide"
                        >
                            <span className='carousel-control-next-icon'>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card-title'>
                <h4>Lorem, ipsum dolor.</h4>
            </div>
    </div>
    <div className='card-body'>
        <div className='accordion accordion-start'>
            <div className='accordion-item'>
                <div className='accordion-header'>
                    <div className='accordion-button'
                    data-bs-toggle="collapse"
                    data-bs-target="#accordionExample"
                    ><h5>Lorem, ipsum dolor.</h5>
                    </div>
                </div>  
            </div>
            <div className='accordion-collapse collapse show'
            id="accordionExample"
            >
                <div className='accordion-body'>
                    <span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque laborum praesentium, nobis eaque qui explicabo dolor dicta eius, deleniti illum eligendi repudiandae aspernatur voluptate, nam deserunt illo sit dignissimos nisi? Consectetur, autem nostrum.
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}
