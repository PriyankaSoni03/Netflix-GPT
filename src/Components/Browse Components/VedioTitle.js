import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';


const VedioTitle = ({ title, overview }) => {
    return (
        <div className="absolute md:w-[400px] text-white">
            <div className="md:ml-16 ml-5 md:mt-[200px] mt-[170px]">
                <h1 className="text-xl font-semibold text-white md:text-5xl">{title}</h1>
                <p className="hidden md:inline-block mt-2 text-xs">{overview}</p>

                <div className="mt-1 md:mt-3 flex gap-2">
                    <button className="bg-white text-black rounded-md px-1 py-1 md:px-4 md:py-3">
                        <FontAwesomeIcon className='pr-[5px]' icon={faPlay} />
                        Play Now
                    </button>

                    <button className="hidden md:inline-block bg-gray-300 bg-opacity-20 rounded-md px-1 py-1 md:px-8 md:py-3">
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VedioTitle;
