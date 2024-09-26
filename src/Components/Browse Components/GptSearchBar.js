import { useDispatch, useSelector } from "react-redux";
import lang from "../../utils/language";
import { useRef } from "react";
import { API_OPTIONS, GEMINI_KEY } from "../../utils/constants";
import { addGptMovies } from "../../Redux/gptSlice";
import { GoogleGenerativeAI } from '@google/generative-ai';

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.langauge);
    const searchText = useRef(null);
    const dispatch = useDispatch();


    // search movie in TMDB
    const searchMovieTMDB = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await data.json();

        return json.results; 
    }


    const handleGptSearchClick = async () => {
        // console.log(searchText.current.value);
        
        const genAI = new GoogleGenerativeAI(GEMINI_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const gptQuery = "Act as a movie Recommendation system and suggest some movies for the query : " + 
                    searchText.current.value +
                    ". only give 5 movie names, comma seperated like example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi mil gaya";
                    
        const result = await model.generateContent(gptQuery);
        const response = await result.response;
        // console.log(response?.candidates?.[0]?.content?.parts?.[0]);
        const gptSuggestedMovies = response?.candidates?.[0]?.content?.parts?.[0]?.text;

        if(!gptSuggestedMovies){
            // console.error("No movie suggestions received from GPT.");
            return;
        }

        // Output of below line: Andaz Apana Apana, Hera Pheri, Chupke Chupke, Jane Bhi Do Yaaro, Padosan
        // so this is a string
        // console.log(gptSuggestedMovies);

        // we will convert the above string into array
        // Output for below line: [Andaz Apana Apana, Hera Pheri, Chupke Chupke, Jane Bhi Do Yaaro, Padosan]
        const gptMoviesArray = gptSuggestedMovies.split(", ");
        // console.log(gptMoviesArray);

        // For each movie I will search it in TMDB API
        const promiseArray = gptMoviesArray.map(movie => searchMovieTMDB(movie));

        const tmdbResults = await Promise.all(promiseArray);
        // console.log(tmdbResults);

        dispatch(addGptMovies({movieNames: gptMoviesArray, movieResults: tmdbResults}));
    };

    return(
        <div className="flex justify-center items-center">
            <form className="absolute p-4 md:p-4 bg-black top-48" onSubmit={(e) => e.preventDefault()}>
                <input type="text" className="p-4 w-[300px] md:w-[550px]" ref={searchText} placeholder={lang[langKey].gptSearchPlaceholder}></input>
                <button className="bg-red-700 px-2 p-4 md:px-12 "
                    onClick={handleGptSearchClick}
                >
                    {lang[langKey].search}
                </button>
            </form>
        </div> 
    );
};

export default GptSearchBar;

