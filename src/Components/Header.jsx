import React from 'react'

const Header = () => {
    console.log("Rendered")
  return (
    <div>
      <h1>This is your Header</h1>
    </div>
  )
}

export default React.memo(Header)
// export default Header
