import { useEffect, useState } from 'react'

import './App.css'
import AddStudent from './components/AddStudent'
import GetStudent from './components/GetStudent'

function App() {
  return (
    <div>
      <AddStudent />
      <GetStudent />
    </div>
  )
}

export default App
