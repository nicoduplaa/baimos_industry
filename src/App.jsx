
import {BrowserRouter, Navigate, Route, Routes} from  'react-router-dom';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import NavBarBt from './components/NavBar/NavBarBt';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {

  

  return (
    <BrowserRouter>

        <NavBarBt />

        <Routes>
          <Route path='/' element = {<ItemListContainer />} />
          <Route path='/categoria/:cid' element = {<ItemListContainer />} />

          <Route path='/detail/:pid' element = { <ItemDetailContainer />} />

          <Route path='*' element = { <Navigate to = '/' />} />
        
        </Routes>
        
        
    </BrowserRouter>
  )
}

export default App
