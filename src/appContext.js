import React, {useState, useEffect} from 'react'
const AppContext = React.createContext()

const dataURL = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

function AppContextProvider({children}) {

    const [ allPhotos, setAllPhotos ] = useState([])

    // Get images data after 1st render is complete
    useEffect(() => {
      fetch(dataURL)
        .then(response => response.json())
        .then(data => setAllPhotos(data))
    }, [])

    return (
      <AppContext.Provider value={{allPhotos}}>
        {children}
      </AppContext.Provider>
    )
}

export { AppContextProvider, AppContext }
