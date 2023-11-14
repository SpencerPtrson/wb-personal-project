import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css'
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
import PokemonSpeciesDetailsPage from './pages/PokemonSpecies/PokemonSpeciesDetailsPage.jsx';
import CreatePokemonInstancePage from './pages/PokemonInstances/CreatePokemonInstancePage.jsx';
import EditPokemonInstancePage from './pages/PokemonInstances/EditPokemonInstancePage.jsx';
import TeamListPage from './pages/Teams/TeamListPage.jsx';
import TeamDetailsPage from './pages/Teams/TeamDetailsPage.jsx';



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
              console.log("Loader function for all moves");
              const res = await axios.get('/api/moves');
              console.log(res.data);
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
              path='/pokemoninstances/create'
              element={<CreatePokemonInstancePage />}
              loader={ async() => {
                console.log("Loading all pokemon species as options for creating a new pokemon instance");
                const res = await axios.get('/api/pokemonspecies');
                return { speciesList: res.data }
              }}
            />

            <Route
              path='/pokemoninstances/edit/:pokemonInstanceId'
              element={<EditPokemonInstancePage />}
              loader={ async({ params }) => {
                console.log(params);
                console.log("Loading pokemon instance in preparation for editing:", params.pokemonInstanceId);
                const res = await axios.get(`/api/pokemoninstances/${params.pokemonInstanceId}`)
                console.log(res.data);
                return { pokemonInstance: res.data };
              }}
            />
        // #endregion pokemonInstances

        // #region teams
            <Route 
              path='/teams'
              element={<TeamListPage />}
              loader={ async({ params }) => {
                console.log("Attempting to get teams");
                const res = await axios.get(`/api/teams`)
                return { teams: res.data };
              }}
            />

            <Route
              path='/teams/:teamId'
              element={<TeamDetailsPage />}
              loader={ async({ params }) => {
                console.log(params);
                console.log("Attempting to get teams by id:", params.teamId);
                const res = await axios.get(`/api/teams/${params.teamId}`)
                return { team: res.data };
              }}
            />

            <Route
              path='/teams/users/:userId'
              element={<TeamListPage />}
              loader={ async({ params }) => {
                console.log("Attempting to get teams for user:", params.userId);
                const res = await axios.get(`/api/teams/teamsByUser/${params.userId}`);
                console.log(`Teams for user ${params.userId}:`);
                console.log(res.data);
                return { teams: res.data };
              }}
            />

        // #endregion teams
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
