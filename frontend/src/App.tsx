import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let cardWasClicked: boolean = false;
  const title: string = 'scaleseq';

  // baseUrl: string = window.location.hostname + ':5000'; // 45.79.180.125:5000 --> browser adds 'http' later
  // This is a hack. Update later to not use port 5000 but instead routes through '/api'
  // baseUrl: string = window.location.protocol + '//' + window.location.hostname+ ':5000'; // http://45.79.180.125:5000
  // baseUrl: string = 'http://localhost:5000'; // only works in development

  // Frequency
  const minFreq: number = 220.0;
  const maxFreq: number = 1000.0;
  let freq: number = 440.0;

  // Scale type
  const scaleTypes: string[] = ['major', 'minor'];
  let scaleType = scaleTypes[0];

  // Duration in seconds
  const minDuration: number = 0.5;
  const maxDuration: number = 10.0;
  let duration: number = 0.5;

  return (
    <>
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo"/>
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo"/>
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <svg
        height="485.677"
        id="clouds"
        viewBox="0 0 2611.084 485.677"
        width="2611.084"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Gray Clouds Background</title>
        <path
          d="M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z"
          fill="#eee"
          transform="translate(142.69 -634.312)"
        />
      </svg>
    </>
  )
}

export default App
