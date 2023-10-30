import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import App from './App.jsx';
import AllPokemonSpeciesPage from './pages/AllPokemonSpeciesPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>

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


    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
