import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store) => (store.movies));
    return( 
        movies.nowPlayingMovies && (
            <div className="bg-black">
                <div className="-mt-[160px] md:-mt-[230px] relative">
                    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                    <MovieList title={"Trending"} movies={movies.trending} />
                    <MovieList title={"Popular"} movies={movies.popularMovies} />
                    <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
                    <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
                </div>
            </div>
        )
    );
};

export default SecondaryContainer;