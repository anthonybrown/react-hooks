/* Stop watch, using useReducer over useState */

// In more complex complex components, having a useState for 
// every item of state in the component might be a little bit much.
// The useReducer hook let's us use a reducer like in Redux.
import React, {useReducer, useRef, useEffect} from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'LAPSE':
      return {
        ...state,
        lapse: action.now - action.startTime,
      }
    case 'TOGGLE_RUNNING':
      return {
        ...state,
        running: !state.running,
      }
    case 'CLEAR':
      return {
        ...state,
        running: false,
        lapse: 0,
      }
    default:
      return state
  }
}

function Stopwatch() {
  const [{running, lapse}, dispatch] = useReducer(reducer, {
    running: false,
    lapse: 0,
  })
  
  const intervalRef = useRef(null)

  useEffect(() => {
    return () => clearInterval(intervalRef.current)
  }, [])

  function handleRunClick() {
    if (running) {
      clearInterval(intervalRef.current)
    } else {
      const startTime = Date.now() - lapse
      intervalRef.current = setInterval(() => {
        dispatch({type: 'LAPSE', now: Date.now(), startTime})
      }, 0)
    }
    dispatch({type: 'TOGGLE_RUNNING'})
  }

  function handleClearClick() {
    clearInterval(intervalRef.current)
    dispatch({type: 'CLEAR'})
  }
  
  return (
    <div style={{textAlign: 'center'}}>
      <label
        style={{
          fontSize: '5rem',
          display: 'block',
        }}
      >
        {lapse} ms
      </label>
      <button
        onClick={handleRunClick} 
        style={buttonStyles}
      >
        {running ? 'Stop' : 'Start'}
      </button>
      <button
        onClick={handleClearClick} 
        style={buttonStyles}
      >
          Clear
      </button>
    </div>
  )
}

const buttonStyles = {
  border: '1px solid #ccc',
  background: '#fff',
  fontSize: '2em',
  padding: 15,
  margin: 5,
  width: 200,
  outline: 0,
}


function App() {
  return <Stopwatch />
}

export default App;


// import React, {useState, useRef, useEffect} from 'react'

// function Stopwatch() {
//   const [lapse, setLapse] = useState(0)
//   const [running, setRunning] = useState(false)
//   const intervalRef = useRef(null)

//   useEffect(() => {
//     return () => clearInterval(intervalRef.current)
//   }, [])

//   function handleRunClick() {
//     if  (running) {
//       clearInterval(intervalRef.current)
//     } else {
//       const startTime = Date.now() - lapse
//       intervalRef.current = setInterval(() => {
//         setLapse(Date.now() - startTime)
//       }, 0)
//     }
//     setRunning(!running)
//   }

//   function handleClearClick() {
//     clearInterval(intervalRef.current)
//     setLapse(0)
//     setRunning(false)
//   }

//   return (
//     <div style={{textAlign: 'center'}}>
//       <label
//         style={{
//           fontSize: '5rem',
//           display: 'block',
//         }}
//       >
//         {lapse} ms
//       </label>
//       <button
//         onClick={handleRunClick} 
//         style={buttonStyles}
//       >
//         {running ? 'Stop' : 'Start'}
//       </button>
//       <button
//         onClick={handleClearClick} 
//         style={buttonStyles}
//       >
//           Clear
//       </button>
//     </div>
//   )
// }

// const buttonStyles = {
//   border: '1px solid #ccc',
//   background: '#fff',
//   fontSize: '2em',
//   padding: 15,
//   margin: 5,
//   width: 200,
//   outline: 0,
// }


// function App() {
//   return <Stopwatch />
// }

// export default App;

/* Using useRef and useEffect to target a DOM node */
// import React, {useRef, useEffect} from 'react'
// import VanillaTilt from 'vanilla-tilt'
// import './App.css'

// function Tilt(props) {
//   const tiltRef = useRef()
//   useEffect(() => {
//     VanillaTilt.init(tiltRef.current, {
//       max: 25,
//       speed: 400,
//       glare: true,
//       'max-glare': 0.5,
//     })
//     return () => tiltRef.current.vanillaTilt.destroy()
//   }, [])
  
//   return (
//     <div ref={tiltRef} className='tilt-root'>
//       <div className='tilt-child'>{props.children}</div>
//     </div>
//   )
// }

// function App() {
//   return (
//     <div className='totally-centered'>
//       <Tilt>
//         <div className='totally-centered'>vanilla-tilt.js</div>
//       </Tilt>
//     </div>
//   )
// }

// export default App;

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

