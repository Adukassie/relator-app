import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

function OAuth() {
  return (
    <>
      <button
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
        Continue with Facebook
      </button>
    </>
  );
}

export default OAuth;
