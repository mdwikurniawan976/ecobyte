import React from 'react'


const Konten3 = ({subtitle, title, description, style, imgSrc, imgUrl, delay}) => {
  return (
    <div>
        <div className="container py-3" style={style}>
            <div className="row">
                <div className="col-sm-12 col-md-5" data-aos="zoom-in">
                    <img className='w-100 mb-3 no-select' src={imgSrc} alt={imgUrl} style={{filter: 'drop-shadow(8px 8px 16px rgba(0, 0, 0, 0.3))' }}/>
                </div>
                <div className="col-sm-12 col-md-7 align-self-center" data-aos="fade-up-left">
                    <p className="text-success">{subtitle}</p>
                    <h3 className='mb-4'>{title}</h3>
                    <p>{description}</p>
                    <a href="#" className='link-success'>Learn More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Konten3