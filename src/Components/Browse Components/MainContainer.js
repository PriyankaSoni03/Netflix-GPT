import { useSelector } from "react-redux";
import VedioBackground from "./VedioBackground";
import VedioTitle from "./VedioTitle";

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    // also called as re-rendering 
    if(!movies) return;

    const mainMovie = movies[0];
    // console.log(mainMovie);

    const {original_title,overview,id} = mainMovie;
    // console.log(id);
    return(
        <div className="relative overflow-x-hidden">
            <VedioTitle title = {original_title} overview = {overview} />
            <VedioBackground movieId = {id} />
        </div>
    );
};

export default MainContainer;