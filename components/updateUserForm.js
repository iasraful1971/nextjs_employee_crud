import { useReducer } from "react";
import { BiBrush } from "react-icons/bi";
import Success from "./success";
const formReducer = (state, event)=> {
    return{
        ...state, 
        [event.target.name]:event.target.value
    }
}
const UpdateUserForm = () => {
    const [formData , setFormData] = useReducer(formReducer ,{});
    const handleSubmit = (e) => {
        e.preventDefault();
        if(Object.keys(formData).length == 0)return console.log("Don't have form data")
        
    }

    if(Object.keys(formData).length > 0) return <Success message={"Data Added"} />

  return (
    <>
      <form onSubmit={handleSubmit } className="grid lg:grid-cols-2 w-4/6 gap-4">
        <div className="input-type">
          <input
            onChange={setFormData}
            className="border w-full px-5 py-3 focus:outline-none rounded-md "
            type="text"
            name="firstName"
            placeholder="first name"
          />
        </div>
        <div className="input-type">
          <input
            onChange={setFormData}
            className="border w-full px-5 py-3 focus:outline-none rounded-md "
            type="text"
            name="lastName"
            placeholder="last name"
          />
        </div>
        <div className="input-type">
          <input
            onChange={setFormData}
            className="border w-full px-5 py-3 focus:outline-none rounded-md "
            type="text"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="input-type">
          <input
            onChange={setFormData}
            className="border w-full px-5 py-3 focus:outline-none rounded-md "
            type="number"
            name="salary"
            placeholder="Salary"
          />
        </div>
        <div className="input-type">
          <input
            onChange={setFormData}
            className="border px-5 py-3 focus:outline-none rounded-md "
            type="date"
            name="date"
            placeholder="Pick a date"
          />
        </div>
        <div className="flex gap-10 items-center">
          <div className="form-check">
            <input
                onChange={setFormData}
              value="Active"
              id="radioDefault1"
              type="radio"
              name="status"
              className="form-check-input appearance-none rounded-full h-4 w-4  border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none  transition  duration-200 mt-1 align-top bg-no-repeat  bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label
              htmlFor="radioDefault1"
              className="inline-block text-gray-800 "
            >
              Active
            </label>
          </div>
          <div className="form-check">
            <input
                onChange={setFormData}
              value="Inactive"
              id="radioDefault2"
              type="radio"
              name="status"
              className="form-check-input appearance-none rounded-full h-4 w-4  border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none  transition  duration-200 mt-1 align-top bg-no-repeat  bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label
              htmlFor="radioDefault2"
              className="inline-block text-gray-800 "
            >
              Inactive
            </label>
          </div>
        </div>

        <button type="submit" className="flex justify-center text-md w-2/6  bg-purple-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-purple-500 hover:text-purple-500">
          Update <span className="px-1"><BiBrush size={24}/></span>
        </button>
      </form>
    </>
  );
};

export default UpdateUserForm;
