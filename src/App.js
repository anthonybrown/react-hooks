/* Using useRef and useEffect to target a DOM node */
import React, {useRef, useEffect} from 'react'
import VanillaTilt from 'vanilla-tilt'
import './App.css'

function Tilt(props) {
  const tiltRef = useRef()
  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    })
    return () => tiltRef.current.vanillaTilt.destroy()
  }, [])
  
  return (
    <div ref={tiltRef} className='tilt-root'>
      <div className='tilt-child'>{props.children}</div>
    </div>
  )
}

function App() {
  return (
    <div className='totally-centered'>
      <Tilt>
        <div className='totally-centered'>vanilla-tilt.js</div>
      </Tilt>
    </div>
  )
}

export default App;

/* Using useEffect to save state with localStorage */
// import React, {useState, useEffect} from 'react';

// import './App.css';

// function App() {
//   const initialCount = () => (
//     Number(window.localStorage.getItem('count') || 0)
//   )
//   const [count, setCount] = useState(initialCount)
//   const increment = () => setCount(count + 1)
//   useEffect(() => {
//     window.localStorage.setItem('count', count)
//   }, [count])
  
//   return (
//     <div className='App'>
//       <button className='demo' onClick={increment}>
//         {count}
//       </button>
//     </div>
//   )
// }


/* Using hooks instead of a class based component */
// import React, {useState} from 'react';

// function useApp({initialState, step}) {
  //   const [count, setCount] = useState(initialState)
  //   const increment = () => setCount(count + step)
  //   return {count, increment}
  // }
  
// function App() {
//   const {count, increment} = useApp({initialState: 0, step: 1})
//   return (
//     <div className="App">
//       <button className="demo" onClick={increment}>
//         {count}
//       </button>
//     </div>
//   );
// }

