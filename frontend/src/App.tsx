import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignUpForm } from './pages/Signup'
import Home from './pages/Home'
import { LoginForm } from './pages/Login'
import { ThemeProvider } from './components/theme-provider'
import { CookiesProvider } from 'react-cookie';
import { RecoilRoot } from 'recoil';
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'
import PostWithId from './pages/PostWithId'
function App() {
  return (
    <>
      <CookiesProvider>
        <RecoilRoot>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <BrowserRouter>
              <Routes>
                <Route element={<Home />} path='/'></Route>
                <Route element={<SignUpForm />} path='/signup' />
                <Route element={<LoginForm />} path='/login' />
                <Route element={<CreatePost />} path='/create-post' />
                <Route element={<Feed />} path='/feed' />
                <Route element={<PostWithId />} path='/post/:id' />
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </RecoilRoot>
      </CookiesProvider>

    </>
  )
}

export default App
