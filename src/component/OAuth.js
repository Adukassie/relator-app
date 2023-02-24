import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";

function OAuth() {
  const navigate = useNavigate();
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // console.log(user);
      //  1st check for the user
      const docRef = doc(db, "users", user.uid); //address
      const docSnap = await getDoc(docRef); //promise

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
         navigate("/");
    } catch (error) {
      toast.error("Could not authorize with Google");
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={onGoogleClick}
        className="flex items-center
     justify-center w-full
    
        px-7 py-3 
         text-m 
       font-medium
        hover:bg-gray-200
        active:bg-ray-400
         shadow-md hover:shadow-lg
          active:shadow-lg 
          transition
           duration-150 ease-in-out 
           rounded-[20px] border-black "
      >
        <FcGoogle
          className="text-3xl 
       bg-white rounded-full mr-14"
        />
        Continue with Google
      </button>
      <button
        className="flex items-center
     justify-center w-full
     bg-blue-600 
      text-white
        px-7 py-3 
     text-m 
       font-medium
        hover:bg-blue-600
        active:bg-blue-700
         shadow-md hover:shadow-lg
          active:shadow-lg 
          transition
           duration-150 ease-in-out 
           rounded-[20px]  mt-2"
      >
        <FaFacebook
          className="text-2xl 
       rounded-full mr-12"
        />
        <a href={"https://www.facebook.com/"}>Continue with Facebook</a>
        {/* Continue with Facebook */}
      </button>
    </>
  );
}

export default OAuth;
