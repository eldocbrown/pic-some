import {useState, useRef, useEffect} from 'react'

function useHover(initialValue) {

  const [ hovered, setHovered ] = useState(initialValue)

  const enter = () => setHovered(true)

  const leave = () => setHovered(false)

  const ref = useRef(null)

  useEffect(() => {
    const myRef = ref.current

    myRef.addEventListener('mouseenter', enter)
    myRef.addEventListener('mouseleave', leave)

    return () =>
     {
      myRef.removeEventListener('mouseenter', enter)
      myRef.removeEventListener('mouseleave', leave)
    }
  }, [])

  return [ hovered, ref ]
}

export default useHover
