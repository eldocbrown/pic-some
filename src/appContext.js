import React, {useState} from 'react'
const AppContext = React.createContext()

function AppContextProvider(props) {
    const [ context, setContext ] = useState("")

    function changeContext() {
      setContext("")
    }

    return (
      <AppContext.Provider value={{context, changeContext}}>
        {props.children}
      </AppContext.Provider>
    )
}

export { AppContextProvider, AppContext }
