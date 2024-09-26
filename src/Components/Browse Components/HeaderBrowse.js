import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../Redux/userSlice";
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANG } from "../../utils/constants";
import { toogleGptSearchView } from "../../Redux/gptSlice";
import { changeLang } from "../../Redux/configSlice";

const HeaderBrowse = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          })
          .catch((error) => {
            // An error happened.
            navigate("/Error");
          });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // whenver user sign in or sign up this part will work
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({uid: uid,email: email,displayName: displayName, photoURL: photoURL}));
                navigate("/browse");
            } 
            else {
                // whenver user sign out this part will work
                dispatch(removeUser());
                navigate("/");
            }
        });

        // Unsubscribe when my component unmounts
        return () => unsubscribe();
    }, []);

    const handleGptSearchClick = () => {
        dispatch(toogleGptSearchView());
    }

    const handleLangChange = (e) => {
        // console.log(e.target.value);
        dispatch(changeLang(e.target.value));
    }

    return(
        <div className="absolute md:pr-7 z-10 w-screen px-2 md:px-5 pt-4 md:pt-1 flex gap-4 md:gap-0 md:justify-between">
            {/* Netflix Logo */}
            <img className="w-28 md:w-48" src={LOGO} alt="Logo"/>
        
            <div className="flex items-center gap-2">
                { showGptSearch && 
                    <select className="p-2 m-2 bg-gray-800 text-white" onChange={handleLangChange}>
                        {
                            SUPPORTED_LANG.map((lang) => (
                                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                            ))
                        }
                    </select>
                }
                
                <button className="bg-gray-800 px-1 py-1 md:px-4 md:py-2 text-white" onClick={handleGptSearchClick}>{showGptSearch ? "Home Page" : "GPT Search"}</button>
                <p className="hidden md:inline-block text-white">{user?.displayName}</p>
                {/* user Photo red wali */}
                <img className="w-10 h-10" src={user?.photoURL} alt="User"/>
                <button onClick={handleSignOut} className="text-bold text-white">Sign Out</button>
            </div>
        </div>
    );
};

export default HeaderBrowse;





// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { auth } from "../../utils/firebase";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { addUser, removeUser } from "../../Redux/userSlice";
// import { useEffect } from "react";
// import { LOGO, SUPPORTED_LANG } from "../../utils/constants";
// import { toogleGptSearchView } from "../../Redux/gptSlice";
// import { changeLang } from "../../Redux/configSlice";

// const HeaderBrowse = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const user = useSelector(store => store.user);
//     const showGptSearch = useSelector(store => store.gpt.showGptSearch);

//     const handleSignOut = () => {
//         signOut(auth).then(() => {
//             // Sign-out successful.
//           })
//           .catch((error) => {
//             // An error happened.
//             navigate("/Error");
//           });
//     };

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 // whenver user sign in or sign up this part will work
//                 const {uid, email, displayName, photoURL} = user;
//                 dispatch(addUser({uid: uid,email: email,displayName: displayName, photoURL: photoURL}));
//                 navigate("/browse");
//             } 
//             else {
//                 // whenver user sign out this part will work
//                 dispatch(removeUser());
//                 navigate("/");
//             }
//         });

//         // Unsubscribe when my component unmounts
//         return () => unsubscribe();
//     }, []);

//     const handleGptSearchClick = () => {
//         dispatch(toogleGptSearchView());
//     }

//     const handleLangChange = (e) => {
//         // console.log(e.target.value);
//         dispatch(changeLang(e.target.value));
//     }

//     return(
//         <div className="absolute z-10 w-screen pl-5 md:pr-12 pt-[5px] flex flex-col md:flex-row justify-between">
//             {/* Netflix Logo */}
//             <img className="w-48 mx-auto md:mx-0" src={LOGO} alt="Logo"/>
        
//             <div className="flex items-center gap-2">
//                 { showGptSearch && 
//                     <select className="p-2 m-2 bg-gray-800 text-white" onChange={handleLangChange}>
//                         {
//                             SUPPORTED_LANG.map((lang) => (
//                                 <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
//                             ))
//                         }
//                     </select>
//                 }
                
//                 <button className="bg-gray-800 px-4 py-2 text-white" onClick={handleGptSearchClick}>{showGptSearch ? "Home Page" : "GPT Search"}</button>
//                 <p className="text-white">{user?.displayName}</p>
//                 {/* user Photo red wali */}
//                 <img className="w-10 h-10" src={user?.photoURL} alt="User"/>
//                 <button onClick={handleSignOut} className="text-bold text-white">Sign Out</button>
//             </div>
//         </div>
//     );
// };

// export default HeaderBrowse;