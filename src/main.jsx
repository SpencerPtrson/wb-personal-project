import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import axios from 'axios';
import App from './App.jsx';
import IndexPage from './pages/IndexPage.jsx';



import AllPokemonSpeciesPage from './pages/AllPokemonSpeciesPage.jsx';
import PokemonSpeciesDetailsPage from './pages/PokemonSpeciesDetailsPage.jsx'
import LoginPage from './pages/LoginPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<IndexPage />} />

      {/* All Pokemon Species */}
      <Route 
        path='pokemonspecies'
        element={<AllPokemonSpeciesPage />}
        loader={ async () => {
          console.log("Loader function for all pokemon species");
          const res = await axios.get('/api/pokemonspecies');
          return { pokemonspecies: res.data }
        }}
      />

      {/* Single Movie */}
      <Route
        path="pokemonspecies/:id"
        element={<PokemonSpeciesDetailsPage />}
        loader={async({ params }) => {
          console.log("Attempting to get pokemon species details for species:", params.id);
          const res = await axios.get(`/api/pokemonspecies/${params.id}`)
          return { pokemonspecies: res.data };
        }}
      />

      {/* Login */}
      <Route 
        path='login'
        element={<LoginPage/>}
      />

    </Route> 
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
