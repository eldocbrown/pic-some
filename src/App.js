import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

function App() {
    return (
      <>
        <Router basename={process.env.PUBLIC_URL}>
            <Header />

            <Switch>
              <Route exact path='/' component={Photos}></Route>
              <Route path='/cart' component={Cart}></Route>
            </Switch>
        </Router>
      </>
    )
}

export default App
