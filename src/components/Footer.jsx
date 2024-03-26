import React from 'react'

const Footer = () => {
    const getCurrentEveryYear = new Date().getFullYear();
  return (
    <footer className='bg-black p-[10px] text-white'>
      <p>
        &copy; Copyright {getCurrentEveryYear}
      </p>
    </footer>
  )
}

export default Footer
