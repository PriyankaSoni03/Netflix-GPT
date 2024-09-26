import { CARD_IMG_URL } from "../../utils/constants";

const MovieCard = ({path}) => {
    if(!path) return null;
    return(
        <div className="w-[140px] md:w-[160px]">
            <img className="h-48 md:h-60 rounded-md object-fill" alt="Images" src={CARD_IMG_URL + path} />
        </div>
    );
};

export default MovieCard;