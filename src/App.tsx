import { useEffect } from "react"
import MoviesAPI from "./services/APIs/movieAPI";

const moviesAPI = new MoviesAPI(5000);

function App() {
  useEffect(() => {
    const fetchNowPlaying = async () => {
      await moviesAPI.GetNowPlaying();
    };

    fetchNowPlaying();
  }, []);

  return (
    <>
      <h1>Initializing project</h1>
    </>
  )
}

export default App
