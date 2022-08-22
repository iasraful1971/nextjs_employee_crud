import {BiClose} from "react-icons/bi"
const Error = ({message}) => {
    return (
        <div className="success container mx-auto ">
            <div className="flex justify-center mx-auto border border-red-200 bg-red-400 w-3/6 text-gray-900 text-md my-4 py-2 text-center bg-opacity-5">{message} <BiClose size={25} color={"rbg(248 , 113 , 1113)"}/> </div>
        </div>
    );
};

export default Error;