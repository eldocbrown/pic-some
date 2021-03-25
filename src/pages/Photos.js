import React, { useContext } from 'react'

import { AppContext } from '../appContext'
import Image from '../components/Image'
import { getClass } from '../utils/index'

function Photos() {

    const { allPhotos } = useContext(AppContext)

    return (
          <main className="photos">
            {
              allPhotos.map((ph, i) => <Image key={ph.id} img={ph} className={getClass(i)} />)
            }
          </main>
    )
}

export default Photos
