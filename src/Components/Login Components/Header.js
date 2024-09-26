import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../utils/firebase";
import { addUser, removeUser } from "../../Redux/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../../utils/constants";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
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
    }, []);

    return(
        <div className="absolute z-20 px-[110px] md:px-36 pt-2">
            <img className="w-48" src={LOGO} alt="Logo"/>
        </div>
    );
};

export default Header;