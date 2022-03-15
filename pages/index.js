import axios from "axios";
import { Hero } from "../components/Hero";
import PopularMovie from "../components/PopularMovie";
import { server } from "../config";

export default function Home({ movies }) {
  console.log(movies);
  return (
    <div className="bg-gray-700">
      <Hero></Hero>
      <PopularMovie movies={movies.results}></PopularMovie>
    </div>
  );
}

export async function getStaticProps() {
  const resp = await axios.get(
    `${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  const movies = resp.data;

  return {
    props: { movies },
  };
}
