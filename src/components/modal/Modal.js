import React from 'react'

const Modal = ({active, setActive, children}) => {
  return (
    <div className={active && 'h-screen w-screen bg-black-shadow fixed top-0 left-0 flex items-center justify-center scale-100'}>
        <div className={active ? 'bg-white w-128 h-128' : 'hidden'}>
            <h1>{children}</h1>
        </div>
    </div>
  )
}

export default Modal