// import React, { useState } from 'react'


// const App = () => {
//   const[player,setPlayer]=useState('Messi');
//   const ChangePlayer=()=>{
//     setPlayer('Ronaldo');
//   }
//   return (
//     <div>
//       <h1>Best Football Player is  {player}</h1>
//       <button onClick={ChangePlayer}>Best</button>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'


// const App = () => {
//   const [count, setCount]=useState(0);

//   const increaseCount=()=>{
//     setCount (prev=>prev + 1);
//   }

//   return (
//     <div>
//      <h1>count: {count}</h1>
//      <button onClick={increaseCount}>Increment</button>
      
//     </div>
//   )
// }

// export default App



//useEffect

// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const[count,setCount]=useState(0);
//   useEffect(()=>{

//     setTimeout(()=>{
//       setCount(count =>count+1);
//     },2000)

//   },[])


//   return (
//     <div>
//       <h1>I have rendered {count} times</h1>
//     </div>
//   )
// }

// export default App




// USE-useEffect
// import React, { useRef } from 'react'
// import './App.css'
// import { useEffect } from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'


// const App = () => {
// const[value,setValue]= useState(0)
// const [count,setCount]=useState(0)
// const Count=useRef(0) 
// useEffect(()=>{
//   Count.current=Count.current +1;
// })
 

// In this use-effect we are not given any dependency . 
// So when their is any change in the state will happen the Use-effect will re-render the compionent
// useEffect(()=>{
  // setCount(prev => prev+1)
  // when we use prev+1 the cont will re-render coutinously . bcz of the state change it will call the use-effect component everytime . 
 // To Solve this issue of infinite loop or re-render we will use  use-Ref Hook
// })

//   return (
//     <>
//     <button onClick={()=>{setValue(prev=>prev-1)}}>-1</button>
//     <h1>{value}</h1>
//     <button onClick={()=>{setValue(prev=>prev+1)}}>+1</button>
//     <h2>Render Count:{Count.current} </h2>
      
//     </>
//   )
// }

// export default App


//function App(){
//Const inputElem=useRef();
//return(
//<>
//<input type="text" ref={inputElem}/>
//<Button>Click Me</Button>
//</>
//)
//}





// //USE-MEMOIZATION
// import React from 'react'
// import { useMemo } from 'react'
// import { useState } from 'react'

// const App = () => {
//  const [number,setNumber]=useState(0)
//   const[counter ,setCounter]=useState(0)

//   function cubNum(num){
//     console.log('calculation Done')
//     return Math.pow(num,3)
//   }
//   // const result =cubNum(number) {add on line number 136}
//   const result=useMemo(()=>{return cubNum(number)},[number])



//   return (
//     <div>
//       <input type="number" value={number} onChange={(e)=>{
//         setNumber(e.target.value)
//       }}/>
//       <h1>cube of the number :{result}</h1>
//       <button onClick={()=>{setCounter(counter+1)}}>Counter ++</button>
//       <h1>counter {counter}</h1>
//     </div>
//   )
// }

// export default App

//USE-CALLBACK HOOK
// import React, { useCallback } from 'react'
// import { useState } from 'react'
// import Header from './Components/Header'

// const App = () => {
//   const [count,setCount]=useState(0)
//   const newFn =useCallback(()=>{},[])
//   return (
//     <div>
//       <Header newFn={newFn}/> 
//       <h1>{count}</h1>
//       <button onClick={()=>{setCount(prev=>prev+1)}}>click Here</button>
//     </div>
//   )
// }

// export default App




//USE-CONTEXT HOOK.

// import React from 'react'
// import Profile from './Components/Profile'
// import Footer from './Components/Footer'

// const App = () => {
//   return (
//     <div>
//       <Profile/>
//       <Footer/>
//     </div>
//   )
// }

// export default App







//USE-REDUCER HOOK

// import React, { useReducer, useState } from 'react'

// const App = () => {

//   const initialState = { count: 0 }   
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case 'increase': {
//         return { count: state.count + 1 }
//       }
//       case 'decrease': {
//         return { count: state.count - 1 }
//       }
//       case 'input': {
//         return { count: action.payload }
//       }
//       default: {
//         return state
//       }
//     }
//   }

//   // const [count ,setCount]=useState(0)
//   const [state, dispatch] = useReducer(reducer, initialState)
//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <button onClick={() => dispatch({ type: 'increase' })}>Increase</button>
//       {/* <button onClick={()=>{setCount(prev=>prev+1)}}>Increase</button> */}
//       <button onClick={() => dispatch({ type: 'decrease' })}>Decrease</button>
//       <br/>
//       <input value={state.count} onChange={(e)=>{dispatch({type:"input",payload:Number(e.target.value)})}}  />
//     </div>
//   )
// }

// export default App


//USE-LAYOUT-EFFECT HOOK

// import React from 'react'
// import { useLayoutEffect } from 'react'
// import { useEffect } from 'react'

// const App = () => {

//   useEffect(()=>{
//     console.log("use-effect")
//   },[])

//   useLayoutEffect(()=>{
//     console.log("use-layout-effect")

//   },[])
//   return (
//     <div>
//       <h1>Abhiyuday</h1>
//       {Array(40000).fill('').map((item,index)=>(<li key ={index}>{Math.pow(Math.random(),10)}</li>))}
//     </div>
//   )
// }
// export default App





//CUSTOM HOOKS
import React from 'react'

const App = () => {
  return (
    <div>
      <h1>Custom Hook</h1>
    </div>
  )
}

export default App
