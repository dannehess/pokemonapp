import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PokemonContextProvider } from './context/PokemonContext';
import Header from './components/Header';
import Search from './views/Search';

const App = () => {
  
  return(
    <PokemonContextProvider>
    <div id="wrapper">
      <Header />
    <Router>
         <Routes>
            <Route exact path='/' element={<Search />} />
            <Route exact path='/pokemonapp' element={<Search />} />
        </Routes>
    </Router>
    </div>
    </PokemonContextProvider>
  )
}

export default App;