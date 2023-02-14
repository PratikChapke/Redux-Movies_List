import React from 'react'

// rfce

class Navbar extends React.Component {
    render( ) {
  return (
    <div className='nav'>
        <div className='search-container'>
            <input placeholder='search movies '/>
            <button id="serach-btn">Search</button>
        </div>
    </div>
  )
 }
}

export default Navbar