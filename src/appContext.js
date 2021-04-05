import React, {useState, useEffect} from 'react'
import db from './utils/firebase'

const AppContext = React.createContext()

function AppContextProvider({children, firebaseConfig}) {

    const [ allPhotos, setAllPhotos ] = useState([])
    const [ cartItems, setCartItems ] = useState([])

    // Get images data after 1st render is complete
    useEffect(() => {
      const itemsRef = db.ref('photos')
      itemsRef.on('value', (snapshot) => {
        let photos = snapshot.val();
        let newState = [];
        for (let photo in photos) {
          newState.push({
            url: photos[photo],
            id: photo,
            isFavorite: false
          });
        }
        setAllPhotos(newState)
      })
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
