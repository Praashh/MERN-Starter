import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginForm } from './pages/Signup'
function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route element={<LoginForm/>} path='/signup'/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
