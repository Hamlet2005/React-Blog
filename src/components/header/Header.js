import React from 'react'
import Logo from './logo/Logo'
import Menu from './menu/Menu'

const Header = () => {
  return (
    <div className='h-24 bg-neutral-900'>
      <div className='w-full md:w-5/6 flex justify-between my-0 mx-auto '>
        <Logo/>
        <Menu/>
      </div>
    </div>
  )
}

export default Header