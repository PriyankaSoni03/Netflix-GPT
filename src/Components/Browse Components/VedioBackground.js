import useMovieTrailer from "../../Hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VedioBackground = ({movieId}) => {

    // there are 2 methods to use trailer variable 
    // 1st is: state variable 
    // const [trailerId, setTrailerId] = useState();
    
    // 2nd method is to subscribe to the store and then use it 
    useMovieTrailer({movieId});
    const trailerVedio = useSelector(store => store.movies?.trailer);

    return(
        <div className="w-screen aspect-video">
            {/* Adjust vedio accordingly */}
            {/* <iframe className="w-[200%] h-[115%] -ml-[55%] -mt-[127px]" */}
            {/* <iframe className="w-[250%] h-[115%] -ml-[80%] -mt-32" */}
            {/* <iframe className="w-[300%] h-[100%] -ml-[100%] -mt-[110px]"  */}
            <iframe className="h-[210%] -mt-[70px]  w-[100%] md:w-[300%] md:h-[105%] md:-ml-[100%] md:-mt-[110px]" 
                src={`https://www.youtube.com/embed/${trailerVedio?.key}?autoplay=1&color=white&mute=1&controls=0&modestbranding=0&rel=0&showinfo=0&iv_load_policy=3&fs=0&playsinline=1&enablejsapi=1&disablekb=1&loop=1&playlist=${trailerVedio?.key}`}
                title="YouTube video player" 
                allow="autoplay; encrypted-media" 
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ pointerEvents: 'none' }} // Disables interaction with the video
                allowfullscreen
                // src="//www.youtube.com/embed/videoid?modestbranding=1&autohide=1&showinfo=0&controls=0" frameborder="0" allowfullscreen
            ></iframe>
        </div>
    );
};

export default VedioBackground;
