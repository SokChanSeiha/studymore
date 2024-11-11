import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hi from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hi />
  </StrictMode>,
)

// import ReactDOM from "react-dom/client";
// import App from "./App";
// const rootELement = document.getElementById("root");
// const root = ReactDOM.createRoot(rootElement);
// root.render(<App/>);