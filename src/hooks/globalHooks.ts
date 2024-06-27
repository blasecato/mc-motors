import { useContext } from 'react'

import GlobalContext from '../context/globalContext'

const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export default useGlobalContext
