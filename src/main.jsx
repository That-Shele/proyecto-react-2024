import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import "./main.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pagina_404 from './components/404.jsx'
import Cuadricula from './components/Cuadricula.jsx'
import Home from './components/Home.jsx'
import CriptoPage from './components/CriptoPage.jsx'

createRoot(document.getElementById('root')).render(
  <>
  
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route index element={<Home />}/>
      </Route>
      <Route path='/criptomonedas' element={<App/>}>
        <Route index element={<Cuadricula/>}/>
        <Route path=':id' element={<CriptoPage/>}/>
      </Route>
      <Route path='*' element={<Pagina_404/>}/>
    </Routes>
  </BrowserRouter>
  </>
)
