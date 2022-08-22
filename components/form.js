import UpdateUserForm from "./UpdateUserForm"
import AddUserForm  from "./AddUserForm"

export default function Form(){
  const flag = false;
    return (
      <div className="mx-auto container py-5">
        {
         flag  ?   <AddUserForm/> : <UpdateUserForm/>
        }
      </div>
     
    );
  }



