import React, {useState, useEffect} from 'react'
const AppContext = React.createContext()

const dataURL = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

function AppContextProvider(props) {

    const [ context, setContext ] = useState({
      photos: []
    })

    function changeContext() {
      setContext({
        photos: []
      })
    }

    useEffect(() => {
      fetch(dataURL)
        .then(response => response.json())
        .then(data => {
          setContext({
            photos: data
          })
        })
    }, [])

    return (
      <AppContext.Provider value={{context, changeContext}}>
        {props.children}
      </AppContext.Provider>
    )
}

export { AppContextProvider, AppContext }
