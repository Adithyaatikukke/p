import React from 'react'
import './Mobile.css'
function Mobilein() {
  return (
    <>
    <div className='logo'>
         <img className='Monkey' src='/fileimage/Monkey.svg'/>
         <img className='Vector' src="/fileimage/Vector.svg" />
    </div>
    <div className='smallBox'>
      <h1>PICK PLAYER </h1>
      <div className='buttonSection'>
        <button>
          <img src="/fileimage/c.svg" alt="" />
        </button>
        <button>
          <img src="/fileimage/o.svg" alt="" />
        </button>
      </div>
    </div>
    <div className='options'>
      <button>NEW GAME ( VS CPU )</button>
      <button>NEW GAME ( VS HUMAN ) Coming soon</button>
      <button>Invite your friend</button>

    </div>
    </>
    
  )
}

export default Mobilein
