import React from 'react'

const Banner = ({styleBanner,title,desc}) => {
  return (
    <div className={`${styleBanner} bannerContent py-[50px]`}>
      <h3 className="title text-[30px] font-bold underline italic">{title}</h3>
      <p className='desc'>{desc}</p>
    </div>
  )
}

export default Banner
