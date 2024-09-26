import { useDispatch, useSelector } from "react-redux";
import { addTopRated } from "../Redux/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

// Fetch Data from TMDB API and update store

const useTopRated = () => {
    const dispatch = useDispatch();
    const topRated = useSelector(store => store.movies.topRatedMovies);

    const getTopRated = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",API_OPTIONS);
        const json = await data.json();
        console.log(json.results);
        dispatch(addTopRated(json.results));
    };
    
    useEffect(() => {
        !topRated && getTopRated();
    },[]);
}

export default useTopRated;
