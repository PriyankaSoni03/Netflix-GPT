import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMoviesSuggestion = () => {
    const { movieNames, movieResults } = useSelector((store) => store.gpt);
    if (!Array.isArray(movieNames)) return null;

    return (
        <div className="mt-[320px] md:p-4 ml-2 md:ml-20 bg-black text-white bg-opacity-90 w-[395px] md:w-[1230px] overflow-x-hidden">
            <div className="">
                {
                    movieNames.map((movie, index) => (
                        <MovieList key={movie} title={movie} movies={movieResults[index]} />
                    ))
                }
            </div>
        </div>
    );
};

export default GptMoviesSuggestion;
