import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increment,decrement,reset,AddBy10 } from '../features/Counter'
import { logout } from '../features/User'



export const DisplayCounter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()



  return (
    <div>
    <h1> Counter App</h1>
    <h1> {count}</h1>
    <button onClick={()=> dispatch(increment()) }> Increment</button>

    <button onClick={()=>  dispatch(decrement())}> Decrement </button>
   
    <button onClick={()=>  dispatch(reset()) }>Reset </button>
   
    <button onClick={()=>  dispatch(AddBy10()) }>AddBy10 </button>
    <br />
    <button onClick={()=>  dispatch(logout()) }>Logout </button>
  
    </div>
  )
}
