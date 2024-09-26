import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../Redux/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

// 646683
const useMovieTrailer = ({movieId}) => {
    const dispatch = useDispatch();
    const trailer = useSelector(store => store.movies.trailer);

    const getMoviesVedio = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS);
        const json = await data.json();

        // console.log(json);
        const filterData = json.results?.filter((vedio) => vedio.type === "Trailer");
        const trailer = filterData?.length ? filterData[0] : json.results?.[0];

        dispatch(addTrailer(trailer));

        // setTrailerId(trailer.key);
        // console.log(trailer);
    }

    useEffect(() => {
        !trailer && getMoviesVedio();
    },[]);
}

export default useMovieTrailer;