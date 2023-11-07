import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, Routes, Route, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'

import axios from 'axios';

import PageContent from './pages/Shared/PageContent.jsx';
import IndexPage from './pages/Shared/IndexPage.jsx';
import ErrorPage from './pages/Shared/ErrorPage.jsx';

import LoginPage from './pages/AccountManagement/LoginPage.jsx'
import CreateAccountPage from './pages/AccountManagement/CreateAccountPage.jsx';

import AllPokemonSpeciesPage from './pages/PokemonSpecies/AllPokemonSpeciesPage.jsx';
import AllPokemonMovesPage from './pages/PokemonMoves/AllPokemonMovesPage.jsx';
import AllPokemonInstancesPage from './pages/PokemonInstances/AllPokemonInstancesPage.jsx';
import PokemonSpeciesDetailsPage from './pages/PokemonSpecies/PokemonSpeciesDetailsPage.jsx'
import CreatePokemonInstancePage from './pages/PokemonInstances/CreatePokemonInstancePage.jsx'



export default function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<PageContent />} errorElement={<ErrorPage />}>            

        <Route index element={<IndexPage />} />

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

        // #region accountManagement
        {/* Login */}
        <Route 
          path='/login'
          element={<LoginPage/>}
        />

        <Route
          path='/createAccount'
          element={<CreateAccountPage />}
        />

        <Route
          path='/logout'
          element={<IndexPage />}
        />
        // #endregion accountManagement

        // #region pokemonInstances
            <Route 
              path='/pokemoninstances'
              element={<AllPokemonInstancesPage />}
              loader={ async () => {
                console.log("Loader function for all pokemon instances");
                const res = await axios.get('/api/pokemoninstances');
                return { pokemoninstances: res.data }
              }}
            />

            <Route
              path='/createPokemonInstance'
              element={<CreatePokemonInstancePage />} 
            />
        // #endregion pokemonInstances

        // #region teams
            <Route 
              path='/teams'
              loader={ async({ params }) => {
                console.log("Attempting to get teams");
                const res = await axios.get(`/api/teams`)
                return { userTeams: res.data };
              }}
            />

            <Route
              path='/teams/:userId'
              loader={ async({ params }) => {
                console.log("Attempting to get teams for user:", params.id);
                const res = await axios.get(`/api/teams/teamsByUser/${params.id}`)
                return { userTeams: res.data };
              }}
            />

        // #endregion teams
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
