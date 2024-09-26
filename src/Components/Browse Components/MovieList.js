import MovieCard from "./MovieCard";

const MovieList = ({title,movies}) => {
    const movie = movies || [];
    console.log(movie);
    return(
        <div className="pl-5 pr-5 md:pl-10">
            <h1 className="text-white text-xl font-semibold md:text-4xl pt-10 pb-3">{title}</h1>
            <div className="flex overflow-x-scroll scrollbar-hide">
                <div className="flex gap-3">
                    {movie?.map((movie) => (
                        <MovieCard class key={movie.id} path={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;