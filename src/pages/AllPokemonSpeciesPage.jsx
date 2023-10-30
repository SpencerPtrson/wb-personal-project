import { Link, useLoaderData } from "react-router-dom";


export default function AllPokemonSpeciesPage() {
  const { pokemonspecies } = useLoaderData();

  const movieListItems = movies.map(movie => {
    console.log("Listing movies for All Movies Page:", movie.title)
    return <li key={movie.movieId}>
      <Link to={`/movies/${movie.movieId}`} >{movie.title}</Link>
      </li>;
  })

  return (
    <>
      <h1>All Movies</h1>
      <ul>{movieListItems}</ul>
    </>
  );
}
