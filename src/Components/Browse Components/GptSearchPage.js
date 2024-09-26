import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../../utils/constants";

const GptSearchPage = () => {
    return (
        <div className="relative overflow-x-hidden min-h-screen">
            <div className="absolute inset-0 z-0">
                <img src={BG_URL} className="fixed w-full h-full object-cover" alt="background image" />
                <div className="absolute inset-0 bg-black opacity-30 h-full"></div>
            </div>
            
            <div className="relative z-10"><GptSearchBar /></div>
            <div className="relative z-10"><GptMovieSuggestion /></div>
        </div>
    );
};

export default GptSearchPage;
