import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, Routes, Route, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'

import axios from 'axios';

import IndexPage from './pages/IndexPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import AllPokemonSpeciesPage from './pages/AllPokemonSpeciesPage.jsx';
import PokemonSpeciesDetailsPage from './pages/PokemonSpeciesDetailsPage.jsx'
import AllPokemonMovesPage from './pages/AllPokemonMovesPage.jsx';
import LoginPage from './pages/LoginPage.jsx'

export default function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
          <Route path='/' element={<IndexPage />} errorElement={<ErrorPage />}>            
            // #region species
              {/* All Pokemon Species */}
              <Route 
                path='/pokemonspecies'
                element={<AllPokemonSpeciesPage />}
                loader={ async () => {
                  console.log("Loader function for all pokemon species");
                  const res = await axios.get('/api/pokemonspecies');
                  return { pokemonspecies: res.data }
                }}
              />

              {/* Single Species */}
              <Route
                path="/pokemonspecies/:id"
                element={<PokemonSpeciesDetailsPage />}
                loader={async({ params }) => {
                  console.log("Attempting to get pokemon species details for species:", params.id);
                  const res = await axios.get(`/api/pokemonspecies/${params.id}`)
                  return { pokemonspecies: res.data };
                }}
              />
            //#endregion species

            // #region moves
              {/* All Moves */}
              <Route 
                path='/moves'
                element={<AllPokemonMovesPage />}
                loader={ async () => {
                  console.log("Loader function for all pokemon species");
                  const res = await axios.get('/api/moves');
                  return { moves: res.data }
                }}
              />
            // #endregion moves
      
            {/* Login */}
            <Route 
              path='/login'
              element={<LoginPage/>}
            />
          </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
