import { useState } from 'react'
import './App.css'

const [users, setUsers] = useState([])

function App() {

  const addUser = (newUser) =>{
    setUsers([...users,{...newUser,id: `n${users.length +1}`}])
  }

  return (
    
  )
}

export default App
