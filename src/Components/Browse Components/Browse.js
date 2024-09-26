import HeaderBrowse from "./HeaderBrowse";
import useNowPlayingMovies from "../../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";
import '../../index.css';
import usePopularMovies from "../../Hooks/usePopularMovies";
import useTrendingMovies from "../../Hooks/useTrendingMovies";
import useUpcomingMovies from "../../Hooks/useUpcomingMovies";
import useTopRated from "../../Hooks/useTopRated";

const Browse = () => {
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useTrendingMovies();
    useUpcomingMovies();
    useTopRated();

    return(
        <div className="relative overflow-x-hidden">
            <HeaderBrowse/>

            {
                showGptSearch ? 
                <GptSearchPage/> :
                (<> 
                        <MainContainer />
                        <SecondaryContainer />
                </>)
            }
        </div>
    );
};

export default Browse; 