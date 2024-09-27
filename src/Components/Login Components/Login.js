import { useRef, useState } from "react";
import Header from "../Login Components/Header";
import {validateData} from "../../utils/validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../../utils/firebase";
import { addUser } from "../../Redux/userSlice";
import { useDispatch } from "react-redux";
import { PHOTO_URL } from "../../utils/constants";


const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true);

    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const dispatch = useDispatch();

    const handleClick = () => {
        const message = validateData(name.current?.value, email.current?.value, password.current?.value);
        setErrorMessage(message);

        // console.log(message);
        // console.log(name.current.value);
        // console.log(email.current.value);
        // console.log(password.current.value);

        if(message) return;

        if(!isSignInForm){
            // Sign Up Form

            createUserWithEmailAndPassword(auth, email.current?.value, password.current?.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: PHOTO_URL
                  }).then(() => {
                    // Profile updated!
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({uid: uid,email: email,displayName: displayName, photoURL: photoURL}));
                  })
                  .catch((error) => {
                    // An error occurred
                  });
                // console.log(user);
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // console.log(errorCode + " @ " + errorMessage);
                setErrorMessage("Already Registered");
            });
        }
        else{
            // sign in form
            signInWithEmailAndPassword(auth, email.current?.value, password.current?.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage("Email or password is incorrect");
            });
        }
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return(
        <div className="relative w-screen h-screen">
            <Header />
            <div className="absolute inset-0 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_medium.jpg')] bg-cover">
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            {/* Sign-In/Sign-Up Form */}
            <div className="absolute mt-32 md:mt-36 ml-[25px] md:ml-[550px] bg-black bg-opacity-65 p-5 md:p-14">
                <h1 className="text-white text-3xl font-bold mb-7 rounded">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
                    {!isSignInForm && <input ref={name} className="w-50 md:w-80 mb-4 py-3 px-3 text-white bg-[#161616b3] border border-[#808080b3] rounded-sm" type="text" placeholder="Enter you Full Name"/>}
                    <input ref={email} className="mb-4 py-3 px-3 text-white bg-[#161616b3] border border-[#808080b3] rounded-sm" type="text" placeholder="Email or Mobile Number"/>
                    <input ref={password} className="mb-4 py-3 px-3 text-white bg-[#161616b3] border border-[#808080b3] rounded-sm" type="password" placeholder={isSignInForm ? "Password" : "Create Password"}/>
                    <p className="text-red-700 font-semibold text-lg">{errorMessage}</p>
                    <button onClick={handleClick} className="w-80 font-medium text-center mb-4 py-2 px-2 text-white bg-[#e50914] rounded-md hover:bg-[#c11119]">
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>
                </form>

                <div className="text-md mt-5">
                    {isSignInForm ? 
                        <div>
                            <span className="text-[#8f9d9e]">New to Netflix? </span>
                            <span className="text-white font-medium hover:underline cursor-pointer" onClick={toggleSignInForm}>Sign Up Now</span>
                        </div>:

                        <div>
                            <span className="text-[#8f9d9e]">Already Registered? </span>
                            <span className="text-white font-medium hover:underline cursor-pointer" onClick={toggleSignInForm}>Sign In Now</span>
                        </div>
                    }
                </div>
            </div>

        </div>
    );
};

export default Login;
