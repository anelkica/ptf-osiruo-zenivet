import { useState } from 'react'
import { useNavigate } from 'react-router'

import './Landing.css'
import Button from '../components/Button.jsx'

function App() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Dobrodošli na OSiRuO</h1>
      <Button text="OK" onClick={() => navigate("/app")} />
    </>
  )
}

export default App
