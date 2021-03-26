import React, {useState, useEffect} from 'react'
const AppContext = React.createContext()

const dataURL = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

function AppContextProvider({children}) {

    const [ allPhotos, setAllPhotos ] = useState([])
    const [ cartItems, setCartItems ] = useState([])

    // Get images data after 1st render is complete
    useEffect(() => {
      fetch(dataURL)
        .then(response => response.json())
        .then(data => setAllPhotos(data))
    }, [])

    const toggleFavorite = (id) => { // Loop through all photos and flip the isFavorite property only on the photo with the id from the parameter
      setAllPhotos((prevAllPhotos) => prevAllPhotos.map((ph) => ph.id === id ? {...ph, isFavorite: !ph.isFavorite} : ph))
    }

    const addItemToCart = (item) => {
      setCartItems((prevCartItems) => [...prevCartItems, item])
    }

    const removeItemFromCart = (item) => {
      setCartItems((prevCartItems) => prevCartItems.filter((ph) => ph.id !== item.id))
    }

    return (
      <AppContext.Provider value={{allPhotos, toggleFavorite, cartItems, addItemToCart, removeItemFromCart}}>
        {children}
      </AppContext.Provider>
    )
}

export { AppContextProvider, AppContext }
