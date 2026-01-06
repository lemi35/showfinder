import React from 'react'

function Header(props) {
  const { handleToggleMenu } = props


  return (
    <header>
      <button onClick={handleToggleMenu} className="open-nav-button">
                <i className="fa-solid fa-bars">Find a TV show</i>
            </button>
      
    </header>
  )
}

export default Header;