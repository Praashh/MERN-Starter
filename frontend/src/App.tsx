import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignUpForm } from './pages/Signup'
import  Home  from './pages/Home'
import { LoginForm } from './pages/Login'
import { ThemeProvider } from './components/theme-provider'
import CreatePost from './pages/CreatePost'
function App() {

  return (
    <>
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
          <Routes>
            <Route element={<Home/>} path='/'></Route>
            <Route element={<SignUpForm/>} path='/signup'/>
            <Route element={<LoginForm/>} path='/login'/>
            <Route element={<CreatePost/>} path='/create-post'/>
          </Routes>
      </BrowserRouter>
     </ThemeProvider>
    </>
  )
}

export default App
