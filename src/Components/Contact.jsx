import React, { useContext } from 'react'
import { Appcontext } from '../Context/Appcontext'

const contact = () => {
  //For consuming the data we use UseContext 
  const {phone,name}=useContext(Appcontext)

  return (
    <div>
      <h1>Contact</h1>
      <h3>Phone:{phone}</h3>
      <h3>Name:{name}</h3>
    </div>
  )
}

export default contact
