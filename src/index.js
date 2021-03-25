import React from "react"
import ReactDOM from "react-dom"
import './styles.css';
import App from "./App"
import { AppContextProvider } from './appContext'

ReactDOM.render(<AppContextProvider><App /></AppContextProvider>, document.getElementById("root"))
